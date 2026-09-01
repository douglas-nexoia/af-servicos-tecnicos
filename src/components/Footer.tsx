import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { AFLogo } from './AFLogo';
import { reportarConversaoWhatsApp, reportarConversaoTelefone } from '../lib/conversions';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base border-t border-white/10 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & CNPJ */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <AFLogo variant="dark" className="h-10" />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed">
              Especialistas em conserto e manutenção de ar condicionado, eletrodomésticos linha branca, motores de portão e sistemas de segurança eletrônica.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <p><strong className="text-slate-300">CNPJ:</strong> 40.004.647/0001-06</p>
              <p><strong className="text-slate-300">Razão Social:</strong> AF Serviços e Soluções Técnicas</p>
            </div>
            {/* Instagram */}
            <div className="pt-1">
              <a
                href="https://instagram.com/eletricatelecom06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@eletricatelecom06</span>
              </a>
            </div>
          </div>

          {/* Col 2: Serviços Especializados */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-acc" />
              <span>Serviços Principais</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/ar-condicionado"
                  className="hover:text-acc transition-colors flex items-center gap-2"
                >
                  <span className="text-acc">›</span>
                  <span>Ar Condicionado (Split & Inverter)</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-de-geladeiras"
                  className="hover:text-acc transition-colors flex items-center gap-2"
                >
                  <span className="text-acc">›</span>
                  <span>Conserto de Geladeiras Frost Free</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-maquina-lavar"
                  className="hover:text-acc transition-colors flex items-center gap-2"
                >
                  <span className="text-acc">›</span>
                  <span>Máquinas de Lavar e Lava e Seca</span>
                </a>
              </li>
              <li>
                <a
                  href="/portao-eletronico-e-cftv"
                  className="hover:text-acc transition-colors flex items-center gap-2"
                >
                  <span className="text-acc">›</span>
                  <span>Motores de Portão Eletrônico</span>
                </a>
              </li>
              <li>
                <a
                  href="/portao-eletronico-e-cftv"
                  className="hover:text-acc transition-colors flex items-center gap-2"
                >
                  <span className="text-acc">›</span>
                  <span>Instalação de Câmeras (CFTV)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Região de Atendimento */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-acc" />
              <span>Área de Cobertura</span>
            </h3>
            <p className="text-xs text-slate-400">
              Atendimento técnico com deslocamento rápido nas seguintes cidades:
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Campinas (SP)</span>
              </p>
              <p className="text-xs text-slate-400 pl-5">
                Cambuí, Taquaral, Barão Geraldo, Nova Campinas, Mansões Sto. Antônio, Guanabara, Swiss Park, Sousas.
              </p>
              <p className="font-semibold text-white flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Valinhos (SP)</span>
              </p>
              <p className="font-semibold text-white flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hortolândia (SP)</span>
              </p>
            </div>
          </div>

          {/* Col 4: Contato Direto & Horário */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-acc" />
              <span>Atendimento Direto</span>
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5519996447171?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20atendimento%20t%C3%A9cnico."
                target="_blank"
                rel="noopener noreferrer"
                onClick={reportarConversaoWhatsApp}
                className="flex items-center gap-3 p-3 rounded-xl bg-whatsapp/15 border border-whatsapp/30 text-emerald-300 hover:bg-whatsapp/25 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-whatsapp group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-300 font-medium">WhatsApp Rápido</div>
                  <div className="font-mono text-sm font-bold text-white">(19) 99644-7171</div>
                </div>
              </a>

              <a
                href="tel:+5519996447171"
                onClick={reportarConversaoTelefone}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-all group"
              >
                <Phone className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Central Telefônica</div>
                  <div className="font-mono text-sm font-bold text-white">(19) 99644-7171</div>
                </div>
              </a>

              <div className="text-xs text-slate-400 pt-1 space-y-1">
                <p>🕒 Seg a Sex: 08h às 18h</p>
                <p>🕒 Sábados: 08h às 13h (Plantão)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Guarantee Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} AF Serviços e Soluções Técnicas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-acc" />
              <span>Garantia de 6 meses no compressor</span>
            </span>
            <span>•</span>
            <span>90 dias em serviços e peças</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
