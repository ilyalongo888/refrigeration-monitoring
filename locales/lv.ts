import type { Dictionary } from "./ru";

export const lv: Dictionary = {
  meta: {
    brand: "ThermoGuard",
  },
  nav: {
    how: "Kā tas strādā",
    pricing: "Cena",
    calculator: "Kalkulators",
    faq: "Jautājumi",
    cta: "Aprēķināt cenu",
  },
  hero: {
    badge: "MONITORINGS 24/7",
    h1: "Uzziniet par problēmu {{ātrāk}}, pirms tā kļūst par {{zaudējumiem}}",
    subtitle:
      "ThermoGuard visu diennakti kontrolē saldēšanas iekārtas, fiksē temperatūras novirzes un automātiski informē jūsu komandu un apkalpojošo uzņēmumu par problēmu.",
    ctaPrimary: "Aprēķināt cenu",
    ctaSecondary: "Skatīt, kā strādā sistēma",
    microcopy: [
      "Līdz 25 sensoriem uz viena moduļa",
      "Telegram paziņojumi",
      "Attālā piekļuve",
      "Monitorings 24/7",
    ],
  },
  dashboard: {
    title: "THERMOGUARD MONITORING",
    online: "SYSTEM ONLINE",
    metrics: {
      sensors: "AKTĪVI SENSORI",
      normal: "NORMĀ",
      alerts: "AKTĪVS TRAUKSMES SIGNĀLS",
    },
    tableHeaders: {
      equipment: "Iekārta",
      temperature: "Temperatūra",
      target: "Mērķa",
      status: "Statuss",
    },
    equipment: [
      { name: "Saldēšanas kamera 01", temp: "+3.2°C", target: "+2…+5°C", status: "normal" },
      { name: "Saldēšanas kamera 02", temp: "+4.1°C", target: "+2…+5°C", status: "normal" },
      { name: "Saldētava 01", temp: "-18.6°C", target: "-18°C", status: "normal" },
      { name: "Saldētava 02", temp: "-11.8°C", target: "-18°C", status: "alert" },
    ],
    statusLabels: {
      normal: "Norma",
      alert: "Trauksme",
    },
    incident: {
      label: "ACTIVE ALERT",
      unit: "Saldētava 02",
      timeline: [
        { time: "02:17", text: "Temperatūra pārsniedza pieļaujamo slieksni" },
        { time: "02:17", text: "Nosūtīts Telegram paziņojums" },
        { time: "02:18", text: "Atbildīgais darbinieks informēts" },
        { time: "02:18", text: "Servisa uzņēmums informēts" },
        { time: "02:20", text: "Rādījumi turpina atjaunoties" },
        { time: "02:22", text: "Parametrs koriģēts attālināti" },
      ],
    },
    lastCheck: "Pēdējā sistēmas pārbaude: pirms 14 sekundēm",
  },
  howItWorks: {
    heading: "Kā strādā ThermoGuard",
    subtitle: "No sensora uz iekārtas līdz paziņojumam tiem, kam jāreaģē.",
    steps: [
      {
        number: "01",
        title: "PIESLĒGŠANA",
        text: "Sensori tiek pievienoti saldēšanas iekārtām un pārraida datus uz centrālo moduli.",
      },
      {
        number: "02",
        title: "MONITORINGS",
        text: "Sistēma visu diennakti seko temperatūrai un citiem pieejamiem parametriem.",
      },
      {
        number: "03",
        title: "ATKLĀŠANA",
        text: "ThermoGuard automātiski fiksē rādījumu novirzi ārpus pieļaujamajām vērtībām.",
      },
      {
        number: "04",
        title: "PAZIŅOJUMS",
        text: "Telegram bots nekavējoties informē atbildīgos darbiniekus.",
      },
      {
        number: "05",
        title: "INFORMĀCIJAS NODOŠANA",
        text: "Ja nepieciešams, paziņojumu saņem arī klienta esošais servisa uzņēmums.",
      },
      {
        number: "06",
        title: "RĪCĪBA",
        text: "Remontu vai tehniskās darbības veic klienta paša inženieris vai esošais servisa uzņēmums.",
      },
    ],
  },
  pricingModel: {
    heading: "Viens produkts. Vienkāršs modelis.",
    subtitle: "Iekārtas un pieslēguma izmaksas atsevišķi no ikmēneša monitoringa licences.",
    equipment: {
      label: "IEKĀRTA UN PIESLĒGŠANA",
      price: "€1 500",
      period: "vienreizēji",
      included: [
        "centrālais modulis",
        "ieviešana",
        "sistēmas uzstādīšana un konfigurācija",
        "Telegram paziņojumu pieslēgšana",
        "atbalsts līdz 25 sensoru pieslēgšanai",
        "sistēmas palaišana",
      ],
      installment: "Iespējama pakāpeniska apmaksa līdz 24 mēnešiem.",
    },
    monitoring: {
      label: "IKMĒNEŠA MONITORINGA LICENCE",
      price: "€20–€30",
      period: "par aktīvu sensoru / mēnesī",
      included: [
        "monitorings 24/7",
        "rādījumu vēsture",
        "automātiski brīdinājumi",
        "attālā piekļuve parametriem",
        "dashboard",
        "Telegram paziņojumi",
        "informācijas nodošana servisa uzņēmumam",
        "attālā vadība atbalstītām iekārtām",
      ],
      note: "Licences cena atkarīga no iekārtas veida, pieslēguma konfigurācijas un kontrolēto parametru apjoma.",
    },
    cta: "Aprēķināt cenu",
  },
  costExamples: {
    heading: "Orientējošas cenas piemēri",
    items: [
      { label: "Neliels objekts", sensors: "5 sensori", price: "€100–€150 / mēnesī" },
      { label: "Vidējs objekts", sensors: "15 sensori", price: "€300–€450 / mēnesī" },
      { label: "Liels objekts", sensors: "25 sensori", price: "€500–€750 / mēnesī" },
    ],
    footnote: "* sākotnējā iekārta un ieviešana — €1 500, vienreizēji.",
  },
  serviceCompany: {
    heading: "Nav jāmaina jūsu servisa uzņēmums",
    paragraphs: [
      "ThermoGuard strādā kopā ar jūsu esošo servisa infrastruktūru.",
      "Kritiskas novirzes gadījumā paziņojums var tikt automātiski nosūtīts jūsu tehniskajam personālam un uzņēmumam, kas jau apkalpo saldēšanas iekārtas.",
    ],
    highlight: "Mēs neaizstājam jūsu servisa partneri — mēs palīdzam viņam ātrāk uzzināt par problēmu.",
  },
  remoteControl: {
    heading: "Ne tikai monitorings",
    subtitle: "Atkarībā no saldēšanas iekārtas veida ThermoGuard var atbalstīt darba parametru attālinātu maiņu.",
    mockup: {
      unit: "Freezer Unit 02",
      currentLabel: "Pašreizējā temperatūra",
      current: "-11.8°C",
      setPointLabel: "Iestatītā temperatūra",
      setPoint: "-18°C",
      options: ["-19°C", "-18°C", "-17°C"],
      apply: "Piemērot izmaiņas",
    },
    note: "Pieejamās vadības funkcijas atkarīgas no iekārtas modeļa un pieslēguma veida. Mēs negarantējam attālo vadību jebkurai iekārtai.",
  },
  calculator: {
    heading: "Aprēķiniet cenu savam objektam",
    subtitle: "Šī ir provizoriska aplēse orientācijai — precīzu aprēķinu sagatavos mūsu speciālists.",
    stepLabel: "Solis",
    of: "no",
    back: "Atpakaļ",
    next: "Tālāk",
    steps: {
      objects: {
        question: "Cik jums ir objektu?",
        options: ["1", "2–5", "6+"],
      },
      sensors: {
        question: "Cik saldēšanas iekārtu vai kontrolējamo punktu?",
        plus: "25+",
        unitLabel: "sensoru",
      },
      equipment: {
        question: "Iekārtu veids",
        options: [
          "Saldēšanas kameras",
          "Saldētavas",
          "Saldēšanas vitrīnas",
          "Rūpnieciskās saldēšanas iekārtas",
          "Jaukts aprīkojums",
          "Cits",
        ],
      },
      remote: {
        question: "Vai nepieciešama attālā vadība?",
        options: ["Jā", "Nē", "Nezinu"],
      },
    },
    result: {
      heading: "Provizoriskais aprēķins",
      setupLabel: "Iekārta un pieslēgšana",
      setupPrice: "€1 500 vienreizēji",
      installment: "iespējama pakāpeniska apmaksa līdz 24 mēnešiem",
      sensorsLabel: "Aktīvo sensoru skaits",
      monthlyLabel: "Orientējošās ikmēneša izmaksas",
      monthlyUnit: "/ mēnesī",
      monthlyNote: "Precīzā cena atkarīga no iekārtas veida un pieslēguma konfigurācijas.",
      editCta: "Mainīt parametrus",
    },
    leadForm: {
      heading: "Saņemt precīzu aprēķinu",
      fields: {
        name: "Vārds",
        company: "Uzņēmuma nosaukums",
        phone: "Tālrunis",
        email: "E-pasts",
      },
      submit: "Saņemt precīzu aprēķinu",
    },
    success: {
      title: "Paldies. Esam saņēmuši informāciju par objektu.",
      text: "Mūsu speciālists sazināsies ar jums, lai precizētu tehnisko konfigurāciju un sagatavotu precīzu aprēķinu.",
    },
  },
  targetCustomers: {
    heading: "Uzņēmumiem, kuriem temperatūrai ir nozīme",
    primaryLabel: "Galvenās nozares",
    primary: [
      "Saldēšanas noliktavas",
      "Pārtikas ražošana",
      "Gaļas pārstrāde",
      "Zivju pārstrāde",
      "Piena pārstrādes uzņēmumi",
      "Frozen food",
      "Pārtikas izplatītāji",
      "Lielveikali",
      "Farmācijas noliktavas",
      "Komerciāli saldēšanas objekti",
    ],
    secondaryLabel: "Piemērots arī",
    secondary: [
      "Restorāni",
      "Viesnīcas",
      "Ēdināšana",
      "Konditorejas ražotnes",
      "Ziedu noliktavas un loģistika",
    ],
  },
  businessScenarios: {
    heading: "Kur ThermoGuard var novērst nopietnus zaudējumus",
    subtitle: "Vairākas tipiskas situācijas, kurās agrīnai temperatūras novirzes atklāšanai ir izšķiroša nozīme.",
    tag: "TIPISKS SCENĀRIJS",
    scenarios: [
      {
        industry: "Saldēšanas noliktava",
        title: "Produkcija vairāk nekā €150 000 vērtībā varēja palikt bez dzesēšanas",
        body: "Uzņēmums uz sešiem mēnešiem īrē saldēšanas noliktavu produkcijas pagaidu uzglabāšanai, kuras kopējā vērtība pārsniedz €150 000. Naktī objektā pazūd elektrība. Personāla noliktavā nav, tāpēc bez attālā monitoringa problēmu var pamanīt tikai pēc vairākām stundām. ThermoGuard fiksē temperatūras pieaugumu pēc pieļaujamā diapazona pārsniegšanas un automātiski informē atbildīgos darbiniekus un apkalpojošo uzņēmumu.",
        metrics: [
          { value: "€150 000+", label: "riskam pakļautās produkcijas vērtība" },
          { value: "24/7", label: "automātiska kontrole" },
        ],
        bottomLine: "Uzzināt par problēmu pirmajās minūtēs, nevis nākamajā apmeklējuma reizē.",
      },
      {
        industry: "Konditorejas ražotne",
        title: "Vairāk nekā 1 000 kūku pirms nedēļas nogales",
        body: "Konditorejas ražotne gatavo lielu pasūtījumu partiju nedēļas nogalei. Saldēšanas kamerās atrodas vairāk nekā 1 000 kūku un desertu. Naktī no piektdienas uz sestdienu rodas saldēšanas sistēmas tehniska problēma, un temperatūra sāk pārsniegt noteikto diapazonu. Bez attālās kontroles problēma var palikt nepamanīta līdz rītam. ThermoGuard fiksē temperatūras izmaiņas un nosūta Telegram paziņojumu atbildīgajiem darbiniekiem un tehniskajam uzņēmumam.",
        metrics: [
          { value: "1 000+", label: "gatavās produkcijas vienību" },
          { value: "Pk → Se", label: "kritiskā nakts pirms piegādēm" },
        ],
        bottomLine: "Iespēja reaģēt naktī, kamēr vēl var saglabāt produkciju un izpildīt klientu pasūtījumus.",
      },
      {
        industry: "Ziedu noliktava",
        title: "Dažas stundas nepareizā temperatūrā var sabojāt piegādi",
        body: "Ziedu vairumtirgotājs saņem lielas svaigas produkcijas partijas. Ziedi tiek uzglabāti saldēšanas telpās līdz sadalei veikaliem un floristiem. Naktī vienā no kamerām temperatūra pakāpeniski paaugstinās iekārtas bojājuma dēļ. Noliktava ir slēgta, personāla nav. ThermoGuard turpina kontrolēt rādījumus un pēc noteiktā sliekšņa pārsniegšanas automātiski nosūta paziņojumu atbildīgajam darbiniekam un servisa uzņēmumam.",
        metrics: [
          { value: "24/7", label: "kontrole bez personāla klātbūtnes" },
          { value: "Kvalitātes risks", label: "un produkcijas realizācijas termiņš" },
        ],
        bottomLine: "Atklāt problēmu pirms darba dienas sākuma, nevis pēc tam, kad preces kvalitāte jau pasliktinājusies.",
      },
    ],
  },
  faq: {
    heading: "Biežāk uzdotie jautājumi",
    items: [
      {
        q: "Vai jāmaina esošais servisa uzņēmums?",
        a: "Nē. ThermoGuard var informēt jūsu pašreizējo servisa uzņēmumu.",
      },
      {
        q: "Cik sensoru atbalsta bāzes modulis?",
        a: "Līdz 25 sensoriem.",
      },
      {
        q: "Vai var pieslēgt vairāk par 25 sensoriem?",
        a: "Jā. Lieliem objektiem konfigurācija tiek aprēķināta individuāli.",
      },
      {
        q: "Vai iekārtu var apmaksāt pa daļām?",
        a: "Jā. Iespējama pakāpeniska apmaksa līdz 24 mēnešiem.",
      },
      {
        q: "Cik maksā ikmēneša abonements?",
        a: "Orientējoši €20–€30 par aktīvu sensoru mēnesī. Precīzā cena atkarīga no iekārtas un konfigurācijas.",
      },
      {
        q: "Vai var attālināti mainīt temperatūru?",
        a: "Atbalstītām iekārtām iespējama parametru attālināta maiņa.",
      },
      {
        q: "Kas notiek avārijas gadījumā?",
        a: "ThermoGuard fiksē novirzi un nosūta paziņojumu atbildīgajiem darbiniekiem un, ja iestatīts, klienta esošajam servisa uzņēmumam.",
      },
      {
        q: "Vai ThermoGuard pats veic remontu?",
        a: "Nē. Remontu veic klienta tehniskais personāls vai tā servisa partneris.",
      },
    ],
  },
  finalCta: {
    label: "24/7 REFRIGERATION MONITORING",
    heading: "Cik ilgs laiks jūsu uzņēmumam būtu nepieciešams, lai šonakt atklātu saldēšanas iekārtas bojājumu?",
    text: "Uzziniet, kā diennakts attālais monitorings var palīdzēt aizsargāt jūsu biznesu.",
    ctaPrimary: "Aprēķināt cenu",
    ctaSecondary: "Skatīt, kā strādā sistēma",
  },
  footer: {
    tagline: "ThermoGuard — komerciālo saldēšanas iekārtu monitoringa sistēma.",
    linksHeading: "Navigācija",
    links: {
      how: "Kā tas strādā",
      pricing: "Cena",
      calculator: "Kalkulators",
      faq: "Jautājumi",
      privacy: "Privātuma politika",
      terms: "Lietošanas noteikumi",
    },
    contactsHeading: "Kontakti",
    contactsFallback: "Sazinieties ar mums, izmantojot cenas aprēķina formu vietnē.",
    email: "",
    phone: "",
    disclaimer: "ThermoGuard nav avārijas remonta dienests. Iekārtu remontu veic klienta tehniskais personāls vai tā servisa uzņēmums.",
    rights: "Visas tiesības aizsargātas.",
  },
};
