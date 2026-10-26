import HeroBackground from './HeroBackground.jsx'
import QuoteForm from './QuoteForm.jsx'
import Marquee from './Marquee.jsx'
import './Hero.css'

function Star() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
      <path
        d="M10 1.6l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L10 14.9l-5.4 2.9 1.2-5.9L1.4 7.8l6-.7z"
        fill="currentColor"
      />
    </svg>
  )
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 30 41" width="46" height="46" aria-hidden="true">
      <defs>
        <linearGradient id="awardGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8e848" />
          <stop offset="1" stopColor="#e8b848" />
        </linearGradient>
        <linearGradient id="awardTeal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4fd1ad" />
          <stop offset="1" stopColor="#13a77f" />
        </linearGradient>
      </defs>
      {/* flame */}
      <path
        d="M16.6 5.9c0 3.9-6.7 5.9-6.7 10 0 1 .2 2 .6 2.8 0 0-2.5-2.5-2.5-5.1s2.5-6.6 2.5-6.6c0 1.8.7 2.3 1.4 2.4.8 0 1.2-.6 1.2-1.5 0-.9-1-1.8-1-3.5S14.3 0 14.3 0a9 9 0 0 1 2.3 5.9z"
        fill="url(#awardGold)"
      />
      <path
        d="M14.8 20a3.7 3.7 0 0 1-3.7-3.7v-.1c0-4.5 6.2-4.9 6.2-11 .2.3 1.9 2.6 1.9 5 0 3.1-2.9 3.9-2.9 5.4 0 .6.3 1.1 1.1 1.1h.3a4.7 4.7 0 0 0 2.9-4.1S21.5 20 14.8 20z"
        fill="url(#awardGold)"
      />
      {/* diamond base */}
      <path d="M14.4 40.3 0 19.9l3 2.1 11.4 8.1 11.5-8.1 3-2.1z" fill="url(#awardTeal)" />
      <path d="M14.4 26.8 10.5 21.2l3.9.8 3.9-.9z" fill="#2bd4a6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#ffffff" />
      <path
        d="M13.3 19.5v-6.4h2.2l.3-2.6h-2.5V8.9c0-.7.2-1.2 1.2-1.2h1.3V5.4c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H8.6v2.6h2.1v6.4h2.6z"
        fill="#06513e"
      />
    </svg>
  )
}

/**
 * To use a real background video, drop the file in /public and set
 * HERO_VIDEO = '/hero.mp4' (optionally HERO_POSTER = '/hero-poster.jpg').
 * Leave it empty to use the generated Promiqa collage.
 */
const HERO_VIDEO = ''
const HERO_POSTER = ''

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroBackground videoSrc={HERO_VIDEO} poster={HERO_POSTER} />

      <div className="container hero__inner">
        <div className="hero__grid">
          {/* -------- left column -------- */}
          <div className="hero__content">
            <div className="c-heading">
              <div className="c-heading__head reveal" style={{ '--delay': '0.1s' }}>
                <div className="c-heading__pre">Premium</div>
                <h1 id="hero-title" className="c-heading__title">
                  <strong>
                    AI
                    <br />
                    Systems Agency
                  </strong>
                  <br />
                  <mark>Built for B2B, B2C &amp; Enterprise Brands</mark>
                </h1>
              </div>
              <p className="c-heading__sub reveal" style={{ '--delay': '0.3s' }}>
                We build AI business systems for customer enquiries, bookings,
                follow-ups &amp; daily operations, plus complete launch solutions
                from branding to CRM and automation.
              </p>
            </div>

            <div className="hero__divider reveal" style={{ '--delay': '0.4s' }} />

            <div className="trust reveal" style={{ '--delay': '0.5s' }}>
              <div className="trust__item">
                <div className="trust__icon">
                  <AwardIcon />
                </div>
                <div className="trust__body">
                  <span className="trust__label">5 Star Client Reviews</span>
                  <span className="trust__stars" aria-label="5 out of 5 stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                </div>
              </div>

              <span className="trust__sep" aria-hidden="true" />

              <div className="trust__item">
                <div className="trust__body">
                  <span className="trust__label">Marketing · Automation · Growth</span>
                  <span className="trust__badge">
                    <FacebookIcon />
                    <span>1.7K+ Followers</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -------- right column -------- */}
          <div className="hero__form reveal" style={{ '--delay': '0.25s' }}>
            <QuoteForm />
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  )
}
