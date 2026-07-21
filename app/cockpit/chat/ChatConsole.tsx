'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { chatCommands, matchCommand } from '../../../lib/cockpit/data';

type Message = {
  role: 'owner' | 'cockpit';
  lines: string[];
  files?: string[];
  suggestions?: string[];
  approvalRequired?: boolean;
};

const journeys = [
  ['LIVE STATUS', 'What is live?', 'Sites, deployments and HTTP evidence'],
  ['SHIP DECISION', 'What should I ship next?', 'Priorities and blockers'],
  ['BRAND FLEET', 'Show all brands', 'Public, private and ideas'],
  ['AUTOMATION', 'What workflow should run?', 'n8n and operating actions'],
  ['SOURCE VAULT', 'What did OneDrive contain?', 'Ideas, files and source verification'],
  ['MODEL ROUTING', 'What model should handle this?', 'Provider and mode selection'],
];

const starterPrompts = [
  { label: 'What is live?', value: 'what is live' },
  { label: 'What is broken?', value: 'what is blocked' },
  { label: 'What should I ship?', value: 'show today target' },
  { label: 'Show my brands', value: 'show all brands' },
];

function sourceChip(file: string) {
  return <code key={file} className="cc-source">{file}</code>;
}

export function ChatConsole() {
  const [input, setInput] = useState('');
  const [model, setModel] = useState('Command Router');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'cockpit',
      lines: [
        'Welcome to your private MindReply command centre.',
        'Ask one question. I will route it to live status, brands, deployments, SEO, support, ideas, OneDrive sources, models or workflows.',
      ],
      suggestions: ['what is live', 'what is blocked', 'show today target'],
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function run(commandText: string) {
    const trimmed = commandText.trim();
    if (!trimmed) return;

    const { match, nearMatches } = matchCommand(trimmed);
    const response: Message = match
      ? {
          role: 'cockpit',
          lines: match.response,
          files: match.files,
          suggestions: match.suggestions,
          approvalRequired: match.approvalRequired,
        }
      : {
          role: 'cockpit',
          lines: [
            nearMatches.length > 0
              ? 'I found a few close commands. Choose one below.'
              : 'That function is not wired yet. Start with one of these estate questions.',
          ],
          suggestions: nearMatches.length > 0 ? nearMatches.map((command) => command.command) : chatCommands.slice(0, 6).map((command) => command.command),
        };

    setMessages((current) => [...current, { role: 'owner', lines: [trimmed] }, response]);
    setInput('');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    run(input);
  }

  function nextChip(label: string) {
    return (
      <button key={label} type="button" className="cc-next" onClick={() => run(label)}>
        {label}
      </button>
    );
  }

  return (
    <div className="cc-shell">
      <aside className="cc-sidebar" aria-label="Chat history and command areas">
        <div className="cc-brand">
          <div className="cc-brand-mark">M</div>
          <div>
            <div className="cc-brand-name">MindReply</div>
            <div className="cc-brand-caption">Private command centre</div>
          </div>
        </div>

        <button type="button" className="cc-new-chat" onClick={() => setMessages([])}>
          <span style={{ fontSize: 19 }}>＋</span>
          New chat
        </button>

        <div className="cc-sidebar-label">Recent conversations</div>
        <div className="cc-sidebar-list">
          {['Estate status review', 'Shipping mission', 'AUREL brand direction', 'SEO takeover', 'OneDrive idea review'].map((item, index) => (
            <button key={item} type="button" className={`cc-sidebar-row ${index === 0 ? 'active' : ''}`} onClick={() => setInput(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="cc-sidebar-label">Command areas</div>
        <div className="cc-sidebar-list">
          {['Live sites', 'Brand fleet', 'Deployments', 'SEO & growth', 'Ideas vault', 'n8n workflows'].map((item) => (
            <button key={item} type="button" className="cc-sidebar-row" onClick={() => setInput(`Show ${item.toLowerCase()}`)}>
              {item}
            </button>
          ))}
        </div>

        <div className="cc-sidebar-footer">
          <div className="cc-avatar">AK</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 750 }}>Angel</div>
            <div style={{ color: 'var(--cc-subtle)', fontSize: 10, marginTop: 3 }}>Owner access</div>
          </div>
        </div>
      </aside>

      <main className="cc-main">
        <div className="cc-main-inner">
          <div className="cc-eyebrow">MindReply · owner AI</div>
          <h1 className="cc-heading">
            What is on your mind <span className="cc-heading-gradient">today?</span>
          </h1>
          <p className="cc-subheading">
            One chat for the entire estate. Ask naturally; the command centre handles the right surface behind the scenes.
          </p>

          <form className="cc-composer-wrap" onSubmit={submit}>
            <div className="cc-composer">
              <textarea
                className="cc-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about your brands, sites, deployments or next action…"
                aria-label="Ask the MindReply command centre"
                rows={2}
              />
              <div className="cc-composer-actions">
                <button type="button" className="cc-icon-button" aria-label="Add context" title="Add context">＋</button>
                <button type="button" className="cc-model-button" onClick={() => setModel(model === 'Command Router' ? 'Executive Mode' : 'Command Router')}>
                  {model} <span style={{ fontSize: 10 }}>⌄</span>
                </button>
                <button type="button" className="cc-icon-button" aria-label="Voice input" title="Voice input">⌁</button>
                <button type="submit" className="cc-send-button" aria-label="Send question">↑</button>
              </div>
            </div>
          </form>

          <div className="cc-quick-actions">
            {starterPrompts.map((prompt) => (
              <button key={prompt.value} type="button" className="cc-quick-action" onClick={() => run(prompt.value)}>
                <span style={{ color: 'var(--cc-accent)' }}>✦</span>
                {prompt.label}
              </button>
            ))}
          </div>

          {messages.length > 0 ? (
            <div className="cc-chat-log" aria-live="polite">
              {messages.map((message, index) => (
                <div key={index} className={`cc-message ${message.role}`}>
                  {message.approvalRequired ? <div className="cc-approval">APPROVAL REQUIRED</div> : null}
                  {message.lines.map((line, lineIndex) => <div key={lineIndex} className="cc-message-line">{line}</div>)}
                  {message.files && message.files.length > 0 ? (
                    <div className="cc-source-list"><span className="cc-source-label">Sources</span>{message.files.map(sourceChip)}</div>
                  ) : null}
                  {message.suggestions && message.suggestions.length > 0 ? (
                    <div className="cc-next-list"><span className="cc-next-label">Ask next</span>{message.suggestions.map(nextChip)}</div>
                  ) : null}
                </div>
              ))}
              <div ref={endRef} />
            </div>
          ) : null}

          <section className="cc-journeys" aria-label="Command shortcuts">
            <div className="cc-section-heading">
              <h2>Start a journey</h2>
              <span>Everything routes through chat</span>
            </div>
            <div className="cc-journey-grid">
              {journeys.map(([kicker, title, meta]) => (
                <button key={title} type="button" className="cc-journey" onClick={() => run(title)}>
                  <span className="cc-journey-kicker">{kicker}</span>
                  <span className="cc-journey-title">{title}</span>
                  <span className="cc-journey-meta">{meta} →</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
