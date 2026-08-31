// Disparo de conversao do Google Ads (gtag.js), sem Google Tag Manager.
// Os pares AW-ID/label vem direto da conta (customer 912-094-5292),
// conversion_action.tag_snippets — nao inventar nem reusar de outra conta.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const AW_ID = 'AW-17834120724';
const LABEL_WHATSAPP = 'aoWECLm-1-ocEJSs_LdC';
const LABEL_TELEFONE = 'i-EdCIS_1-ocEJSs_LdC';

function reportarConversao(label: string): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${AW_ID}/${label}`,
    value: 1.0,
    currency: 'BRL',
  });
}

// Todos os links de WhatsApp abrem em nova aba (target="_blank") e os de
// telefone sao "tel:" — nenhum dos dois navega a aba atual para longe, entao
// nao ha risco do clique se perder antes do evento ser enviado. Por isso as
// duas funcoes so disparam o evento, sem o padrao de "atrasar navegacao" do
// snippet oficial do Google (que so importa quando o link troca a pagina
// atual no mesmo clique).

export function reportarConversaoWhatsApp(): void {
  reportarConversao(LABEL_WHATSAPP);
}

export function reportarConversaoTelefone(): void {
  reportarConversao(LABEL_TELEFONE);
}
