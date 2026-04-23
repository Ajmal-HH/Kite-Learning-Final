import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";

interface SimplePageProps {
  title: string;
  subtitle: string;
  body: string;
}

export function SimplePage({ title, subtitle, body }: SimplePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Marquee />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-hero">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-brand">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-base leading-relaxed text-foreground/85">{body}</p>
          <div className="mt-10">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition">
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [{ title: "Courses — Interval Learning" }] }),
  component: () => (
    <SimplePage
      title="Our Academic Courses"
      subtitle="Personalized 1:1 tuition across every grade and subject."
      body="From Class 1 to Class 12, our expert tutors design lessons around your child's pace and goals. Choose from Super 15 small-group programs, full-time online schooling, foundation courses, and much more."
    />
  ),
});
