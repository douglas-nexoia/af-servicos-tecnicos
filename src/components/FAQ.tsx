import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { reportarConversaoWhatsApp } from '../lib/conversions';

interface FAQProps {
  customQuestions?: { q: string; a: string }[];
  whatsAppMessage?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  customQuestions,
  whatsAppMessage = 'Olá, tenho uma dúvida sobre o conserto.',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(whatsAppMessage)}`;

  const defaultQuestions = [
    {
      q: 'Qual o prazo de garantia dos serviços executados?',
      a: 'Oferecemos garantia por escrito de até 6 meses para trocas de compressores e 90 dias completos para demais peças, placas e mão de obra técnica, conforme discriminado na sua Ordem de Serviço.',
    },
    {
      q: 'Vocês atendem no mesmo dia da solicitação?',
      a: 'Sim! Para chamados recebidos pelo WhatsApp até as 15h, priorizamos o encaixe e deslocamento do técnico para atendimento no mesmo dia em Campinas, Valinhos e Hortolândia.',
    },
    {
      q: 'O conserto é feito na minha residência ou empresa?',
      a: 'Em mais de 95% dos casos, nossos técnicos realizam o diagnóstico e o conserto no próprio local, pois nossas vans contam com ferramentas calibradas e estoque de peças das principais marcas.',
    },
    {
      q: 'Quais marcas e modelos de ar condicionado e eletrodomésticos vocês consertam?',
      a: 'Atendemos todas as marcas líderes: LG, Samsung, Daikin, Fujitsu, Midea, Gree, Carrier, Elgin, Springer, Brastemp, Electrolux, Consul, Panasonic, além de motores PPA, Rossi, Peccinin, Garen e câmeras Intelbras/Hikvision.',
    },
    {
      q: 'Como funciona o orçamento do conserto?',
      a: 'Você envia uma mensagem no WhatsApp relatando o sintoma do equipamento. Nossa equipe faz uma triagem preliminar e envia o técnico para avaliação precisa no local. O serviço só inicia após sua autorização prévia.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, cartões de crédito (com possibilidade de parcelamento), débito e transferência bancária, além de emissão de nota fiscal para empresas e condomínios.',
    },
  ];

  const questions = customQuestions || defaultQuestions;

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: FAQ Headline & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/10 text-acc">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>DÚVIDAS FREQUENTES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
              Perguntas Frequentes sobre Nossos Serviços
            </h2>

            <p className="text-base text-ink-muted leading-relaxed">
              Tire suas principais dúvidas sobre garantia, agendamento, atendimento em domicílio e formas de pagamento.
            </p>

            <div className="p-6 rounded-2xl bg-light border border-slate-200 space-y-4">
              <h3 className="font-bold text-ink text-sm">Ainda tem alguma dúvida específica?</h3>
              <p className="text-xs text-slate-600">
                Fale diretamente com nosso técnico de plantão pelo WhatsApp agora mesmo.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={reportarConversaoWhatsApp}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-whatsapp transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tirar Dúvida no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {questions.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-light border-acc/40 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-ink"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-acc shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
