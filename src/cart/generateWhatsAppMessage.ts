// The one place that builds the order text and the one place that reads the
// WhatsApp number — so "did we set the real number" is a single obvious
// line to check (site.config.ts's contact.whatsappNumber) instead of a
// scavenger hunt.
import type { CartLine, CheckoutInfo } from './types';
import { contact } from '../config/site.config';

const DINING_LABEL: Record<CheckoutInfo['diningOption'], string> = {
  takeaway: 'À emporter',
  delivery: 'Livraison',
};

export function generateOrderMessage(lines: CartLine[], customer: CheckoutInfo, totalMAD: number, orderRef: string): string {
  const out: string[] = [];
  out.push(`*NOUVELLE COMMANDE — ZAYNA COFFEE SHOP*`);
  out.push(`*Réf:* ${orderRef}`);
  out.push('---------------------------------------');
  out.push(`*Client:* ${customer.customerName || '—'}`);
  out.push(`*Mode:* ${DINING_LABEL[customer.diningOption]}`);
  if (customer.diningOption === 'delivery' && customer.deliveryAddress) {
    out.push(`*Adresse:* ${customer.deliveryAddress}`);
  }
  if (customer.phone) out.push(`*Tél:* ${customer.phone}`);
  out.push('---------------------------------------');
  out.push('*DÉTAIL DE LA COMMANDE:*');
  out.push('');

  lines.forEach((line, idx) => {
    const lineTotal = line.item.priceMAD * line.quantity;
    out.push(`${idx + 1}. *${line.quantity}x ${line.item.name}* — ${lineTotal} MAD`);
    if (line.note) out.push(`   └ Note: ${line.note}`);
  });

  out.push('---------------------------------------');
  if (customer.notes) out.push(`*Note générale:* ${customer.notes}`);
  out.push(`*TOTAL À PAYER:* *${totalMAD} MAD*`);

  return encodeURIComponent(out.join('\n'));
}

export function buildWhatsAppUrl(encodedMessage: string): string {
  const number = contact.whatsappNumber.replace(/\D/g, '');
  if (!number) {
    console.error('[Zayna cart] contact.whatsappNumber is empty in site.config.ts — orders will not reach anyone.');
  }
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

export function makeOrderRef(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}
