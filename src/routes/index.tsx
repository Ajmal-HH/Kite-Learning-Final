import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Hero } from "@/components/site/Hero";
import { CategoryCards } from "@/components/site/CategoryCards";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Programs } from "@/components/site/Programs";
import { Personalized } from "@/components/site/Personalized";
import { Faq } from "@/components/site/Faq";
import { CallToAction } from "@/components/site/CallToAction";
import { FloatingButtons } from "@/components/site/WhatsappButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kite Learning — Personalized Online Tutoring for Kids K-12" },
      { name: "description", content: "India's personalized online learning platform. One-on-one tuition, language courses, Montessori training and more for K-12 students worldwide." },
      { property: "og:title", content: "Kite Learning — Personalized Online Tutoring" },
      { property: "og:description", content: "Helping your child become a future doctor, engineer or whatever they dream of — with personalized 1:1 online classes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Marquee />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryCards />
        <About />
        <Stats />
        <Testimonials />
        <Programs />
        <Personalized />
        <Faq />
        <CallToAction />
        <FloatingButtons  />
      </main>
      <Footer />
    </div>
  );
}
