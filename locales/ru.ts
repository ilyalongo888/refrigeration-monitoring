export interface EquipmentRow {
  name: string;
  temp: string;
  target: string;
  status: "normal" | "alert";
}

export interface TimelineItem {
  time: string;
  text: string;
}

export interface ScenarioMetric {
  value: string;
  label: string;
}

export interface Scenario {
  industry: string;
  title: string;
  body: string;
  metrics: [ScenarioMetric, ScenarioMetric];
  bottomLine: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Dictionary {
  meta: {
    brand: string;
  };
  nav: {
    how: string;
    pricing: string;
    calculator: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microcopy: string[];
  };
  dashboard: {
    title: string;
    online: string;
    metrics: {
      sensors: string;
      normal: string;
      alerts: string;
    };
    tableHeaders: {
      equipment: string;
      temperature: string;
      target: string;
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
  howItWorks: {
    heading: string;
    subtitle: string;
    steps: { number: string; title: string; text: string }[];
  };
  pricingModel: {
    heading: string;
    subtitle: string;
    equipment: {
      label: string;
      price: string;
      period: string;
      included: string[];
      installment: string;
    };
    monitoring: {
      label: string;
      price: string;
      period: string;
      included: string[];
      note: string;
    };
    cta: string;
  };
  costExamples: {
    heading: string;
    items: { label: string; sensors: string; price: string }[];
    footnote: string;
  };
  serviceCompany: {
    heading: string;
    paragraphs: string[];
    highlight: string;
  };
  remoteControl: {
    heading: string;
    subtitle: string;
    mockup: {
      unit: string;
      currentLabel: string;
      current: string;
      setPointLabel: string;
      setPoint: string;
      options: string[];
      apply: string;
    };
    note: string;
  };
  calculator: {
    heading: string;
    subtitle: string;
    stepLabel: string;
    of: string;
    back: string;
    next: string;
    steps: {
      objects: { question: string; options: string[] };
      sensors: { question: string; plus: string; unitLabel: string };
      equipment: { question: string; options: string[] };
      remote: { question: string; options: string[] };
    };
    result: {
      heading: string;
      setupLabel: string;
      setupPrice: string;
      installment: string;
      sensorsLabel: string;
      monthlyLabel: string;
      monthlyUnit: string;
      monthlyNote: string;
      fromPrefix: string;
      editCta: string;
    };
    leadForm: {
      heading: string;
      fields: {
        name: string;
        company: string;
        phone: string;
        email: string;
      };
      submit: string;
    };
    success: {
      title: string;
      text: string;
    };
  };
  targetCustomers: {
    heading: string;
    primaryLabel: string;
    primary: string[];
    secondaryLabel: string;
    secondary: string[];
  };
  businessScenarios: {
    heading: string;
    subtitle: string;
    tag: string;
    scenarios: Scenario[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  finalCta: {
    label: string;
    heading: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    linksHeading: string;
    links: {
      how: string;
      pricing: string;
      calculator: string;
      faq: string;
      privacy: string;
      terms: string;
    };
    contactsHeading: string;
    address: string;
    phones: string[];
    email: string;
    hoursLabel: string;
    hours: string;
    companyHeading: string;
    companyName: string;
    vatLabel: string;
    vatNumber: string;
    bankHeading: string;
    ibanLabel: string;
    iban: string;
    bankName: string;
    swiftLabel: string;
    swift: string;
    disclaimer: string;
    rights: string;
  };
}

export const ru: Dictionary = {
  meta: {
    brand: "ThermoGuard",
  },
  nav: {
    how: "Как это работает",
    pricing: "Стоимость",
    calculator: "Калькулятор",
    faq: "Вопросы",
    cta: "Рассчитать стоимость",
  },
  hero: {
    badge: "МОНИТОРИНГ 24/7",
    h1: "Узнайте о проблеме {{раньше}}, чем она станет {{проблемой}}",
    subtitle:
      "ThermoGuard круглосуточно контролирует холодильное оборудование, фиксирует температурные отклонения и автоматически уведомляет вашу команду и обслуживающую компанию о проблеме.",
    ctaPrimary: "Рассчитать стоимость",
    ctaSecondary: "Посмотреть, как работает система",
    microcopy: [
      "До 25 сенсоров на одном модуле",
      "€20 за сенсор / месяц",
      "Telegram-уведомления",
      "Мониторинг 24/7",
    ],
  },
  dashboard: {
    title: "THERMOGUARD MONITORING",
    online: "SYSTEM ONLINE",
    metrics: {
      sensors: "АКТИВНЫХ СЕНСОРОВ",
      normal: "В НОРМЕ",
      alerts: "АКТИВНАЯ ТРЕВОГА",
    },
    tableHeaders: {
      equipment: "Оборудование",
      temperature: "Температура",
      target: "Целевая",
      status: "Статус",
    },
    equipment: [
      { name: "Холодильная камера 01", temp: "+3.2°C", target: "+2…+5°C", status: "normal" },
      { name: "Холодильная камера 02", temp: "+4.1°C", target: "+2…+5°C", status: "normal" },
      { name: "Морозильная камера 01", temp: "-18.6°C", target: "-18°C", status: "normal" },
      { name: "Морозильная камера 02", temp: "-11.8°C", target: "-18°C", status: "alert" },
    ],
    statusLabels: {
      normal: "Норма",
      alert: "Тревога",
    },
    incident: {
      label: "ACTIVE ALERT",
      unit: "Морозильная камера 02",
      timeline: [
        { time: "02:17", text: "Температура превысила допустимый порог" },
        { time: "02:17", text: "Telegram-уведомление отправлено" },
        { time: "02:18", text: "Ответственный сотрудник уведомлён" },
        { time: "02:18", text: "Сервисная компания уведомлена" },
        { time: "02:20", text: "Показания продолжают обновляться" },
        { time: "02:22", text: "Параметр скорректирован удалённо" },
      ],
    },
    lastCheck: "Последняя проверка системы: 14 секунд назад",
  },
  howItWorks: {
    heading: "Как работает ThermoGuard",
    subtitle: "От сенсора на оборудовании до уведомления тех, кто должен отреагировать.",
    steps: [
      {
        number: "01",
        title: "ПОДКЛЮЧЕНИЕ",
        text: "Сенсоры подключаются к холодильному оборудованию и передают данные в центральный модуль.",
      },
      {
        number: "02",
        title: "МОНИТОРИНГ",
        text: "Система круглосуточно отслеживает температуру и другие доступные параметры.",
      },
      {
        number: "03",
        title: "ОБНАРУЖЕНИЕ",
        text: "ThermoGuard автоматически фиксирует выход показателей за допустимые значения.",
      },
      {
        number: "04",
        title: "УВЕДОМЛЕНИЕ",
        text: "Telegram-бот мгновенно уведомляет ответственных сотрудников.",
      },
      {
        number: "05",
        title: "ПЕРЕДАЧА ИНФОРМАЦИИ",
        text: "При необходимости уведомление получает действующая сервисная компания клиента.",
      },
      {
        number: "06",
        title: "ДЕЙСТВИЕ",
        text: "Ремонт или технические действия выполняет собственный инженер клиента или его существующая сервисная компания.",
      },
    ],
  },
  pricingModel: {
    heading: "Один продукт. Простая модель.",
    subtitle: "Стоимость оборудования и подключения отдельно от ежемесячной лицензии мониторинга.",
    equipment: {
      label: "ОБОРУДОВАНИЕ И ПОДКЛЮЧЕНИЕ",
      price: "€1 500",
      period: "единоразово",
      included: [
        "центральный модуль",
        "внедрение",
        "настройка и конфигурация системы",
        "подключение Telegram-уведомлений",
        "поддержка подключения до 25 сенсоров",
        "запуск системы",
      ],
      installment: "Возможна поэтапная оплата до 24 месяцев.",
    },
    monitoring: {
      label: "ЕЖЕМЕСЯЧНАЯ ЛИЦЕНЗИЯ МОНИТОРИНГА",
      price: "€20",
      period: "за активный сенсор / месяц",
      included: [
        "мониторинг 24/7",
        "история показаний",
        "автоматические уведомления",
        "удалённый доступ к параметрам",
        "панель мониторинга",
        "Telegram-уведомления",
        "передачу информации сервисной компании",
        "удалённое управление для поддерживаемого оборудования",
      ],
      note: "Тарифицируется по числу активных сенсоров. Итоговая сумма = количество сенсоров × €20.",
    },
    cta: "Рассчитать стоимость",
  },
  costExamples: {
    heading: "Примеры ориентировочной стоимости",
    items: [
      { label: "Небольшой объект", sensors: "5 сенсоров", price: "€100 / месяц" },
      { label: "Средний объект", sensors: "10 сенсоров", price: "€200 / месяц" },
      { label: "Объект побольше", sensors: "15 сенсоров", price: "€300 / месяц" },
      { label: "Большой объект", sensors: "25 сенсоров", price: "€500 / месяц" },
    ],
    footnote: "* первоначальное оборудование и внедрение — €1 500, единоразово.",
  },
  serviceCompany: {
    heading: "Не нужно менять вашу сервисную компанию",
    paragraphs: [
      "ThermoGuard работает вместе с вашей существующей сервисной инфраструктурой.",
      "При критическом отклонении уведомление может быть автоматически отправлено вашему техническому персоналу и компании, которая уже обслуживает холодильное оборудование.",
    ],
    highlight: "Мы не заменяем вашего сервисного партнёра — мы помогаем ему быстрее узнать о проблеме.",
  },
  remoteControl: {
    heading: "Не только мониторинг",
    subtitle: "В зависимости от типа холодильного оборудования ThermoGuard может поддерживать удалённое изменение рабочих параметров.",
    mockup: {
      unit: "Морозильная камера 02",
      currentLabel: "Текущая температура",
      current: "-11.8°C",
      setPointLabel: "Заданная температура",
      setPoint: "-18°C",
      options: ["-19°C", "-18°C", "-17°C"],
      apply: "Применить изменение",
    },
    note: "Доступные функции управления зависят от модели оборудования и типа подключения. Мы не гарантируем удалённое управление для любого оборудования.",
  },
  calculator: {
    heading: "Рассчитайте стоимость для вашего объекта",
    subtitle: "Это предварительная оценка для ориентира — точный расчёт подготовит наш специалист.",
    stepLabel: "Шаг",
    of: "из",
    back: "Назад",
    next: "Далее",
    steps: {
      objects: {
        question: "Сколько у вас объектов?",
        options: ["1", "2–5", "6+"],
      },
      sensors: {
        question: "Сколько холодильных установок или контролируемых точек?",
        plus: "25+",
        unitLabel: "сенсоров",
      },
      equipment: {
        question: "Тип оборудования",
        options: [
          "Холодильные камеры",
          "Морозильные камеры",
          "Холодильные витрины",
          "Промышленное холодильное оборудование",
          "Смешанное оборудование",
          "Другое",
        ],
      },
      remote: {
        question: "Требуется ли удалённое управление?",
        options: ["Да", "Нет", "Не знаю"],
      },
    },
    result: {
      heading: "Предварительный расчёт",
      setupLabel: "Оборудование и подключение",
      setupPrice: "€1 500 единоразово",
      installment: "возможна поэтапная оплата до 24 месяцев",
      sensorsLabel: "Количество активных сенсоров",
      monthlyLabel: "Ориентировочная ежемесячная стоимость",
      monthlyUnit: "/ месяц",
      monthlyNote: "Точная техническая конфигурация подтверждается после проверки совместимости оборудования.",
      fromPrefix: "от",
      editCta: "Изменить параметры",
    },
    leadForm: {
      heading: "Получить точный расчёт",
      fields: {
        name: "Имя",
        company: "Название компании",
        phone: "Телефон",
        email: "Email",
      },
      submit: "Получить точный расчёт",
    },
    success: {
      title: "Спасибо. Мы получили информацию об объекте.",
      text: "Наш специалист свяжется с вами, чтобы уточнить техническую конфигурацию и подготовить точный расчёт.",
    },
  },
  targetCustomers: {
    heading: "Для бизнеса, где температура имеет значение",
    primaryLabel: "Основные направления",
    primary: [
      "Холодильные склады",
      "Пищевые производства",
      "Мясопереработка",
      "Рыбопереработка",
      "Молочные предприятия",
      "Производители и дистрибьюторы замороженной продукции",
      "Продуктовые дистрибьюторы",
      "Супермаркеты",
      "Фармацевтические склады",
      "Коммерческие холодильные объекты",
    ],
    secondaryLabel: "Также подходит для",
    secondary: [
      "Рестораны",
      "Гостиницы",
      "Кейтеринг",
      "Кондитерские производства",
      "Флористические склады и логистика цветов",
    ],
  },
  businessScenarios: {
    heading: "Где ThermoGuard может предотвратить серьёзные потери",
    subtitle: "Несколько типовых ситуаций, в которых раннее обнаружение температурного отклонения имеет критическое значение.",
    tag: "ТИПОВОЙ СЦЕНАРИЙ",
    scenarios: [
      {
        industry: "Холодильный склад",
        title: "Продукция стоимостью более €150 000 могла остаться без охлаждения",
        body: "Компания арендует холодильный склад на шесть месяцев для временного хранения продукции общей стоимостью более €150 000. Ночью на объекте происходит отключение электропитания. Персонала на складе нет, поэтому без удалённого мониторинга проблему могут обнаружить только спустя несколько часов. ThermoGuard фиксирует рост температуры после выхода показателей за установленный диапазон и автоматически уведомляет ответственных сотрудников и обслуживающую компанию.",
        metrics: [
          { value: "€150 000+", label: "стоимость продукции под риском" },
          { value: "24/7", label: "автоматический контроль" },
        ],
        bottomLine: "Узнать о проблеме в первые минуты, а не при следующем посещении объекта.",
      },
      {
        industry: "Кондитерское производство",
        title: "Более 1 000 тортов перед выходными",
        body: "Кондитерское производство готовит крупную партию заказов к выходным. В холодильных камерах находится более 1 000 тортов и десертов. В ночь с пятницы на субботу возникает техническая проблема холодильной системы, и температура начинает выходить за установленный диапазон. Без удалённого контроля проблема может оставаться незамеченной до утра. ThermoGuard фиксирует изменение температуры и отправляет Telegram-уведомление ответственным сотрудникам и технической компании.",
        metrics: [
          { value: "1 000+", label: "единиц готовой продукции" },
          { value: "Пт → Сб", label: "критическая ночь перед доставками" },
        ],
        bottomLine: "Возможность отреагировать ночью, пока ещё можно сохранить продукцию и выполнить заказы клиентов.",
      },
      {
        industry: "Склад цветов",
        title: "Несколько часов неправильной температуры могут испортить поставку",
        body: "Оптовый поставщик цветов получает крупные партии свежей продукции. Цветы хранятся в холодильных помещениях до распределения по магазинам и флористам. Ночью температура в одной из камер начинает постепенно повышаться из-за неисправности оборудования. Склад закрыт, персонала нет. ThermoGuard продолжает контролировать показатели и после превышения установленного порога автоматически отправляет уведомление ответственному сотруднику и сервисной компании.",
        metrics: [
          { value: "24/7", label: "контроль без присутствия персонала" },
          { value: "Риск качества", label: "и срока реализации продукции" },
        ],
        bottomLine: "Обнаружить проблему до начала рабочего дня, а не после того, как качество товара уже ухудшилось.",
      },
    ],
  },
  faq: {
    heading: "Частые вопросы",
    items: [
      {
        q: "Нужно ли менять существующую сервисную компанию?",
        a: "Нет. ThermoGuard может уведомлять вашу текущую сервисную компанию.",
      },
      {
        q: "Сколько сенсоров поддерживает базовый модуль?",
        a: "До 25 сенсоров.",
      },
      {
        q: "Можно ли подключить больше 25 сенсоров?",
        a: "Да. Для крупных объектов конфигурация рассчитывается индивидуально.",
      },
      {
        q: "Можно ли оплачивать оборудование частями?",
        a: "Да. Возможна поэтапная оплата до 24 месяцев.",
      },
      {
        q: "Сколько стоит ежемесячная подписка?",
        a: "€20 за активный сенсор в месяц.",
      },
      {
        q: "Можно ли удалённо менять температуру?",
        a: "Для поддерживаемого оборудования возможно удалённое изменение параметров.",
      },
      {
        q: "Что происходит при аварии?",
        a: "ThermoGuard фиксирует отклонение и отправляет уведомление ответственным сотрудникам и, если настроено, существующей сервисной компании клиента.",
      },
      {
        q: "ThermoGuard сам выполняет ремонт?",
        a: "Нет. Ремонт выполняет технический персонал клиента или его сервисный подрядчик.",
      },
    ],
  },
  finalCta: {
    label: "24/7 REFRIGERATION MONITORING",
    heading: "Сколько времени потребуется вашей компании, чтобы обнаружить поломку холодильного оборудования сегодня ночью?",
    text: "Узнайте, как круглосуточный удалённый мониторинг может помочь защитить ваш бизнес.",
    ctaPrimary: "Рассчитать стоимость",
    ctaSecondary: "Посмотреть, как работает система",
  },
  footer: {
    tagline: "ThermoGuard — система мониторинга коммерческого холодильного оборудования.",
    linksHeading: "Навигация",
    links: {
      how: "Как это работает",
      pricing: "Стоимость",
      calculator: "Калькулятор",
      faq: "Вопросы",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    contactsHeading: "Контакты",
    address: "Vienības gatve 136a, Rīga, LV-1058",
    phones: ["+371 29750250", "+371 20391190"],
    email: "hmsec@inbox.lv",
    hoursLabel: "Режим работы:",
    hours: "9:00–19:00",
    companyHeading: "Компания",
    companyName: "HMS-EC SIA",
    vatLabel: "Рег. номер:",
    vatNumber: "LV 40203185028",
    bankHeading: "Банковские реквизиты",
    ibanLabel: "IBAN:",
    iban: "LT523500010009805409",
    bankName: "PAYSERA UAB",
    swiftLabel: "SWIFT:",
    swift: "EVIULT2VXXX",
    disclaimer: "ThermoGuard не является аварийной ремонтной службой. Ремонт оборудования выполняется техническим персоналом клиента или его сервисной компанией.",
    rights: "Все права защищены.",
  },
};
