import React from 'react';
import { MapPin, MessageCircle, Navigation, CheckCircle2 } from 'lucide-react';

interface CoverageProps {
  whatsAppMessage?: string;
}

export const Coverage: React.FC<CoverageProps> = ({
  whatsAppMessage = 'Olá, gostaria de saber se vocês atendem no meu bairro.',
}) => {
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(whatsAppMessage)}`;

  const cities = [
    { name: 'Campinas', desc: 'Atendimento prioritário em toda a cidade e distritos' },
    { name: 'Valinhos', desc: 'Deslocamento rápido para residências e condomínios' },
    { name: 'Hortolândia', desc: 'Atendimento completo para residências e comércios' },
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
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/10 text-acc mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>ATENDIMENTO EM DOMICÍLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            Região de Atendimento Técnico
          </h2>
          <p className="text-base text-ink-muted">
            Técnicos com veículos próprios e peças em estoque para atendimento rápido nas principais cidades e bairros.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-light border border-slate-200/80 shadow-soft flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-acc text-white shadow-md">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">{city.name} (SP)</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{city.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhoods Chips */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Bairros com Atendimento Diário</h3>
              <p className="text-xs text-slate-400">Atendemos em condomínios fechados, casas e prédios comerciais.</p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-whatsapp transition-all self-start sm:self-auto"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar meu Bairro</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((bairro, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {bairro}
              </span>
            ))}
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-acc/20 text-acc border border-acc/40">
              + Todos os bairros da região
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
