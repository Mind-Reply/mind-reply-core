import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Client Communication Automation | MindReply",
  description:
    "MindReply organises incoming client messages, summarises requests, drafts replies, tracks follow-ups, and escalates risky decisions — with human approval where it matters.",
  alternates: {
    canonical: "https://www.mind-reply.com/client-communication-automation",
  },
};

const capabilities = [
  {
    title: "Message triage",
    copy: "Incoming client messages are organised by urgency, topic, and required action — so nothing gets buried.",
    icon: Mail,
  },
  {
    title: "Request summarisation",
    copy: "Long client threads are condensed into clear summaries with the key ask, deadline, and next step.",
    icon: FileText,
  },
  {
    title: "Reply drafting",
    copy: "Get a polished, context-aware draft reply that matches your tone and the client relationship.",
    icon: MessageSquare,
  },
  {
    title: "Follow-up tracking",
    copy: "Track what needs a response, what is pending client input, and what is overdue.",
    icon: Clock3,
  },
];

const escalationRules = [
  "Billing disputes and payment questions",
  "Legal or contract-sensitive language",
  "Angry or dissatisfied client messages",
  "Deadline commitments and scope changes",
  "Sensitive files or confidential data",
  "Unclear requests that need human judgement",
];

const trustItems = [
  "Replies are drafted for human review — never sent automatically without approval.",
  "Sensitive messages are flagged for escalation, not processed blindly.",
  "Client data stays within your existing tools and channels.",
  "No client is forced to adopt a new platform or login.",
];

export default function ClientCommunicationAutomationPage() {
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
              <Sparkles aria-hidden className="h-4 w-4" /> Client communication
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-bold leading-[0.96] md:text-7xl">
              Organise every client message. Draft every reply. Never miss a follow-up.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#d9e3e7] md:text-lg">
              MindReply triages incoming client messages, summarises requests, drafts context-aware replies, and tracks follow-ups — so you spend less time in your inbox and more time on the work that matters.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
                Start the rescue <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link href="/response-overload" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
                Response overload rescue <Mail aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Triage</p>
              <p className="mt-3 text-lg font-bold">Messages organised by priority</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#91d2c8]">Reply</p>
              <p className="mt-3 text-lg font-bold">Drafts ready for review</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">What MindReply does</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">Four capabilities that clear your inbox.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#59687b]">
              Each capability is designed to reduce the time you spend reading, organising, and replying to client messages.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => {
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

      <section className="border-y border-[#122033]/10 bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7430]">Human escalation</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Sensitive decisions stay with you.</h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              MindReply drafts and organises. You approve. When a message touches billing, legal, contracts, or high-stakes commitments, it is flagged for your review — never processed blindly.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {escalationRules.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#122033]/10 bg-[#f8f4ec] p-4 text-sm leading-6 text-[#59687b]">
                <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6f72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2f6f72]">Trust and safety</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">Your clients never know MindReply is helping.</h2>
            <p className="mt-5 text-sm leading-7 text-[#59687b]">
              The system works behind the scenes. Clients communicate through their usual channels. You get the drafts, summaries, and reminders — they get faster, clearer replies.
            </p>
          </div>
          <div className="grid gap-3">
            {trustItems.map((item) => (
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
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">Start with MRagent. Buy the Response Overload Rescue when your inbox needs a system.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b757] px-5 py-3 text-sm font-bold text-[#122033] transition hover:bg-[#f0cf7a]">
              Try MindReply Free <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="/response-overload" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-[#f8f5f0] transition hover:border-[#e2b757] hover:text-[#e2b757]">
              Response overload rescue <FileText aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
