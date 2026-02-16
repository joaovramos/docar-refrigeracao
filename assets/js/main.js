// Config global DOCAR
const WHATSAPP_PHONE = '5581988339630';
const WHATSAPP_MSG_PADRAO = 'Olá, vim pelo site e gostaria de orçamento.';
const WHATSAPP_PARAM_ORIGEM = 'origem=site_docar';

// Monta URL padrão
function getWhatsAppUrl(mensagemExtra = '') {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  const msg = mensagemExtra
    ? `${WHATSAPP_MSG_PADRAO} ${mensagemExtra}`
    : WHATSAPP_MSG_PADRAO;
  const text = encodeURIComponent(msg + ` (${WHATSAPP_PARAM_ORIGEM})`);
  return `${base}?text=${text}`;
}

// Handler genérico
function handleWhatsAppClick(origemEvento, mensagemExtra) {
  trackWhatsAppClick(origemEvento);
  window.open(getWhatsAppUrl(mensagemExtra), '_blank');
}

// Catálogo: compra de peça
function comprarPeca(buttonEl) {
  const produto = buttonEl.getAttribute('data-produto');
  const mensagemExtra = `Olá, vim pelo site e quero essa peça: ${produto}.`;
  handleWhatsAppClick('catalogo_peca', mensagemExtra);
}
