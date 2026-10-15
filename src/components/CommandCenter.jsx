import Icon from './Icon'

/**
 * Original "cloud command center" hero visual — a layered glass panel with
 * four live-feeling tiles that tell Vunetram's story at a glance:
 * migration progress, cost savings, AI inference load, and a deploy pipeline.
 * All animated with CSS, no libraries.
 */

function MigrationRing() {
  const r = 34
  const circ = 2 * Math.PI * r
  const pct = 0.82
  const off = circ * (1 - pct)
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">Migration</span>
        <Icon name="cloud" className="h-4 w-4 text-brand-500" />
      </div>
      <div className="mt-2 flex items-center gap-3">
        <svg viewBox="0 0 88 88" className="cc-ring h-16 w-16 -rotate-90">
          <circle cx="44" cy="44" r="34" fill="none" stroke="#eef2f8" strokeWidth="9" />
          <circle
            className="val"
            cx="44"
            cy="44"
            r="34"
            fill="none"
            stroke="url(#ccGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={circ}
            style={{ '--circ': circ, '--off': off }}
          />
          <defs>
            <linearGradient id="ccGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1a56f0" />
              <stop offset="1" stopColor="#2ad8e0" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <p className="text-2xl font-extrabold leading-none text-ink-900">82%</p>
          <p className="mt-1 text-[11px] text-slate-500">workloads moved</p>
        </div>
      </div>
    </div>
  )
}

function SavingsSparkline() {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88]
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">Cost saved</span>
        <span className="text-xs font-bold text-emerald-600">↓ 40%</span>
      </div>
      <div className="mt-3 flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="cc-bar flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-accent-400"
            style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

function AiMeter() {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">AI inference</span>
        <Icon name="ai" className="h-4 w-4 text-brand-500" />
      </div>
      <p className="mt-2 text-sm font-bold text-ink-900">
        GenAI service <span className="font-medium text-emerald-600">· live</span>
      </p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="cc-meter h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>
      <p className="mt-2 text-[11px] text-slate-500">1.2k req/s · 240ms p95</p>
    </div>
  )
}

function DeployPipeline() {
  const stages = ['Build', 'Test', 'Scan', 'Deploy']
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">Pipeline</span>
        <Icon name="devops" className="h-4 w-4 text-brand-500" />
      </div>
      <div className="relative mt-4">
        {/* track */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-slate-100" />
        {/* running dot */}
        <span className="cc-dot absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-500 shadow-[0_0_0_4px_rgba(42,216,224,0.25)]" />
        <div className="relative flex justify-between">
          {stages.map((s) => (
            <span key={s} className="flex flex-col items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-brand-500 ring-2 ring-white" />
              <span className="text-[10px] font-medium text-slate-500">{s}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CommandCenter() {
  return (
    <div className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_30px_60px_-20px_rgba(15,32,78,0.3)] backdrop-blur-xl">
      <div className="flex items-center gap-2 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-xs font-medium text-slate-500">vunetram · cloud command center</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          live
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <MigrationRing />
        <SavingsSparkline />
        <AiMeter />
        <DeployPipeline />
      </div>
    </div>
  )
}
