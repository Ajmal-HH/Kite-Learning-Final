import { ArrowUpRight, BookOpen } from "lucide-react";
import teachertraining from "@/assets/teacherTraining.jpeg";
import superten from "@/assets/super10.jpeg";
import aiteacher from "@/assets/aiforteacher.jpeg";
import lkgukg from "@/assets/ukgOnline.jpeg";
import onlineschooling from "@/assets/learning.jpeg";
import spokenenglish from "@/assets/spokenEnglish.jpeg";
import onlinephonics from "@/assets/onlineSchool.jpeg";
import foundationprogram from "@/assets/foundationprogramonline.jpeg";
// import onlineteacher from "@/assets/onlineTeachertraining.jpeg";



const programs = [
  { title: "Super 10", image: superten, desc: "Exclusive small-group tuition for Class 5–12 with only 10 students per batch.", lessons: "Class 5-12", tag: "Popular" },
  { title: "AI for Teachers", image: aiteacher, desc: "Hands-on AI course helping educators teach smarter and inspire brighter.", lessons: "8 Weeks", tag: "New" },
  { title: "Montessori Teacher Training", image: teachertraining, desc: "8-month online training with internationally recognized certificate and 100% job support.", lessons: "200 Lessons", tag: "Certified" },
  { title: "LKG / UKG Online", image: lkgukg, desc: "Joyful, play-based foundations in reading, writing and numbers, aligned to NEP 2023.", lessons: "Age 3-6", tag: "Kids" },
  { title: "Online Schooling", image: onlineschooling, desc: "Personalized online school for Class 1–12 following NEP — learn at your own pace.", lessons: "Class 1-12", tag: "Full-Time" },
  { title: "Spoken English", image: spokenenglish , desc: "Confidence, pronunciation and real conversational skills with live expert sessions.", lessons: "Live", tag: "Languages" },
  { title: "Online Phonics", image: onlinephonics, desc: "Songs, games and stories that turn sounds into words and words into confidence.", lessons: "Beginners", tag: "Reading" },
  { title: "Foundation Program", image: foundationprogram, desc: "Strong base in Maths, English, Kannada and Hindi for Class 1–10.", lessons: "20 Lessons", tag: "Core" },
];

export function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Programs we offer</h2>
          <p className="mt-2 text-muted-foreground">A curriculum for every age, ambition and pace.</p>
        </div>

      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border bg-card overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-soft transition-all"
          >

            {/* 🔥 Image on top */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Tag on image */}
              <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider text-white bg-black/60 px-2 py-1 rounded-full">
                {p.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold leading-snug">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {p.desc}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.lessons}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
