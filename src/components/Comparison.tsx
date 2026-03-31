"use client";

import R from "./RevealWrapper";

const rows = [
  { f: "설치 프로그램", o: "ActiveX / EXE 설치 필수", n: "설치 불필요 (웹 브라우저)", d: "시청자 이탈의 가장 큰 원인인 설치 장벽을 완전히 제거" },
  { f: "방송 지연시간", o: "6~30초 지연", n: "1초 미만 초저지연", d: "WebRTC 기술로 실시간 시세 해설에 최적화된 속도 제공" },
  { f: "모바일 시청", o: "iOS/Android 전용 앱 필수", n: "모바일 웹 즉시 시청", d: "앱 설치 없이 URL 접속만으로 모바일에서 바로 시청" },
  { f: "브라우저 호환", o: "IE/ActiveX 의존 (지원 종료)", n: "Chrome·Safari·Edge·Firefox", d: "모든 최신 브라우저를 공식 지원" },
  { f: "화면 공유", o: "별도 화면 캡처 프로그램", n: "브라우저 내장 화면 공유", d: "WebRTC 기본 기능으로 추가 프로그램 불필요" },
  { f: "연동 방식", o: "ActiveX COM 오브젝트", n: "URL 호출 방식 (REST)", d: "기존 사이트에 URL 파라미터만 전달하면 즉시 연동" },
];

export default function Comparison() {
  return (
    <section className="py-[100px] px-8 bg-gray-50">
      <div className="max-w-[1000px] mx-auto">
        <R>
          <div className="text-center mb-14">
            <span className="text-sm font-bold text-accent tracking-[.04em]">COMPARISON</span>
            <h2 className="text-heading-section text-dark mt-2.5">
              기존 솔루션 vs 앵커라이브 2.0
            </h2>
            <p className="text-base text-gray-500 mt-3">
              ActiveX 시대에서 WebRTC 시대로, 무엇이 달라졌는지 비교해보세요.
            </p>
          </div>
        </R>

        {/* Desktop table */}
        <R delay={0.08}>
          <div className="hidden md:block rounded-card overflow-hidden border border-gray-200 bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] px-6 py-3.5 bg-gray-100 border-b border-gray-200">
              <span className="text-[13px] font-bold text-gray-400">항목</span>
              <span className="text-[13px] font-bold text-gray-400">기존 방식</span>
              <span className="text-[13px] font-bold text-primary">앵커라이브 2.0</span>
            </div>
            {/* Rows */}
            {rows.map((r, i) => (
              <div key={i} className={i < rows.length - 1 ? "border-b border-gray-100" : ""}>
                <div className="grid grid-cols-[1fr_1.5fr_1.5fr] px-6 py-4 items-start">
                  <span className="text-sm font-bold text-dark">{r.f}</span>
                  <span className="text-sm text-gray-400">✕ {r.o}</span>
                  <span className="text-sm font-semibold text-primary">✓ {r.n}</span>
                </div>
                <div className="px-6 pb-3.5">
                  <span className="text-[13px] text-gray-400 italic">{r.d}</span>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* Mobile cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {rows.map((r, i) => (
            <R key={i} delay={i * 0.04}>
              <div className="rounded-card p-5 bg-white border border-gray-200">
                <p className="text-sm font-bold text-dark mb-2">{r.f}</p>
                <p className="text-sm text-gray-400">✕ {r.o}</p>
                <p className="text-sm font-semibold text-primary mt-1">✓ {r.n}</p>
                <p className="text-[13px] text-gray-400 italic mt-2">{r.d}</p>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}
