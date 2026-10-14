import { useState } from 'react'
import Icon from '../components/Icon'
import { company } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — swap this for your form handler / API endpoint.
    setSent(true)
  }

  return (
    <section id="contact" className="section bg-aurora">
      <div className="container">
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* left: pitch + contact details */}
            <div className="relative p-10 lg:p-14">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="relative">
                <span className="eyebrow">Let&apos;s talk</span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                  Ready to move to the cloud?
                </h2>
                <p className="mt-4 max-w-md text-slate-600">
                  Tell us about your workloads and goals. We&apos;ll get back within one business day
                  with a clear next step — no obligation.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/70 text-brand-600 shadow-sm ring-1 ring-black/5">
                      <Icon name="mail" className="h-5 w-5" />
                    </span>
                    <a href={`mailto:${company.email}`} className="hover:text-brand-600">
                      {company.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/70 text-brand-600 shadow-sm ring-1 ring-black/5">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span>{company.phone}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/70 text-brand-600 shadow-sm ring-1 ring-black/5">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <span>{company.location}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* right: form */}
            <div className="bg-white/70 p-10 text-ink-900 backdrop-blur-xl lg:p-14">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-500/15 text-accent-600">
                    <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">Thanks — message received</h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-600">
                    We&apos;ll be in touch shortly. For anything urgent, email us at {company.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <Field label="Company" name="company" placeholder="Company name" />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your cloud goals…"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send message
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  )
}
