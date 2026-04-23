import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is Interval?", a: "Interval is an online individual tutoring platform where learning is personalized to the student's needs." },
  { q: "How much does a single session cost?", a: "Pricing depends on your child's needs — as a personalized service, our prices stay highly justifiable." },
  { q: "How many courses are there in Interval?", a: "We offer an array of courses covering every subject and foundational skill across grades." },
  { q: "Who can join Interval's courses?", a: "All courses are available for students from K-12 willing to learn." },
  { q: "Are there any vacation courses available?", a: "Yes — vacation crash courses, art and craft, and skill programs are offered for every class." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Over 10 Years in Distant Skill Development</h2>
        <p className="mt-3 text-muted-foreground">Common questions from parents and students.</p>
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
