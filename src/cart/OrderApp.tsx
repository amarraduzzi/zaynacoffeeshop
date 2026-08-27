import React, { useState } from 'react';
import { CartProvider, useCart } from './CartContext';
import { categories, menuItems } from './order-menu';
import type { CheckoutInfo, DiningOption, MenuItem } from './types';
import { buildWhatsAppUrl, generateOrderMessage, makeOrderRef } from './generateWhatsAppMessage';

// The whole ordering experience for /menu: category tabs + item grid on top,
// a floating cart bar, and a slide-in cart/checkout drawer. Mounted as a
// single Astro client:load island (see src/pages/menu.astro) so the rest of
// the site stays plain static HTML.
export default function OrderApp() {
  return (
    <CartProvider>
      <OrderAppInner />
    </CartProvider>
  );
}

function OrderAppInner() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { itemCount, totalMAD } = useCart();

  const activeItems = menuItems.filter((i) => i.categoryId === activeCategoryId);

  return (
    <div>
      {/* Category tabs */}
      <div className="sticky top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={
                'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ' +
                (cat.id === activeCategoryId
                  ? 'bg-primary text-surface'
                  : 'bg-surface-muted text-text-primary hover:bg-border')
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Item grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {activeItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Floating cart bar */}
      {itemCount > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-lg hover:bg-primary-dark transition-colors"
        >
          <span>
            {itemCount} article{itemCount > 1 ? 's' : ''}
          </span>
          <span className="opacity-70">·</span>
          <span>{totalMAD} MAD</span>
          <span className="ml-1">Voir le panier</span>
        </button>
      )}

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

function ItemCard({ item }: { item: MenuItem }) {
  const { lines, addItem, incrementLine, decrementLine } = useCart();
  const line = lines.find((l) => l.item.id === item.id);

  return (
    <div className="flex gap-4 rounded-xl border border-border bg-surface p-4">
      {item.image ? (
        <img src={item.image} alt={item.name} className="h-20 w-20 shrink-0 rounded-lg object-cover" />
      ) : (
        <div className="photo-placeholder h-20 w-20 shrink-0 rounded-lg text-[10px]">Photo à venir</div>
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold flex flex-wrap items-center gap-1.5">
            {item.name}
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-dark"
              >
                {tag}
              </span>
            ))}
            {item.vegan && (
              <span className="rounded-full bg-accent/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-dark">
                Végane
              </span>
            )}
          </p>
        </div>
        {item.description && <p className="mt-1 text-sm text-text-muted">{item.description}</p>}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-semibold text-primary">{item.priceMAD} MAD</span>
          {line ? (
            <div className="flex items-center gap-3 rounded-full border border-border px-1">
              <button
                onClick={() => decrementLine(line.lineId)}
                aria-label="Retirer un"
                className="h-7 w-7 rounded-full text-primary hover:bg-surface-muted"
              >
                −
              </button>
              <span className="min-w-[1.5ch] text-center text-sm font-semibold">{line.quantity}</span>
              <button
                onClick={() => incrementLine(line.lineId)}
                aria-label="Ajouter un"
                className="h-7 w-7 rounded-full text-primary hover:bg-surface-muted"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(item)}
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-surface hover:bg-primary-dark transition-colors"
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, incrementLine, decrementLine, removeLine, totalMAD, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleClose = () => {
    setCheckoutOpen(false);
    setSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
      <div className="relative flex h-full w-full max-w-md flex-col bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="font-display text-xl font-semibold">Votre panier</h2>
          <button onClick={handleClose} aria-label="Fermer" className="text-2xl leading-none text-text-muted hover:text-text-primary">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <p className="text-sm text-text-muted">Votre panier est vide.</p>
          ) : sent ? (
            <div className="rounded-lg bg-surface-muted p-4 text-sm">
              <p className="font-semibold text-primary">Commande envoyée sur WhatsApp !</p>
              <p className="mt-2 text-text-muted">
                Un onglet WhatsApp s’est ouvert avec votre commande pré-remplie — il ne vous reste plus qu’à
                l’envoyer là-bas pour confirmer.
              </p>
            </div>
          ) : !checkoutOpen ? (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li key={line.lineId} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{line.item.name}</p>
                    <p className="text-xs text-text-muted">{line.item.priceMAD} MAD</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-border px-1">
                      <button
                        onClick={() => decrementLine(line.lineId)}
                        aria-label="Retirer un"
                        className="h-6 w-6 rounded-full text-primary hover:bg-surface-muted"
                      >
                        −
                      </button>
                      <span className="min-w-[1.5ch] text-center text-sm font-semibold">{line.quantity}</span>
                      <button
                        onClick={() => incrementLine(line.lineId)}
                        aria-label="Ajouter un"
                        className="h-6 w-6 rounded-full text-primary hover:bg-surface-muted"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeLine(line.lineId)}
                      aria-label="Supprimer"
                      className="text-xs text-text-muted hover:text-primary"
                    >
                      Retirer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <CheckoutForm
              onSubmit={(info) => {
                const ref = makeOrderRef();
                const message = generateOrderMessage(lines, info, totalMAD, ref);
                const url = buildWhatsAppUrl(message);
                window.open(url, '_blank', 'noopener,noreferrer');
                setSent(true);
                clearCart();
              }}
            />
          )}
        </div>

        {lines.length > 0 && !sent && (
          <div className="border-t border-border p-5">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Total</span>
              <span className="text-primary">{totalMAD} MAD</span>
            </div>
            {!checkoutOpen && (
              <button
                onClick={() => setCheckoutOpen(true)}
                className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-semibold text-surface hover:bg-primary-dark transition-colors"
              >
                Passer commande
              </button>
            )}
          </div>
        )}

        {sent && (
          <div className="border-t border-border p-5">
            <button
              onClick={handleClose}
              className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-surface hover:bg-primary-dark transition-colors"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckoutForm({ onSubmit }: { onSubmit: (info: CheckoutInfo) => void }) {
  const [customerName, setCustomerName] = useState('');
  const [diningOption, setDiningOption] = useState<DiningOption>('takeaway');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) return setError('Merci d’indiquer votre nom.');
    if (!phone.trim()) return setError('Merci d’indiquer un numéro de téléphone.');
    if (diningOption === 'delivery' && !deliveryAddress.trim()) {
      return setError('Merci d’indiquer une adresse de livraison.');
    }
    setError('');
    onSubmit({ customerName, diningOption, deliveryAddress, phone, notes });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nom</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Mode</label>
        <div className="mt-1 flex gap-2">
          {(['takeaway', 'delivery'] as DiningOption[]).map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setDiningOption(opt)}
              className={
                'flex-1 rounded-full py-2 text-sm font-medium transition-colors ' +
                (diningOption === opt ? 'bg-primary text-surface' : 'bg-surface-muted text-text-primary')
              }
            >
              {opt === 'takeaway' ? 'À emporter' : 'Livraison'}
            </button>
          ))}
        </div>
      </div>

      {diningOption === 'delivery' && (
        <div>
          <label className="block text-sm font-medium">Adresse de livraison</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Téléphone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Note (optionnel)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-surface hover:bg-primary-dark transition-colors"
      >
        Commander via WhatsApp
      </button>
    </form>
  );
}
