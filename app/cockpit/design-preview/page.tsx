import type { Metadata } from 'next';
import DesignPreview from './DesignPreview';

export const metadata: Metadata = {
  title: 'Command Center Design Preview — MindReply',
  description: 'Private design preview for the MindReply Command Center.',
  robots: { index: false, follow: false },
};

export default function DesignPreviewPage() {
  return <DesignPreview />;
}
