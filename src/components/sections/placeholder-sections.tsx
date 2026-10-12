import { Anchor, Compass, Sailboat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

const offers = [
  { icon: Sailboat, title: "Пункт 1", text: "Описание первого предложения." },
  { icon: Compass, title: "Пункт 2", text: "Описание второго предложения." },
  { icon: Anchor, title: "Пункт 3", text: "Описание третьего предложения." },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-32 sm:px-8">
      <Reveal className="grid gap-12 md:grid-cols-2">
        <h2 className="font-display text-4xl leading-tight sm:text-6xl">
          О проекте
        </h2>
        <p className="text-lg text-muted-foreground">
          Здесь будет рассказ о проекте: история, команда, ценности. Текст
          заполним, когда определимся с содержанием.
        </p>
      </Reveal>
    </section>
  );
}

export function Offer() {
  return (
    <section id="offer" className="bg-secondary py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2 className="mb-16 font-display text-4xl sm:text-6xl">
            Что мы предлагаем
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="h-full rounded-xl bg-card p-8 shadow-sm">
                <Icon className="mb-6 size-8 text-accent" strokeWidth={1.5} />
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="dark bg-background py-32 text-center text-foreground"
    >
      <Reveal className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 className="font-display text-4xl sm:text-6xl">Свяжитесь с нами</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Призыв к действию и контакты.
        </p>
        <Button asChild size="lg" className="mt-10">
          <a href="mailto:hello@example.com">Написать</a>
        </Button>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="dark border-t bg-background py-10 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        © 2026 Название проекта
      </div>
    </footer>
  );
}
