"use client";

import { Quote } from "lucide-react";
import R from "./RevealWrapper";

const testimonials = [
  {
    quote:
      "ActiveX 기반 방송에서 전환한 이후 시청자 이탈률이 눈에 띄게 줄었습니다. 특히 모바일 시청이 가능해지면서 유료 회원 전환율이 크게 올랐어요.",
    name: "박정훈",
    role: "CTO",
    company: "뉴지스탁",
    highlight: "시청자 이탈률 40% 감소",
  },
  {
    quote:
      "연동이 정말 간단했습니다. URL 파라미터만 전달하면 되니까 기존 사이트 구조를 거의 건드리지 않고 2주 만에 라이브 방송 기능을 붙일 수 있었습니다.",
    name: "김태영",
    role: "개발팀장",
    company: "815TV",
    highlight: "2주 만에 연동 완료",
  },
  {
    quote:
      "24시간 코인 방송 특성상 안정성이 가장 중요한데, 6개월간 무중단으로 운영되고 있습니다. 앱 없이 모바일 시청이 되는 것도 큰 장점이에요.",
    name: "이승현",
    role: "대표",
    company: "코인티비",
    highlight: "6개월 무중단 운영",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[100px] px-8 bg-white">
      <div className="max-w-site mx-auto">
        <R>
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-primary tracking-[.04em]">
              TESTIMONIALS
            </span>
            <h2 className="text-heading-section text-dark mt-2.5 mb-3.5">
              고객사가 직접 전하는 이야기
            </h2>
            <p className="text-base text-gray-500">
              실제 도입 고객사 담당자들의 생생한 후기입니다.
            </p>
          </div>
        </R>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <R key={i} delay={i * 0.08}>
              <div className="relative p-8 rounded-[20px] bg-gray-50 border border-gray-200 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,.06)] hover:border-primary/20 transition-all">
                <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />
                <p className="text-[15px] text-gray-600 leading-[1.8] flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {t.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-dark">
                      {t.name}
                      <span className="font-normal text-gray-400 ml-1.5">
                        {t.role}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">{t.company}</p>
                  </div>
                </div>
                <div className="mt-4 px-3 py-1.5 rounded-full bg-primary/[.06] inline-flex self-start">
                  <span className="text-xs font-semibold text-primary">
                    {t.highlight}
                  </span>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}
