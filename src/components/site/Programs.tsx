import { ArrowUpRight, BookOpen } from "lucide-react";

const programs = [
  { title: "Super 15", desc: "Exclusive small-group tuition for Class 5–12 with only 15 students per batch.", lessons: "Class 5-12", tag: "Popular" },
  { title: "AI for Teachers", desc: "Hands-on AI course helping educators teach smarter and inspire brighter.", lessons: "8 Weeks", tag: "New" },
  { title: "Montessori Teacher Training", desc: "8-month online training with internationally recognized certificate and 100% job support.", lessons: "200 Lessons", tag: "Certified" },
  { title: "LKG / UKG Online", desc: "Joyful, play-based foundations in reading, writing and numbers, aligned to NEP 2020.", lessons: "Age 3-6", tag: "Kids" },
  { title: "Online Schooling", desc: "Personalized online school for Class 1–12 following NEP — learn at your own pace.", lessons: "Class 1-12", tag: "Full-Time" },
  { title: "Spoken English / Hindi / German", desc: "Confidence, pronunciation and real conversational skills with live expert sessions.", lessons: "Live", tag: "Languages" },
  { title: "Online Phonics", desc: "Songs, games and stories that turn sounds into words and words into confidence.", lessons: "Beginners", tag: "Reading" },
  { title: "Foundation Program", desc: "Strong base in Maths, English, Malayalam, Hindi, French and Arabic for Class 1–10.", lessons: "20 Lessons", tag: "Core" },
];

export function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Programs we offer</h2>
          <p className="mt-2 text-muted-foreground">A curriculum for every age, ambition and pace.</p>
        </div>
        <a href="#all-courses" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
          Browse more courses <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p) => (
          <article key={p.title} className="group rounded-2xl border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-soft transition-all">
            <div className="flex items-center justify-between">
              <div className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-accent px-2 py-1 rounded-full">{p.tag}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.lessons}</span>
              <span className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View details <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
