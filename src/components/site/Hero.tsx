import heroImg from "@/assets/hero-doctor-kid.jpg";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-card">
            ⭐ Personalized Online Learning
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Helping your child <br />
            become a future <span className="text-gradient-brand">Doctor.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Presenting to you the best online learning platform your child will
            ever need to fully invest in their learning journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
            >
              Get Started Today <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#assessment"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              <PlayCircle className="h-5 w-5 text-primary" /> Get a Free Assessment
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground">50K+</span>Learners</div>
            <div className="h-10 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground">10+</span>Years</div>
            <div className="h-10 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground">30+</span>Countries</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Young student dressed as a doctor sitting on a cloud — symbolising aspirational learning at Interval"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
