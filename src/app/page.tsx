"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { MatchCard } from "@/components/match-card";
import { 
  LucideFacebook, 
  LucideYoutube, 
  LucideSend, 
  LucideTwitter
} from "lucide-react";

export default function Home() {
  
  const matches = [

    { teamA: "إسبانيا ", teamB: "الرأس الأخضر ", scoreA: 0, scoreB: 0, time: "17:00 ", status: "live", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/spain-vs-capvert" },
    { teamA: "بلجيكا", teamB: "مصر", scoreA: 0, scoreB: 0, time: "20:00", status: "upcoming", channel: "beIN SPORTS MAX 2", commentator: "غير معروف", league: "كأس العالم", href: "/live/belgic-vs-egypt" },
    { teamA: "أوروجواي", teamB: "السعودية", scoreA: 0, scoreB: 0, time: "23:00", status: "upcoming", channel: "beIN SPORTS MAX 1", commentator: "غير معروف", league: "كأس العالم", href: "/live/saudi-vs-uruguay" },
  ];
  const seoKeywords = [
    "كورة لايف", "koora live", "مباريات اليوم بث مباشر", "يلا شوت", "yalla shoot", 
    "كورة اون لاين", "koora online", "كورة ستار", "koora star", "يلا كورة", 
    "yalla kora", "بين سبورت مباشر", "beIN Sports live", "نتائج المباريات", 
    "الدوري الانجليزي", "الدوري الاسباني", "الدوري السعودي", "دوري ابطال اوروبا", 
    "الاسطورة لبث المباريات", "live stream football", "كورة 4 لايف", "koora4live", 
    "يلا شوت حصري", "تابع لايف", "tab3 live", "كورة جول", "koora goal", 
    "ماي كورة", "my kora", "يلا شوت الجديد", "yalla shoot new", "كورة لايف مباشر", 
    "koora live tv", "kora live streaming", "يلا لايف", "yalla live", 
    "كورة لايف اون لاين", "كورة فور ايفر", "كورة لايف بلس", "كورة لايف الجديد", 
    "مباريات اليوم مباشر", "جدول مباريات اليوم", "كورة لايف كورة", "koora live scores", 
    "football live updates", "مشاهدة مباريات اليوم", "كورة لايف تي في", "koora live 24", 
    "الاسطورة لايف", "يلا شوت توداي", "yalla shoot today", "كورة اونلاين تيفي",
    "مشاهدة الدوري المصري", "بث مباشر ليفربول", "بث مباشر ريال مدريد", "بث مباشر برشلونة",
    "اهداف المباريات", "ملخصات الدوري", "كورة اتش دي", "koora hd", "بث مباشر الاسطورة",
    "يلا شوت جوال", "yalla shoot mobile", "مشاهدة بين سبورت", "كورة لايف تويتر",
    "أهم مباريات اليوم", "بث مباشر بدون تقطيع", "كورة لايف الرسمي", "موقع كورة لايف",
    "مشاهدة مباراة الاهلي اليوم", "مشاهدة مباراة الزمالك اليوم", "بث مباشر النصر",
    "بث مباشر الهلال", "الدوري الإيطالي مباشر", "الدوري الفرنسي مباشر", "دوري روشن",
    "كأس الملك مباشر", "نهائي دوري الابطال", "يلا شوت ستورز", "yalla shoot stars",
    "koora live streaming free", "كورة لايف مباريات اليوم مباشر", "يلا شوت بث مباشر",
    "yalla shoot live", "كورة لايف اون لاين", "بث مباشر للمباريات المشفرة", "كورة 365",
    "koora 365", "الاسطورة لايف مباريات اليوم", "كورة جول بث مباشر"
  ];
const [showBanner, setShowBanner] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowBanner(false);
  }, 7000);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f0f0f2]">
    {showBanner && (
  <div className="fixed bottom-4 left-4 z-[9999]">
    <button
      onClick={() => setShowBanner(false)}
      className="absolute -top-2 -right-2 z-[10000] w-6 h-6 rounded-full bg-black text-white text-xs"
    >
      ✕
    </button>

    <iframe
      src="//cdn.bannersnack.com/banners/btu5bfqqm/embed/index.html?userId=3124438&t=1781439640"
      width="250"
      height="250"
      scrolling="no"
      frameBorder="0"
      allowTransparency={true}
      allow="autoplay"
      allowFullScreen
      className="w-[250px] h-[250px] md:w-[250px] md:h-[250px]"
    />
  </div>
)}
      {/* Top Bar with Social Icons */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideTwitter className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideFacebook className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideYoutube className="w-4 h-4" /></div>
            <div className="w-8 h-8 bg-[#0088cc] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity"><LucideSend className="w-4 h-4" /></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-bold text-sm hidden md:inline">koora live</span>
            <div className="bg-[#a11d1d] text-white px-6 py-2 rounded-lg font-black text-xl font-headline shadow-sm select-none">
              koora live
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-2 md:px-4 py-6 max-w-5xl">
        {/* GMT Time Badge */}
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-t-lg text-[11px] font-bold border border-b-0 border-gray-300">
            بتوقيت غرينتش +1
          </span>
        </div>

        {/* Matches Container */}
        <div className="bg-[#e9e9ed] rounded-lg p-2 md:p-4 border border-gray-300">
          {/* Header Row */}
          <div className="flex items-center justify-end mb-4">
            <div className="bg-[#a11d1d] text-white px-6 py-1.5 rounded-lg text-sm font-bold shadow-md">
              جدول المباريات
            </div>
          </div>

          {/* Matches List */}
          <div className="space-y-1">
            {matches.map((match, idx) => (
              <MatchCard key={idx} {...(match as any)} />
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-4 bg-[#2c3e50] text-white p-3 rounded-lg text-center font-bold text-sm md:text-base border-b-4 border-gray-400">
            كورة لايف | koora live | مباريات اليوم بث مباشر جوال kora live
          </div>
        </div>

        {/* Strong Hidden SEO Section */}
        <div className="sr-only" aria-hidden="true">
          <h2>كورة لايف koora live بث مباشر مباريات اليوم</h2>
          <p>
            تابع أهم مباريات اليوم عبر موقع كورة لايف koora live الرسمي، الموقع الأقوى لمتابعة البث المباشر للمباريات العالمية والمحلية بدون تقطيع وبجودات متعددة.
          </p>
          <div className="flex flex-wrap">
            {seoKeywords.map((word, i) => (
              <span key={i}>{word}, </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-[12px] font-bold gap-4">
          <div className="flex items-center gap-4">
            <span>جميع الحقوق محفوظة © كورة لايف</span>
            <span>koora live</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
