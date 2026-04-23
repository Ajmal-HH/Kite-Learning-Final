import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import heroVideo from "@/assets/kidanimation.mp4"; // add your video


const faqs = [
  { q: "What is Kite Learning?", a: "Kite Learning is an online individual tutoring platform where learning is personalized to the student's needs." },
  { q: "How much does a single session cost?", a: "Pricing depends on your child's needs — as a personalized service, our prices stay highly justifiable." },
  { q: "How many courses are there in Kite Learning?", a: "We offer an array of courses covering every subject and foundational skill across grades." },
  { q: "Who can join Kite Learning's courses?", a: "All courses are available for students from K-12 willing to learn." },
  { q: "Are there any vacation courses available?", a: "Yes — vacation crash courses, art and craft, and skill programs are offered for every class." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT → VIDEO */}
        <div className="flex justify-center lg:justify-start ml-50">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-[220px] sm:w-[280px] object-contain"
          />
        </div>

        {/* RIGHT → CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Over 3 Years in{" "}
            <span className="text-gradient-brand">Distant Skill</span>{" "}
            Development
          </h2>

          {/* underline */}
          <div className="mt-3 w-28 h-1 bg-gradient-brand rounded-full" />

          <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
            With more than a decade of expertise in providing remote learning opportunities, 
            we have empowered individuals across the globe to unlock their potential. 
            Our focus on distant skill development ensures that no matter where you are, 
            you can access world-class education, personalized training, and the tools 
            necessary to thrive in today’s fast-paced world.
          </p>
        </div>

      </div>
        <div className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-2xl border bg-card shadow-card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold">{f.q}</span>
                {isOpen ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
              </button>
              {isOpen && <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>

  );
}
