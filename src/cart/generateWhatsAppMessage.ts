// The one place that builds the order text and the one place that reads the
// WhatsApp number — so "did we set the real number" is a single obvious
// line to check (site.config.ts's contact.whatsappNumber) instead of a
// scavenger hunt.
import type { CartLine, CheckoutInfo } from './types';
import type { Locale } from './order-menu';
import { contact } from '../config/site.config';

// Order message labels per locale — the owner reads all three, but the
// message should still match whichever language the customer ordered in.
const MSG: Record<Locale, Record<string, string>> = {
  fr: {
    title: 'NOUVELLE COMMANDE — ZAYNA COFFEE SHOP',
    ref: 'Réf',
    client: 'Client',
    mode: 'Mode',
    takeaway: 'À emporter',
    delivery: 'Livraison',
    address: 'Adresse',
    phone: 'Tél',
    detail: 'DÉTAIL DE LA COMMANDE:',
    note: 'Note',
    generalNote: 'Note générale',
    totalDue: 'TOTAL À PAYER',
  },
  en: {
    title: 'NEW ORDER — ZAYNA COFFEE SHOP',
    ref: 'Ref',
    client: 'Customer',
    mode: 'Mode',
    takeaway: 'Takeaway',
    delivery: 'Delivery',
    address: 'Address',
    phone: 'Phone',
    detail: 'ORDER DETAILS:',
    note: 'Note',
    generalNote: 'General note',
    totalDue: 'TOTAL DUE',
  },
  ar: {
    title: 'طلب جديد — ZAYNA COFFEE SHOP',
    ref: 'المرجع',
    client: 'الزبون',
    mode: 'طريقة الاستلام',
    takeaway: 'استلام من المقهى',
    delivery: 'توصيل',
    address: 'العنوان',
    phone: 'الهاتف',
    detail: 'تفاصيل الطلب:',
    note: 'ملاحظة',
    generalNote: 'ملاحظة عامة',
    totalDue: 'المجموع المستحق',
  },
};

export function generateOrderMessage(
  lines: CartLine[],
  customer: CheckoutInfo,
  totalMAD: number,
  orderRef: string,
  locale: Locale = 'fr'
): string {
  const t = MSG[locale];
  const diningLabel = customer.diningOption === 'delivery' ? t.delivery : t.takeaway;
  const out: string[] = [];
  out.push(`*${t.title}*`);
  out.push(`*${t.ref}:* ${orderRef}`);
  out.push('---------------------------------------');
  out.push(`*${t.client}:* ${customer.customerName || '—'}`);
  out.push(`*${t.mode}:* ${diningLabel}`);
  if (customer.diningOption === 'delivery' && customer.deliveryAddress) {
    out.push(`*${t.address}:* ${customer.deliveryAddress}`);
  }
  if (customer.phone) out.push(`*${t.phone}:* ${customer.phone}`);
  out.push('---------------------------------------');
  out.push(`*${t.detail}*`);
  out.push('');

  lines.forEach((line, idx) => {
    const lineTotal = line.item.priceMAD * line.quantity;
    out.push(`${idx + 1}. *${line.quantity}x ${line.item.name}* — ${lineTotal} MAD`);
    if (line.note) out.push(`   └ ${t.note}: ${line.note}`);
  });

  out.push('---------------------------------------');
  if (customer.notes) out.push(`*${t.generalNote}:* ${customer.notes}`);
  out.push(`*${t.totalDue}:* *${totalMAD} MAD*`);

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
