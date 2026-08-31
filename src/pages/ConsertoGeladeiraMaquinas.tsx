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
import { Refrigerator, WashingMachine, Sparkles, CheckCircle2 } from 'lucide-react';

export const ConsertoGeladeiraMaquinasPage: React.FC = () => {
  const waDefaultMessage = 'Olá, preciso de conserto no meu eletrodoméstico [Ref: #eletro-campinas]';

  const linhaBrancaDefects: DefectItem[] = [
    {
      id: 'geladeira-nao-gela-baixo',
      title: 'Geladeira Não Gela a Parte de Baixo',
      symptom: 'O freezer congela normalmente, mas a parte de baixo (refrigerador) esquenta e os alimentos estragam.',
      chips: ['Bloqueio de Gelo', 'Resistência Queimada', 'Sensor Degelo', 'Damper Travado'],
      refTag: '#geladeira-nao-gela-baixo',
    },
    {
      id: 'geladeira-motor-barulho',
      title: 'Geladeira com Motor Roncando ou Vazando',
      symptom: 'Motor compressor esquenta muito, faz estalos contínuos e não liga, ou acúmulo de água no fundo dos gaveteiros.',
      chips: ['Relé de Partida', 'Motor Compressor', 'Dreno Traseiro', 'Troca de Filtro Secador'],
      refTag: '#geladeira-barulho-vazamento',
    },
    {
      id: 'maquina-nao-centrifuga',
      title: 'Máquina de Lavar Não Centrifuga',
      symptom: 'A máquina lava normalmente, mas na hora de centrifugar fica parada, dá erro ou a roupa sai encharcada.',
      chips: ['Bomba de Drenagem', 'Atuador de Freio', 'Capacitor', 'Placa de Potência'],
      refTag: '#lavadora-nao-centrifuga',
    },
    {
      id: 'lava-seca-erro-painel',
      title: 'Lava e Seca Travada com Código de Erro',
      symptom: 'Painel digital pisca códigos (como DE, OE, LE, TE, 4E), porta não destrava ou a secagem não esquenta.',
      chips: ['Trava de Porta', 'Sensor de Temperatura', 'Duto de Secagem', 'Motor Inverter Direct Drive'],
      refTag: '#lava-e-seca-erro-painel',
    },
    {
      id: 'maquina-nao-solta-agua',
      title: 'Máquina Não Solta Água / Não Enche',
      symptom: 'A água fica acumulada dentro do tambor sem escoar, ou a válvula de entrada não libera água para iniciar o ciclo.',
      chips: ['Bomba Obstruída', 'Válvula Dupla/Tripla', 'Pressostato de Nível', 'Mangueira Dobrada'],
      refTag: '#lavadora-nao-solta-agua',
    },
    {
      id: 'trepidacao-vazamento-lavadora',
      title: 'Vazamento por Baixo & Trepidação Forte',
      symptom: 'A máquina pula durante a centrifugação, faz barulho alto de turbina de avião ou vaza água com sabão pelo chão.',
      chips: ['Mecanismo Completo', 'Rolamentos & Retentor', 'Tirantes de Suspensão', 'Base Nivelada'],
      refTag: '#lavadora-vazamento-mecanismo',
    },
  ];

  const eletroFaq = [
    {
      q: 'O conserto da geladeira ou máquina de lavar é feito no mesmo dia?',
      a: 'Sim! Nossos técnicos realizam 95% dos reparos no próprio domicílio na primeira visita, pois contam com estoque de peças de reposição e peças originais para as principais marcas.',
    },
    {
      q: 'Quais marcas de linha branca vocês atendem?',
      a: 'Atendemos Brastemp, Electrolux, Consul, Samsung, LG, Panasonic e Midea, tanto em modelos tradicionais quanto Frost Free, Inverse, Side by Side e Lava e Seca Inverter.',
    },
    {
      q: 'Qual o prazo de garantia para o conserto de eletrodomésticos?',
      a: 'Oferecemos garantia de até 6 meses para compressores novos e 90 dias completos para placas eletrônicas, bombas, válvulas, rolamentos e serviços executados.',
    },
    {
      q: 'Como funciona a visita técnica?',
      a: 'Você entra em contato via WhatsApp informando o sintoma. O técnico vai até seu endereço em Campinas, Valinhos ou Hortolândia, testa o aparelho e apresenta o orçamento sem compromisso.',
    },
  ];

  return (
    <div className="min-h-screen bg-light flex flex-col selection:bg-acc selection:text-white">
      <Header currentRoute="geladeira" whatsAppMessage={waDefaultMessage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          badgeRegion="Campinas, Valinhos e Hortolândia"
          badgeCredential="Atendimento no Mesmo Dia"
          titlePart1="Assistência Técnica de Geladeiras, Máquinas"
          titleHighlight="de Lavar e Lava e Seca na Região"
          subtitle="Conserto no mesmo dia em domicílio com técnicos especializados. Diagnóstico de Frost Free, lavadoras e lava e seca com peças originais e garantia formal por escrito."
          whatsAppMessage={waDefaultMessage}
          whatsAppCtaText="Solicitar Visita Técnica no WhatsApp"
          serviceCategory="Linha Branca & Eletrodomésticos"
          symptomsList={[
            'Geladeira não gela a parte de baixo (Frost Free)',
            'Máquina de lavar que não centrifuga ou não escoa',
            'Lava e seca travada com código de erro no painel',
            'Troca de compressor, bomba, placas e rolamentos',
          ]}
        />

        {/* Brands Section */}
        <Brands
          categoryTitle="MARCAS DE ELETRODOMÉSTICOS ATENDIDAS"
          brandsList={[
            'Brastemp',
            'Electrolux',
            'Consul',
            'Samsung',
            'LG',
            'Panasonic',
            'Midea',
          ]}
        />

        {/* Diagnostic Grid */}
        <DefectsGrid
          kicker="LINHA BRANCA & ELETRODOMÉSTICOS"
          title="Qual é o Problema do Seu Eletrodoméstico?"
          description="Selecione abaixo o sintoma apresentado pela sua geladeira, lavadora ou lava e seca para falar com o técnico de plantão:"
          items={linhaBrancaDefects}
          defaultMessagePrefix="Olá, preciso de conserto no meu eletrodoméstico. O defeito é:"
        />

        {/* 4 Steps Process */}
        <StepsProcess />

        {/* Guarantee Section */}
        <GuaranteeSection
          serviceImage="/images/servico-geladeira-maquinas.webp"
          imageAlt="Geladeira Frost Free e Lavadora em residência"
          imageCaption="Diagnóstico no mesmo dia em domicílio para refrigeradores, lavadoras e lava e seca com peças originais e garantia."
        />

        {/* Coverage Section */}
        <Coverage whatsAppMessage="Olá, gostaria de agendar uma visita técnica para geladeira/máquina de lavar no meu bairro." />

        {/* Social Proof Google Reviews */}
        <SocialProof
          category="geladeira"
          title="Avaliações de Clientes de Geladeiras e Lavadoras"
          subtitle="Veja o que nossos clientes em Campinas, Valinhos e Hortolândia dizem sobre nossos consertos."
        />

        {/* FAQ Section */}
        <FAQ
          customQuestions={eletroFaq}
          whatsAppMessage="Olá, tenho uma dúvida sobre o conserto de geladeiras e máquinas de lavar."
        />

        {/* Contact Form Section */}
        <ContactSection
          serviceRefTag="#eletro-campinas"
          defaultMessage={waDefaultMessage}
        />
      </main>

      <Footer />
      <WhatsAppFloat
        message={waDefaultMessage}
        tooltipText="Chamar Técnico de Eletrodomésticos"
      />
    </div>
  );
};
