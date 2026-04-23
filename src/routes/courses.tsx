// src/components/site/Courses.tsx
import superten from "@/assets/super10.jpeg";
import aiteacher from "@/assets/aiforteacher.jpeg";
import teachertraining from "@/assets/teacherTraining.jpeg";
import lkgukg from "@/assets/ukgOnline.jpeg";

const courses = [
  {
    title: "Mathematics",
    image: superten,
    desc: "Strong foundation in numbers, algebra and problem solving.",
    lessons: "Class 1-12",
    tag: "Core",
  },
  {
    title: "Science",
    image: aiteacher,
    desc: "Interactive learning for Physics, Chemistry & Biology.",
    lessons: "Class 1-12",
    tag: "Popular",
  },
  {
    title: "English",
    image: teachertraining,
    desc: "Grammar, communication and writing skills.",
    lessons: "All Levels",
    tag: "Language",
  },
  {
    title: "Kindergarten",
    image: lkgukg,
    desc: "Fun-based early learning for LKG & UKG.",
    lessons: "Age 3-6",
    tag: "Kids",
  },
];

export function Courses() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our <span className="text-gradient-brand">Courses</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore subjects designed for every learner.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c) => (
          <article
            key={c.title}
            className="group rounded-2xl border bg-card overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 right-3 text-[11px] font-semibold text-white bg-black/60 px-2 py-1 rounded-full">
                {c.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {c.desc}
              </p>
              <div className="mt-5 text-xs text-muted-foreground">
                {c.lessons}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}