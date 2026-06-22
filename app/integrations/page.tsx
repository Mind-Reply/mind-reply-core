'use client';

import { useState, useEffect } from 'react';

interface IntegrationStatus {
  status: string;
  timestamp: string;
  connectors: Record<string, string>;
  environment: string;
}

export default function IntegrationsPage() {
  const [data, setData] = useState<IntegrationStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/health');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Integration Status
            </span>
          </h1>
          <p className="text-gray-300">Real-time connector health dashboard</p>
        </div>

        {loading && (
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-lg p-8 text-center">
            <div className="inline-block animate-spin mb-4">⚙️</div>
            <p className="text-lg font-semibold">Loading integration status...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-red-300 mb-2">Connection Error</h3>
            <p className="text-red-200">{error}</p>
            <p className="text-sm text-red-300 mt-3">
              Make sure environment variables are set in Vercel dashboard
            </p>
          </div>
        )}

        {data && (
          <div className="space-y-6">
            {/* Status Summary */}
            <div className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-2 border-cyan-500/50 rounded-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">System Status</h2>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 font-bold">LIVE</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Environment: <code className="bg-black/50 px-2 py-1 rounded text-cyan-300">{data.environment}</code></p>
              <p className="text-sm text-gray-400">Last updated: {new Date(data.timestamp).toLocaleTimeString()}</p>
            </div>

            {/* Integrations Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(data.connectors).map(([name, status]) => {
                const isConfigured = status === 'configured';
                return (
                  <div
                    key={name}
                    className={`p-6 rounded-lg border-2 transition ${
                      isConfigured
                        ? 'bg-green-900/30 border-green-500/50'
                        : 'bg-yellow-900/30 border-yellow-500/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold capitalize">{name}</h3>
                      <span className={`text-2xl ${isConfigured ? '✅' : '⚠️'}`}></span>
                    </div>
                    <p className={`text-sm ${isConfigured ? 'text-green-300' : 'text-yellow-300'}`}>
                      {isConfigured ? 'Configured & Ready' : 'Awaiting Configuration'}
                    </p>
                    {!isConfigured && (
                      <p className="text-xs text-gray-400 mt-2">
                        Set <code className="bg-black/50 px-1 py-0.5 rounded text-cyan-300">{name.toUpperCase()}_*</code> in Vercel env vars
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next Steps */}
            <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">📋 Next Steps</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">1.</span>
                  <span>Configure API keys in Vercel Project Settings → Environment Variables</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <span>Redeploy after adding each secret key</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">3.</span>
                  <span>Visit <code className="bg-black/50 px-2 py-1 rounded text-cyan-300 text-sm">/api/backend/connectors</code> to test all integrations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">4.</span>
                  <span>Access <code className="bg-black/px-2 py-1 rounded text-cyan-300 text-sm">/admin</code> for secure dashboard</span>
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20 flex gap-6 justify-center text-sm">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 transition">← Back to Home</a>
          <a href="/dashboard" className="text-cyan-400 hover:text-cyan-300 transition">Dashboard</a>
          <a href="/admin" className="text-cyan-400 hover:text-cyan-300 transition">Admin</a>
          <a href="/api/health" className="text-gray-400 hover:text-gray-300 transition">Health Check</a>
        </div>
      </div>
    </div>
  );
}
