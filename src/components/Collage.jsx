import './Collage.css'

/**
 * Video-style background collage.
 * Four tilted columns of "portfolio" mockups (websites, apps, dashboards,
 * AI chat, bookings) scroll continuously in alternating directions, giving
 * the same moving-portfolio feel as the reference site's hero video,
 * but built from Promiqa-branded CSS so it needs no video file.
 */

const THEMES = {
  emerald: { bg: '#06513e', accent: '#e8b848', soft: '#e6f4ee', ink: '#ffffff', paper: '#ffffff' },
  deep: { bg: '#012a22', accent: '#13a77f', soft: '#0a6a50', ink: '#ffffff', paper: '#0b3a2f' },
  mint: { bg: '#f1faf6', accent: '#06513e', soft: '#cfeee2', ink: '#06513e', paper: '#ffffff' },
  gold: { bg: '#e8b848', accent: '#012a22', soft: '#f8e848', ink: '#012a22', paper: '#fff8e1' },
  teal: { bg: '#13a77f', accent: '#f8e848', soft: '#4fd1ad', ink: '#ffffff', paper: '#ffffff' },
}

function themeVars(t) {
  const th = THEMES[t]
  return {
    '--m-bg': th.bg,
    '--m-accent': th.accent,
    '--m-soft': th.soft,
    '--m-ink': th.ink,
    '--m-paper': th.paper,
  }
}

function Bar() {
  return (
    <div className="mock__bar">
      <i />
      <i />
      <i />
      <span className="mock__url" />
    </div>
  )
}

function Lines({ widths, cls = '' }) {
  return (
    <div className={`mock__lines ${cls}`}>
      {widths.map((w, i) => (
        <span key={i} className="mock__line" style={{ width: `${w}%` }} />
      ))}
    </div>
  )
}

/* ---------- variants ---------- */

