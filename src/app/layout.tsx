
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '⚽ كورة لايف - Koora Live | بث مباشر ونتائج حية',
  description: 'كورة لايف koora live موقع بث مباشر مباريات اليوم اون لاين بدون تقطيع، يلا شوت yalla shoot، كورة اون لاين، نتائج المباريات، الدوري الإنجليزي، الدوري الإسباني، الدوري السعودي، دوري أبطال أوروبا، كورة ستار، يلا كورة، بين سبورت، اهداف المباريات.',
  keywords: 'كورة لايف, koora live, مباريات اليوم, بث مباشر, يلا شوت, yalla shoot, كورة اون لاين, كورة ستار, يلا كورة, بين سبورت مباشر, نتائج المباريات, الدوري الانجليزي, الدوري الاسباني, الدوري السعودي, دوري ابطال اوروبا, الاسطورة, kora live, football live stream',
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
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <meta name="google-site-verification" content="VzK0Ce6V01Jr_8MvkE_i_rwtYftEtrnNdtl5KY1cIdQ" />
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
        <script src="https://pl29722926.effectivecpmnetwork.com/8b/99/9d/8b999de8389c2a0e567aaed03da46ded.js"></script>
      </body>
    </html>
  );
}
