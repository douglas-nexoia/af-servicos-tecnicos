import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { StepsProcess } from '../components/StepsProcess';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { Coverage } from '../components/Coverage';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { Wind, Refrigerator, WashingMachine, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export const IndexPage: React.FC = () => {
  const serviceCards = [
    {
      title: 'Ar Condicionado Split & Inverter',
      kicker: 'CLIMATIZAÇÃO RESIDENCIAL & COMERCIAL',
      desc: 'Conserto, recarga de gás, reparo de placas inverter, eliminação de vazamentos de água e manutenção preventiva.',
      chips: ['Não Gela', 'Pingando Água', 'Carga de Gás', 'Garantia 6 Meses'],
      url: '/ar-condicionado',
      icon: Wind,
      badge: 'Carro-Chefe',
      image: '/images/servico-ar-condicionado.webp',
      imageAlt: 'Ar Condicionado Split High Wall instalado em sala residencial',
    },
    {
      title: 'Conserto de Geladeiras & Freezers',
      kicker: 'REFRIGERAÇÃO MULTIMARCAS',
      desc: 'Assistência técnica de refrigeradores Frost Free, Side by Side, Inverse e Freezers com peças originais e garantia formal.',
      chips: ['Não Gela Embaixo', 'Vazando Água', 'Motor Estalando', 'Placa Inverter'],
      url: '/conserto-de-geladeiras',
      icon: Refrigerator,
      badge: 'Atendimento no Local',
      image: '/images/servico-geladeira.webp',
      imageAlt: 'Geladeira Frost Free em cozinha residencial moderna',
    },
    {
      title: 'Máquinas de Lavar & Lava e Seca',
      kicker: 'LAVADORAS AUTOMÁTICAS',
      desc: 'Especialistas em conserto de lavadoras e lava e seca. Não centrifuga, vazamento de água, rolamentos barulhentos ou erro no display.',
      chips: ['Não Centrifuga', 'Bomba Travada', 'Barulho de Turbina', 'Código de Erro'],
      url: '/conserto-maquina-lavar',
      icon: WashingMachine,
      badge: 'Especialista',
      image: '/images/servico-maquina-lavar.webp',
      imageAlt: 'Máquina de Lavar e Lava e Seca em lavanderia residencial',
    },
    {
      title: 'Portões Eletrônicos & CFTV',
      kicker: 'AUTOMAÇÃO & SEGURANÇA ELETRÔNICA',
      desc: 'Manutenção de motores de portão, troca de placas e cremalheiras, gravação de controles e instalação de câmeras com acesso no celular.',
      chips: ['Portão Travado', 'Troca de Capacitor', 'Gravação Controles', 'CFTV Celular'],
      url: '/portao-eletronico-e-cftv',
      icon: ShieldAlert,
      badge: 'Condomínios & Casas',
      image: '/images/servico-portao-cftv.webp',
      imageAlt: 'Motor de portão eletrônico deslizante e câmera de segurança residencial',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="home" whatsAppMessage="Olá, gostaria de solicitar um atendimento da AF Serviços." />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Garantia de até 6 Meses"
          titlePart1="AF Soluções Técnicas — Climatização, Eletrodomésticos"
          titleHighlight="e Automação na Região de Campinas"
          subtitle="Sua empresa de confiança para serviços técnicos residenciais e comerciais. Atendimento rápido em domicílio com técnicos qualificados e peças de primeira linha."
          whatsAppMessage="Olá! Preciso de atendimento técnico da AF Serviços."
          whatsAppCtaText="Solicitar Atendimento no WhatsApp"
          serviceCategory="Assistência Técnica Multidisciplinar"
          symptomsList={[
            'Conserto de Ar Condicionado Split e Inverter',
            'Manutenção de Geladeiras, Lavadoras e Lava e Seca',
            'Reparo de Motores de Portão e Câmeras de Segurança',
            'Garantia por escrito de até 6 meses',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS ATENDIDAS MULTIMARCAS"
          brandsList={[
            'LG',
            'Samsung',
            'Daikin',
            'Fujitsu',
            'Midea',
            'Gree',
            'Brastemp',
            'Electrolux',
            'Consul',
            'PPA',
            'Rossi',
            'Intelbras',
            'Hikvision',
          ]}
        />

        {/* 3 Main Services Hub Cards with Authentic Images */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acc/10 text-acc mb-3">
                <span>ESPECIALIDADES AF SERVIÇOS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4">
                Nossas Áreas de Atendimento Técnico
              </h2>
              <p className="text-base text-ink-muted">
                Escolha o serviço desejado para conferir detalhes técnicos, sintomas comuns e solicitar atendimento imediato:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-light rounded-3xl border border-slate-200 shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={srv.image}
                        alt={srv.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20"></div>
                      
                      {/* Top Badges over image */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-base/90 text-acc backdrop-blur-md border border-white/10 shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 text-white border border-white/15 backdrop-blur-md">
                          {srv.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Kicker & Title */}
                        <div className="text-[11px] font-mono font-bold text-acc uppercase tracking-wider mb-1">
                          {srv.kicker}
                        </div>
                        <h3 className="text-xl font-extrabold text-ink mb-3 group-hover:text-acc transition-colors">
                          {srv.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {srv.desc}
                        </p>

                        {/* Technical Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {srv.chips.map((chip, cIdx) => (
                            <span
                              key={cIdx}
                              className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Link */}
                      <a
                        href={srv.url}
                        className="inline-flex items-center justify-between w-full bg-slate-900 group-hover:bg-acc text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm"
                      >
                        <span>Ver Detalhes do Serviço</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Steps Process */}
        <StepsProcess />

        {/* Guarantee & Transparency */}
        <GuaranteeSection />

        {/* Coverage Areas */}
        <Coverage whatsAppMessage="Olá, gostaria de saber se vocês atendem meu endereço para serviços técnicos." />

        {/* Social Proof Google Reviews */}
        <SocialProof />

        {/* FAQ */}
        <FAQ whatsAppMessage="Olá! Tenho uma dúvida sobre os serviços da AF Serviços." />

        {/* Contact Form Section */}
        <ContactSection
          serviceRefTag="#home-geral"
          defaultMessage="Olá, estou na página principal e gostaria de solicitar um orçamento para serviços técnicos."
        />
      </main>

      <Footer />
      <WhatsAppFloat
        message="Olá! Estou navegando no site da AF Serviços e gostaria de um atendimento."
        tooltipText="Falar com Técnico de Plantão"
      />
    </div>
  );
};