function SiteMock() {
  return (
    <>
      <Bar />
      <div className="mock__nav">
        <span className="mock__logo" />
        <span className="mock__navlinks">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="mock__pill" />
      </div>
      <div className="mock__hero">
        <Lines widths={[72, 58]} cls="mock__lines--xl" />
        <Lines widths={[90, 76, 62]} cls="mock__lines--sm" />
        <span className="mock__btn" />
      </div>
      <div className="mock__grid">
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function LandingMock() {
  return (
    <>
      <Bar />
      <div className="mock__split">
        <div>
          <Lines widths={[80, 64, 50]} cls="mock__lines--lg" />
          <span className="mock__btn" />
        </div>
        <div className="mock__art" />
      </div>
      <div className="mock__logos">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="mock__cards">
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function DashMock() {
  const bars = [38, 56, 44, 70, 62, 84, 76, 92]
  return (
    <>
      <Bar />
      <div className="mock__dash">
        <div className="mock__kpis">
          <div>
            <small>Leads</small>
            <b>1,284</b>
          </div>
          <div>
            <small>Bookings</small>
            <b>312</b>
          </div>
          <div>
            <small>Reply time</small>
            <b>4s</b>
          </div>
        </div>
        <div className="mock__chart">
          {bars.map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <Lines widths={[60, 40]} cls="mock__lines--sm" />
      </div>
    </>
  )
}

function ChatMock() {
  return (
    <>
      <Bar />
      <div className="mock__chat">
        <div className="mock__chathead">
          <span className="mock__avatar" />
          <Lines widths={[46, 28]} cls="mock__lines--xs" />
          <span className="mock__online" />
        </div>
        <div className="mock__bubble mock__bubble--in">Hi! Do you have availability this week?</div>
        <div className="mock__bubble mock__bubble--out">Yes! Tuesday 10:30 or Thursday 2:00 work. Which suits you?</div>
        <div className="mock__bubble mock__bubble--in">Tuesday please.</div>
        <div className="mock__bubble mock__bubble--out">Booked ✓ Confirmation sent to your email.</div>
        <div className="mock__typing">
          <i />
          <i />
          <i />
        </div>
      </div>
    </>
  )
}

function PhoneMock() {
  return (
    <div className="mock__phone">
      <span className="mock__notch" />
      <div className="mock__phonehero">
        <Lines widths={[70, 50]} cls="mock__lines--lg" />
        <span className="mock__btn" />
      </div>
      <div className="mock__list">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="mock__tabbar">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function CalendarMock() {
  const cells = Array.from({ length: 28 }, (_, i) => i)
  const booked = new Set([3, 8, 9, 12, 16, 17, 22, 25])
  return (
    <>
      <Bar />
      <div className="mock__cal">
        <div className="mock__calhead">
          <Lines widths={[40]} cls="mock__lines--xs" />
          <span className="mock__pill" />
        </div>
        <div className="mock__calgrid">
          {cells.map((c) => (
            <i key={c} className={booked.has(c) ? 'is-booked' : ''} />
          ))}
        </div>
        <div className="mock__slot">
          <b />
          <Lines widths={[64, 40]} cls="mock__lines--xs" />
        </div>
      </div>
    </>
  )
}

function BrandMock() {
  return (
    <div className="mock__brand">
      <img src="/logo-wordmark.png" alt="" loading="lazy" />
      <div className="mock__swatches">
        <i style={{ background: '#012a22' }} />
        <i style={{ background: '#06513e' }} />
        <i style={{ background: '#13a77f' }} />
        <i style={{ background: '#e8b848' }} />
        <i style={{ background: '#f8e848' }} />
      </div>
      <Lines widths={[56, 38]} cls="mock__lines--xs" />
    </div>
  )
}

function CoverMock() {
  return (
    <>
      <Bar />
      <img className="mock__cover" src="/promiqa-cover.png" alt="" loading="lazy" />
    </>
  )
}

const VARIANTS = {
  site: SiteMock,
  landing: LandingMock,
  dash: DashMock,
  chat: ChatMock,
  phone: PhoneMock,
  cal: CalendarMock,
  brand: BrandMock,
  cover: CoverMock,
}

/* ---------- column definitions ---------- */

const COLUMNS = [
  {
    dur: 46,
    dir: 1,
    offset: -8,
    items: [
      ['site', 'emerald'],
      ['chat', 'mint'],
      ['dash', 'deep'],
      ['phone', 'gold'],
      ['landing', 'mint'],
      ['brand', 'deep'],
    ],
  },
  {
    dur: 58,
    dir: -1,
    offset: -22,
    items: [
      ['cover', 'deep'],
      ['cal', 'mint'],
      ['site', 'teal'],
      ['chat', 'emerald'],
      ['landing', 'gold'],
      ['dash', 'mint'],
    ],
  },
  {
    dur: 52,
    dir: 1,
    offset: -40,
    items: [
      ['landing', 'deep'],
      ['phone', 'mint'],
      ['brand', 'emerald'],
      ['site', 'gold'],
      ['cal', 'deep'],
      ['chat', 'teal'],
    ],
  },
  {
    dur: 64,
    dir: -1,
    offset: -14,
    items: [
      ['dash', 'emerald'],
      ['site', 'mint'],
      ['cover', 'deep'],
      ['chat', 'gold'],
      ['phone', 'teal'],
      ['landing', 'emerald'],
    ],
  },
]

function Card({ variant, theme }) {
  const Mock = VARIANTS[variant]
  return (
    <div className={`mock mock--${variant}`} style={themeVars(theme)}>
      <Mock />
    </div>
  )
}

export default function Collage() {
  return (
    <div className="collage" aria-hidden="true">
      <div className="collage__tilt">
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            className={`collage__col ${col.dir < 0 ? 'collage__col--reverse' : ''}`}
            style={{ '--dur': `${col.dur}s`, '--offset': `${col.offset}%` }}
          >
            <div className="collage__track">
              {/* two copies so the loop is seamless */}
              {[0, 1].map((copy) =>
                col.items.map(([variant, theme], i) => (
                  <Card key={`${copy}-${i}`} variant={variant} theme={theme} />
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
