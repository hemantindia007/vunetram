import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section className="section bg-fade-cyan">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Partners & certifications</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Credentials you can trust
          </h2>
          <p className="mt-4 text-slate-600">
            Our engineers hold leading cloud and platform certifications, and we partner with the
            providers your business runs on.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c, i) => (
            <Reveal
              as="div"
              key={c}
              delay={i * 70}
              className="glass-card gradient-border flex flex-col items-center gap-3 !p-6 text-center"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-white text-brand-600 shadow-sm ring-1 ring-black/5">
                <Icon name="check" strokeWidth={2.4} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink-900">{c}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
