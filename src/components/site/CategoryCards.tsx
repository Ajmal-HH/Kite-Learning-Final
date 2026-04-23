import { GraduationCap, BrainCircuit, Languages, BookOpenCheck } from "lucide-react";


const items = [
  { icon: GraduationCap, title: "Academic Courses", color: "#1e3a8a" }, // dark blue
  { icon: BookOpenCheck, title: "Skill Courses", color: "#7c2d12" }, // dark orange
  { icon: BrainCircuit, title: "Teacher Training", color: "#14532d" }, // dark green
  { icon: Languages, title: "Language Courses", color: "#4c1d95" }, // dark purple
];

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">We help you to <span className="text-gradient-brand">learn better.</span></h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="group rounded-2xl border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={
              {
                "--hover-bg": it.color,
              } as React.CSSProperties
            }
          >
            <div
              className="mx-auto h-14 w-14 rounded-2xl flex items-center justify-center mb-5 
  transition-all duration-300 ease-out 
  group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6 
  group-hover:bg-white"
              style={{ backgroundColor: it.color }}
            >
              <it.icon className="h-7 w-7 text-white transition-all duration-300 group-hover:text-white" />
            </div>

            <h3 className="text-lg flex items-center justify-center font-semibold transition-colors duration-300 group-hover:text-white">
              {it.title}
            </h3>

            {/* background layer */}
            <div className="absolute inset-0 -z-10 rounded-2xl transition-all duration-300 group-hover:bg-[var(--hover-bg)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
