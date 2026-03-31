"use client";

import { useState } from "react";
import R from "./RevealWrapper";

const items = [
  {
    q: "앵커라이브 도입 시 별도 설치가 필요한가요?",
    a: "아닙니다. 앵커라이브 2.0은 WebRTC 기반 웹 솔루션으로 방송자와 시청자 모두 별도 프로그램 설치 없이 웹 브라우저(Chrome, Safari, Edge 등)만으로 이용 가능합니다.",
  },
  {
    q: "기존 홈페이지에 어떻게 연동하나요?",
    a: "URL 호출 방식으로 연동합니다. 고객사 웹 서버에서 방송 시작/시청 URL에 파라미터(type, site_no, user_id, room_code)를 전달하면 됩니다. 복잡한 서버 설정이나 SDK 설치가 필요하지 않으며, 보통 1~2주 내에 연동이 완료됩니다.",
  },
  {
    q: "동시 접속자 수 제한이 있나요?",
    a: "기본적으로 동시 접속자 수에 제한이 없습니다. AWS/IDC 이중화 구성과 자동 스케일링으로 수백~수천 명의 동시 접속을 안정적으로 처리합니다. 대규모 방송이 예상되는 경우 사전 협의를 통해 인프라를 준비해드립니다.",
  },
  {
    q: "방송 지연시간이 실제로 1초 미만인가요?",
    a: "네, WebRTC 기술 특성상 방송자에서 시청자까지 1초 미만의 지연시간을 제공합니다. 기존 RTMP/HLS 방식의 6~30초 지연과 비교해 획기적으로 빠르며, 실시간 시세 해설이 핵심인 증권방송에 최적화되어 있습니다.",
  },
  {
    q: "모바일에서도 방송을 진행할 수 있나요?",
    a: "현재 방송 송출은 PC 웹 브라우저에서 진행하며, 시청은 PC와 모바일(iOS Safari, Android Chrome) 모두에서 가능합니다. 모바일 방송 송출 기능은 향후 업데이트 예정입니다.",
  },
  {
    q: "요금 체계는 어떻게 되나요?",
    a: "고객사의 규모, 동시 접속 수, 녹화 용량 등에 따라 맞춤형 요금이 책정됩니다. 기본적으로 월 구독 방식이며, 상세한 요금은 상담을 통해 안내해드립니다. 무료 데모 체험 후 결정하실 수 있습니다.",
  },
  {
    q: "녹화된 방송은 어디에 저장되나요?",
    a: "녹화된 VOD는 앵커라이브 서버에 저장되며, 녹화 완료 시 고객사 서버로 녹화 정보(room_code 기반)를 콜백합니다. 장기 보관이 필요한 경우 별도 보관 등록 기능을 제공합니다.",
  },
  {
    q: "기존 앵커라이브 1.5에서 2.0으로 마이그레이션 가능한가요?",
    a: "네, 기존 앵커라이브 1.5 고객사의 경우 2.0으로의 마이그레이션을 지원합니다. 기존 사이트 구조를 유지하면서 URL 연동 방식만 변경하므로 최소한의 수정으로 전환이 가능합니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[100px] px-8 bg-gray-50">
      <div className="max-w-[760px] mx-auto">
        <R>
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-primary tracking-[.04em]">FAQ</span>
            <h2 className="text-heading-section text-dark mt-2.5">자주 묻는 질문</h2>
          </div>
        </R>

        <div className="flex flex-col gap-2">
          {items.map((it, i) => (
            <R key={i} delay={i * 0.03}>
              <div className="rounded-[14px] bg-white border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 border-none bg-transparent cursor-pointer flex justify-between items-center text-left"
                >
                  <span className="text-[15px] font-semibold text-dark flex-1 pr-4">{it.q}</span>
                  <span
                    className={`text-xl transition-transform duration-200 shrink-0 ${open === i ? "text-primary" : "text-gray-400"}`}
                    style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-[1.75]">{it.a}</p>
                  </div>
                )}
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}
