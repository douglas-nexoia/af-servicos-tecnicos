import React from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: 'Carlos Eduardo Mendes',
      initials: 'CM',
      city: 'Cambuí, Campinas',
      date: 'Há 2 semanas',
      service: 'Ar Condicionado LG Inverter',
      text: 'Excelente atendimento! Meu ar split parou de gelar no dia mais quente da semana. O técnico veio no mesmo dia, diagnosticou vazamento de gás, fez o reparo e recarga. Ficou gelando perfeito e com garantia.',
    },
    {
      name: 'Mariana Silveira',
      initials: 'MS',
      city: 'Valinhos',
      date: 'Há 1 mês',
      service: 'Lava e Seca Samsung',
      text: 'Muito honestos e rápidos. Minha máquina estava dando erro no painel e não centrifugava. Trocaram a peça na minha frente, explicaram tudo e o preço foi bem justo. Recomendo de olhos fechados.',
    },
    {
      name: 'Roberto Alencar',
      initials: 'RA',
      city: 'Hortolândia',
      date: 'Há 3 semanas',
      service: 'Motor de Portão PPA & CFTV',
      text: 'O portão da minha garagem travou no sábado pela manhã. Chamei no WhatsApp e em menos de 1 hora o técnico já estava no local. Trocou o capacitor e a cremalheira, além de regular os controles. Serviço nota 10.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Aggregate Rating Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>AVALIAÇÕES REAIS DE CLIENTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
              Quem Chama a AF Serviços Recomenda
            </h2>
            <p className="text-base text-ink-muted mt-2">
              Confira a experiência de quem já resolveu problemas com nossos técnicos na região.
            </p>
          </div>

          {/* Aggregate Google Score Badge */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft flex items-center gap-4 shrink-0">
            <div className="text-3xl font-black text-ink">5.0</div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs font-mono text-slate-500 mt-0.5">
                Avaliações Verificadas no Google
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Initials, Name, Date, Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-ink">{rev.name}</h3>
                      <p className="text-xs text-slate-500">{rev.city} • {rev.date}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 shrink-0" />
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="text-[11px] font-mono font-semibold text-acc bg-acc/10 px-2 py-0.5 rounded w-fit mb-3">
                  {rev.service}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
