import React from 'react';
import { MessageCircle } from 'lucide-react';
import { reportarConversaoWhatsApp } from '../lib/conversions';

interface WhatsAppFloatProps {
  message?: string;
  tooltipText?: string;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  message = 'Olá, preciso de atendimento técnico.',
  tooltipText = 'Fale com o Técnico no WhatsApp',
}) => {
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip text bubble */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={reportarConversaoWhatsApp}
        className="hidden md:flex items-center gap-2 bg-slate-900/95 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{tooltipText}</span>
      </a>

      {/* Pulsing circular button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={reportarConversaoWhatsApp}
        className="relative flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover rounded-full text-white shadow-whatsapp transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Animated pulse rings */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-40"></span>
        <MessageCircle className="w-8 h-8 fill-white relative z-10" />
      </a>
    </div>
  );
};
