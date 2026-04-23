import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.03_260)] text-white/80 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-2xl font-extrabold text-white">
            INTE<span className="text-gradient-brand">RVAL</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            A personalized online learning platform helping every child unlock their full potential.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses">Academic Courses</Link></li>
            <li><Link to="/non-academics">Non-Academic</Link></li>
            <li><Link to="/online-tuition">Online Tuition</Link></li>
            <li><Link to="/courses">Language Courses</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/become-a-tutor">Become a Tutor</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90610 00827</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@intervaledu.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kerala, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Interval Learning. All rights reserved.</p>
          <p>Made with care for curious minds.</p>
        </div>
      </div>
    </footer>
  );
}
