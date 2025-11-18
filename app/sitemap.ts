import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slee.pt';

  const commonDelays = [
    // Milliseconds - common testing values
    '50ms', '100ms', '150ms', '200ms', '250ms', '300ms', '400ms', '500ms',
    '750ms', '1000ms', '1500ms', '2000ms', '3000ms', '5000ms',

    // Seconds (0-10) - granular for quick tests
    '0.5s', '0.75s', '1s', '1.5s', '2s', '2.5s', '3s', '3.5s', '4s', '4.5s', '5s',
    '6s', '7s', '8s', '9s', '10s',

    // Seconds (10-60) - medium delays
    '11s', '12s', '13s', '14s', '15s', '16s', '17s', '18s', '19s', '20s',
    '25s', '30s', '35s', '40s', '45s', '50s', '55s', '60s',

    // Plain numbers (commonly searched) - seconds by default
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '15', '20', '25', '30', '40', '45', '50', '60',
    '90', '120', '150', '180', '210', '240', '270', '300',

    // Minutes - standard intervals
    '1m', '1.5m', '2m', '2.5m', '3m', '3.5m', '4m', '4.5m', '5m',

    // Common timeout values from frameworks/tools
    '3000', '5000', '10000', '15000', '20000', '30000', '45000', '60000', // milliseconds as numbers

    // Decimal seconds for precise testing
    '0.1s', '0.2s', '0.3s', '0.4s', '0.6s', '0.8s', '1.2s', '1.8s',

    // Network simulation scenarios
    '75', '85', '95', '105', '135', '165', '195', '225', '255', // seconds

    // Edge cases and special values
    '0.5m', '1h', // 30 seconds, 1 hour
  ];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const delayPages: MetadataRoute.Sitemap = commonDelays.map((delay) => ({
    url: `${baseUrl}/${delay}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...delayPages];
}
