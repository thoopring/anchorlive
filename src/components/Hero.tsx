"use client";

import { useRef, useState, useEffect } from "react";
import {
  Mic,
  Monitor,
  Camera,
  PenTool,
  Palette,
  Settings,
  User,
} from "lucide-react";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function R({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s cubic-bezier(.25,1,.5,1) ${delay}s, transform 0.7s cubic-bezier(.25,1,.5,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const toolbarItems = [
  { icon: Mic, label: "마이크", active: true },
  { icon: Monitor, label: "화면공유", active: false },
  { icon: Camera, label: "카메라", active: false },
  { icon: PenTool, label: "그리기", active: false },
  { icon: Palette, label: "배경", active: false },
  { icon: Settings, label: "설정", active: false },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[140px] pb-20"
      style={{
        background: "linear-gradient(180deg, #FFF5F2 0%, #FFFFFF 100%)",
      }}
    >
      {/* dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(225,112,85,.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-site px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <R>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/[.08] border border-primary/[.15] mb-6">
                <span
                  className="w-[7px] h-[7px] rounded-full bg-accent"
                  style={{ animation: "pulse 2s infinite" }}
                />
                <span className="text-[13px] font-semibold text-primary">
                  WebRTC 기반 차세대 방송 솔루션
                </span>
              </div>
            </R>

            <R delay={0.05}>
              <h1 className="text-heading-hero text-dark mb-5">
                설치 없이 브라우저만으로
                <br />
                <span className="text-primary">실시간 증권방송</span>을
                <br />
                시작하세요
              </h1>
            </R>

            <R delay={0.1}>
              <p className="text-[17px] text-gray-500 leading-[1.75] mb-8 max-w-[420px]">
                15년간 증권방송 시장을 선도한 소프트브리지의 노하우. PC·모바일
                어디서든 1초 미만 지연으로 전문가 방송을 송출하고 시청할 수
                있습니다.
              </p>
            </R>

            <R delay={0.15}>
              <div className="flex gap-2.5 mb-10">
                <a
                  href="#demo"
                  className="px-[30px] py-[14px] rounded-xl bg-dark text-white text-[15px] font-semibold no-underline hover:bg-gray-800 transition-colors"
                >
                  무료 데모 체험 →
                </a>
                <a
                  href="#contact"
                  className="px-[30px] py-[14px] rounded-xl bg-gray-100 text-gray-800 text-[15px] font-semibold no-underline hover:bg-gray-200 transition-colors"
                >
                  도입 상담
                </a>
              </div>
            </R>

            <R delay={0.2}>
              <div className="flex gap-8 flex-wrap">
                {[
                  { n: "150+", l: "도입 고객사" },
                  { n: "<1초", l: "방송 지연" },
                  { n: "15년", l: "업계 경력" },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="text-2xl font-extrabold text-primary">
                      {s.n}
                    </span>
                    <span className="block text-[13px] text-gray-400 mt-0.5">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </R>
          </div>

          {/* Right mockup */}
          <R delay={0.1}>
            <div className="rounded-[20px] overflow-hidden bg-dark shadow-[0_24px_60px_rgba(0,0,0,.12)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0F172A]">
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                  <div
                    key={c}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c }}
                  />
                ))}
                <span className="ml-3 text-[11px] text-[#475569] font-mono">
                  live.anchorlive.co.kr/broadcasterLive
                </span>
              </div>

              {/* Main area */}
              <div className="p-4 relative">
                {/* Chart */}
                <div
                  className="relative rounded-xl h-[200px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #1E293B, #0F172A)",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 440 200"
                    className="absolute bottom-0"
                  >
                    {[
                      35, 50, 43, 58, 66, 52, 70, 80, 68, 84, 90, 75, 87,
                      100, 93, 105, 102, 110, 97, 113, 108, 120,
                    ].map((h, i) => {
                      const x = 12 + i * 19;
                      const up = i % 3 !== 0;
                      return (
                        <g key={i}>
                          <line
                            x1={x}
                            y1={200 - h - 8}
                            x2={x}
                            y2={200 - h + 16}
                            stroke={up ? "#22C55E" : "#EF4444"}
                            strokeWidth="1.2"
                          />
                          <rect
                            x={x - 3.5}
                            y={200 - h}
                            width="7"
                            height="12"
                            rx="1"
                            fill={up ? "#22C55E" : "#EF4444"}
                            opacity=".8"
                          />
                        </g>
                      );
                    })}
                    <path
                      d="M12,165 Q60,150 100,140 T200,112 T300,80 T430,58"
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth="1.2"
                      opacity=".5"
                    />
                    <path
                      d="M12,170 Q80,162 140,152 T250,125 T380,92 T430,78"
                      fill="none"
                      stroke="#EC4899"
                      strokeWidth="1"
                      opacity=".3"
                    />
                  </svg>

                  {/* LIVE badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/90">
                    <div
                      className="w-[5px] h-[5px] rounded-full bg-white"
                      style={{ animation: "pulse 1.5s infinite" }}
                    />
                    <span className="text-[10px] font-bold text-white">
                      LIVE
                    </span>
                  </div>

                  {/* Viewer count */}
                  <div className="absolute top-2.5 right-2.5 text-[10px] text-[#94A3B8] bg-black/40 px-2 py-[3px] rounded">
                    접속자 127명
                  </div>
                </div>

                {/* Toolbar */}
                <div className="flex gap-2 mt-3 justify-center flex-wrap">
                  {toolbarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium ${
                          item.active
                            ? "bg-primary text-white"
                            : "bg-white/[.06] text-[#94A3B8]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                {/* PIP */}
                <div
                  className="absolute bottom-14 right-7 w-[72px] h-[72px] rounded-xl border border-white/10 items-center justify-center hidden sm:flex"
                  style={{
                    background:
                      "linear-gradient(135deg, #334155, #1E293B)",
                  }}
                >
                  <User className="w-7 h-7 text-white/40" />
                </div>

                {/* Chat sidebar */}
                <div className="absolute top-0 right-0 w-[140px] h-full bg-[#0F172A]/80 border-l border-white/[.06] p-2.5 flex-col text-[10px] hidden md:flex">
                  <div className="font-bold text-[#E2E8F0] mb-1.5 pb-1 border-b border-white/[.06]">
                    채팅
                  </div>
                  {[
                    { n: "투자고수", m: "이 구간 주목", c: "#3182F6" },
                    { n: "주린이", m: "감사합니다", c: "#94A3B8" },
                    { n: "달인", m: "매수 타점!", c: "#94A3B8" },
                    { n: "코인맨", m: "좋은 분석이네요", c: "#94A3B8" },
                  ].map((chat) => (
                    <div key={chat.n} className="mb-1 leading-snug">
                      <span
                        className="font-semibold"
                        style={{ color: chat.c }}
                      >
                        {chat.n}
                      </span>
                      <span className="text-[#94A3B8] ml-1">{chat.m}</span>
                    </div>
                  ))}
                  <div className="mt-auto px-2 py-1.5 rounded-md bg-white/5 text-[#475569] text-[10px]">
                    메시지 입력
                  </div>
                </div>
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}
