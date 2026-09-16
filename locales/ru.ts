export interface PricingPlan {
  label: string;
  badge: string | null;
  title: string;
  price: string;
  period: string;
  description: string;
  featuresIntro?: string;
  features: string[];
  extra: string | null;
  cta: string;
  highlighted: boolean;
}

export interface EquipmentRow {
  name: string;
  temp: string;
  status: "normal" | "alert";
}

export interface TimelineItem {
  time: string;
  text: string;
}

export interface Dictionary {
  meta: {
    brand: string;
  };
  nav: {
    how: string;
    solutions: string;
    pricing: string;
    diagnostics: string;
    contacts: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proofLine: string;
  };
  dashboard: {
    title: string;
    online: string;
    metrics: {
      objects: string;
      normal: string;
      alerts: string;
    };
    tableHeaders: {
      equipment: string;
      temperature: string;
      status: string;
    };
    equipment: EquipmentRow[];
    statusLabels: {
      normal: string;
      alert: string;
    };
    incident: {
      label: string;
      unit: string;
      timeline: TimelineItem[];
    };
    lastCheck: string;
  };
  problem: {
    heading: string;
    cards: { title: string; text: string }[];
    statement: string;
  };
  howItWorks: {
    heading: string;
    subtitle: string;
    steps: { number: string; title: string; text: string }[];
  };
  controlLevels: {
    heading: string;
    levels: { label: string; title: string; flow: string }[];
  };
  pricing: {
    heading: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  diagnostics: {
    heading: string;
    subheading: string;
    text: string;
    included: string[];
    price: string;
    cta: string;
    chartTitle: string;
    chartNormalZone: string;
    tooltip: string;
  };
  industries: {
    heading: string;
    items: string[];
  };
  dashboardDemo: {
    heading: string;
    tableTitle: string;
    incidentTitle: string;
    unit: string;
    currentTempLabel: string;
    targetLabel: string;
    target: string;
    status: string;
    timeline: TimelineItem[];
    inProgress: string;
  };
  benefits: {
    heading: string;
    cards: { title: string; text: string }[];
  };
  finalCta: {
    label: string;
    heading: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contactForm: {
    heading: string;
    subheading: string;
    fields: {
      name: string;
      company: string;
      phone: string;
      email: string;
      units: string;
      businessType: string;
    };
    businessTypes: string[];
    selectPlaceholder: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
  footer: {
    tagline: string;
    linksHeading: string;
    links: {
      how: string;
      pricing: string;
      diagnostics: string;
      privacy: string;
      terms: string;
      contacts: string;
    };
    contactsHeading: string;
    email: string;
    phone: string;
    disclaimer: string;
    rights: string;
  };
  common: {
    liveLabel: string;
    onlineLabel: string;
    connectedLabel: string;
    lastUpdate: string;
    microcopy: {
      sensorConnected: string;
      thresholdExceeded: string;
      escalationStarted: string;
    };
  };
}

export const ru: Dictionary = {
  meta: {
    brand: "ThermoGuard",
  },
  nav: {
    how: "Как это работает",
    solutions: "Решения",
    pricing: "Тарифы",
    diagnostics: "Диагностика",
    contacts: "Контакты",
    cta: "Получить консультацию",
  },
  hero: {
    badge: "МОНИТОРИНГ 24/7",
    h1: "Узнайте о проблеме {{раньше}}, чем она станет {{убытком}}",
    subtitle:
      "Мы круглосуточно контролируем температурный режим холодильного оборудования, фиксируем критические отклонения и помогаем начать устранение проблемы до того, как она приведёт к серьёзным потерям.",
    ctaPrimary: "Получить бесплатную консультацию",
    ctaSecondary: "Посмотреть, как это работает",
    proofLine: "24/7 контроль • автоматические уведомления • история инцидентов",
  },
  dashboard: {
    title: "REFRIGERATION CONTROL",
    online: "SYSTEM ONLINE",
    metrics: {
      objects: "ОБЪЕКТОВ ПОД КОНТРОЛЕМ",
      normal: "НОРМА",
      alerts: "АКТИВНАЯ ТРЕВОГА",
    },
    tableHeaders: {
      equipment: "Оборудование",
      temperature: "Температура",
      status: "Статус",
    },
    equipment: [
      { name: "Холодильная камера 01", temp: "+3.2°C", status: "normal" },
      { name: "Холодильная камера 02", temp: "+4.1°C", status: "normal" },
      { name: "Морозильная камера 01", temp: "-18.6°C", status: "normal" },
      { name: "Морозильная камера 02", temp: "-11.8°C", status: "alert" },
    ],
    statusLabels: {
      normal: "Норма",
      alert: "Тревога",
    },
    incident: {
      label: "ACTIVE INCIDENT",
      unit: "Морозильная камера 02",
      timeline: [
        { time: "02:17", text: "Обнаружено превышение температуры" },
        { time: "02:18", text: "Ответственное лицо уведомлено" },
        { time: "02:23", text: "Ответ не получен" },
        { time: "02:24", text: "Начата эскалация" },
        { time: "02:31", text: "Вызван сервисный инженер" },
      ],
    },
    lastCheck: "Последняя проверка системы: 14 секунд назад",
  },
  problem: {
    heading: "Поломка холодильного оборудования может очень быстро привести к серьёзным потерям",
    cards: [
      {
        title: "Поломка оборудования",
        text: "Холодильная установка может выйти из строя ночью или в выходной день, когда этого никто не заметит.",
      },
      {
        title: "Позднее обнаружение",
        text: "Чем дольше температура находится за допустимыми пределами, тем выше риск порчи продукции.",
      },
      {
        title: "Отсутствие контроля",
        text: "Обычная обслуживающая компания подключается только после того, как клиент уже обнаружил проблему.",
      },
    ],
    statement: "Наша задача — обнаружить проблему {{раньше}}.",
  },
  howItWorks: {
    heading: "От обнаружения проблемы до её устранения",
    subtitle: "Пять этапов круглосуточного контроля.",
    steps: [
      {
        number: "01",
        title: "МОНИТОРИНГ",
        text: "Датчики круглосуточно контролируют температуру оборудования.",
      },
      {
        number: "02",
        title: "ОБНАРУЖЕНИЕ",
        text: "Система автоматически фиксирует критические отклонения.",
      },
      {
        number: "03",
        title: "УВЕДОМЛЕНИЕ",
        text: "Ответственные лица мгновенно получают уведомление.",
      },
      {
        number: "04",
        title: "ЭСКАЛАЦИЯ",
        text: "Если никто не реагирует, запускается следующий уровень уведомлений.",
      },
      {
        number: "05",
        title: "РЕШЕНИЕ",
        text: "В максимальном пакете мы координируем сервисную компанию и контролируем ситуацию до восстановления нормальной работы.",
      },
    ],
  },
  controlLevels: {
    heading: "Вы сами выбираете уровень контроля",
    levels: [
      {
        label: "CONTROL",
        title: "Мы сообщаем",
        flow: "Проблема → уведомление",
      },
      {
        label: "PROTECT",
        title: "Мы контролируем реакцию",
        flow: "Проблема → уведомление → подтверждение реакции",
      },
      {
        label: "MANAGED RESPONSE",
        title: "Мы координируем решение",
        flow: "Проблема → реакция → инженер → восстановление",
      },
    ],
  },
  pricing: {
    heading: "Выберите необходимый уровень контроля",
    subtitle: "От автоматического мониторинга до полного управления инцидентом.",
    plans: [
      {
        label: "CONTROL",
        badge: null,
        title: "Мониторинг и уведомления",
        price: "от €149",
        period: "/ месяц",
        description: "Мы обнаруживаем проблему и сообщаем вам.",
        features: [
          "мониторинг температуры 24/7",
          "мгновенные уведомления",
          "уведомление при потере связи",
          "история температур",
          "хранение данных",
          "ежемесячный отчёт",
          "до 3 агрегатов",
        ],
        extra: "Дополнительный агрегат: от €50 / месяц",
        cta: "Получить расчёт",
        highlighted: false,
      },
      {
        label: "PROTECT",
        badge: "ПОПУЛЯРНЫЙ ВЫБОР",
        title: "Мониторинг + контроль реакции",
        price: "от €299",
        period: "/ месяц",
        description: "Мы обнаруживаем проблему и контролируем, чтобы на неё отреагировали.",
        featuresIntro: "Всё из CONTROL, а также:",
        features: [
          "проверка критического сигнала",
          "связь с ответственным сотрудником",
          "подтверждение реакции",
          "повторные уведомления",
          "escalation",
          "журнал инцидентов",
          "расширенный отчёт",
          "анализ повторяющихся проблем",
        ],
        extra: null,
        cta: "Заказать консультацию",
        highlighted: true,
      },
      {
        label: "MANAGED RESPONSE",
        badge: null,
        title: "Полное управление инцидентом",
        price: "от €599",
        period: "индивидуальный тариф",
        description: "Мы обнаруживаем проблему и помогаем организовать её устранение.",
        featuresIntro: "Всё из PROTECT, а также:",
        features: [
          "координация аварийной ситуации",
          "связь с сервисной компанией",
          "вызов инженера",
          "передача технической информации",
          "контроль времени прибытия",
          "контроль ремонта",
          "контроль восстановления температуры",
          "отчёт по каждому incident",
          "priority support",
        ],
        extra: null,
        cta: "Обсудить подключение",
        highlighted: false,
      },
    ],
  },
  diagnostics: {
    heading: "Не готовы сразу подключать постоянный мониторинг?",
    subheading: "Начните с диагностики объекта",
    text: "Можно установить временные датчики и провести анализ работы холодильного оборудования.",
    included: [
      "временный мониторинг",
      "анализ температурных колебаний",
      "критические отклонения",
      "время восстановления температуры",
      "нестабильно работающее оборудование",
      "зоны повышенного риска",
      "итоговый отчёт",
      "рекомендации",
    ],
    price: "от €199",
    cta: "Заказать диагностику",
    chartTitle: "Температура за 24 часа",
    chartNormalZone: "Норма: +2°C — +5°C",
    tooltip: "03:14 — +7.8°C",
  },
  industries: {
    heading: "Для бизнеса, где температура имеет значение",
    items: [
      "Холодильные склады",
      "Логистические компании",
      "Продуктовые дистрибьюторы",
      "Супермаркеты",
      "Рестораны",
      "Гостиницы",
      "Кейтеринговые компании",
      "Производители продуктов питания",
      "Хранение замороженной продукции",
    ],
  },
  dashboardDemo: {
    heading: "Мониторинг в реальном времени",
    tableTitle: "Оборудование под контролем",
    incidentTitle: "ACTIVE INCIDENT",
    unit: "Морозильная камера 02",
    currentTempLabel: "Текущая температура",
    targetLabel: "Целевая температура",
    target: "-18°C",
    status: "CRITICAL TEMPERATURE",
    timeline: [
      { time: "02:17", text: "Обнаружено превышение температуры" },
      { time: "02:18", text: "Ответственное лицо уведомлено" },
      { time: "02:23", text: "Ответ не получен" },
      { time: "02:24", text: "Начата эскалация" },
      { time: "02:31", text: "Вызван сервисный инженер" },
      { time: "03:08", text: "Инженер прибыл" },
      { time: "03:46", text: "Температура восстанавливается" },
    ],
    inProgress: "INCIDENT IN PROGRESS",
  },
  benefits: {
    heading: "Почему компании используют постоянный мониторинг",
    cards: [
      {
        title: "Раннее обнаружение",
        text: "Система может обнаружить проблему раньше, чем её заметит персонал.",
      },
      {
        title: "Более быстрая реакция",
        text: "Автоматические уведомления уменьшают время между возникновением проблемы и началом действий.",
      },
      {
        title: "Полная история",
        text: "Температурные показатели и информация об инцидентах сохраняются.",
      },
      {
        title: "Снижение риска",
        text: "Быстрая реакция помогает уменьшить риск порчи продукции и финансовых потерь.",
      },
    ],
  },
  finalCta: {
    label: "24/7 REFRIGERATION MONITORING",
    heading: "Сколько времени потребуется вашей компании, чтобы обнаружить поломку холодильного оборудования сегодня ночью?",
    text: "Узнайте, как круглосуточный мониторинг может помочь защитить ваш бизнес.",
    ctaPrimary: "Получить консультацию",
    ctaSecondary: "Заказать демонстрацию",
  },
  contactForm: {
    heading: "Получить консультацию",
    subheading: "Расскажите немного о вашем объекте — мы подберём подходящий уровень контроля.",
    fields: {
      name: "Имя",
      company: "Название компании",
      phone: "Телефон",
      email: "Email",
      units: "Количество холодильных агрегатов",
      businessType: "Тип бизнеса",
    },
    businessTypes: [
      "Склад",
      "Логистика",
      "Ресторан",
      "Гостиница",
      "Супермаркет",
      "Производство",
      "Другое",
    ],
    selectPlaceholder: "Выберите вариант",
    submit: "Получить консультацию",
    successTitle: "Спасибо.",
    successText: "Мы свяжемся с вами в ближайшее время.",
  },
  footer: {
    tagline: "Круглосуточный мониторинг холодильного оборудования",
    linksHeading: "Навигация",
    links: {
      how: "Как это работает",
      pricing: "Тарифы",
      diagnostics: "Диагностика",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      contacts: "Контакты",
    },
    contactsHeading: "Контакты",
    email: "info@thermoguard.example",
    phone: "+371 20 000 000",
    disclaimer: "Независимый коммерческий сервис мониторинга.",
    rights: "Все права защищены.",
  },
  common: {
    liveLabel: "LIVE",
    onlineLabel: "ONLINE",
    connectedLabel: "CONNECTED",
    lastUpdate: "Обновлено 14 сек назад",
    microcopy: {
      sensorConnected: "Датчик температуры подключён",
      thresholdExceeded: "Превышен порог тревоги",
      escalationStarted: "Запущен протокол эскалации",
    },
  },
};
