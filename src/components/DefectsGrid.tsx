import React from 'react';
import { MessageCircle, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { reportarConversaoWhatsApp } from '../lib/conversions';

export interface DefectItem {
  id: string;
  title: string;
  symptom: string;
  chips: string[];
  refTag: string;
}

interface DefectsGridProps {
  kicker?: string;
  title: string;
  description: string;
  items: DefectItem[];
  defaultMessagePrefix?: string;
}

export const DefectsGrid: React.FC<DefectsGridProps> = ({
  kicker = 'DIAGNÓSTICO & REPARO RÁPIDO',
  title,
  description,
  items,
  defaultMessagePrefix = 'Olá, meu aparelho está com o seguinte defeito:',
}) => {
  return (
    <section className="py-16 md:py-20 bg-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/10 text-acc mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base text-ink-muted">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(
              `${defaultMessagePrefix} ${item.title} [Ref: ${item.refTag}]`
            )}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-ink group-hover:text-acc transition-colors">
                      {item.title}
                    </h3>
                    <span className="p-1.5 rounded-lg bg-acc/10 text-acc shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Symptom description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.symptom}
                  </p>

                  {/* Technical chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={reportarConversaoWhatsApp}
                  className="inline-flex items-center justify-between w-full bg-slate-900 hover:bg-whatsapp text-white px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm group-hover:shadow-md"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chamar no WhatsApp</span>
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
