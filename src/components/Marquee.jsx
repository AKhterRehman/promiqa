import './Marquee.css'

/**
 * Client-logo marquee that sits over the bottom of the hero, like the
 * reference site's strip of client logos.
 *
 * These are PLACEHOLDER wordmarks (Promiqa's client list isn't public).
 * Swap any entry for a real logo by replacing `mark`/`name` with
 * <img src="/clients/acme.svg" alt="Acme" /> inside the same <li>.
 */

const icon = {
  sun: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24">
      <path d="M20 4c-9 0-15 5-15 13 0 1.2.2 2.3.6 3C7 13 12 9 20 4zM5.6 20C7 14 12 10 19 7c-1 7-5 12-13.4 13z" fill="currentColor" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24">
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" fill="currentColor" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24">
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z" fill="currentColor" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24">
      <path d="M12 4 1 9l11 5 9-4.1V17h2V9z" fill="currentColor" />
      <path d="M5 12.5V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.5l-7 3.2z" fill="currentColor" opacity=".7" />
    </svg>
  ),
  wheel: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 3v6.5M4.2 15l5.6-2M19.8 15l-5.6-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24">
      <path d="M3 4h2.5l2.2 10.5h10.6L20 7H7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="19" r="1.7" fill="currentColor" />
      <circle cx="17" cy="19" r="1.7" fill="currentColor" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24">
      <path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" fill="currentColor" />
    </svg>
  ),
}

const CLIENTS = [
  { name: 'lumen', sub: 'solar', mark: icon.sun, style: 'brand--heavy' },
  { name: 'Bloom Realty', mark: icon.leaf, style: 'brand--serif' },
  { name: 'APEX', sub: 'FITNESS', mark: icon.bolt, style: 'brand--wide' },
  { name: 'Saffron Kitchen', mark: null, style: 'brand--script' },
  { name: 'Urban Clinic', mark: icon.plus, style: 'brand--medium' },
  { name: 'VISTA TRAVELS', mark: icon.compass, style: 'brand--thin' },
  { name: 'NOVA', sub: 'dental', mark: null, style: 'brand--heavy' },
  { name: 'Ovation Events', mark: icon.star, style: 'brand--serif' },
  { name: 'Kite Academy', mark: icon.cap, style: 'brand--medium' },
  { name: 'HARBOR MOTORS', mark: icon.wheel, style: 'brand--wide' },
  { name: 'cartly', mark: icon.cart, style: 'brand--heavy' },
  { name: 'Nest & Co', mark: icon.home, style: 'brand--serif' },
]

function Brand({ name, sub, mark, style }) {
  return (
    <li className={`brand ${style}`}>
      {mark && <span className="brand__mark">{mark}</span>}
      <span className="brand__text">
        {name}
        {sub && <small>{sub}</small>}
      </span>
    </li>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Brands we have worked with">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul className="marquee__list" key={copy} aria-hidden={copy === 1}>
            {CLIENTS.map((c, i) => (
              <Brand key={`${copy}-${i}`} {...c} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
