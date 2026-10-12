import { Hero } from "@/components/sections/hero";
import {
  About,
  Contact,
  Offer,
  SiteFooter,
} from "@/components/sections/placeholder-sections";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Offer />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
