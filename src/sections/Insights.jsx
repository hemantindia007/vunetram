import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { insights } from '../data'

const typeColor = {
  Blog: 'bg-brand-50 text-brand-700',
  Guide: 'bg-accent-500/10 text-accent-600',
  Event: 'bg-emerald-50 text-emerald-700',
}

export default function Insights() {
  return (
    <section id="insights" className="section bg-fade-indigo">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Insights & events</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Ideas from our engineering team
          </h2>
          <p className="mt-4 text-slate-600">
            Practical writing on cloud, DevOps, and observability — plus where to find us next.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal
              as="article"
              key={post.title}
              delay={i * 110}
              className="glass-card gradient-border group flex flex-col"
            >
              {/* cover art */}
              <div className="relative mb-5 overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-sm ${typeColor[post.type] || 'bg-white/80 text-ink-800'}`}>
                  {post.type}
                </span>
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{post.date}</p>
              <h3 className="mt-2 text-lg font-bold text-ink-900">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5"
              >
                Read more
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
