import { Sparkles, Wallet, Target, BookMarked, MessageCircle, LineChart } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Personalized Plans", desc: "Learning experiences shaped to your child's goals — engaging, effective and enjoyable." },
  { icon: Wallet, title: "Customizable Pricing", desc: "Pay only for what your child needs. Flexible plans, no hidden fees." },
  { icon: Target, title: "Weak Area Focus", desc: "Dedicated support on the subjects your child finds most challenging." },
  { icon: BookMarked, title: "Subject Coverage", desc: "Personalized paths for every difficult subject with expert guidance." },
  { icon: MessageCircle, title: "Anytime Tutor Support", desc: "Tutors on hand to clear doubts, calm exam nerves and keep momentum." },
  { icon: LineChart, title: "Student Monitoring", desc: "Detailed, secure progress tracking after every session." },
];

export function Personalized() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Personalized education that fits every child's <span className="text-gradient-brand">educational needs</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our approach is centred on providing education that's customized to meet the unique needs of every child — bridging knowledge and accessibility.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border p-7 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
