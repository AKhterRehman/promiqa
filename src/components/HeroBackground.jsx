import Collage from './Collage.jsx'
import './HeroBackground.css'

/**
 * Decorative background for the hero.
 * Layer order mirrors the reference site:
 *   1. moving "portfolio" media (video if provided, otherwise the CSS collage)
 *   2. left→right dark overlay so the headline stays readable
 *   3. two blurred glow spots
 *   4. bottom fade into the next section
 *
 * Pass `videoSrc` (and optionally `poster`) to use a real MP4 instead of
 * the generated collage, e.g. <HeroBackground videoSrc="/hero.mp4" />.
 */
export default function HeroBackground({ videoSrc, poster }) {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-bg__base" />

      {videoSrc ? (
        <video
          className="hero-bg__video"
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <Collage />
      )}

      <div className="hero-bg__overlay" />
      <div className="hero-bg__blur" />
      <div className="hero-bg__fade" />
    </div>
  )
}
