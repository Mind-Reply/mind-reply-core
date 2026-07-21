import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Automated Client Update Reports for Agencies | MindReply",
  description:
    "MindReply produces weekly client update reports, proof-of-work summaries, and progress tracking — so agencies spend less time writing status updates and more time delivering.",
  alternates: {
    canonical: "https://www.mind-reply.com/client-update-reports",
  },
};

const reportTypes = [
  {
    title: "Weekly progress summary",
    copy: "A clear, client-ready summary of what was completed, what is in progress, and what is next — drafted from your project notes.",
    icon: FileText,
  },
  {
    title: "Proof-of-work digest",
    copy: "A structured report showing deliverables, decisions made, and evidence of progress — without exposing internal notes.",
    icon: BarChart3,
  },
  {
    title: "Approval tracker",
    copy: "A list of items waiting for client sign-off, with context, deadlines, and a clear call to action for each.",
    icon: CheckCircle2,
  },
  {
    title: "Blocker report",
    copy: "A focused summary of what is stuck, why, and what decision or resource is needed to unblock it.",
    icon: Clock3,
  },
];

const proofItems = [
  "Reports are drafted for human review before sending.",
  "Internal notes and sensitive context stay redacted.",
  "Clients receive updates through existing channels — no new logins.",
  "Every report includes a clear next action for the client.",
];

export default function ClientUpdateReportsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#122033]">
      <header className="border-b border-[#122033]/10 bg-white px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#122033] font-serif text-lg font-bold text-[#e2b757]">M</span>
            <span className="font-serif text-xl font-bold tracking-wide">MindReply</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/for-agencies" className="hidden rounded-full border border-[#122033]/15 px-4 py-2 text-sm font-semibold text-[#122033] transition hover:border-[#2f6f72] md:inline-flex">
              For agencies
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
              <Sparkles aria-hidden className="h-4 w-4" /> Client reports
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-bold leading-[0.96] md:text-7xl">
              Proof-of-work reports that write themselves.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#d9e3e7] md:text-lg">
              MindReply turns your project notes, task threads, and recent activity into polished client update reports — so you spend less time formatting status updates and more time delivering work.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
                Start the rescue <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link href="/for-agencies" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
                Agency Client Ops <FileText aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Weekly</p>
              <p className="mt-3 text-lg font-bold">Progress summaries drafted</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Proof</p>
              <p className="mt-3 text-lg font-bold">Work evidence, not fluff</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">Report types</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">Four reports that replace hours of manual writing.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#59687b]">
              Each report type is designed for a specific agency need — from weekly updates to blocker escalation.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reportTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-[#122033]/10 bg-white p-5 shadow-sm shadow-[#122033]/5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#122033] text-[#e2b757]">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#59687b]">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#122033]/10 bg-[#103b39] px-4 py-12 text-[#f8f5f0] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#91d2c8]">The workflow</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Drop in your notes. Get a client-ready report.</h2>
            <p className="mt-5 text-sm leading-7 text-[#d3e5e2]">
              The process is simple: share your project context, task updates, and recent activity. MindReply structures it into a polished report you can review and send.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { step: "01", title: "Share project context", copy: "Drop in task threads, meeting notes, or recent deliverables — whatever you already have." },
              { step: "02", title: "MindReply structures the report", copy: "Progress, blockers, approvals, and next steps are organised into a clear format." },
              { step: "03", title: "You review and approve", copy: "Check the draft, adjust tone or detail, and confirm it is ready for the client." },
              { step: "04", title: "Send through your channel", copy: "Deliver the report through email, Slack, or your client portal — no new platform required." },
            ].map((item) => (
              <article key={item.step} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2b757]">{item.step}</span>
                <h3 className="mt-3 font-serif text-xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d3e5e2]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">Trust and safety</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Reports are proof, not theatre.</h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              Every report is grounded in your actual project data. No invented metrics, no vague claims — just structured evidence of work completed and decisions made.
            </p>
          </div>
          <div className="grid gap-3">
            {proofItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#122033]/10 bg-white p-4 text-sm leading-6 text-[#59687b] shadow-sm shadow-[#122033]/5">
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
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">Start with MRagent. Ask about client report automation when status updates are eating your Friday.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
              Try MindReply Free <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="/for-agencies" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
              Agency Client Ops <FileText aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
