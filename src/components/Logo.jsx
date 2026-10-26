import './Logo.css'

/**
 * Promiqa logo.
 * /logo-wordmark.png is the white wordmark extracted from the client's
 * logo.jpg with its green background removed, so it sits on the dark
 * header the same way the reference site's wordmark does.
 */
export default function Logo({ className = '' }) {
  return (
    <a href="/" className={`logo ${className}`} aria-label="Promiqa Home Page">
      <span className="logo__glow" aria-hidden="true" />
      <img
        className="logo__img"
        src="/logo-wordmark.png"
        alt="Promiqa"
        width="390"
        height="102"
        decoding="async"
      />
      <span className="logo__shine" aria-hidden="true" />
    </a>
  )
}
