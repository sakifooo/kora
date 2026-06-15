
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '⚽ كورة لايف - Koora Live | بث مباشر ونتائج حية',
  description: 'تابع عبر كورة لايف Koora Live أهم مباريات اليوم بث مباشر، مع النتائج الحية، مواعيد المباريات، الترتيب، الإحصائيات، ملخصات وأهداف اللقاءات، وتغطية شاملة لأبرز الدوريات العربية والعالمية ودوري أبطال أوروبا.',
  keywords: [
    'kora live',
    'بث مباشر',
    'مباريات اليوم',
    'نتائج المباريات',
    'الدوري الإسباني',
    'الدوري الإيطالي',
    'الدوري السعودي',
    'دوري أبطال أوروبا',
    'live football',
  ], // ← هادي كانت ناقصة

   metadataBase: new URL('https://kora-shot.vercel.app'),
 verification: {
    google: 'VzK0Ce6V01Jr_8MvkE_i_rwtYftEtrnNdtl5KY1cIdQ',
  },
  robots: {
  index: true,
  follow: true,
},
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kora Live',
    description: 'تابع مباريات اليوم بث مباشر.',
    url: 'https://kora-shot.vercel.app/',
    siteName: 'Kora Live',
    locale: 'ar_MA',
    type: 'website',
      images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Koora Live',
    },
  ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'kora live',
    description: 'تابع مباريات اليوم بث مباشر.',
  },

  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚽</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
     <head>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
        <script src="https://pl29722926.effectivecpmnetwork.com/8b/99/9d/8b999de8389c2a0e567aaed03da46ded.js"></script>
      </body>
    </html>
  );
}
