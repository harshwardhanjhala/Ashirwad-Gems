import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export default function TopBar() {
  return (
    <div className="w-full border-b border-white/10 bg-[#0B1120] text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
        {/* Left Side */}
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Call"
            className="text-white transition-colors duration-300 hover:text-[#D4AF37]"
          >
            <Phone size={18} />
          </button>
        
          <button
            aria-label="Email"
            className="text-white transition-colors duration-300 hover:text-[#D4AF37]"
          >
            <Mail size={18} />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 text-sm text-emerald-400">
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </div>
      </div>
    </div>
  );
}