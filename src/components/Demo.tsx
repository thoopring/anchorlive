"use client";

import { useState } from "react";
import { Mic, MonitorPlay, Phone, Smartphone } from "lucide-react";
import R from "./RevealWrapper";

export default function Demo() {
  const [tab, setTab] = useState<"cast" | "view">("cast");

  return (
    <section id="demo" className="py-[100px] px-8 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <R>
          <span className="text-sm font-bold text-primary tracking-[.04em]">LIVE DEMO</span>
          <h2 className="text-heading-section text-dark mt-2.5 mb-3">직접 체험해보세요</h2>
          <p className="text-base text-gray-500 mb-10">
            방송자와 시청자 화면을 모두 체험할 수 있습니다. 회원가입 없이 즉시 이용 가능합니다.
          </p>
        </R>

        <R delay={0.05}>
          <div className="inline-flex rounded-xl bg-gray-100 p-1 mb-10" role="tablist">
            {[
              { k: "cast" as const, l: "방송자 체험", icon: Mic },
              { k: "view" as const, l: "시청자 체험", icon: MonitorPlay },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.k}
                  role="tab"
                  aria-selected={tab === t.k}
                  onClick={() => setTab(t.k)}
                  className={`flex items-center gap-1.5 px-7 py-[11px] rounded-[9px] border-none cursor-pointer text-sm font-semibold transition-all ${
                    tab === t.k
                      ? "bg-white text-dark shadow-[0_1px_4px_rgba(0,0,0,.06)]"
                      : "bg-transparent text-gray-500"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t.l}
                </button>
              );
            })}
          </div>
        </R>

        <R delay={0.1}>
          <div className="bg-gray-50 rounded-[20px] p-8 md:p-12 border border-gray-200 text-left">
            {tab === "cast" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-[22px] font-bold text-dark mb-3">방송자 데모</h3>
                  <p className="text-[15px] text-gray-500 leading-[1.7] mb-2">
                    실제 방송 환경과 동일한 화면에서 다음 기능을 체험할 수 있습니다:
                  </p>
                  <div className="flex flex-col gap-1.5 mb-6">
                    {[
                      "마이크·카메라 설정 및 테스트",
                      "화면 공유 (탭/전체화면)",
                      "PIP 모드 (위치·크기 조절)",
                      "실시간 그리기 도구",
                      "가상배경 (투명/흐림)",
                      "방송 녹화 기능",
                    ].map((t) => (
                      <span key={t} className="text-sm text-gray-600 flex items-center gap-1.5">
                        <span className="text-[11px] text-primary">✓</span>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://live.anchorlive.co.kr/broadcasterLive?type=F&site_no=1&user_id=demo&room_code=DEMO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[13px] rounded-[10px] bg-dark text-white text-[15px] font-semibold no-underline hover:bg-gray-800 transition-colors"
                  >
                    방송 시작하기 →
                  </a>
                </div>
                <div className="bg-dark rounded-card p-5 text-center">
                  <div
                    className="rounded-[10px] h-[180px] flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(180deg, #1E293B, #0F172A)" }}
                  >
                    <Mic className="w-12 h-12 text-white/20" />
                  </div>
                  <p className="text-xs text-[#64748B]">클릭 시 새 창에서 방송 화면이 열립니다</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-[22px] font-bold text-dark mb-3">시청자 데모</h3>
                  <p className="text-[15px] text-gray-500 leading-[1.7] mb-2">
                    PC와 모바일에서 각각 최적화된 시청 환경을 체험합니다:
                  </p>
                  <div className="flex flex-col gap-1.5 mb-6">
                    {[
                      "실시간 영상 시청 (1초 미만 지연)",
                      "화질 선택 (저/중/고해상도/자동)",
                      "양방향 실시간 채팅",
                      "음량 조절 및 전체화면",
                      "접속자 리스트 확인",
                    ].map((t) => (
                      <span key={t} className="text-sm text-gray-600 flex items-center gap-1.5">
                        <span className="text-[11px] text-accent">✓</span>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2.5 flex-wrap">
                    <a
                      href="https://live.anchorlive.co.kr/viewerLive?type=F&site_no=1&user_id=viewer&room_code=DEMO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-7 py-[13px] rounded-[10px] bg-dark text-white text-[15px] font-semibold no-underline hover:bg-gray-800 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      PC 시청 →
                    </a>
                    <a
                      href="https://live.anchorlive.co.kr/mo/moViewLive?type=F&site_no=1&user_id=viewer&room_code=DEMO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-7 py-[13px] rounded-[10px] bg-gray-100 text-gray-800 text-[15px] font-semibold no-underline hover:bg-gray-200 transition-colors"
                    >
                      <Smartphone className="w-4 h-4" />
                      모바일 시청 →
                    </a>
                  </div>
                </div>
                <div className="bg-dark rounded-card p-5 text-center">
                  <div
                    className="rounded-[10px] h-[180px] flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(180deg, #1E293B, #0F172A)" }}
                  >
                    <MonitorPlay className="w-12 h-12 text-white/20" />
                  </div>
                  <p className="text-xs text-[#64748B]">PC/모바일 각각 최적화된 화면이 열립니다</p>
                </div>
              </div>
            )}
          </div>
        </R>
      </div>
    </section>
  );
}
