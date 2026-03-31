"use client";

import { ArrowRight, Headphones } from "lucide-react";
import R from "./RevealWrapper";

export default function CtaBanner() {
  return (
    <section className="py-20 px-8 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(225,112,85,.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,201,183,.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <R>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight leading-[1.3] mb-4">
            지금 바로 앵커라이브 2.0을
            <br />
            체험해보세요
          </h2>
        </R>
        <R delay={0.06}>
          <p className="text-base text-[#94A3B8] leading-[1.7] mb-4">
            무료 데모 체험과 전문 상담을 통해 귀사에 최적화된 방송 솔루션을 확인하세요.
            <br />
            도입부터 연동 완료까지 평균 2주, 전담 엔지니어가 함께합니다.
          </p>
          {/* Trust badges */}
          <div className="flex justify-center gap-4 mb-9 flex-wrap">
            {["무료 데모 제공", "2주 내 도입", "전담 매니저 배정"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[.06] text-[13px] text-[#CBD5E1] border border-white/[.08]"
              >
                <span className="text-primary text-[11px]">&#10003;</span>
                {badge}
              </span>
            ))}
          </div>
        </R>
        <R delay={0.1}>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-9 py-[14px] rounded-xl bg-primary text-white text-base font-semibold no-underline hover:bg-primary-dark transition-colors"
            >
              무료 데모 체험
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-9 py-[14px] rounded-xl bg-white/10 text-white text-base font-semibold no-underline border border-white/[.15] hover:bg-white/20 transition-colors"
            >
              <Headphones className="w-4 h-4" />
              도입 상담 신청
            </a>
          </div>
        </R>
      </div>
    </section>
  );
}
