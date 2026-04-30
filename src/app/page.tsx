'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ease } from '@/lib/motion'
import { ScrollReveal } from '@/components/motion-div'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Music, Mic, PartyPopper, Sparkles, ChevronDown } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    icon: <Sparkles className="size-5" />,
    title: 'Fill Out The Form',
    desc: "Tell Rob who it's for, what the occasion is, and every embarrassing detail you want immortalised in three-chord glory.",
  },
  {
    num: '02',
    icon: <Music className="size-5" />,
    title: 'Rob Makes Your Song',
    desc: "Our AI songwriter (Rob) channels his inner troubadour — verses, chorus, bridge, and exactly the right amount of cringe.",
  },
  {
    num: '03',
    icon: <PartyPopper className="size-5" />,
    title: 'You Go Viral',
    desc: "Play it at the party. Post it online. Accept the standing ovation. Deny all responsibility if it offends anyone.",
  },
]

const TIERS = [
  {
    name: 'Quick Hit',
    price: '$9.99',
    tagline: 'Perfect for a quick laugh',
    features: ['30–45 second song', '1 revision included', 'MP3 delivery', 'Up to 3 fun facts'],
    cta: 'Get a Quick Hit',
    highlight: false,
  },
  {
    name: 'The Full Banger',
    price: '$19.99',
    tagline: 'The whole experience',
    features: [
      'Full song (2–3 minutes)',
      '2 revisions included',
      'MP3 + lyrics PDF',
      'Verse, chorus & bridge',
      'Up to 10 fun facts',
    ],
    cta: 'Order The Banger',
    highlight: true,
  },
  {
    name: 'Gift Bundle',
    price: '$34.99',
    tagline: 'The gift that keeps on giving',
    features: [
      '3 full songs',
      'Gift card included',
      'Printable gift wrap',
      'Unlimited fun facts',
      'Priority delivery',
    ],
    cta: 'Get the Bundle',
    highlight: false,
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    recipient: '',
    occasion: '',
    details: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="overflow-x-hidden font-sans">
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-brand-yellow border-b-2 border-brand-black px-6 py-3 flex items-center justify-between">
        <span className="font-heading text-xl md:text-2xl tracking-tight text-brand-black uppercase">
          Bangers by Rob
        </span>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-black">
          {['How It Works', 'Pricing', 'Order'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="hover:underline underline-offset-4"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#order"
          className="font-heading text-sm uppercase tracking-wider bg-brand-black text-brand-yellow border-2 border-brand-black px-4 py-2.5 shadow-[3px_3px_0_#7A5C00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#7A5C00] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
        >
          Order Now
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative bg-brand-yellow border-b-2 border-brand-black min-h-[92vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 py-16 md:py-24 overflow-hidden"
      >
        {/* Diagonal stripe texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #111 0, #111 1px, transparent 0, transparent 50%)',
            backgroundSize: '8px 8px',
          }}
        />

        {/* Floating decorative glyphs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-[12%] left-[6%] text-6xl text-brand-black opacity-10 rotate-[-15deg] font-heading">♪</span>
          <span className="absolute top-[22%] right-[9%] text-8xl text-brand-black opacity-[0.07] rotate-[12deg] font-heading">♫</span>
          <span className="absolute bottom-[18%] left-[12%] text-5xl text-brand-black opacity-10 rotate-[6deg] font-heading">★</span>
          <span className="absolute bottom-[28%] right-[6%] text-7xl text-brand-black opacity-[0.07] rotate-[-10deg] font-heading">♩</span>
          <span className="absolute top-[55%] left-[2%] text-4xl text-brand-black opacity-10 rotate-[22deg] font-heading">✦</span>
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Rotated stamp badge */}
          <motion.div
            initial={{ rotate: -3, opacity: 0, y: 16 }}
            animate={{ rotate: -3, opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.55, ease: ease.out }}
            className="inline-block mb-7 bg-brand-black text-brand-yellow font-heading text-xs md:text-sm uppercase tracking-widest px-4 py-2 border-2 border-brand-black shadow-[3px_3px_0_#7A5C00]"
          >
            ★ As heard at Billy's birthday ★
          </motion.div>

          {/* Headline — clip + sweep up per line */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.75, ease: ease.out }}
              className="font-heading text-[clamp(2.4rem,10vw,9rem)] leading-[0.88] tracking-tight text-brand-black uppercase"
            >
              Comedy Songs
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.75, delay: 0.07, ease: ease.out }}
              className="font-heading text-[clamp(2.4rem,10vw,9rem)] leading-[0.88] tracking-tight text-brand-black uppercase"
            >
              Made to Order.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: ease.out }}
            className="mt-7 text-[clamp(1rem,2.2vw,1.3rem)] text-brand-black max-w-2xl leading-relaxed"
          >
            Give Rob the details. He'll write a banger. You'll take all the credit.{' '}
            <span className="opacity-60 italic">
              (Also great for roasting the coworker who microwaves fish.)
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52, ease: ease.out }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#order"
              className="inline-flex items-center gap-2.5 font-heading text-lg uppercase tracking-wide bg-brand-black text-brand-yellow border-2 border-brand-black px-8 py-4 shadow-[5px_5px_0_#7A5C00] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#7A5C00] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
            >
              Order a Banger
              <ChevronDown className="size-5" />
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-brand-black underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              How does it work?
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="bg-brand-black border-b-2 border-brand-black py-24 px-6 md:px-14 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end gap-4 mb-16">
              <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] text-brand-yellow uppercase leading-tight">
                How It Works
              </h2>
              <Mic className="size-9 text-brand-yellow opacity-30 mb-2 shrink-0" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12} className="h-full">
                <div className="bg-white border-2 border-brand-black p-8 shadow-[5px_5px_0_#F4C430] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#F4C430] active:translate-x-0 active:translate-y-0 transition-all cursor-default h-full">
                  <div className="font-heading text-8xl text-brand-black opacity-10 leading-none mb-4 select-none">
                    {step.num}
                  </div>
                  <div className="text-brand-black mb-3">{step.icon}</div>
                  <h3 className="font-heading text-xl uppercase text-brand-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-black opacity-75">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="bg-brand-cream border-b-2 border-brand-black py-24 px-6 md:px-14 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-5">
              <span className="font-heading text-xs uppercase tracking-widest bg-brand-yellow border-2 border-brand-black px-3 py-1.5 shadow-[2px_2px_0_#111]">
                No subscription · No surprises
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] text-brand-black uppercase leading-tight mb-16">
              Pick Your Banger
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.12}>
                <div
                  className={`relative border-2 border-brand-black p-8 shadow-[5px_5px_0_#111] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#111] active:translate-x-0 active:translate-y-0 transition-all ${
                    tier.highlight ? 'bg-brand-yellow' : 'bg-white'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 rotate-[-2deg] bg-brand-black text-brand-yellow font-heading text-[10px] uppercase tracking-widest px-3 py-1 border-2 border-brand-black whitespace-nowrap shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                      Most Popular
                    </div>
                  )}

                  <p className="font-heading text-base uppercase tracking-wide text-brand-black mb-1">
                    {tier.name}
                  </p>
                  <div className="font-heading text-5xl text-brand-black leading-none mb-1">
                    {tier.price}
                  </div>
                  <p className="text-xs text-brand-black opacity-50 mb-7">{tier.tagline}</p>

                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-brand-black">
                        <CheckCircle className="size-4 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#order"
                    className={`block text-center font-heading uppercase tracking-wide py-3 px-4 border-2 border-brand-black shadow-[3px_3px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-sm ${
                      tier.highlight
                        ? 'bg-brand-black text-brand-yellow'
                        : 'bg-brand-yellow text-brand-black'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER FORM ──────────────────────────────────────────────────── */}
      <section
        id="order"
        className="bg-brand-yellow border-b-2 border-brand-black py-24 px-6 md:px-14 lg:px-24"
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] text-brand-black uppercase leading-tight mb-3">
              Tell Rob
              <br />
              The Vibe
            </h2>
            <p className="text-brand-black opacity-70 text-base mb-12">
              Fill this out. Rob does the rest. Usually ships within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: ease.out }}
                className="bg-white border-2 border-brand-black p-14 shadow-[6px_6px_0_#111] text-center"
              >
                <div className="text-6xl mb-5 select-none">🎸</div>
                <h3 className="font-heading text-3xl text-brand-black uppercase mb-3">
                  Rob Is On It!
                </h3>
                <p className="text-brand-black opacity-60 text-sm max-w-xs mx-auto">
                  Check your inbox within 24 hours. It's going to be an absolute banger.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border-2 border-brand-black p-8 md:p-10 shadow-[6px_6px_0_#111] space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-heading text-xs uppercase tracking-widest text-brand-black"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Billy's Best Friend"
                      required
                      className="h-11 rounded-none border-2 border-brand-black bg-brand-cream focus-visible:ring-0 focus-visible:border-brand-black focus-visible:shadow-[0_0_0_3px_#F4C430] placeholder:opacity-40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="recipient"
                      className="font-heading text-xs uppercase tracking-widest text-brand-black"
                    >
                      Who's the Song For?
                    </Label>
                    <Input
                      id="recipient"
                      name="recipient"
                      value={form.recipient}
                      onChange={handleChange}
                      placeholder="Billy (the birthday boy)"
                      required
                      className="h-11 rounded-none border-2 border-brand-black bg-brand-cream focus-visible:ring-0 focus-visible:border-brand-black focus-visible:shadow-[0_0_0_3px_#F4C430] placeholder:opacity-40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="occasion"
                    className="font-heading text-xs uppercase tracking-widest text-brand-black"
                  >
                    What's the Occasion?
                  </Label>
                  <Input
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    placeholder="Birthday, retirement, roast, apology…"
                    required
                    className="h-11 rounded-none border-2 border-brand-black bg-brand-cream focus-visible:ring-0 focus-visible:border-brand-black focus-visible:shadow-[0_0_0_3px_#F4C430] placeholder:opacity-40"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="details"
                    className="font-heading text-xs uppercase tracking-widest text-brand-black"
                  >
                    Tell Rob the Vibe / Details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="The more the better — weird hobbies, embarrassing stories, inside jokes, running gags. Give Rob everything he needs to make this legendary."
                    required
                    rows={5}
                    className="rounded-none border-2 border-brand-black bg-brand-cream focus-visible:ring-0 focus-visible:border-brand-black focus-visible:shadow-[0_0_0_3px_#F4C430] placeholder:opacity-40 resize-none min-h-[140px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="font-heading text-xs uppercase tracking-widest text-brand-black"
                  >
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className="h-11 rounded-none border-2 border-brand-black bg-brand-cream focus-visible:ring-0 focus-visible:border-brand-black focus-visible:shadow-[0_0_0_3px_#F4C430] placeholder:opacity-40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-heading uppercase tracking-widest text-base bg-brand-black text-brand-yellow border-2 border-brand-black py-4 shadow-[5px_5px_0_#7A5C00] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#7A5C00] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                >
                  Send It to Rob →
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-brand-black py-14 px-6 md:px-14 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-10 mb-8">
            <div>
              <div className="font-heading text-3xl text-brand-yellow uppercase">Bangers by Rob</div>
              <p className="text-white/35 text-sm mt-1 italic">
                Songs so good, they're almost embarrassing.
              </p>
              <a
                href="mailto:rob@bangersbyrob.com"
                className="mt-2 inline-block text-brand-yellow/60 text-sm hover:text-brand-yellow transition-colors"
              >
                rob@bangersbyrob.com
              </a>
            </div>
            <div className="flex gap-7">
              {['How It Works', 'Pricing', 'Order'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-white/50 text-sm hover:text-brand-yellow transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© 2026 Bangers by Rob. All bangers reserved.</p>
            <p className="text-white/25 text-xs">
              Not responsible for uncontrollable laughter, mild embarrassment, or accidental fame.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
