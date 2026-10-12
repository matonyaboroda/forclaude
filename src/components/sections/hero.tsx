"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="dark relative flex min-h-svh items-end overflow-hidden bg-background pb-24 text-foreground">
      {/* Фон-заглушка: замените на видео или фото (public/hero.mp4 или next/image) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,oklch(0.45_0.09_220/0.55),transparent_60%),radial-gradient(ellipse_at_10%_90%,oklch(0.55_0.1_195/0.35),transparent_55%)]"
      />
      <Waves />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-accent"
        >
          Проект по яхтингу
        </motion.p>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          Заголовок, который <em className="text-accent">зовёт</em> в море
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Короткое описание проекта: кому он, что даёт и почему это стоит
          попробовать.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href="#contact">Главное действие</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#about">
              Узнать больше <ArrowDown />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Waves() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-40 w-full text-accent/10"
    >
      <motion.path
        fill="currentColor"
        animate={{
          d: [
            "M0,224L80,213C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z",
            "M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L0,320Z",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
