# ThermoGuard — 24/7 мониторинг холодильного оборудования

B2B-сайт monitoring-платформы для круглосуточного контроля холодильного оборудования. Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS.

## Запуск

Требуется Node.js 18.18+ (рекомендуется 20 LTS).

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Сборка

```bash
npm run build
npm run start
```

## Структура

```
app/                 # App Router: layout, page, globals.css
components/          # Секции страницы (Header, Hero, Pricing, ...)
components/ui/       # Переиспользуемые примитивы (Button, PricingCard, ...)
context/             # LanguageContext — переключение RU/LV с сохранением в localStorage
locales/             # Словари переводов ru.ts / lv.ts
```

## Языки (RU/LV)

Весь текст выводится через `useLanguage()` → `t.<section>.<key>`, значения берутся из `locales/ru.ts` или `locales/lv.ts`. Выбранный язык сохраняется в `localStorage` (ключ `thermoguard-lang`). Чтобы добавить/поправить перевод — редактируйте соответствующий файл в `locales/`, структура обоих файлов идентична (тип `Dictionary` выводится из `ru.ts`).

## Что уже сделано

- Header (sticky, blur-эффект при скролле, мобильное меню, переключатель языка)
- Hero + реалистичный monitoring dashboard (метрики, таблица оборудования, активный инцидент, live-индикатор)
- Problem / How it works / Control levels
- Pricing (3 тарифа, PROTECT выделен)
- Diagnostics (SVG-график температуры за 24 часа)
- Industries (3×3 сетка отраслей)
- Dashboard Demo (расширенная демонстрация мониторинга и инцидента)
- Benefits, Final CTA
- Contact form (фронтенд-заглушка, без бэкенда)
- Footer

## Примечания

- Бэкенда нет: форма обратной связи показывает success-состояние на фронтенде без реальной отправки.
- Данные dashboard и таблицы оборудования — статичный демо-контент из словаря переводов, не подключены к реальным датчикам.
- Домен `thermoguard.example` в metadata (`app/layout.tsx`) — замените на реальный при деплое.
- Контакты в футере (`locales/ru.ts` / `locales/lv.ts`, ключ `footer.email` / `footer.phone`) — плейсхолдеры, замените на реальные.
- Перевод LV подготовлен полноценно (не является копией RU), но рекомендуется вычитать носителем языка перед публикацией.
