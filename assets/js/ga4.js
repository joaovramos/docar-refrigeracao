// GA4 base
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'G-MEASUREMENT_ID', { send_page_view: true });

// Evento customizado de clique no WhatsApp
function trackWhatsAppClick(origem) {
  if (typeof gtag === 'function') {
    gtag('event', 'click_whatsapp', {
      event_category: 'engajamento',
      event_label: origem || 'origem_site'
    });
  }
}
