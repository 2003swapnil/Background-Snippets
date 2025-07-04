import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ready-to-Use Background Snippets for Developers',
  description:
    'A collection of modern background snippets for web developers. Ready-to-use snippets crafted with Tailwind CSS and Vanilla CSS for seamless integration.',
  keywords:
    'background snippets, Tailwind CSS, CSS snippets, web development, front-end snippets, free CSS resources',
  openGraph: {
    title: 'Ready-to-Use Background Snippets for Developers',
    description:
      'Modern background snippets for web developers crafted with Tailwind CSS and Vanilla CSS.',

    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: ' Cover Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready-to-Use Background Snippets',
    description:
      'Modern background snippets for web developers crafted with Tailwind CSS and Vanilla CSS.',
    image: '/banner.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className={inter.className}>
      <body>
        {!isDev ? (
          <Script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id="9ad0e597-9fa4-4690-8ca2-18a964ab087f"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
