import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { DefectsGrid, DefectItem } from '../components/DefectsGrid';
import { StepsProcess } from '../components/StepsProcess';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { Coverage } from '../components/Coverage';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { reportarConversaoWhatsApp } from '../lib/conversions';
import { WashingMachine, Sparkles, CheckCircle2, ShieldCheck, RefreshCw, Wrench } from 'lucide-react';

export const ConsertoMaquinaLavarPage: React.FC = () => {
  const waDefaultMessage = 'Olá, preciso de assistência técnica para minha máquina de lavar [Ref: #lavadora-campinas]';

  const maquinaDefects: DefectItem[] = [
    {
      id: 'maquina-nao-centrifuga',
      title: 'Máquina de Lavar Não Centrifuga',
      symptom: 'A máquina lava normalmente, mas na hora de centrifugar fica parada, faz zumbido ou a roupa sai encharcada.',
      chips: ['Bomba de Drenagem', 'Atuador de Freio', 'Capacitor', 'Placa de Potência'],
      refTag: '#lavadora-nao-centrifuga',
    },
    {
      id: 'maquina-nao-escoa-agua',
      title: 'Não Solta a Água / Não Enche o Tambor',
      symptom: 'A água fica retida no cesto sem escorrer, ou a válvula de entrada não libera água para iniciar o ciclo de lavagem.',
      chips: ['Bomba Obstruída', 'Válvula de Entrada', 'Pressostato de Nível', 'Mangueira Drenagem'],
      refTag: '#lavadora-nao-escoa',
    },
    {
      id: 'maquina-barulho-turbina',
      title: 'Barulho Forte de Turbina & Trepidação',
      symptom: 'Ruído metálico insuportável e trepidação violenta durante a centrifugação, causados por rolamento estourado e retentor.',
      chips: ['Troca de Rolamentos', 'Retentor de Vedação', 'Mecanismo Completo', 'Tirantes de Suspensão'],
      refTag: '#lavadora-barulho-turbina',
    },
    {
      id: 'lava-seca-codigo-erro',
      title: 'Lava e Seca Travada com Código de Erro',
      symptom: 'Display digital acusa erros como DE, OE, LE, TE, 4E, porta não destrava após a lavagem ou motor não gira.',
      chips: ['Trava de Porta', 'Sensor Hall Direct Drive', 'Placa Inverter', 'Termistor'],
      refTag: '#lava-seca-erro-painel',
    },
    {
      id: 'maquina-vazamento-fundo',
      title: 'Vazamento de Água com Espuma por Baixo',
      symptom: 'Poça constante de sabão e água embaixo da máquina durante o enxágue ou lavagem, com risco de queimar o motor.',
      chips: ['Gaxeta Vedação Frontal', 'Mangueiras Internas', 'Retentor do Tanque', 'Filtro de Fiapos'],
      refTag: '#lavadora-vazando-agua',
    },
    {
      id: 'lava-seca-nao-seca',
      title: 'Lava e Seca Não Seca ou Não Esquenta',
      symptom: 'O ciclo de lavagem completa, mas as roupas saem molhadas e frias na função de secagem devido a falha térmica.',
      chips: ['Resistência de Secagem', 'Duto de Ventilação', 'Termostato Bimetálico', 'Ventilador Secagem'],
      refTag: '#lava-seca-nao-seca',
    },
  ];

  const maquinaFaq = [
    {
      q: 'O conserto da lavadora ou lava e seca é feito na minha residência?',
      a: 'Sim! Nossos técnicos realizam 95% dos serviços diretamente na sua lavanderia em Campinas, Valinhos e Hortolândia, sem necessidade de transportar o aparelho.',
    },
    {
      q: 'Vocês atendem Lava e Seca com tecnologia Inverter (abertura frontal)?',
      a: 'Sim! Somos especialistas multimarcas em Lava e Seca Samsung, LG (Direct Drive), Midea, Electrolux e Brastemp, com diagnóstico eletrônico de códigos de erro.',
    },
    {
      q: 'Vocês trocam mecanismo e rolamentos barulhentos?',
      a: 'Sim, realizamos a troca completa do kit de mecânica: rolamentos blindados, retentor original, óleo especial e mecanismo com alinhamento perfeito.',
    },
    {
      q: 'Qual o prazo de garantia para as peças e mão de obra?',
      a: 'Oferecemos garantia formal de 90 dias com emissão de ordem de serviço para todas as peças substituídas e serviços executados.',
    },
    {
      q: 'Como agendar a visita do técnico?',
      a: 'Clique no botão do WhatsApp ou ligue para (19) 99644-7171 informando a marca da máquina e o sintoma. Agendamos rapidamente seu atendimento.',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="maquina" whatsAppMessage={waDefaultMessage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Técnico em Domicílio no Mesmo Dia"
          titlePart1="Conserto de Máquinas de Lavar e"
          titleHighlight="Lava e Seca em Campinas"
          subtitle="Sua máquina não centrifuga, não escoa a água, está trepidando ou com código de erro no painel? Diagnóstico rápido no local com peças originais e garantia por escrito."
          whatsAppMessage={waDefaultMessage}
          whatsAppCtaText="Chamar Técnico de Lavadora no WhatsApp"
          serviceCategory="Máquinas de Lavar & Lava e Seca"
          symptomsList={[
            'Máquina não centrifuga ou roupa sai encharcada',
            'Não solta a água / bomba travada',
            'Barulho alto de turbina ou trepidação violenta',
            'Lava e Seca Inverter travada com código de erro',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS DE MÁQUINAS DE LAVAR E LAVA E SECA ATENDIDAS"
          brandsList={[
            'Brastemp',
            'Electrolux',
            'Consul',
            'Samsung',
            'LG',
            'Panasonic',
            'Midea',
            'Colormaq',
          ]}
        />

        {/* Dynamic Defect Grid */}
        <DefectsGrid
          items={maquinaDefects}
          kicker="01 — DIAGNÓSTICO TÉCNICO DE LAVADORAS"
          title="Qual o defeito que sua máquina de lavar está apresentando?"
          subtitle="Identifique o sintoma abaixo e clique para falar direto com o técnico responsável pelo plantão na sua região:"
        />

        {/* Visual Context Banner */}
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-base to-base-2 rounded-2xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/20 text-acc border border-acc/30">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>LAVADORAS AUTOMÁTICAS & LAVA E SECA</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Especialistas em mecânica pesada, placas eletrônicas e motores Inverter
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Não deixe suas roupas acumularem. Consertamos sua máquina no local com peças genuínas, bombas de alta vazão e garantia documentada por escrito.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Lavadoras Top Load (abertura superior)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Lava e Seca Front Load (Inverter Direct Drive)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Secadoras de Roupas Tradicionais e a Gás</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                <a
                  href={`https://wa.me/5519996447171?text=${encodeURIComponent('Olá! Preciso de conserto urgente na minha máquina de lavar [Ref: #lavadora-urgente]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={reportarConversaoWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-whatsapp transition-all text-center"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Solicitar Visita Técnica</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps Process */}
        <StepsProcess />

        {/* Formal Warranty Section */}
        <GuaranteeSection />

        {/* Coverage Neighborhoods */}
        <Coverage />

        {/* Social Proof */}
        <SocialProof />

        {/* FAQ Section */}
        <FAQ
          items={maquinaFaq}
          kicker="DÚVIDAS FREQUENTES — LAVADORAS"
          title="Perguntas frequentes sobre conserto de máquinas de lavar"
        />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat message={waDefaultMessage} />
    </div>
  );
};
