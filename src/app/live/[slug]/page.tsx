'use client';

import { 
  LucideFacebook, 
  LucideYoutube, 
  LucideSend, 
  LucideTwitter,
  LucideTv,
  LucideMic2,
  LucideTrophy,
  LucideChevronRight,
  LucideInfo
} from "lucide-react";
import Link from 'next/link';
import { use } from 'react';

export default function LiveMatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  /**
   * قائمة روابط البث (iFrames)
   * يمكنك تعديل الرابط المقابل لكل مباراة من هنا بسهولة
   */
  const iframeMapping: Record<string, string> = {
    // المباراة الأولى (وادي دجلة ضد زد)
   "spain-vs-capvert": "https://1.kooralive360.com/albaplayer/bein-sports-hd-1/?serv=0",
    "belgic-vs-egypt": "https://8.kooralive360.com/albaplayer/bein-sports-hd-2/?serv=1",
    "saudi-vs-uruguay": "https://1.kooralive360.com/albaplayer/bein-sports-hd-1/?serv=0",

  };

  // اختيار الرابط المناسب بناءً على المعرف (slug) أو استخدام رابط افتراضي إذا لم يوجد
  const iframeSrc = iframeMapping[slug] || "https://example.com/placeholder-player";

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
      {/* Top Bar with Social Icons */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideTwitter className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideFacebook className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideYoutube className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#0088cc] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideSend className="w-4 h-4" /></div>
          </div>
          <Link href="/" className="flex items-center gap-4">
            <span className="text-gray-500 font-bold text-sm hidden md:inline">koora live</span>
            <div className="bg-[#a11d1d] text-white px-6 py-2 rounded-lg font-black text-xl font-headline shadow-sm select-none">
              koora live
            </div>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-2 md:px-4 py-6 max-w-5xl flex-grow">
        <div className="mb-4 flex items-center gap-2 text-gray-500 text-sm font-bold">
          <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <LucideChevronRight className="w-4 h-4" />
          <span className="text-gray-900">بث مباشر للمباراة</span>
        </div>

        {/* Player Section */}
        <div className="bg-black rounded-xl overflow-hidden shadow-2xl mb-6 relative">
          <div className="w-full" style={{ minHeight: '500px' }}>
            <iframe 
              allowFullScreen={true} 
              frameBorder="0" 
              height="500px" 
              scrolling="1" 
              src={iframeSrc} 
              width="100%"
              title="Koora Live Player"
              className="bg-black"
            ></iframe>
          </div>
        </div>

        {/* Match Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h1 className="text-xl md:text-2xl font-black text-gray-800 mb-4 border-r-4 border-primary pr-3">
            مشاهدة مباراة اليوم بث مباشر بجودة عالية - كورة لايف
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <LucideTv className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">القناة الناقلة</p>
                <p className="text-sm font-bold text-gray-700">beIN Sports / On Time</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <LucideMic2 className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">المعلق الرياضي</p>
                <p className="text-sm font-bold text-gray-700">جاري التحديث...</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <LucideTrophy className="w-6 h-6 text-primary" />
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">البطولة</p>
                <p className="text-sm font-bold text-gray-700">أهم بطولات اليوم</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg flex items-start gap-3">
          <LucideInfo className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 font-bold leading-relaxed">
            ملاحظة: إذا توقف البث قم بتحديث الصفحة. نحن نوفر روابط متعددة لضمان استمرارية المشاهدة بدون تقطيع عبر موقع كورة لايف الأصلي.
          </p>
        </div>

        {/* Hidden SEO for Live Page */}
        <div className="sr-only" aria-hidden="true">
          <h2>بث مباشر مباريات اليوم كورة لايف بجودة عالية</h2>
          <p>شاهد جميع مباريات اليوم بث مباشر اون لاين عبر موقع كورة لايف koora live، الدوري الانجليزي، الدوري الاسباني، الدوري السعودي، دوري ابطال اوروبا، بث مباشر بدون تقطيع، يلا شوت، يلا كورة، كورة اون لاين، الاسطورة، بين سبورت مباشر.</p>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-[12px] font-bold gap-4">
          <div className="flex items-center gap-4">
            <span>جميع الحقوق محفوظة © كورة لايف</span>
            <span>koora live</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
