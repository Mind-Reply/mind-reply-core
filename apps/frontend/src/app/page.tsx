import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">MindReply</h1>
        <p className="text-xl text-slate-300 mb-8">AI-powered social media management and automation</p>
        
        <div className="flex justify-center gap-4 mb-12">
          <Link href="/admin" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Admin Dashboard
          </Link>
          <Link href="/contentflow" className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
            Content Flow
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="text-left space-y-2 text-slate-300">
            <li>✅ AI-powered decision making</li>
            <li>✅ Multi-platform automation</li>
            <li>✅ Real-time analytics</li>
            <li>✅ Admin dashboard</li>
          </ul>
        </div>
      </div>
    </main>
  );
}