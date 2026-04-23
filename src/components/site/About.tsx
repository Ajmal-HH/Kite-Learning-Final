import aboutImg from "@/assets/about-learning.jpg";
import { Check } from "lucide-react";

const features = [
  "Personalized Attention",
  "Customized Learning",
  "Continuous Progress Tracking",
  "Hybrid Learning Model",
  "Real-time Doubt Clearance",
  "Regular Evaluations",
];

export function About() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-brand opacity-10 rounded-3xl blur-2xl" />
          <img
            src={aboutImg}
            alt="Children learning together online"
            width={1024}
            height={896}
            loading="lazy"
            className="relative rounded-3xl shadow-card"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            The Best Online Learning Platform That Is Ready To Assist Your Kid In All Ways
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="h-6 w-6 rounded-full bg-gradient-brand flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">
            Together, these elements create a supportive environment for students to succeed academically and grow personally.
          </p>
          <a href="#book" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition">
            Book a demo class today
          </a>
        </div>
      </div>
    </section>
  );
}
