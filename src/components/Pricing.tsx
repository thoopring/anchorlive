"use client";

import { Check } from "lucide-react";
import R from "./RevealWrapper";

const plans = [
  {
    name: "Starter",
    desc: "소규모 방송을 시작하는 팀",
    price: "월 49만원~",
    unit: "채널당",
    features: [
      "동시 접속 100명",
      "HD 화질 (720p)",
      "실시간 채팅",
      "화면 공유",
      "기본 기술 지원",
      "월 녹화 10시간",
    ],
    cta: "데모 체험",
    ctaHref: "#demo",
    ctaStyle: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    popular: false,
  },
  {
    name: "Professional",
    desc: "전문 증권·코인 방송사",
    price: "월 149만원~",
    unit: "채널당",
    features: [
      "동시 접속 500명",
      "Full HD 화질 (1080p)",
      "양방향 채팅 + 귓속말",
      "PIP + 실시간 그리기",
      "AI 가상배경",
      "월 녹화 무제한",
      "VOD 자동 변환",
      "전담 기술 매니저",
    ],
    cta: "상담 신청",
    ctaHref: "#contact",
    ctaStyle: "bg-primary text-white hover:bg-primary-dark",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "대형 증권사·플랫폼 사업자",
    price: "맞춤 견적",
    unit: "협의",
    features: [
      "동시 접속 무제한",
      "4K 지원 + ABR",
      "전체 기능 포함",
      "On-Premise / 하이브리드",
      "SLA 99.9% 보장",
      "24/7 전용 기술 지원",
      "커스텀 UI/API 개발",
      "전담 프로젝트 매니저",
    ],
    cta: "별도 문의",
    ctaHref: "#contact",
    ctaStyle: "bg-dark text-white hover:bg-gray-800",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-[100px] px-8 bg-gray-50">
      <div className="max-w-site mx-auto">
        <R>
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary tracking-[.04em]">
              PRICING
            </span>
            <h2 className="text-heading-section text-dark mt-2.5 mb-3.5">
              합리적인 요금 체계
            </h2>
            <p className="text-base text-gray-500 max-w-[480px] mx-auto leading-[1.7]">
              고객사 규모와 필요에 맞는 플랜을 선택하세요.
              <br />
              모든 플랜은 무료 데모 체험 후 결정할 수 있습니다.
            </p>
          </div>
        </R>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <R key={i} delay={i * 0.08}>
              <div
                className={`relative p-8 rounded-[20px] h-full flex flex-col ${
                  plan.popular
                    ? "bg-white border-2 border-primary shadow-[0_8px_40px_rgba(225,112,85,.12)]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold">
                    가장 인기
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-dark">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <span className="text-[28px] font-extrabold text-dark">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400 ml-1.5">
                    / {plan.unit}
                  </span>
                </div>

                <div className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.ctaHref}
                  className={`block text-center px-6 py-[13px] rounded-xl text-[15px] font-semibold no-underline transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            </R>
          ))}
        </div>

        <R delay={0.3}>
          <p className="text-center text-[13px] text-gray-400 mt-8">
            * 표시된 가격은 연간 계약 기준 참고 가격이며, 정확한 견적은 상담을
            통해 안내해드립니다.
          </p>
        </R>
      </div>
    </section>
  );
}
