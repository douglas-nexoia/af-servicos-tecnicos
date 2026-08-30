import React from 'react';
import { MessageSquare, CalendarCheck, Wrench, ShieldCheck } from 'lucide-react';

export const StepsProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Você manda o problema',
      desc: 'Descreva o defeito no WhatsApp e receba pré-diagnóstico rápido da nossa equipe.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Agendamos a visita',
      desc: 'Definimos o melhor horário para atendimento rápido no seu endereço.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Diagnóstico na sua casa',
      desc: 'Técnico credenciado avalia o equipamento e apresenta orçamento transparente na hora.',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Conserto com garantia',
      desc: 'Reparo com peças de primeira linha e garantia formal de até 6 meses por escrito.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-base text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-300 mb-3 border border-white/15">
            <span>PROCESSO TRANSPARENTE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Como Funciona o Atendimento
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Sem burocracia. Do primeiro contato no WhatsApp à entrega do seu equipamento funcionando.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-start group">
                
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="w-12 h-12 rounded-xl bg-acc/20 border border-acc/40 text-acc flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-black text-white/20 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
