import heroImg from "@/assets/hero-doctor-kid.jpg";
import { ArrowRight, PlayCircle, ScissorsLineDashed } from "lucide-react";
import { useEffect, useState } from "react";
import doctorImg from "@/assets/docter.png";
import policeImg from "@/assets/police.png";
import artistImg from "@/assets/artist.png";
import chefImg from "@/assets/chef.png";
import scientistImg from "@/assets/scientist.png";
import architectImg from "@/assets/architect.png";
import lawyerImg from "@/assets/lawyer.png";

const rolesData = [
  { name: "Doctor", img: doctorImg },
  { name: "Police", img: policeImg },
  { name: "Artist", img: artistImg },
  { name: "Chef", img: chefImg },
  { name: "Scientist", img: scientistImg },
  { name: "Architect", img: architectImg },
  { name: "Lawyer", img: lawyerImg },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rolesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="bg-gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
            Helping your child <br />
            become a future{" "}
            <span className="text-gradient-brand">
              {rolesData[index].name}
            </span>
            <span>.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Presenting to you the best online learning platform your child will
            ever need to fully invest in their learning journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
            >
              Get Started Today <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#assessment"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              <PlayCircle className="h-5 w-5 text-primary" /> Get a Free Assessment
            </a>
          </div>

   
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-3xl rounded-full" />
          <img
            src={rolesData[index].img}
            alt={rolesData[index].name}
            className="relative w-full max-w-lg mx-auto animate-float drop-shadow-2xl transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
