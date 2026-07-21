import type { Metadata } from 'next';
import { ChatConsole } from './ChatConsole';

export const metadata: Metadata = {
  title: 'AI Command Chat — MindReply',
  description: 'Private AI command interface for the MindReply estate.',
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <ChatConsole />;
}
