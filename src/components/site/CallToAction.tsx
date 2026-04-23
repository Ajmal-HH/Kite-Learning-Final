import { Phone, MessageCircle } from "lucide-react";

export function CallToAction() {
  return (
    <section id="join" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl bg-gradient-brand p-10 sm:p-14 text-center text-primary-foreground shadow-soft relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <h2 className="relative text-3xl sm:text-4xl font-bold leading-tight max-w-3xl mx-auto">
          The Best Online Tutoring Platform That Meets All Your Child's Needs
        </h2>
        <p className="relative mt-4 text-white/85 max-w-2xl mx-auto">
          Passionate tutors, a nurturing environment, and lessons aligned with your child's unique needs.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
          <a href="tel:918660129593" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
            <Phone className="h-4 w-4" /> Talk To Our Experts
          </a>
          <a href="https://wa.me/917349079630" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/20 transition">
            <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
