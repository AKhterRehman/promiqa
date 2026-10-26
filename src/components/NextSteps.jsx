import './NextSteps.css'

/**
 * "What happens next?" strip under the quote form.
 * Recreates the reference graphic (three gradient line-icons joined by
 * runs of chevrons that fade in) in Promiqa's gold→emerald gradient.
 * Icons and chevrons are one SVG so spacing scales with the card;
 * labels are real text positioned under each icon.
 */

const STEPS = [
  { x: 13, label: 'Complete Form' },
  { x: 50.5, label: 'Free Consultation' },
  { x: 87.3, label: 'Get Proposal' },
]

function Chevrons({ x }) {
  // five chevrons, 10.3px apart, opacity ramping up left→right
  return (
    <g transform={`translate(${x} 43)`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M0 -7 L4.6 -7 L8.6 0 L4.6 7 L0 7 L4 0 Z"
          fill="#13a77f"
          opacity={0.22 + i * 0.195}
          transform={`translate(${i * 10.3} 0)`}
        />
      ))}
    </g>
  )
}

export default function NextSteps() {
  return (
    <div className="next-steps">
      <div className="next-steps__heading">
        <span>What Happens Next?</span>
      </div>

      <div className="next-steps__graphic">
        <svg viewBox="0 0 416 64" width="100%" height="auto" aria-hidden="true" focusable="false">
          <defs>
            {/*
              userSpaceOnUse so straight (zero-height) lines still get the
              gradient; one gradient per icon spanning that icon's box.
            */}
            <linearGradient id="nsGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="416" y2="0">
              <stop offset="0" stopColor="#e8b848" />
              <stop offset="1" stopColor="#13a77f" />
            </linearGradient>
            <linearGradient id="nsG1" gradientUnits="userSpaceOnUse" x1="44" y1="28" x2="66" y2="58">
              <stop offset="0" stopColor="#e8b848" />
              <stop offset="1" stopColor="#13a77f" />
            </linearGradient>
            <linearGradient id="nsG2" gradientUnits="userSpaceOnUse" x1="195" y1="27" x2="225" y2="57">
              <stop offset="0" stopColor="#e8b848" />
              <stop offset="1" stopColor="#13a77f" />
            </linearGradient>
            <linearGradient id="nsG3" gradientUnits="userSpaceOnUse" x1="343" y1="28" x2="384" y2="60">
              <stop offset="0" stopColor="#e8b848" />
              <stop offset="1" stopColor="#13a77f" />
            </linearGradient>
          </defs>

          {/* ---- 1. Complete Form: stacked bars + small ring ---- */}
          <g stroke="url(#nsG1)" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M44 29h22" />
            <path d="M44 38h22" />
            <path d="M53 47h13" />
            <path d="M44 56h22" />
          </g>
          <circle cx="46.5" cy="47" r="3.2" fill="none" stroke="url(#nsG1)" strokeWidth="2.6" />

          <Chevrons x={107.7} />

          {/* ---- 2. Free Consultation: two chat bubbles with a "?" ---- */}
          <g stroke="url(#nsG2)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none">
            {/* back bubble */}
            <path d="M197.5 27.5h20a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-6l-4.5 4v-4h-9.5a2.5 2.5 0 0 1-2.5-2.5V30a2.5 2.5 0 0 1 2.5-2.5z" />
            {/* front bubble */}
            <path d="M210 38.5h12a2.5 2.5 0 0 1 2.5 2.5v9.5a2.5 2.5 0 0 1-2.5 2.5h-2.5v3.5l-4-3.5H210" />
            {/* question mark */}
            <path d="M204.6 33.4c.4-1.6 1.7-2.5 3.3-2.5 1.9 0 3.2 1.1 3.2 2.7 0 2.3-3.1 2.5-3.1 5" />
          </g>
          <circle cx="208" cy="42.2" r="1.3" fill="url(#nsG2)" />

          <Chevrons x={261.7} />

          {/* ---- 3. Get Proposal: bulleted list + check circle ---- */}
          <g stroke="url(#nsG3)" strokeWidth="2.6" strokeLinecap="round" fill="none">
            <path d="M353 30h12" />
            <path d="M353 40h12" />
            <path d="M353 50h8" />
          </g>
          <circle cx="346" cy="30" r="2.3" fill="url(#nsG3)" />
          <circle cx="346" cy="40" r="2.3" fill="url(#nsG3)" />
          <circle cx="346" cy="50" r="2.3" fill="url(#nsG3)" />
          <circle cx="375.5" cy="52" r="8.5" fill="#ffffff" stroke="url(#nsG3)" strokeWidth="2.6" />
          <path d="m371.6 52.2 2.7 2.7 5.4-5.6" fill="none" stroke="url(#nsG3)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <ol className="next-steps__labels">
          {STEPS.map((s) => (
            <li key={s.label} style={{ '--x': `${s.x}%` }}>
              {s.label}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
