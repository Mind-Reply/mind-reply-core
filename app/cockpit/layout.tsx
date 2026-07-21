import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { CockpitNav } from './CockpitNav';
import './cockpit.css';

export const metadata: Metadata = {
  title: 'MindReply Command Center',
  description: 'Private AI command center for the MindReply estate.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#07101d',
  width: 'device-width',
  initialScale: 1,
};

export default function CockpitLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#07101d',
        color: '#f5f7fb',
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          padding: '15px 16px',
          borderBottom: '1px solid #1e2a3b',
          background: 'rgba(7,16,29,.94)',
        }}
      >
        <Link href="/cockpit/chat" style={{ color: '#f5f7fb', textDecoration: 'none' }}>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.03em' }}>MindReply Command Center</div>
          <div style={{ fontSize: 12, color: '#9aa6ba', marginTop: 3 }}>Ask. Decide. Ship.</div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span
            style={{
              fontSize: 10,
              color: '#f8c56b',
              border: '1px solid #f8c56b66',
              background: '#f8c56b12',
              borderRadius: 999,
              padding: '4px 9px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Private
          </span>
          <Link href="/login" style={{ color: '#64e8d1', fontSize: 12, textDecoration: 'none' }}>
            Login
          </Link>
        </div>
      </header>
      <CockpitNav />
      <main style={{ flex: 1, padding: '18px 16px 30px', maxWidth: 1180, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        {children}
      </main>
      <footer style={{ padding: '14px 16px', borderTop: '1px solid #1e2a3b', color: '#718096', fontSize: 11, textAlign: 'center' }}>
        Private owner surface · evidence before claims · no secrets rendered
      </footer>
    </div>
  );
}
