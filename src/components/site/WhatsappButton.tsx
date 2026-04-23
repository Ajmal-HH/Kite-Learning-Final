import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">

      {/* 📞 Call Button */}
      <a
        href="tel:+918660129593"
        className="group relative flex items-center justify-center 
                   w-12 h-12 rounded-full 
                   bg-blue-500 text-white 
                   shadow-lg hover:scale-110 hover:bg-blue-600 
                   transition-all duration-300"
      >
        <FaPhoneAlt size={18} />

        {/* Tooltip */}
        <span className="absolute right-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Call us
        </span>
      </a>

      {/* 💬 WhatsApp Button */}
      <a
        href="https://wa.me/918660129593?text=Hi%20I%20want%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping" />

        <div
          className="relative flex items-center justify-center
                     w-14 h-14 rounded-full 
                     bg-[#25D366] text-white 
                     shadow-lg 
                     hover:scale-110 
                     transition-all duration-300"
        >
          <FaWhatsapp size={22} />
        </div>

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 
                         bg-black text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}