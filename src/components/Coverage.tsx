import React from 'react';
import { MapPin, MessageCircle, Navigation, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { reportarConversaoWhatsApp } from '../lib/conversions';

interface CoverageProps {
  whatsAppMessage?: string;
  customServiceNotice?: string;
}

export const Coverage: React.FC<CoverageProps> = ({
  whatsAppMessage = 'Olá, gostaria de saber se vocês atendem no meu bairro.',
  customServiceNotice = 'Técnicos com veículos equipados para atendimento rápido em domicílio.',
}) => {
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(whatsAppMessage)}`;

  const cities = [
    { 
      name: 'Campinas', 
      tag: 'Base Principal',
      desc: 'Atendimento prioritário em toda a cidade, centro e distritos.',
      time: 'Deslocamento imediato'
    },
    { 
      name: 'Valinhos', 
      tag: 'Cobertura Diária',
      desc: 'Atendimento rápido para residências, condomínios e empresas.',
      time: 'Rotas diárias'
    },
    { 
      name: 'Hortolândia', 
      tag: 'Cobertura Diária',
      desc: 'Atendimento técnico completo para residências e comércios.',
      time: 'Rotas diárias'
    },
  ];

  const neighborhoods = [
    'Cambuí',
    'Taquaral',
    'Barão Geraldo',
    'Nova Campinas',
    'Mansões Santo Antônio',
    'Jardim Guanabara',
    'Swiss Park',
    'Sousas',
    'Alphaville Campinas',
    'Jardim Flamboyant',
    'Gramado',
    'Chácara da Barra',
    'Castelo',
    'Bonfim',
    'Parque Prado',
    'Jardim Chapadão',
  ];

  return (
    <section id="cobertura" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-acc/10 text-acc mb-4 border border-acc/20">
            <MapPin className="w-4 h-4 text-acc" />
            <span>CIDADES & BAIRROS ATENDIDOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4">
            Região de Atendimento Técnico em Domicílio
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            {customServiceNotice} Atendemos chamados residenciais, condomínios e estabelecimentos comerciais em toda a região.
          </p>
        </div>

        {/* 3 Main Cities Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-light border border-slate-200/90 shadow-soft hover:shadow-md hover:border-acc/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-base text-acc group-hover:bg-acc group-hover:text-white transition-colors shadow-sm">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                    {city.tag}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-ink group-hover:text-acc transition-colors">
                  {city.name} <span className="text-sm font-semibold text-slate-500">(SP)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {city.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Clock className="w-3.5 h-3.5" />
                <span>{city.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhoods Banner & Fast Location Query */}
        <div className="bg-base text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-acc">
                <ShieldCheck className="w-4 h-4" />
                <span>ATENDIMENTO DIÁRIO EM CONDOMÍNIOS & RESIDÊNCIAS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Principais Bairros Atendidos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Técnico de plantão para envio prioritário no seu endereço:
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={reportarConversaoWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-whatsapp transition-all hover:scale-[1.02] active:scale-95 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar meu Endereço no WhatsApp</span>
            </a>
          </div>

          {/* Chips Grid */}
          <div className="flex flex-wrap gap-2 pt-2">
            {neighborhoods.map((bairro, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-white/10 text-slate-200 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {bairro}
              </span>
            ))}
            <span className="inline-flex items-center text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-acc/20 text-acc border border-acc/40">
              + Todos os bairros de Campinas, Valinhos e Hortolândia
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
