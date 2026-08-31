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
import { Wind, Snowflake, ShieldCheck, Zap, ThermometerSnowflake, Wrench, CheckCircle2 } from 'lucide-react';

export const ArCondicionadoPage: React.FC = () => {
  const waDefaultMessage = 'Olá, preciso de conserto no meu ar condicionado [Ref: #ar-campinas]';

  const arDefects: DefectItem[] = [
    {
      id: 'nao-gela',
      title: 'Ar Não Gela ou Perdeu Rendimento',
      symptom: 'O aparelho sopra ar como ventilador, não atinge a temperatura programada ou demora horas para climatizar o ambiente.',
      chips: ['Falta de Gás', 'Compressor Desarmando', 'Sensor com Defeito', 'Capacitor Queimado'],
      refTag: '#ar-nao-gela',
    },
    {
      id: 'pingando-agua',
      title: 'Pingando Água ou Vazando na Parede',
      symptom: 'Água escorrendo pela unidade interna (evaporadora), molhando a parede, móveis ou piso por entupimento do dreno.',
      chips: ['Dreno Obstruído', 'Bandeja Rachada', 'Desnivelamento', 'Limpeza Profunda'],
      refTag: '#ar-pingando-agua',
    },
    {
      id: 'desarma-disjuntor',
      title: 'Não Liga ou Desarma o Disjuntor',
      symptom: 'O ar condicionado simplesmente não responde ao controle remoto ou desarma o disjuntor da casa ao tentar ligar o motor.',
      chips: ['Curto Elétrico', 'Fusível Rompido', 'Placa Danificada', 'Fiação Sobrecarregada'],
      refTag: '#ar-desarma-disjuntor',
    },
    {
      id: 'barulho-excessivo',
      title: 'Barulho Excessivo e Vibração no Motor',
      symptom: 'Ruídos metálicos, estalos ou vibrações anormais na unidade externa (condensadora) ou turbina interna desbalanceada.',
      chips: ['Hélice Trincada', 'Coxim Desgastado', 'Rolamento Travado', 'Motor Ventilador'],
      refTag: '#ar-barulho-compressor',
    },
    {
      id: 'carga-gas',
      title: 'Recarga de Gás & Teste de Vazamento',
      symptom: 'Perda gradual da capacidade térmica causada por microvazamentos nas flanges ou tubulação de cobre.',
      chips: ['Gás R410A / R32 / R22', 'Vácuo no Sistema', 'Teste de Nitrogênio', 'Flangeamento Novo'],
      refTag: '#ar-carga-gas',
    },
    {
      id: 'placa-inverter',
      title: 'Conserto de Placa Eletrônica Inverter',
      symptom: 'Leds piscando com código de erro, motor não modula a velocidade ou comunicação interrompida entre evaporadora e condensadora.',
      chips: ['Módulo IPM', 'Capacitores Alta Tensão', 'Reparo em Bancada', 'Economia vs Nova'],
      refTag: '#ar-placa-inverter',
    },
  ];

  const arFaq = [
    {
      q: 'Qual o valor da recarga de gás e do conserto de ar condicionado?',
      a: 'O valor exato depende do tipo de fluido refrigerante (R410A, R32 ou R22) e da capacidade do aparelho (BTUs). Nossos técnicos avaliam o equipamento no local e fornecem o orçamento detalhado antes de iniciar o reparo.',
    },
    {
      q: 'Vocês consertam ar condicionado com tecnologia Inverter?',
      a: 'Sim! Somos especialistas em tecnologia Inverter de todas as marcas (LG Dual Inverter, Samsung WindFree, Daikin, Midea, Fujitsu). Diagnosticamos e reparamos circuitos eletrônicos, placas e módulos IPM com garantia.',
    },
    {
      q: 'Qual a garantia oferecida para o conserto de ar condicionado?',
      a: 'Oferecemos garantia de até 6 meses para troca de compressores e 90 dias completos para recargas de gás com reparo de vazamento, troca de capacitores, motores e placas eletrônicas.',
    },
    {
      q: 'Vocês atendem em quais cidades da região de Campinas?',
      a: 'Atendemos diariamente em Campinas (todos os bairros e distritos), Valinhos e Hortolândia, com deslocamento ágil tanto para residências quanto para escritórios e lojas.',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="ar" whatsAppMessage={waDefaultMessage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Garantia de até 6 Meses"
          titlePart1="Conserto e Manutenção de Ar Condicionado em"
          titleHighlight="Campinas, Valinhos e Hortolândia"
          subtitle="Atendimento técnico rápido em domicílio para ar Split e Inverter. Diagnóstico preciso, recarga de gás, reparo de placas e garantia formal de até 6 meses."
          whatsAppMessage={waDefaultMessage}
          whatsAppCtaText="Falar com Técnico no WhatsApp"
          serviceCategory="Especialista em Climatização"
          symptomsList={[
            'Ar parou de gelar ou com baixo rendimento',
            'Pingando água na parede ou no chão',
            'Recarga de gás com teste de estanqueidade',
            'Conserto de placas inverter e compressores',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS DE AR CONDICIONADO ATENDIDAS"
          brandsList={[
            'LG Dual Inverter',
            'Samsung WindFree',
            'Daikin',
            'Fujitsu',
            'Midea',
            'Gree',
            'Carrier',
            'Elgin',
            'Springer',
            'Consul',
            'Electrolux',
          ]}
        />

        {/* Diagnostic Grid */}
        <DefectsGrid
          kicker="PROBLEMAS FREQUENTES DE CLIMATIZAÇÃO"
          title="Qual é o Defeito do Seu Ar Condicionado?"
          description="Identifique abaixo o sintoma apresentado pelo seu aparelho e clique para abrir atendimento direto com um técnico especializado:"
          items={arDefects}
          defaultMessagePrefix="Olá, preciso de conserto no meu ar condicionado. O defeito é:"
        />

        {/* 4 Steps Process */}
        <StepsProcess />

        {/* Guarantee Section */}
        <GuaranteeSection
          serviceImage="/images/servico-ar-condicionado.webp"
          imageAlt="Ar condicionado Split High Wall em residência"
          imageCaption="Atendimento especializado em Split e Inverter em domicílio com peças originais e garantia formal de até 6 meses."
        />

        {/* Coverage Section */}
        <Coverage whatsAppMessage="Olá, gostaria de agendar uma visita técnica para ar condicionado no meu bairro." />

        {/* Social Proof Google Reviews */}
        <SocialProof
          category="ar"
          title="Quem Conserta o Ar com a AF Serviços Recomenda"
          subtitle="Confira a experiência de quem já resolveu problemas de climatização com nossos técnicos na região."
        />

        {/* FAQ Section */}
        <FAQ
          customQuestions={arFaq}
          whatsAppMessage="Olá, tenho uma dúvida sobre o conserto do meu ar condicionado."
        />

        {/* Contact Form Section */}
        <ContactSection
          serviceRefTag="#ar-campinas"
          defaultMessage={waDefaultMessage}
        />
      </main>

      <Footer />
      <WhatsAppFloat
        message={waDefaultMessage}
        tooltipText="Chamar Técnico de Ar Condicionado"
      />
    </div>
  );
};
