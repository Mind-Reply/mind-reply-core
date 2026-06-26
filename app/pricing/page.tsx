'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Check, Star } from 'lucide-react';
import StripeCheckout from '../components/StripeCheckout';
import { PLANS, formatPrice } from '../../lib/plans';

export default function PricingPage() {
  const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MindReply
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your email automation needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'ring-2 ring-blue-500 bg-blue-900/40 md:scale-105'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex items-center gap-1 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  <Star className="w-4 h-4" aria-hidden="true" /> Most Popular
                </div>
              )}

              <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>

              <div className="mb-6">
                <span className="text-5xl font-bold">{formatPrice(plan.priceInCents)}</span>
                <span className="text-gray-300 ml-2">/month</span>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-700">
                <p className="text-sm text-gray-300">
                  Up to {plan.emails.toLocaleString()} emails per month
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-400 w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setCheckoutPlan(plan.id)}
                className={`w-full py-3 rounded-lg font-bold transition-all text-lg ${
                  plan.popular
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Checkout Modal */}
      {checkoutPlan && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Checkout"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-4 sm:p-6 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                Subscribe to {PLANS.find((p) => p.id === checkoutPlan)?.name}
              </h2>
              <button
                onClick={() => setCheckoutPlan(null)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <StripeCheckout planId={checkoutPlan} />
          </div>
        </div>
      )}
    </div>
  );
}
