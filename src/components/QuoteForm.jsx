import { useState } from 'react'
import NextSteps from './NextSteps.jsx'
import './QuoteForm.css'

const INITIAL = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Your Name *', autoComplete: 'name' },
  { name: 'company', type: 'text', placeholder: 'Company Name*', autoComplete: 'organization' },
  { name: 'email', type: 'email', placeholder: 'Email Address *', autoComplete: 'email' },
  { name: 'phone', type: 'tel', placeholder: 'Phone Number *', autoComplete: 'tel' },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.'
  if (values.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.'
  if (!values.message.trim()) errors.message = 'Tell us a little about your project.'
  return errors
}

/* Pointer-shaped arrow used on the CTA (same silhouette as the reference). */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 14 22" width="12" height="20" aria-hidden="true">
      <path d="M13.5 11 .5 21.5 4.48 11 .5.5z" fill="currentColor" />
    </svg>
  )
}

export default function QuoteForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) setErrors(validate({ ...values, [name]: value }))
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, company: true, email: true, phone: true, message: true })
    if (Object.keys(nextErrors).length) return

    setStatus('sending')
    // Hook your API / CRM endpoint here.
    window.setTimeout(() => setStatus('sent'), 900)
  }

  if (status === 'sent') {
    return (
      <div className="quote-card quote-card--sent" id="quote">
        <div className="quote-card__sent-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="56" height="56">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#13a77f" strokeWidth="2.5" />
            <path d="m15 24 6 6 12-12" fill="none" stroke="#13a77f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="quote-card__eyebrow">Request Received</div>
        <h2 className="quote-card__title">Thank you, {values.name.split(' ')[0]}!</h2>
        <p className="quote-card__text">
          A Promiqa strategist will reach out within 24 hours to schedule your free
          consultation.
        </p>
        <button
          type="button"
          className="btn-link"
          onClick={() => {
            setValues(INITIAL)
            setTouched({})
            setErrors({})
            setStatus('idle')
          }}
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <div className="quote-card" id="quote">
      <div className="quote-card__eyebrow">Request a Free Quote</div>
      <h2 className="quote-card__title">Start Getting Results</h2>

      <form className="quote-form" onSubmit={onSubmit} noValidate>
        {FIELDS.map((f) => (
          <div key={f.name} className={`field ${touched[f.name] && errors[f.name] ? 'field--error' : ''}`}>
            <label htmlFor={`q-${f.name}`} className="sr-only">
              {f.placeholder.replace('*', '').trim()}
            </label>
            <input
              id={`q-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              value={values[f.name]}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={Boolean(touched[f.name] && errors[f.name])}
              aria-describedby={touched[f.name] && errors[f.name] ? `q-${f.name}-err` : undefined}
              required
            />
            {touched[f.name] && errors[f.name] && (
              <span id={`q-${f.name}-err`} className="field__error">
                {errors[f.name]}
              </span>
            )}
          </div>
        ))}

        <div className={`field ${touched.message && errors.message ? 'field--error' : ''}`}>
          <label htmlFor="q-message" className="sr-only">
            Tell Us About Your Project And Goals
          </label>
          <textarea
            id="q-message"
            name="message"
            rows="4"
            placeholder="Tell Us About Your Project And Goals *"
            value={values.message}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={Boolean(touched.message && errors.message)}
            required
          />
          {touched.message && errors.message && (
            <span className="field__error">{errors.message}</span>
          )}
        </div>

        <button type="submit" className="btn-gradient" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'Sending…' : 'Get My Proposal'}</span>
          <ArrowIcon />
        </button>
      </form>

      <NextSteps />
    </div>
  )
}
