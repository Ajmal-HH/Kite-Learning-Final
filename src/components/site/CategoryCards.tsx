import { GraduationCap, Palette, Users, Languages } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Academic Courses", desc: "Grade 1–12 personalized tuition", color: "oklch(0.92 0.08 260)" },
  { icon: Palette, title: "Non Academic Courses", desc: "Art, music, coding & more", color: "oklch(0.93 0.09 305)" },
  { icon: Users, title: "Academic Clubs", desc: "Group learning & competitions", color: "oklch(0.94 0.08 55)" },
  { icon: Languages, title: "Language Courses", desc: "English, German, Hindi, Arabic", color: "oklch(0.92 0.08 165)" },
];

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">We help you to <span className="text-gradient-brand">learn better.</span></h2>
        <p className="mt-3 text-muted-foreground">Pick a path. We tailor every step to your child.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="group rounded-2xl bg-card border p-6 shadow-card hover:-translate-y-1 transition-all"
          >
            <div
              className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ backgroundColor: it.color }}
            >
              <it.icon className="h-7 w-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
