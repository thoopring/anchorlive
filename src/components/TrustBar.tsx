"use client";

import { useEffect, useRef } from "react";

const clients = [
  { name: "MTN PLUS", category: "증권방송" },
  { name: "SBS CNBC", category: "경제뉴스" },
  { name: "이베스트증권", category: "증권사" },
  { name: "아시아경제TV", category: "경제방송" },
  { name: "뉴지스탁", category: "투자자문" },
  { name: "815TV", category: "증권방송" },
  { name: "JPTV", category: "증권방송" },
  { name: "여의도증권방송", category: "증권방송" },
  { name: "트레이드스터디", category: "교육" },
  { name: "조은스탁", category: "투자자문" },
  { name: "코인티비", category: "코인방송" },
  { name: "GB스탁스", category: "투자자문" },
];

export default function TrustBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const speed = 0.4;
    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const doubled = [...clients, ...clients];

  return (
    <section className="py-10 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-site mx-auto px-8 mb-5">
        <p className="text-[13px] font-semibold text-gray-400 tracking-wide text-center">
          150개 이상의 증권·코인 방송사가 신뢰하는 솔루션
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden whitespace-nowrap px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doubled.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="shrink-0 flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-primary/30 hover:bg-primary-50 transition-all cursor-default group"
          >
            {/* Logo placeholder - styled initial */}
            <div className="w-8 h-8 rounded-lg bg-gray-200 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
              <span className="text-xs font-bold text-gray-500 group-hover:text-primary transition-colors">
                {c.name[0]}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-700 group-hover:text-dark transition-colors">
                {c.name}
              </span>
              <span className="text-[10px] text-gray-400">{c.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
