"use client";

import R from "./RevealWrapper";

export default function CtaBanner() {
  return (
    <section className="py-20 px-8 bg-dark">
      <div className="max-w-[800px] mx-auto text-center">
        <R>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight leading-[1.3] mb-4">
            지금 바로 앵커라이브 2.0을
            <br />
            체험해보세요
          </h2>
        </R>
        <R delay={0.06}>
          <p className="text-base text-[#94A3B8] leading-[1.7] mb-9">
            무료 데모 체험과 전문 상담을 통해 귀사에 최적화된 방송 솔루션을 확인하세요.
            <br />
            도입부터 연동 완료까지 평균 2주, 전담 엔지니어가 함께합니다.
          </p>
        </R>
        <R delay={0.1}>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#demo"
              className="px-9 py-[14px] rounded-xl bg-primary text-white text-base font-semibold no-underline hover:bg-primary-dark transition-colors"
            >
              무료 데모 체험 →
            </a>
            <a
              href="#contact"
              className="px-9 py-[14px] rounded-xl bg-white/10 text-white text-base font-semibold no-underline border border-white/[.15] hover:bg-white/20 transition-colors"
            >
              도입 상담 신청
            </a>
          </div>
        </R>
      </div>
    </section>
  );
}
