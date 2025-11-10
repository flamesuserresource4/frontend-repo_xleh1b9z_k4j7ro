import { useState } from 'react'
import { Check, Sparkles, Search, Bot, Zap, Shield, ArrowRight, PlayCircle } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      <Sparkles size={14} className="text-indigo-600" />
      {children}
    </span>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
        <Icon size={20} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-slate-900 font-medium">{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-slate-600">{a}</p>}
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-fuchsia-500 text-white">
                <Sparkles size={18} />
              </span>
              <span className="text-xl font-semibold">Cluely</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
              <a href="#features" className="hover:text-slate-900">Features</a>
              <a href="#how" className="hover:text-slate-900">How it works</a>
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#faq" className="hover:text-slate-900">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</a>
              <a href="#get-started" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                Get started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden>
          <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-indigo-300/40"></div>
          <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 rounded-full bg-fuchsia-300/40"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <Badge>AI answers from across your tools</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Find the right answer, instantly.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Cluely brings together search, chat, and your company knowledge so you stop hunting and start doing.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <Search className="ml-2 text-slate-400" size={18} />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your work email"
                className="h-11 flex-1 rounded-md px-3 outline-none placeholder:text-slate-400"
              />
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                Join waitlist
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">Free during beta · No credit card required</p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {["Zapier", "Notion", "Slack"].map((brand) => (
                <div key={brand} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">{brand}</span> connected
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full bg-slate-900/95">
                <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">
                  <PlayCircle size={28} />
                </button>
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/30">
                  Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to work smarter</h2>
          <p className="mt-3 text-slate-600">A unified AI layer on top of your apps and documents.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Search} title="Unified search" desc="Find answers across docs, tickets, chats, and more — all in one place." />
          <Feature icon={Bot} title="AI chat" desc="Ask questions in plain language and get citations you can trust." />
          <Feature icon={Zap} title="Automation" desc="Turn answers into actions with powerful workflows and shortcuts." />
          <Feature icon={Shield} title="Enterprise-grade security" desc="SSO, granular permissions, and on-prem options keep data safe." />
          <Feature icon={Sparkles} title="Personalized" desc="Learns from your workflow to surface what matters most." />
          <Feature icon={Check} title="Fast setup" desc="Connect your tools in minutes and invite your team." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge>How it works</Badge>
              <h3 className="mt-4 text-3xl font-bold tracking-tight">Connect, ask, act.</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex items-start gap-3"><Check className="mt-1 text-indigo-600" size={18}/>Connect your apps and choose what to index.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 text-indigo-600" size={18}/>Ask questions in natural language — get cited answers.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 text-indigo-600" size={18}/>Automate follow‑ups with built-in actions and workflows.</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-600/10 to-fuchsia-600/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Starter', price: 'Free', features: ['100 queries / mo', 'Basic connectors', 'Community support'] },
            { name: 'Pro', price: '$19', features: ['Unlimited queries', 'All connectors', 'Priority support'] },
            { name: 'Enterprise', price: 'Custom', features: ['SSO & SCIM', 'On-prem options', 'Dedicated success'] },
          ].map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.price !== 'Free' && <span className="text-slate-500">/ month</span>}
              </div>
              <ul className="mt-6 space-y-3 text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="text-indigo-600" size={18} />{f}</li>
                ))}
              </ul>
              <button className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Choose plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">Everything you need to know about the product.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FAQ q="How do you handle data privacy?" a="We only index data you authorize and follow strict permissioning to ensure sensitive content stays protected." />
            <FAQ q="Which tools do you support?" a="Slack, Notion, Google Drive, Jira, Confluence, GitHub, and many more with our API." />
            <FAQ q="Do you offer SSO?" a="Yes — SAML, SCIM, and OAuth are available on the Enterprise plan." />
            <FAQ q="Is there an on‑prem option?" a="Yes. Contact sales for deployment options that meet your requirements." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden>
          <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-indigo-300/40"></div>
          <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 rounded-full bg-fuchsia-300/40"></div>
        </div>
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
          <Badge>Get started</Badge>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">Bring AI to your knowledge</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Join the waitlist and be first to try Cluely with your team.</p>
          <div className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <Search className="ml-2 text-slate-400" size={18} />
            <input type="email" placeholder="Work email" className="h-11 flex-1 rounded-md px-3 outline-none placeholder:text-slate-400" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
              Join waitlist
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-fuchsia-500 text-white">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold">Cluely</span>
          </div>
          <p className="text-center text-sm text-slate-500 sm:text-left">© {new Date().getFullYear()} Cluely. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
