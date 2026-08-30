import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, FileText, UserCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  const guaranteeItems = [
    {
      icon: Award,
      badge: 'Até 6 Meses',
      title: 'Garantia Formal por Escrito',
      desc: 'Garantia de 6 meses para compressores e 90 dias completos em peças e mão de obra descritas na sua Ordem de Serviço.',
    },
    {
      icon: CheckCircle2,
      badge: 'Originais',
      title: 'Peças e Placas de Primeira Linha',
      desc: 'Utilizamos apenas componentes novos e certificados pelos fabricantes, garantindo máximo rendimento e durabilidade.',
    },
    {
      icon: UserCheck,
      badge: 'Identificado',
      title: 'Técnicos Credenciados',
      desc: 'Profissionais experientes, uniformizados e com ferramentas calibradas para atendimento seguro na sua residência ou empresa.',
    },
    {
      icon: FileText,
      badge: 'Sem Surpresas',
      title: 'Aprovação Prévia do Orçamento',
      desc: 'Nenhum serviço é executado sem a sua autorização explícita após o diagnóstico detalhado.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Guarantees List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SEGURANÇA E TRANSPARÊNCIA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
              Sua Garantia e Tranquilidade em Primeiro Lugar
            </h2>

            <p className="text-base text-ink-muted leading-relaxed">
              Trabalhamos com seriedade para você ter a certeza de que seu equipamento está em mãos competentes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {guaranteeItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-lg bg-acc/10 text-acc">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-ink">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Trust Panel */}
          <div className="lg:col-span-5">
            <div className="bg-base text-white p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-6">
              
              <div className="w-20 h-20 rounded-2xl bg-acc/20 border border-acc/40 text-acc flex items-center justify-center mx-auto shadow-glow">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-acc uppercase tracking-widest block font-bold">
                  Compromisso AF Serviços
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Qualidade Garantida ou Retorno Imediato
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Caso qualquer defeito reapareça no período da garantia, nosso técnico retorna com prioridade máxima.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CNPJ Regular Ativo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ordem de Serviço</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Técnicos Treinados</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suporte Pós-Venda</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
