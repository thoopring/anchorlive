"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div className="bg-white rounded-card shadow-[0_8px_30px_rgba(0,0,0,.12)] border border-gray-200 p-4 max-w-[240px] relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-none cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <p className="text-sm font-bold text-dark mb-1">도입 상담이 필요하신가요?</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          전문 상담원이 귀사에 맞는 솔루션을 안내해드립니다.
        </p>
        <a
          href="#contact"
          onClick={() => setDismissed(true)}
          className="inline-block mt-2.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors no-underline"
        >
          무료 상담 신청 →
        </a>
      </div>

      {/* FAB button */}
      <a
        href="#contact"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark transition-all shadow-[0_4px_20px_rgba(225,112,85,.4)] flex items-center justify-center no-underline hover:scale-105"
        aria-label="도입 문의"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
