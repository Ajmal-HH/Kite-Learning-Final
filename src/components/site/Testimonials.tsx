import { Quote } from "lucide-react";

const data = [
  { quote: "Interval is the best online platform for kids. Kanmani has improved so much. Thank you Aysha mam!", name: "Muktha & Family", role: "Cine Actress" },
  { quote: "My daughter enjoys her studies more than she ever did at school. Individualized tutoring really works.", name: "Gayathri Arun", role: "Parent of Kalyani" },
  { quote: "Interval adjusts to my daughter's learning style and weak areas. Visible changes in her confidence!", name: "Gayathri Vishal", role: "Parent of Vridhi Vishal" },
  { quote: "Time flexibility and quality education — we get exactly what we want for our child.", name: "Fathima & Usman", role: "Parents of Shanza" },
  { quote: "An amazing initiative for the little ones. Very happy enrolling my child since she was 3.", name: "Shilpa Bala", role: "Cine Actress" },
  { quote: "Math became so much easier. Teachers explain clearly and lessons stay fun and interactive.", name: "Nadi Muhammad KP", role: "Student" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">What the Parents Have To Say</h2>
          <p className="mt-3 text-muted-foreground">
            We take pride in hearing from families who have experienced the positive impact of our program.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((t) => (
            <article key={t.name} className="rounded-2xl bg-card p-7 shadow-card border relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15" />
              <p className="text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
