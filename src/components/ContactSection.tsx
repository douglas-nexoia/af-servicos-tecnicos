import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, Send, ShieldCheck, User, CheckCircle2 } from 'lucide-react';
import { reportarConversaoWhatsApp } from '../lib/conversions';

interface ContactSectionProps {
  serviceRefTag?: string;
  defaultMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  serviceRefTag = '#contato-geral',
  defaultMessage = 'Olá, gostaria de solicitar uma visita técnica da AF Serviços.',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMsg = `Olá, meu nome é ${name || 'Cliente'} (Tel: ${phone || 'não informado'}). Preciso de atendimento para: ${problem || 'Serviço Técnico'} [Ref: ${serviceRefTag}]`;
    const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(textMsg)}`;
    reportarConversaoWhatsApp();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const directWaUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-base text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-acc/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct WhatsApp & Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp/20 border border-whatsapp/30 text-emerald-400 text-xs font-mono font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>PLANTÃO TÉCNICO DISPONÍVEL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Resolva Seu Problema Hoje com a AF Serviços
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Fale agora com nosso time técnico. Atendemos chamados de emergência em Campinas, Valinhos e Hortolândia.
              </p>

              {/* Large WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={reportarConversaoWhatsApp}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-2xl font-bold text-base shadow-whatsapp transition-all hover:scale-[1.02] active:scale-95 text-center group"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>Falar Agora pelo WhatsApp</span>
                </a>
              </div>

              {/* Contact metadata */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Central: <strong>(19) 99644-7171</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-acc shrink-0" />
                  <span>Seg-Sex 8h-18h | Sáb 8h-13h</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2-3 Field Quick Form */}
            <div className="lg:col-span-6">
              <div className="bg-base-2/90 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <User className="w-4 h-4 text-acc" />
                  <span>Solicitar Contato Rápido</span>
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Preencha abaixo para enviarmos um técnico até você:
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-acc transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Seu WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(19) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-acc transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Qual equipamento precisa de conserto?
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ar Split LG não gela / Geladeira Frost Free"
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-acc transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-acc hover:bg-acc-hover text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-glow transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Iniciar Conversa no WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Seus dados são usados apenas para o atendimento técnico.</span>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
