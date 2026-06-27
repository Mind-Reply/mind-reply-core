// lib/api-client.ts

const BASE = '/api';

export const apiClient = {
  async get(endpoint: string) {
    const res = await fetch(`${BASE}${endpoint}`);
    if (!res.ok) throw new Error(`GET ${endpoint} failed`);
    return res.json();
  },

  async post(endpoint: string, body: any) {
    const res = await fetch(`${BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed`);
    return res.json();
  },

  async getStripeData() {
    return this.get('/integrations/stripe');
  },

  async getGmailData() {
    return this.get('/integrations/gmail');
  },

  async getYoutubeData() {
    return this.get('/integrations/youtube');
  },

  async getAnalytics() {
    return this.get('/analytics');
  },

  async getQueue() {
    return this.get('/queue');
  },

  async sendChatMessage(message: string) {
    return this.post('/admin/chat', { message });
  },

  async subscribeToUpdates(callback: (data: any) => void) {
    const eventSource = new EventSource('/api/integrations/stream');
    eventSource.onmessage = (e) => callback(JSON.parse(e.data));
    return () => eventSource.close();
  },
};