const stats = [
  { value: "10+", label: "States we Serve" },
  { value: "10K+", label: "Total students enrolled" },
  { value: "200K+", label: "Total Class Hours" },
  { value: "100+", label: "Total Tutor Strength" },
];
import worldgif from "@/assets/worldgif.mp4";


export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Our Worldwide <span className="text-gradient-brand">Achievements.</span></h2>
      <video
        src={worldgif}
        autoPlay
        loop
        muted
        playsInline
        className="mt-8 w-full rounded-2xl object-cover"
      />    
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-8 shadow-card">
            <div className="text-4xl font-extrabold text-gradient-brand">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
