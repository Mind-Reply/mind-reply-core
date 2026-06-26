export interface Plan {
  id: string
  name: string
  priceInCents: number
  emails: number
  features: string[]
  cta: string
  popular?: boolean
  // For "Contact Sales" style plans that should not go through checkout.
  contactOnly?: boolean
}

// Source of truth for all subscription plans.
// Prices live on the server and are validated server-side before checkout,
// so the client can never tamper with the amount charged.
export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceInCents: 2900, // $29.00 / month
    emails: 100,
    features: ['100 emails/month', 'Basic analytics', 'Email support'],
    cta: 'Subscribe',
  },
  {
    id: 'pro',
    name: 'Pro',
    priceInCents: 9900, // $99.00 / month
    emails: 1000,
    features: [
      '1000 emails/month',
      'Advanced analytics',
      'Priority support',
      'API access',
    ],
    cta: 'Subscribe',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceInCents: 29900, // $299.00 / month
    emails: 10000,
    features: [
      '10000 emails/month',
      'Custom analytics',
      '24/7 support',
      'Dedicated account manager',
    ],
    cta: 'Subscribe',
  },
]

export function getPlan(id: string): Plan | undefined {
  return PLANS.find((plan) => plan.id === id)
}

export function formatPrice(priceInCents: number): string {
  return (priceInCents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
}
