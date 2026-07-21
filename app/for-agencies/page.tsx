import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gauge,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Client Communication Automation for Agencies | MindReply",
  description:
    "MindReply helps agencies draft client updates, summarize project progress, track approvals, and escalate blockers — without forcing clients into another login.",
  alternates: {
    canonical: "https://www.mind-reply.com/for-agencies",
  },
};

const painPoints = [
  "Client updates take hours to write, format, and send every week.",
  "Project progress is scattered across Slack, email, and spreadsheets.",
  "Clients miss approvals because follow-ups get buried in threads.",
  "Proof-of-work reports are manual, inconsistent, and time-consuming.",
  "Blockers sit unresolved because no one flags them clearly.",
];

const workflow = [
  {
    step: "01",
    title: "Summarise project progress",
    copy: "MindReply reads your project notes, task threads, and recent updates to produce a clear weekly summary.",
  },
  {
    step: "02",
    title: "Draft client updates",
    copy: "Get a polished, send-ready client update with progress, next steps, and approval requests.",
  },
  {
    step: "03",
    title: "Track approvals",
    copy: "Flag what needs client sign-off, track what is pending, and remind before deadlines slip.",
  },
  {
    step: "04",
    title: "Escalate blockers",
    copy: "When a decision, budget, or dependency is stuck, MindReply drafts the escalation with context and urgency.",
  },
];

const proofItems = [
  "Clients never need to log into another platform.",
  "Updates are drafted for human review before sending.",
  "Sensitive billing, legal, and contract items are flagged for escalation.",
  "Proof-of-work summaries stay inspectable and redacted where needed.",
];

export default function ForAgenciesPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#122033]">
      <header className="border-b border-[#122033]/10 bg-white px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#122033] font-serif text-lg font-bold text-[#e2b757]">M</span>
            <span className="font-serif text-xl font-bold tracking-wide">MindReply</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/website-completion-package" className="hidden rounded-full border border-[#122033]/15 px-4 py-2 text-sm font-semibold text-[#122033] transition hover:border-[#2f6f72] md:inline-flex">
              Package
            </Link>
            <Link href="/agent" className="rounded-full bg-[#122033] px-4 py-2 text-sm font-semibold text-[#f8f5f0] transition hover:bg-[#1c3150]">
              Try MindReply Free
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-[#122033] px-4 py-12 text-[#f8f5f0] md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#e2b757]/35 bg-[#e2b757]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e2b757]">
              <Users aria-hidden className="h-4 w-4" /> For agencies
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-bold leading-[0.96] md:text-7xl">
              Client updates without the chaos.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#d9e3e7] md:text-lg">
              MindReply helps agencies draft weekly updates, summarise project progress, track approvals, flag blockers, and produce proof-of-work reports — without forcing clients into another login.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
                Start the rescue <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link href="/contact?intent=agency" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
                Ask about Agency Ops Pilot <MessageSquare aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Updates</p>
              <p className="mt-3 text-lg font-bold">Drafted, not manual</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Approvals</p>
              <p className="mt-3 text-lg font-bold">Tracked, not lost</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Blockers</p>
              <p className="mt-3 text-lg font-bold">Flagged, not buried</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">The problem</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Client communication is eating your billable hours.</h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              Every agency knows the pattern: updates take too long, approvals get lost, and proof-of-work reports feel like a second job. MindReply turns that overhead into a structured workflow.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {painPoints.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#122033]/10 bg-white p-4 text-sm leading-6 text-[#59687b] shadow-sm shadow-[#122033]/5">
                <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6f72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#103b39] px-4 py-12 text-[#f8f5f0] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#91d2c8]">How it works</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Four steps from scattered notes to client-ready updates.</h2>
            <p className="mt-5 text-sm leading-7 text-[#d3e5e2]">
              The workflow is designed for agencies that already have project data — it organises, drafts, and flags, without requiring a new platform migration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2b757]">{item.step}</span>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#d3e5e2]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#122033]/10 bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7430]">Trust boundary</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Clients stay where they are. Updates come to them.</h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              MindReply does not ask your clients to adopt another tool. Updates are drafted for you to review and send through your existing channels.
            </p>
          </div>
          <div className="grid gap-3">
            {proofItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#122033]/10 bg-[#f8f4ec] p-4 text-sm leading-6 text-[#59687b]">
                <ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6f72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg bg-[#122033] p-6 text-[#f8f5f0] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#91d2c8]">Next move</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">Start with MRagent. Ask about the Agency Client Ops Pilot when client updates are eating your week.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
              Try MindReply Free <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="/contact?intent=agency" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
              Agency Ops Pilot <FileText aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
