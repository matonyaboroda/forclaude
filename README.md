# Сайт проекта по яхтингу

Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui · Motion · Lenis.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшен-сборка
```

## Структура

- `src/app/` — layout, страница, глобальные стили и тема (`globals.css`: морская палитра в CSS-переменных).
- `src/components/sections/` — секции страницы (шапка, hero, о проекте, предложения, контакты).
- `src/components/ui/` — компоненты shadcn/ui.
- `src/components/providers/smooth-scroll.tsx` — плавный скролл (Lenis).

## Компоненты и MCP

`.mcp.json` подключает shadcn MCP — Claude Code предложит его включить при первом запуске в этой папке.

В `components.json` подключены реестры:

```bash
npx shadcn@latest add button                  # базовые shadcn
npx shadcn@latest add @magicui/marquee        # Magic UI
npx shadcn@latest add @aceternity/spotlight   # Aceternity UI
```
