import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.03_260)] text-white/80 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <div className="text-2xl font-extrabold text-white">
            KITE<span className="text-gradient-brand"> LEARNING</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed">
            A personalized online learning platform helping every child unlock their full potential.
          </p>

          {/* 🔥 SOCIAL LINKS */}
          <div className="mt-5 flex gap-4">
            <a href="https://www.instagram.com/kite.learning?igsh=bnZmODFrOXJ0ZTV6&utm_source=qr" target="_blank" className="hover:text-white transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kite-learning-76b780375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-white transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@kite.learning?si=hgN_0ddW-_hA4kqB" target="_blank" className="hover:text-white transition">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579281265326" target="_blank" className="hover:text-white transition">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses">Academic Courses</Link></li>
            <li><Link to="/non-academics">Non-Academic</Link></li>
            <li><Link to="/online-tuition">Online Tuition</Link></li>
            <li><Link to="/courses">Language Courses</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/become-a-tutor">Become a Tutor</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm">
            
            {/* 📞 Click to call */}
            <li>
              <a href="tel:+918660129593" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> +91 86601 29593
              </a>
            </li>

            {/* 📧 Click to mail */}
            <li>
              <a href="mailto:kite.learningg@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> kite.learningg@gmail.com
              </a>
            </li>

            {/* 📍 Google Maps link */}
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Napoklu,Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MapPin className="h-4 w-4" /> Napoklu, Karnataka
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 flex justify-between">
          <p>© {new Date().getFullYear()} Kite Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}