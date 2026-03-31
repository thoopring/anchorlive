"use client";

import { useRef, useState, useEffect } from "react";
import HeroMockup from "./HeroMockup";

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

/* Animated counter */
function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericPart = parseInt(target.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericPart));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, numericPart]);

  const prefix = target.startsWith("<") ? "<" : "";

  return (
    <div ref={ref}>
      <span className="text-2xl font-extrabold text-primary">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
}

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

      {/* Gradient orb decoration */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E17055 0%, transparent 70%)",
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
                <div>
                  <Counter target="150" suffix="+" />
                  <span className="block text-[13px] text-gray-400 mt-0.5">
                    도입 고객사
                  </span>
                </div>
                <div>
                  <Counter target="<1" suffix="초" />
                  <span className="block text-[13px] text-gray-400 mt-0.5">
                    방송 지연
                  </span>
                </div>
                <div>
                  <Counter target="15" suffix="년" />
                  <span className="block text-[13px] text-gray-400 mt-0.5">
                    업계 경력
                  </span>
                </div>
              </div>
            </R>
          </div>

          {/* Right mockup — CSS-based product preview */}
          <R delay={0.1}>
            <HeroMockup />
          </R>
        </div>
      </div>
    </section>
  );
}
