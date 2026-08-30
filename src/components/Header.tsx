import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { AFLogo } from './AFLogo';

interface HeaderProps {
  currentRoute?: 'home' | 'ar' | 'geladeira' | 'portao';
  whatsAppMessage?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute = 'home',
  whatsAppMessage = 'Olá, gostaria de solicitar um orçamento para serviços técnicos.',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const waUrl = `https://wa.me/5519996447171?text=${encodeURIComponent(whatsAppMessage)}`;

  const navLinks = [
    { label: 'Início', href: '/', id: 'home' },
    { label: 'Ar Condicionado', href: '/ar-condicionado', id: 'ar' },
    { label: 'Geladeiras & Lavadoras', href: '/conserto-geladeira-e-maquinas', id: 'geladeira' },
    { label: 'Portões & CFTV', href: '/portao-eletronico-e-cftv', id: 'portao' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-white/10 text-white">
      {/* Top Banner Notice */}
      <div className="bg-acc/90 text-white text-xs font-semibold py-1 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Plantão Técnico Rápido em Campinas, Valinhos e Hortolândia • Garantia de até 6 Meses</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <AFLogo variant="dark" className="h-11" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white/15 text-acc font-semibold border border-acc/40'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Block (Phone + WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Phone Click-to-call */}
            <a
              href="tel:+5519996447171"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-200 hover:text-white group"
              title="Ligue agora para atendimento direto"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <Phone className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 transition-colors" />
              <span className="font-mono text-xs md:text-sm font-bold tracking-wider">
                (19) 99644-7171
              </span>
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-whatsapp transition-all hover:scale-[1.03] active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-white transition-transform group-hover:rotate-12" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-whatsapp rounded-lg text-white shadow-md active:scale-90"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-base-2 border-b border-white/15 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  currentRoute === link.id
                    ? 'bg-acc/20 text-acc font-bold'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:+5519996447171"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 rounded-xl font-mono text-sm font-bold text-slate-100"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Ligar: (19) 99644-7171</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-white rounded-xl font-bold text-sm shadow-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
