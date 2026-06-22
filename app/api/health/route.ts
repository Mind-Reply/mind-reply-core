export async function GET() {
  return Response.json({
    status: 'alive',
    timestamp: new Date().toISOString(),
    connectors: {
      stripe: process.env.STRIPE_SECRET_KEY ? 'configured' : 'missing',
      anthropic: process.env.ANTHROPIC_API_KEY ? 'configured' : 'missing',
      google: process.env.GOOGLE_CLIENT_ID ? 'configured' : 'missing',
      database: process.env.DATABASE_URL ? 'configured' : 'missing',
    },
    environment: process.env.NODE_ENV,
  });
}
