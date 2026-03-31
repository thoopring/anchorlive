"use client";

import R from "./RevealWrapper";

const techCards = [
  {
    title: "WebRTC 코어",
    items: [
      "Web Real-Time Communication 표준",
      "SFU (Selective Forwarding Unit) 서버",
      "적응형 비트레이트 (ABR) 지원",
      "DTLS-SRTP 암호화 통신",
    ],
  },
  {
    title: "서버 인프라",
    items: [
      "Spring Framework 기반 백엔드",
      "AWS/IDC 이중화 구성",
      "자동 스케일링 (동시접속 대응)",
      "99.9% SLA 가동률 보장",
    ],
  },
  {
    title: "클라이언트",
    items: [
      "순수 웹 기술 (HTML5/JS)",
      "반응형 UI (PC/태블릿/모바일)",
      "Chrome 80+, Safari 14+, Edge 80+",
      "iOS Safari, Android Chrome 지원",
    ],
  },
];

const broadcasterCode = `https://live.anchorlive.co.kr
  /broadcasterLive
  ?type=P          // P:유료, F:무료
  &site_no=1       // 사이트 번호
  &user_id=expert  // 전문가 ID
  &room_code=ACL20260401`;

const viewerCode = `// PC
https://live.anchorlive.co.kr
  /viewerLive?type=P&site_no=1
  &user_id=user01&room_code=ACL...

// Mobile
https://live.anchorlive.co.kr
  /mo/moViewLive?type=P&site_no=1
  &user_id=user01&room_code=ACL...`;

export default function TechSpec() {
  return (
    <section id="tech" className="py-[100px] px-8 bg-white">
      <div className="max-w-site mx-auto">
        <R>
          <div className="mb-14">
            <span className="text-sm font-bold text-primary tracking-[.04em]">TECHNOLOGY</span>
            <h2 className="text-heading-section text-dark mt-2.5 mb-3.5">
              기술 스펙 & 연동 구조
            </h2>
            <p className="text-base text-gray-500 leading-[1.7] max-w-[600px]">
              WebRTC 기술 기반으로 설계된 앵커라이브 2.0의 기술 아키텍처와 연동 방식을 확인하세요.
            </p>
          </div>
        </R>

        {/* 3-column tech cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {techCards.map((card, i) => (
            <R key={i} delay={i * 0.06}>
              <div className="p-7 rounded-card bg-gray-50 border border-gray-200 h-full">
                <h4 className="text-base font-bold text-dark mb-4">{card.title}</h4>
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 mb-2.5">
                    <span className="text-xs text-primary mt-[3px] shrink-0">●</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </R>
          ))}
        </div>

        {/* Integration flow */}
        <R delay={0.1}>
          <div className="p-9 rounded-card bg-[#0F172A] text-[#CBD5E1]">
            <h4 className="text-base font-bold text-[#E2E8F0] mb-1.5">연동 구조</h4>
            <p className="text-sm text-[#64748B] mb-5">
              URL 호출 기반의 심플한 연동. 고객사 웹 서버에서 파라미터를 전달하면 방송이 시작됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <p className="text-xs font-semibold text-primary mb-2">방송자 URL</p>
                <pre className="text-[13px] font-mono leading-[1.7] text-[#94A3B8] bg-black/30 p-4 rounded-[10px] overflow-auto">
                  {broadcasterCode}
                </pre>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent mb-2">시청자 URL (PC/Mobile 자동 분기)</p>
                <pre className="text-[13px] font-mono leading-[1.7] text-[#94A3B8] bg-black/30 p-4 rounded-[10px] overflow-auto">
                  {viewerCode}
                </pre>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}
