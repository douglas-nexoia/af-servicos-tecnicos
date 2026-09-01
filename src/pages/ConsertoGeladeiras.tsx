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
import { Refrigerator, Sparkles, CheckCircle2, ShieldCheck, ThermometerSnowflake, Wrench } from 'lucide-react';

export const ConsertoGeladeirasPage: React.FC = () => {
  const waDefaultMessage = 'Olá, preciso de assistência técnica para minha geladeira [Ref: #geladeira-campinas]';

  const geladeiraDefects: DefectItem[] = [
    {
      id: 'geladeira-nao-gela-baixo',
      title: 'Geladeira Não Gela a Parte de Baixo',
      symptom: 'O freezer congela normalmente, mas a parte de baixo (refrigerador) esquenta e os alimentos começam a estragar.',
      chips: ['Bloqueio de Gelo', 'Resistência Queimada', 'Sensor Degelo', 'Damper Travado'],
      refTag: '#geladeira-nao-gela-baixo',
    },
    {
      id: 'geladeira-vazamento-agua',
      title: 'Vazamento de Água Embaixo ou Gaveta Alagada',
      symptom: 'Acúmulo contínuo de água no fundo dos gaveteiros de legumes ou poça de água escorrendo para o piso da cozinha.',
      chips: ['Dreno Obstruído', 'Calha de Degelo', 'Bandeja Evaporadora', 'Tubo Drenagem'],
      refTag: '#geladeira-vazando-agua',
    },
    {
      id: 'geladeira-motor-estalo',
      title: 'Motor Não Liga, Fica Estalando ou Apitando',
      symptom: 'O compressor dá um estalo a cada poucos minutos mas não parte, motor ferve ou o painel digital fica emitindo bipes.',
      chips: ['Relé de Partida', 'Protetor Térmico', 'Troca de Compressor', 'Carga de Gás R600a'],
      refTag: '#geladeira-motor-estalo',
    },
    {
      id: 'geladeira-placa-inverter',
      title: 'Geladeira Inverter com Painel Piscando ou Travada',
      symptom: 'Oscilações na rede elétrica que danificam a placa de controle de refrigeradores Inverter, Side by Side e French Door.',
      chips: ['Placa de Potência Inverter', 'Módulo de Controle', 'Sensor NTC', 'Fusível Térmico'],
      refTag: '#geladeira-placa-inverter',
    },
    {
      id: 'geladeira-borracha-gaxeta',
      title: 'Borracha de Vedação Solta ou Porta Desalinhada',
      symptom: 'Porta não fecha com vedação magnética completa, gerando condensação interna, gotículas e alto consumo elétrico.',
      chips: ['Troca de Gaxeta', 'Ajuste de Dobradiça', 'Vedação Magnética', 'Calafetação'],
      refTag: '#geladeira-troca-borracha',
    },
    {
      id: 'geladeira-barulho-ventilador',
      title: 'Barulho Excessivo no Ventilador do Freezer',
      symptom: 'Ruído alto de raspagem que para ao abrir a porta, indicando acúmulo excessivo de gelo raspando nas hélices.',
      chips: ['Motor Ventilador', 'Hélice Raspando', 'Embuchamento', 'Isolação Térmica'],
      refTag: '#geladeira-barulho-ventilador',
    },
  ];

  const geladeiraFaq = [
    {
      q: 'O conserto da geladeira é feito no próprio local sem retirar o aparelho?',
      a: 'Sim! Nossos técnicos realizam o diagnóstico e reparo completo diretamente na sua residência ou empresa em Campinas, Valinhos e Hortolândia. Você não precisa transportar sua geladeira.',
    },
    {
      q: 'Quais marcas e modelos de geladeiras vocês consertam?',
      a: 'Atendemos Brastemp, Electrolux, Consul, Samsung, LG, Panasonic e Midea, em modelos Frost Free, Inverse, Duplex, Side by Side, French Door e Freezers verticais e horizontais.',
    },
    {
      q: 'Qual o prazo de garantia oferecido no conserto?',
      a: 'Oferecemos garantia de até 6 meses para compressores novos e 90 dias para serviços, placas eletrônicas, sensores e peças de reposição com comprovante por escrito.',
    },
    {
      q: 'Vocês realizam recarga de gás e troca de motor no mesmo dia?',
      a: 'Sim, nossos técnicos andam com ferramental completo de refrigeração (bomba de vácuo, manifold, maçarico e gás ecológico R600a/R134a) para efetuar o serviço no local.',
    },
    {
      q: 'Como solicito o atendimento técnico?',
      a: 'Basta clicar no botão do WhatsApp ou ligar para (19) 99644-7171 informando o sintoma e o bairro. Respondemos imediatamente com previsão de horário para visita.',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="geladeira" whatsAppMessage={waDefaultMessage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Atendimento Técnico no Local"
          titlePart1="Conserto de Geladeira em Campinas —"
          titleHighlight="Técnico Especialista em Domicílio"
          subtitle="Sua geladeira não gela a parte de baixo, está vazando água ou motor estalando? Diagnóstico preciso no local com peças originais e garantia de até 6 meses."
          whatsAppMessage={waDefaultMessage}
          whatsAppCtaText="Chamar Técnico de Geladeira no WhatsApp"
          serviceCategory="Refrigeração Residencial & Comercial"
          symptomsList={[
            'Geladeira não gela embaixo (Frost Free)',
            'Vazamento de água ou calha entupida',
            'Motor estala, ferve e não liga',
            'Placa Inverter, Side by Side e French Door',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS DE GELADEIRAS E REFRIGERADORES ATENDIDAS"
          brandsList={[
            'Brastemp',
            'Electrolux',
            'Consul',
            'Samsung',
            'LG',
            'Panasonic',
            'Midea',
            'Bosch',
            'Continental',
          ]}
        />

        {/* Dynamic Defect Grid */}
        <DefectsGrid
          items={geladeiraDefects}
          kicker="01 — DIAGNÓSTICO TÉCNICO DE GELADEIRAS"
          title="Qual o defeito que sua geladeira está apresentando?"
          subtitle="Identifique o sintoma abaixo e clique para falar direto com o técnico responsável pelo plantão na sua região:"
        />

        {/* Visual Context Banner */}
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-base to-base-2 rounded-2xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/20 text-acc border border-acc/30">
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  <span>REFRIGERAÇÃO MULTIMARCAS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Técnicos equipados com bomba de vácuo, gás ecológico e sensores originais
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Evite a perda dos seus alimentos. Atendemos com agilidade em todos os bairros de Campinas, Valinhos e Hortolândia com ordem de serviço formalizada e garantia escrita.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Frost Free & Duplex</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Side by Side & Inverter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Freezers Verticais e Horizontais</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                <a
                  href={`https://wa.me/5519996447171?text=${encodeURIComponent('Olá! Preciso de conserto urgente na minha geladeira [Ref: #geladeira-urgente]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
          items={geladeiraFaq}
          kicker="DÚVIDAS FREQUENTES — GELADEIRAS"
          title="Perguntas frequentes sobre conserto de geladeiras"
        />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat message={waDefaultMessage} />
    </div>
  );
};
