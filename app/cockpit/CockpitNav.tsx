'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/cockpit/chat', label: 'Chat' },
  { href: '/cockpit/brands', label: 'Brands' },
  { href: '/cockpit/design-preview', label: 'Design' },
  { href: '/cockpit/settings', label: 'Settings' },
];

export function CockpitNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Command Center navigation"
      style={{
        display: 'flex',
        gap: 7,
        overflowX: 'auto',
        padding: '10px 16px',
        borderBottom: '1px solid #1f2430',
        background: '#0d0f14',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {links.map((link) => {
        const active = pathname === link.href || (link.href === '/cockpit/chat' && pathname === '/cockpit');
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: active ? '#081318' : '#a4adbf',
              background: active ? '#64e8d1' : 'transparent',
              border: `1px solid ${active ? '#64e8d1' : '#293142'}`,
              borderRadius: 999,
              padding: '6px 13px',
              fontSize: 12,
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
