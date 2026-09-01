'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Globe2, Menu, X } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'English for business',
    text: 'Confident communication for international meetings, presentations, emails, and everyday collaboration.',
    tags: ['Business English', 'Presentation skills'],
  },
  {
    number: '02',
    title: 'Academic English',
    text: 'A focused, practical approach for researchers, lecturers, and students working across borders.',
    tags: ['Academic writing', 'Speaking & fluency'],
  },
  {
    number: '03',
    title: 'Tailored team courses',
    text: 'In-company sessions built around your people, your context, and the conversations that matter.',
    tags: ['Needs analysis', 'On-site or online'],
  },
]

const faqs = [
  ['Who are the courses for?', 'I work with international teams, managers, academics, and professionals who want English that feels natural in their real working life.'],
  ['Can you work with our existing goals?', 'Absolutely. Every course begins with a short needs analysis so the content supports your communication priorities and business context.'],
  ['Where do sessions take place?', 'Courses can be delivered online, at your workplace, or in a blended format across locations.'],
]

export function TeacherSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight">Paul Gahan<span className="text-primary">.</span></a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#work" className="transition-colors hover:text-foreground">What I do</a>
          <a href="#approach" className="transition-colors hover:text-foreground">Approach</a>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Work with me <ArrowUpRight className="ml-1 inline size-4" /></a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </header>
      {menuOpen && <nav className="flex flex-col gap-5 border-b border-border px-6 pb-6 text-sm md:hidden" aria-label="Mobile navigation"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#work" onClick={() => setMenuOpen(false)}>What I do</a><a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a><a href="#contact" onClick={() => setMenuOpen(false)} className="font-medium text-primary">Work with me <ArrowUpRight className="ml-1 inline size-4" /></a></nav>}

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-20">
        <div>
          <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="size-2 rounded-full bg-primary" /> English for real work</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl lg:text-[6.6rem]">Make English your <em className="text-primary">advantage.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">I help people and teams communicate with clarity, confidence, and a little more ease — in the university and beyond.</p>
          <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#contact" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Start a conversation <ArrowUpRight className="ml-2 inline size-4" /></a><a href="#work" className="text-sm font-semibold underline decoration-border underline-offset-8 transition-colors hover:decoration-primary">Explore courses</a></div>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6 text-sm text-muted-foreground"><span><strong className="mr-2 text-foreground">15+</strong> years teaching</span><span><strong className="mr-2 text-foreground">2</strong> universities</span><span><strong className="mr-2 text-foreground">EN · DE</strong> working languages</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:justify-self-end"><div className="absolute -bottom-5 -left-5 z-10 max-w-[220px] rounded-xl bg-card p-4 shadow-xl shadow-foreground/10"><p className="text-xs uppercase tracking-widest text-muted-foreground">Currently teaching at</p><p className="mt-2 font-serif text-lg">Westbridge University<br />Rheinland School of Business</p></div><div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary"><img src="/images/teacher-portrait.png" alt="Paul Gahan, English language teacher" className="h-full w-full object-cover" /></div><div className="absolute -right-5 -top-5 flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground"><Globe2 className="size-8" /></div></div>
      </section>

      <section id="about" className="border-y border-border bg-card"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">A little context</p><h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Teaching is my work. <em className="text-primary">People are my subject.</em></h2></div><div className="max-w-2xl text-lg leading-8 text-muted-foreground"><p>I’m Paul — a lecturer, course designer, and independent English teacher. My work sits between academic rigour and the messy, rewarding reality of using another language at work.</p><p className="mt-6">That means no generic worksheets and no performance theatre. We work on the moments that matter: the meeting you need to lead, the paper you need to finish, the idea you want people to understand.</p><a href="#contact" className="mt-8 inline-block font-semibold text-foreground underline decoration-primary underline-offset-8">Tell me what you’re working on <ArrowUpRight className="ml-1 inline size-4" /></a></div></div></section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What I bring to the table</p><h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">Useful English, built around you.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">For individuals who want to grow, and organisations who want their people to connect.</p></div><div className="mt-14 divide-y divide-border border-y border-border">{services.map((service) => <article key={service.number} className="grid gap-5 py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-start"><span className="font-mono text-sm text-muted-foreground">{service.number}</span><h3 className="font-serif text-2xl">{service.title}</h3><div><p className="max-w-lg leading-7 text-muted-foreground">{service.text}</p><div className="mt-4 flex flex-wrap gap-2">{service.tags.map(tag => <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}</div></div></article>)}</div></section>

      <section id="approach" className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">The approach</p><h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Clear goals. Honest practice. <em className="text-accent">Visible progress.</em></h2></div><div className="grid gap-8 sm:grid-cols-2"><div><Check className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Start with the real thing</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">We look at the situations, vocabulary, and decisions your English needs to support.</p></div><div><Check className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Make it yours</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">You’ll leave with language you can use tomorrow — not just recognise in a textbook.</p></div><div><Check className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Keep it human</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">A supportive space to experiment, make mistakes, and find your own voice.</p></div><div><Check className="size-5 text-accent" /><h3 className="mt-5 font-semibold">Measure what matters</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">Progress is tracked through confidence and communication, not just test scores.</p></div></div></div></section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Good to know</p><h2 className="mt-5 font-serif text-4xl tracking-tight">A few practical answers.</h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer], index) => <div key={question} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-medium" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{answer}</p>}</div>)}</div></section>

      <section id="contact" className="mx-6 mb-6 overflow-hidden rounded-[2rem] bg-accent lg:mx-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-end lg:py-20"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/60">For businesses & teams</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-6xl">Have a real English challenge?</h2><p className="mt-5 max-w-lg leading-7 text-accent-foreground/70">Let’s talk about what your team needs — and design something that fits.</p></div><a href="mailto:hello@paulgahan.co" className="shrink-0 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">hello@paulgahan.co <ArrowUpRight className="ml-2 inline size-4" /></a></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-8 pt-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Paul Gahan</span><span>English teaching · course design · communication</span></footer>
    </main>
  )
}
