import aboutImg from "@/assets/learning.jpeg";
import { Check, UserRoundPlus  } from "lucide-react";

const features = [
  "Personalized Attention",
  "Customized Learning",
  "Continuous Progress Tracking",
  "Hybrid Learning Model",
  "Real-time Doubt Clearance",
  "Regular Evaluations",
  "One-to-One Support",
  "Practical Learning Environment"
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
            className="relative rounded-3xl shadow-card"
          />

          {/* Badge */}
          <div className="absolute -bottom-10 left-4 floating-badge">
            <div className="flex items-center gap-4 
                bg-white 
                rounded-[40px] 
                px-6 py-4 
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              {/* icon circle */}
              <div className="h-14 w-14 flex items-center justify-center 
                rounded-full bg-red-100">
               <UserRoundPlus />
              </div>

              {/* text */}
              <div>
                <p className="text-2xl font-bold text-red-500 leading-none">10K+</p>
                <p className="text-sm text-gray-500 mt-1">Enrolled Learners</p>
              </div>

            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            The Best Online Learning Platform That Is Ready To Assist Your Kid In All Ways
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-sm text-foreground/90"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full 
                       bg-yellow-400/10 ring-1 ring-yellow-400/30 
                       backdrop-blur-sm transition-all duration-300
                       group-hover:scale-105">
                  <Check className="h-3.5 w-3.5 text-yellow-500" />
                </span>

                <span className="leading-relaxed">{f}</span>
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
