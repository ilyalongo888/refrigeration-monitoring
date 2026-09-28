import { NextResponse } from "next/server";

/**
 * Заявка с калькулятора temvio.eu → Kommo CRM (аккаунт Temvio).
 *
 * Принимает данные формы, создаёт контакт и лид в воронке «Продажи»
 * с заполненными кастомными полями.
 *
 * Требует переменную окружения KOMVO_TOKEN (долгоживущий JWT Kommo).
 */

const KOMVO_BASE = "https://temvio.kommo.com/api/v4";
const PIPELINE_ID = 14532259;
const STATUS_ID = 112259079; // «Новая компания»

// Кастомные поля лида
const F_OBJECTS = 356462; // Количество объектов (select)
const F_SENSORS = 353624; // Количество холодильных установок / сенсоров (numeric)
const F_EQUIPMENT = 356734; // Тип оборудования (multiselect)
const F_REMOTE = 356466; // Требуется ли удалённое управление? (select)
const F_MRR = 353636; // Potential MRR (numeric)

// Маппинг по ИНДЕКСУ варианта (порядок одинаков во всех языках сайта)
const OBJECTS_ENUM_IDS = [289026, 289028, 289030]; // 1, 2–5, 6+
const EQUIPMENT_ENUM_IDS = [289240, 289242, 289244, 289246, 289248, 289250];
const REMOTE_ENUM_IDS = [289044, 289046, 289048]; // Да, Нет, Не знаю

const SENSOR_MAX = 25;

async function kommo(path: string, method: "GET" | "POST", data?: unknown) {
  const token = process.env.KOMVO_TOKEN;
  if (!token) {
    throw new Error("KOMVO_TOKEN is not set");
  }
  const res = await fetch(`${KOMVO_BASE}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data !== undefined ? JSON.stringify(data) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Kommo ${method} ${path} → ${res.status}: ${text.slice(0, 300)}`);
  }
  return text ? JSON.parse(text) : null;
}

function toNumber(v: unknown, fallback: number): number {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();

    // Сенсоры: число 1..25 либо строка «25+»
    const rawSensors = body.sensors;
    const sensors =
      rawSensors === "25+" || rawSensors === `${SENSOR_MAX}+`
        ? SENSOR_MAX
        : toNumber(rawSensors, 0);
    const estimateMonthly = toNumber(body.estimateMonthly, sensors * 20);

    const contactName = name || company || "Заявка с сайта";
    const leadName = company || name || "Заявка с сайта";

    // 1) Контакт
    const contactValues: any[] = [];
    if (phone) {
      contactValues.push({ field_code: "PHONE", values: [{ value: phone, enum_code: "WORK" }] });
    }
    if (email) {
      contactValues.push({ field_code: "EMAIL", values: [{ value: email, enum_code: "WORK" }] });
    }
    const contactRes = (await kommo("contacts", "POST", [
      {
        name: contactName,
        custom_fields_values: contactValues,
      },
    ])) as any;
    const contactId = contactRes._embedded.contacts[0].id;

    // 2) Кастомные поля лида
    const ccf: any[] = [];

    const objectsIdx = Array.isArray(body.objects)
      ? undefined
      : toNumber(body.objects, NaN);
    if (Number.isInteger(objectsIdx) && OBJECTS_ENUM_IDS[objectsIdx!]) {
      ccf.push({ field_id: F_OBJECTS, values: [{ enum_id: OBJECTS_ENUM_IDS[objectsIdx!] }] });
    }

    if (sensors > 0) {
      ccf.push({ field_id: F_SENSORS, values: [{ value: sensors }] });
    }

    if (Array.isArray(body.equipment)) {
      const enumIds = body.equipment
        .map((i: any) => EQUIPMENT_ENUM_IDS[Number(i)])
        .filter(Boolean);
      if (enumIds.length) {
        ccf.push({ field_id: F_EQUIPMENT, values: enumIds.map((id: number) => ({ enum_id: id })) });
      }
    }

    const remoteIdx = toNumber(body.remote, NaN);
    if (Number.isInteger(remoteIdx) && REMOTE_ENUM_IDS[remoteIdx]) {
      ccf.push({ field_id: F_REMOTE, values: [{ enum_id: REMOTE_ENUM_IDS[remoteIdx] }] });
    }

    if (estimateMonthly > 0) {
      ccf.push({ field_id: F_MRR, values: [{ value: estimateMonthly }] });
    }

    // 3) Лид
    await kommo("leads", "POST", [
      {
        name: leadName,
        pipeline_id: PIPELINE_ID,
        status_id: STATUS_ID,
        custom_fields_values: ccf,
        _embedded: { contacts: [{ id: contactId }] },
      },
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
