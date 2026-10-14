import { clients } from '../data'

export default function TrustedBy() {
  // Duplicate the list so the marquee loops seamlessly.
  const row = [...clients, ...clients]

  return (
    <section className="border-y border-white/60 bg-white/50 py-10 backdrop-blur-sm">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by teams building and scaling in the cloud
        </p>
      </div>

      <div className="marquee-mask marquee-pause mt-6 overflow-hidden">
        <div className="marquee-track items-center gap-12 pr-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-bold tracking-tight text-slate-300 transition hover:text-brand-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
