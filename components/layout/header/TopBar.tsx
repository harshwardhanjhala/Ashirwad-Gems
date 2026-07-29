import { Phone, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/common/Container";

export default function TopBar() {
  return (
    <div className="w-full border-b border-white/10 bg-[#0B1120] text-white">
      <Container className="flex h-10 items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Call"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            <Phone size={18} />
          </button>

          <button
            aria-label="Email"
            className="transition-colors duration-300 hover:text-[#D4AF37]"
          >
            <Mail size={18} />
          </button>
        </div>

        {/* Right Side */}
        <button
          aria-label="WhatsApp"
          className="flex items-center gap-2 text-sm text-emerald-400 transition-colors duration-300 hover:text-[#D4AF37]"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>

      </Container>
    </div>
  );
}