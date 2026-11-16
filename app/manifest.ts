import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SocialsFetcher — Creator Media & Video Tools',
    short_name: 'SocialsFetcher',
    description: 'Extract clean 1080p video streams, check 9:16 safe zones, and calculate export bitrates.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
