"use client";

import R from "./RevealWrapper";

const cases = [
  {
    tag: "증권 투자자문사",
    title: "K투자자문 — 시청자 이탈률 40% 감소",
    stat: [
      { n: "40%↓", l: "이탈률 감소" },
      { n: "2주", l: "도입 완료" },
      { n: "3배", l: "모바일 시청" },
    ],
    desc: "기존 ActiveX 기반 방송에서 웹 방송으로 전환. 설치 장벽이 사라지면서 시청자 유입이 크게 증가했고, 특히 모바일 시청자가 3배 이상 늘었습니다. 연동은 기존 사이트 URL 수정만으로 2주 만에 완료.",
  },
  {
    tag: "코인 방송",
    title: "C코인방송 — 앱 없이 모바일 시청 전환",
    stat: [
      { n: "60%", l: "모바일 비율" },
      { n: "Zero", l: "앱 설치" },
      { n: "24/7", l: "무중단 운영" },
    ],
    desc: "코인 시장 특성상 24시간 방송이 필수. 기존에는 별도 앱이 필요했으나 웹 방송 전환 후 앱 없이도 모바일에서 바로 시청 가능해져 접근성이 크게 개선되었습니다.",
  },
  {
    tag: "교육 플랫폼",
    title: "T트레이드스터디 — 실시간 교육 방송 운영",
    stat: [
      { n: "500+", l: "동시 접속" },
      { n: "<1초", l: "지연 시간" },
      { n: "VOD", l: "자동 생성" },
    ],
    desc: "주식 교육 플랫폼에서 실시간 강의와 VOD 재시청을 모두 활용. 방송 녹화가 자동으로 VOD로 변환되어 수강생들이 언제든 다시 볼 수 있는 구조를 구축했습니다.",
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
          {cases.map((c, i) => (
            <R key={i} delay={i * 0.06}>
              <div className="p-10 rounded-[20px] bg-white border border-gray-200">
                <span className="text-[13px] font-bold text-primary">{c.tag}</span>
                <h3 className="text-[clamp(20px,2.5vw,26px)] font-extrabold text-dark tracking-tight mt-2 mb-5">
                  {c.title}
                </h3>
                <div className="flex flex-wrap gap-8 mb-5">
                  {c.stat.map((s) => (
                    <div key={s.l}>
                      <span className="text-[28px] font-extrabold text-primary">{s.n}</span>
                      <span className="block text-[13px] text-gray-400 mt-0.5">{s.l}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.75] max-w-[700px]">{c.desc}</p>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}
