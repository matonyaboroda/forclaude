import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#about", label: "О проекте" },
  { href: "#offer", label: "Что мы предлагаем" },
  { href: "#contact", label: "Контакты" },
];

export function SiteHeader() {
  return (
    <header className="dark fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-foreground"
        >
          Название
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="outline" size="sm" className="text-foreground">
          <a href="#contact">Связаться</a>
        </Button>
      </div>
    </header>
  );
}
