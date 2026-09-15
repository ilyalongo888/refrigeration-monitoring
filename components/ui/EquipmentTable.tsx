import { StatusBadge } from "./StatusBadge";

interface EquipmentRow {
  name: string;
  temp: string;
  status: "normal" | "alert";
}

interface EquipmentTableProps {
  headers: { equipment: string; temperature: string; status: string };
  rows: readonly EquipmentRow[];
  labels: { normal: string; alert: string };
}

export function EquipmentTable({ headers, rows, labels }: EquipmentTableProps) {
  return (
    <div className="thin-scroll overflow-x-auto rounded-panel border border-line">
      <table className="w-full min-w-[380px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line text-[10px] uppercase tracking-wide text-text-secondary">
            <th className="px-3 py-2.5 font-medium">{headers.equipment}</th>
            <th className="px-3 py-2.5 font-medium">{headers.temperature}</th>
            <th className="px-3 py-2.5 font-medium">{headers.status}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i !== rows.length - 1 ? "border-b border-line/70" : ""}>
              <td className="px-3 py-2.5 text-[13px] text-text-primary">{row.name}</td>
              <td className="px-3 py-2.5 font-mono text-[13px] text-text-primary">{row.temp}</td>
              <td className="px-3 py-2.5">
                <StatusBadge variant={row.status === "alert" ? "alert" : "normal"}>
                  {row.status === "alert" ? labels.alert : labels.normal}
                </StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
