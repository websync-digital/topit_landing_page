import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://dxmlguoupnzgskpwxolb.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_id-rHwqQdHM3FQ-mUhrCyg_6JVAjqnY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface AppReleaseInfo {
  version: string;
  buildNumber: number;
  fileSizeMb: number;
  releaseDate: string;
  downloadUrl: string;
  changelog: string[];
}

export const FALLBACK_RELEASE: AppReleaseInfo = {
  version: '1.0.0',
  buildNumber: 1,
  fileSizeMb: 80.0,
  releaseDate: 'Sep 1, 2026',
  downloadUrl: 'https://pub-3c9a9ceed97f4e45b2215723d77fa85d.r2.dev/topit/topit-latest.apk',
  changelog: [
    'Initial public release with lightning-fast top-up services',
    'Instant Airtime and Data top-up for MTN, Airtel, and Glo',
    'Dedicated Virtual Account wallet funding with instant balance update',
    '0.5% instant cashback on all airtime and data purchases',
    'Smart automations and scheduled auto-renewals',
    'Instant receipt generation & sharing in PDF and PNG',
    'Biometric security & instant transaction verification'
  ]
};

export async function fetchLatestRelease(): Promise<AppReleaseInfo> {
  // Disconnected from Supabase. Returning static fallback data.
  return FALLBACK_RELEASE;
}
