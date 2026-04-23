export function Marquee() {
  const text =
    "🎓 ADMISSIONS OPEN FOR THE NEXT ACADEMIC YEAR  •  🚀 Get FLAT 20% Early Bird Offer  •  👉 ENROLL NOW & SHAPE YOUR FUTURE  •  ";
  return (
    <div className="bg-gradient-marquee text-white overflow-hidden" style={{ backgroundImage: "linear-gradient(90deg, oklch(0.7 0.2 40), oklch(0.62 0.23 25))" }}>
      <div className="flex animate-marquee whitespace-nowrap py-2.5 text-sm font-semibold tracking-wide">
        <span className="px-4">{text.repeat(4)}</span>
        <span className="px-4">{text.repeat(4)}</span>
      </div>
    </div>
  );
}
