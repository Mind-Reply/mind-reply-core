import type { Metadata } from 'next';
import { CampaignStudioClient } from './components/campaign-studio/CampaignStudioClient';

export const metadata: Metadata = {
  title: 'Campaign Concept Studio',
  description: 'A full-stack campaign concept studio for marketing teams powered by the current OpenAI Responses API and image generation.',
};

export default function HomePage() {
  return <CampaignStudioClient />;
}
