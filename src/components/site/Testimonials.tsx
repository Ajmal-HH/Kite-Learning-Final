import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import scientistImg from "@/assets/scientist.png";
import rev1 from "@/assets/rev1.jpeg";
import rev2 from "@/assets/rev2.jpeg";
import rev3 from "@/assets/rev3.jpeg";
import rev4 from "@/assets/rev4.jpeg";
import rev5 from "@/assets/rev5.jpeg";



const data = [
  {
    quote: "I can see improvement in my child’s reading and writing. Teachers give good attention.",
    name: "Bushra",
    role: "Parent of Aadil (4th Std)",
    img: rev1,
  },
  {
    quote: "The crash course was very helpful. My child prepared better for exams.",
    name: "Thahira",
    role: "Parent of Thashreef (8th Std)",
    img: rev2,
  },
  {
    quote: "My child was weak earlier, but now there is clear improvement. Good teaching support.",
    name: "Saleem & Muhsina",
    role: "Parent of Adhira (10th)",
    img: rev3,
  },
  {
    quote: "English class helped improve communication skills. Good environment.",
    name: "Jyothi & Suresh",
    role: "Parent of Ayush (8th Std)",
    img: rev4,
  },
  {
    quote: "Teachers are supportive and focus on basics.",
    name: "Bashith ",
    role: "Parent of Ayisha Bareera",
    img: rev5,
  },

];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            What the Parents <br /> Have To Say
          </h2>

          <p className="mt-4 text-muted-foreground max-w-md">
            At the heart of every child's growth is the support and trust of their parents.
            We take immense pride in hearing from families who have experienced the positive impact of our program.
          </p>
        </div>

        {/* RIGHT SIDE CAROUSEL */}
        <div className="relative flex justify-center items-center">

          <div className="flex gap-6 items-center transition-all duration-500">

            {data.map((item, i) => {
              // calculate position relative to active index
              const position =
                (i - index + data.length) % data.length;

              const isCenter = position === 0;
              const isLeft = position === data.length - 1;
              const isRight = position === 1;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <div
                  key={i}
                  className={`transition-all duration-500 rounded-2xl bg-white shadow-xl p-4
                    ${isCenter ? "w-[320px] scale-105 z-20" : "w-[260px] scale-90 opacity-40"}
                  `}
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    className="w-full h-[180px] object-cover rounded-xl"
                  />

                  {/* Content */}
                  <div className="mt-4">
                    <Quote className="h-5 w-5 text-primary mb-2" />

                    <p className="text-sm text-gray-700 line-clamp-4">
                      {item.quote}
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}