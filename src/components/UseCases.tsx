"use client";

import { TrendingDown, Smartphone, Users } from "lucide-react";
import R from "./RevealWrapper";

const cases = [
  {
    icon: TrendingDown,
    tag: "증권 투자자문사",
    company: "뉴지스탁",
    title: "ActiveX 제거 후 시청자 이탈률 40% 감소",
    stat: [
      { n: "40%", l: "이탈률 감소", accent: true },
      { n: "2주", l: "도입 완료", accent: false },
      { n: "3배", l: "모바일 시청 증가", accent: false },
    ],
    desc: "ActiveX 기반 방송에서 웹 방송으로 전환한 이후 설치 장벽이 사라지면서 신규 시청자 유입이 크게 증가했습니다. 특히 모바일 시청자가 3배 이상 늘어 유료 회원 전환율 상승에 직접적으로 기여했습니다.",
    quote: "설치하라고 하면 바로 이탈하던 분들이 이제 URL만 클릭하면 됩니다.",
    quoteName: "박정훈 CTO",
  },
  {
    icon: Smartphone,
    tag: "코인 방송 플랫폼",
    company: "코인티비",
    title: "앱 없이 모바일 시청 전환, 24시간 무중단 운영",
    stat: [
      { n: "60%", l: "모바일 비율", accent: true },
      { n: "Zero", l: "앱 설치 필요", accent: false },
      { n: "24/7", l: "무중단 운영", accent: false },
    ],
    desc: "코인 시장 특성상 24시간 방송이 필수적입니다. 기존에는 별도 앱이 필요했으나 웹 방송 전환 후 앱 없이도 모바일에서 바로 시청 가능해져 접근성이 크게 개선되었습니다.",
    quote: "6개월간 단 한 번도 방송이 끊긴 적이 없습니다. 안정성이 핵심이었는데 완벽합니다.",
    quoteName: "이승현 대표",
  },
  {
    icon: Users,
    tag: "교육 플랫폼",
    company: "트레이드스터디",
    title: "500+ 동시접속 실시간 교육 방송 + VOD 자동 생성",
    stat: [
      { n: "500+", l: "동시 접속", accent: true },
      { n: "<1초", l: "지연 시간", accent: false },
      { n: "VOD", l: "자동 변환", accent: false },
    ],
    desc: "주식 교육 플랫폼에서 실시간 강의와 VOD 재시청을 모두 활용 중입니다. 방송 녹화가 자동으로 VOD로 변환되어 수강생들이 언제든 다시 볼 수 있는 구조를 구축했습니다.",
    quote: "녹화 버튼 한 번이면 VOD가 자동 생성돼서 운영 부담이 크게 줄었어요.",
    quoteName: "김태영 개발팀장",
  },
];

export default function UseCases() {
  return (
    <section id="cases" className="py-[100px] px-8 bg-gray-50">
      <div className="max-w-site mx-auto">
        <R>
          <div className="mb-14">
            <span className="text-sm font-bold text-primary tracking-[.04em]">USE CASES</span>
            <h2 className="text-heading-section text-dark mt-2.5 mb-3.5">도입 사례</h2>
            <p className="text-base text-gray-500">
              다양한 업종에서 앵커라이브를 어떻게 활용하고 있는지 확인하세요.
            </p>
          </div>
        </R>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <R key={i} delay={i * 0.06}>
                <div className="p-10 rounded-[20px] bg-white border border-gray-200 hover:shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[13px] font-bold text-primary">{c.tag}</span>
                    <span className="text-[13px] text-gray-400 ml-1">| {c.company}</span>
                  </div>
                  <h3 className="text-[clamp(20px,2.5vw,26px)] font-extrabold text-dark tracking-tight mt-2 mb-5">
                    {c.title}
                  </h3>
                  <div className="flex flex-wrap gap-8 mb-5">
                    {c.stat.map((s) => (
                      <div key={s.l}>
                        <span className={`text-[28px] font-extrabold ${s.accent ? "text-primary" : "text-dark"}`}>
                          {s.n}
                        </span>
                        <span className="block text-[13px] text-gray-400 mt-0.5">{s.l}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[15px] text-gray-600 leading-[1.75] max-w-[700px] mb-5">
                    {c.desc}
                  </p>
                  {/* Inline testimonial */}
                  <div className="pl-4 border-l-2 border-primary/30">
                    <p className="text-sm text-gray-500 italic leading-[1.7]">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5 font-semibold">
                      — {c.quoteName}, {c.company}
                    </p>
                  </div>
                </div>
              </R>
            );
          })}
        </div>
      </div>
    </section>
  );
}
