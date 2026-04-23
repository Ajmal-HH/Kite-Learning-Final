const news = [
  { date: "07 APR", title: "Interval DAKSHA: NEET & JEE Foundation Program for Class 8-10 Students" },
  { date: "26 MAR", title: "INTECAMP 3.0: Free Online Summer Camp by Interval Learning" },
  { date: "20 JAN", title: "30% Limited-Time Offer on Interval Little Genie Programs" },
  { date: "23 DEC", title: "Year End Offer at Interval Learning – Up to 40% Off" },
  { date: "06 DEC", title: "Free Christmas Exam Revision for State Syllabus" },
  { date: "08 NOV", title: "A Proud Moment: Montessori Teacher Training Convocation 2025" },
];

export function News() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold">News & <span className="text-gradient-brand">Events</span></h2>
        <a href="#all-news" className="text-sm font-semibold text-primary hover:underline">View All</a>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((n) => (
          <article key={n.title} className="rounded-2xl border bg-card p-6 shadow-card hover:-translate-y-1 transition-all">
            <div className="inline-flex items-center rounded-lg bg-gradient-brand px-3 py-1.5 text-xs font-bold text-primary-foreground">
              {n.date}
            </div>
            <h3 className="mt-4 font-semibold leading-snug">{n.title}</h3>
            <a href="#learn" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
