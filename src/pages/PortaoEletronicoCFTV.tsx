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
import { ShieldCheck, Video, Lock, Radio, Wrench, CheckCircle2 } from 'lucide-react';

export const PortaoEletronicoCFTVPage: React.FC = () => {
  const waDefaultMessage = 'Olá, preciso de suporte para portão/câmeras [Ref: #portao-cftv]';

  const portaoDefects: DefectItem[] = [
    {
      id: 'portao-travado-nao-abre',
      title: 'Portão Travou ou Não Abre / Não Fecha',
      symptom: 'O controle é acionado mas o portão permanece imóvel, travado no meio do curso ou desengrenado.',
      chips: ['Capacitor de Partida', 'Placa de Comando', 'Fim de Curso Reed', 'Destravamento Manual'],
      refTag: '#portao-travado',
    },
    {
      id: 'motor-roncando-sem-correr',
      title: 'Motor Faz Barulho mas Portão Não Corre',
      symptom: 'O motor elétrico ronca ou gira em falso, indicando engrenagem interna gasta ou dentes da cremalheira quebrados.',
      chips: ['Engrenagem de Bronze/Nylon', 'Cremalheira Quebrada', 'Fuso Basculante', 'Eixo Desgastado'],
      refTag: '#portao-motor-roncando',
    },
    {
      id: 'placas-capacitores-controles',
      title: 'Troca de Placas & Gravação de Controles',
      symptom: 'Placa central queimada por raio ou surto elétrico, perda de alcance dos controles ou desconfiguração geral.',
      chips: ['Centrais Eletrônicas PPA/Rossi', 'Controles Anti-Clonagem', 'Sensor Anti-Esmagamento', 'Receptor Externo'],
      refTag: '#portao-placas-controles',
    },
    {
      id: 'instalacao-manutencao-cftv',
      title: 'Instalação & Manutenção de Câmeras (CFTV)',
      symptom: 'Câmeras sem imagem, DVR reiniciando, cabeamento danificado ou configuração de aplicativo para ver ao vivo no celular.',
      chips: ['Acesso Remoto no Celular', 'Câmeras Full HD / Wi-Fi', 'Troca de DVR / HD', 'Visão Noturna Infravermelho'],
      refTag: '#cftv-cameras-seguranca',
    },
    {
      id: 'interfonia-controle-acesso',
      title: 'Interfonia & Fechaduras Eletrônicas',
      symptom: 'Interfone mudo ou com chiado, fechadura elétrica que não dispara ou leitor de tag/biometria inoperante.',
      chips: ['Interfonia Residencial/Condomínio', 'Fechaduras Digitais/Eletroímã', 'Botoeiras', 'Fonte Nobreak 12V'],
      refTag: '#interfonia-fechaduras',
    },
    {
      id: 'manutencao-preventiva-portao',
      title: 'Revisão & Ajuste de Motores Basculantes/Deslizantes',
      symptom: 'Portão pesado para manusear, cabos de aço desgastados, rolamentos travando ou impacto forte no fechamento.',
      chips: ['Troca de Cabos de Aço', 'Lubrificação com Graxa Especial', 'Balanceamento', 'Ajuste de Embreagem'],
      refTag: '#portao-revisao-preventiva',
    },
  ];

  const portaoFaq = [
    {
      q: 'Vocês atendem chamados de emergência para portão travado?',
      a: 'Sim! Sabemos que o portão travado impede a saída ou entrada de veículos e compromete a segurança. Priorizamos atendimento rápido para destravamento e conserto emergencial.',
    },
    {
      q: 'Quais marcas de motores de portão e câmeras vocês atendem?',
      a: 'Trabalhamos com as marcas líderes do mercado: PPA, Rossi, Peccinin, Garen, RCG para motores, e Intelbras, Hikvision, JFL e Giga para câmeras de segurança e interfonia.',
    },
    {
      q: 'É possível configurar as câmeras para eu assistir ao vivo no meu celular?',
      a: 'Com certeza! Configuramos os aplicativos oficiais no seu smartphone (Android/iPhone) para você acompanhar as imagens em tempo real de onde estiver com total segurança.',
    },
    {
      q: 'Vocês emitem nota fiscal e atendem condomínios e comércios?',
      a: 'Sim, atendemos residências, condomínios verticais e horizontais, além de comércios e galpões industriais na região de Campinas, Valinhos e Hortolândia com emissão de nota fiscal e garantia.',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="portao" whatsAppMessage={waDefaultMessage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Segurança & Automação"
          titlePart1="Manutenção de Portões Eletrônicos e Instalação"
          titleHighlight="de Câmeras (CFTV) na Região"
          subtitle="Soluções técnicas rápidas para condomínios, residências e comércios. Conserto de motores, troca de placas, gravação de controles e sistemas de segurança com acesso no celular."
          whatsAppMessage={waDefaultMessage}
          whatsAppCtaText="Chamar Técnico de Portão / CFTV"
          serviceCategory="Automação & Segurança Eletrônica"
          symptomsList={[
            'Portão travado ou motor roncando sem abrir',
            'Troca de placas centrais, capacitores e cremalheiras',
            'Instalação e configuração de câmeras no celular',
            'Atendimento rápido para condomínios e residências',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS DE AUTOMAÇÃO E SEGURANÇA ATENDIDAS"
          brandsList={[
            'PPA',
            'Rossi',
            'Peccinin',
            'Garen',
            'Intelbras',
            'Hikvision',
            'JFL Alarmes',
            'RCG',
          ]}
        />

        {/* Diagnostic Grid */}
        <DefectsGrid
          kicker="MOTORES DE PORTÃO & SEGURANÇA ELETRÔNICA"
          title="Qual é a Necessidade do Seu Portão ou Câmeras?"
          description="Selecione abaixo o serviço que você precisa e fale diretamente com o especialista pelo WhatsApp:"
          items={portaoDefects}
          defaultMessagePrefix="Olá, preciso de suporte para portão/câmeras. O serviço é:"
        />

        {/* 4 Steps Process */}
        <StepsProcess />

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* Coverage Section */}
        <Coverage whatsAppMessage="Olá, gostaria de solicitar orçamento para portão eletrônico/câmeras no meu endereço." />

        {/* Social Proof Google Reviews */}
        <SocialProof />

        {/* FAQ Section */}
        <FAQ
          customQuestions={portaoFaq}
          whatsAppMessage="Olá, tenho uma dúvida sobre motores de portão ou instalação de câmeras."
        />

        {/* Contact Form Section */}
        <ContactSection
          serviceRefTag="#portao-cftv"
          defaultMessage={waDefaultMessage}
        />
      </main>

      <Footer />
      <WhatsAppFloat
        message={waDefaultMessage}
        tooltipText="Chamar Técnico de Portão e CFTV"
      />
    </div>
  );
};
