import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import './Header.css'

const TOP_LINKS = [
  { label: 'AI Hub', href: '#ai-hub' },
  { label: 'About', href: '#about' },
  { label: 'Videos', href: '#videos' },
  { label: 'In The Media', href: '#media' },
  { label: 'Insights', href: '#insights' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const MAIN_LINKS = [
  { label: 'Branding', href: '#branding' },
  { label: 'AI Systems', href: '#ai-systems' },
  { label: 'Digital Marketing', href: '#marketing' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Clients', href: '#clients' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
    >
      {/* top utility bar */}
      <div className="site-header__top">
        <div className="container site-header__row">
          <nav aria-label="Secondary Navigation">
            <ul className="nav-top">
              {TOP_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* main bar */}
      <div className="site-header__main">
        <div className="container site-header__row">
          <Logo />

          <nav className="nav-main" aria-label="Main Navigation">
            <ul className="nav-main__links">
              {MAIN_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href="#quote" className="btn-outline">
              Get Free Consultation
            </a>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
        <div className="container">
          <ul className="mobile-menu__primary">
            {MAIN_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mobile-menu__secondary">
            {TOP_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="btn-outline btn-outline--block"
            onClick={() => setOpen(false)}
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </header>
  )
}
