import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Star, MapPin, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  badgeRegion?: string;
  badgeCredential?: string;
  titlePart1: string;
  titleHighlight: string;
  subtitle: string;
  whatsAppMessage: string;
  whatsAppCtaText?: string;
  serviceCategory?: string;
  symptomsList?: string[];
}

export const Hero: React.FC<HeroProps> = ({
  badgeRegion = 'Campinas, Valinhos e Hortolândia',
  badgeCredential = 'Garantia de até 6 Meses',
  titlePart1,
  titleHighlight,
  subtitle,
  whatsAppMessage,
  whatsAppCtaText = 'Falar com Técnico no WhatsApp',
  serviceCategory = 'Climatização & Assistência Técnica',
  symptomsList = [
    'Atendimento rápido em domicílio',
    'Peças originais com garantia',
    'Orçamento transparente sem enrolação',
    'Técnicos uniformizados e qualificados',
  ],
}) => {
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section className="relative bg-base text-white pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-white/10">
      {/* Background Tech Mesh Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-acc/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy, Badges, CTAs, 3 Proofs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 2 Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-slate-200 border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-acc" />
                {badgeRegion}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-acc/20 text-acc border border-acc/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                {badgeCredential}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12]">
              <span>{titlePart1} </span>
              <span className="text-acc block mt-1">{titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-7 py-4 rounded-xl font-bold text-base shadow-whatsapp transition-all hover:scale-[1.02] active:scale-95 text-center group"
              >
                <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
                <span>{whatsAppCtaText}</span>
              </a>

              <a
                href="tel:+5519996447171"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-4 rounded-xl font-mono text-sm font-bold transition-all text-center group"
              >
                <Phone className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" />
                <span>Ligar (19) 99644-7171</span>
              </a>
            </div>

            {/* 3 Numerical Verifiable Proofs (MANUAL.md Seção 01) */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-base text-white">5.0</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  Avaliações Google
                </div>
              </div>

              <div>
                <div className="font-bold text-base text-white flex items-center gap-1">
                  <span>6 Meses</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  Garantia Compressor
                </div>
              </div>

              <div>
                <div className="font-bold text-base text-white flex items-center gap-1 text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>Hoje</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  Chamados até 15h
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Impact Action Card */}
          <div className="lg:col-span-5">
            <div className="bg-base-2/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Card Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-acc/15 border border-acc/30 text-acc text-xs font-mono font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acc opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-acc"></span>
                </span>
                <span>{serviceCategory}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Atendimento Técnico Rápido
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fale diretamente com nossa equipe técnica para diagnóstico imediato e agendamento da visita.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {symptomsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button inside Card */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-acc hover:bg-acc-hover text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-glow transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Solicitar Atendimento no WhatsApp</span>
              </a>

              <div className="text-center mt-3 text-[11px] text-slate-400">
                Orçamento transparente • Sem compromisso
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
