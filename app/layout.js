import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/data/content';
import Providers from '@/components/Providers';
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
export const metadata = {
  metadataBase: new URL(base), title: `${site.name} | ${site.role}`,
  description: site.tagline, alternates: { canonical: '/' },
  openGraph: { title: `${site.name} | ${site.role}`, description: site.tagline, type: 'website', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: `${site.name} | ${site.role}`, description: site.tagline, images: ['/opengraph-image'] }
};
export default function RootLayout({ children }) {
  const schema = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.role, description: site.tagline, url: base, alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Engineering and Technology, Lahore' }, sameAs: Object.values(site.social).filter(Boolean) };
  return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${space.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} /><Providers>{children}</Providers></body></html>;
}