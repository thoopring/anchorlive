"use client";

import { useState } from "react";
import { Mic, MonitorPlay, Phone, Smartphone, ExternalLink } from "lucide-react";
import R from "./RevealWrapper";

export default function Demo() {
  const [tab, setTab] = useState<"cast" | "view">("cast");

  return (
    <section id="demo" className="py-[100px] px-8 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <R>
          <span className="text-sm font-bold text-primary tracking-[.04em]">LIVE DEMO</span>
          <h2 className="text-heading-section text-dark mt-2.5 mb-3">직접 체험해보세요</h2>
          <p className="text-base text-gray-500 mb-3">
            방송자와 시청자 화면을 모두 체험할 수 있습니다. 회원가입 없이 즉시 이용 가능합니다.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-xs font-semibold text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: "pulse 2s infinite" }} />
            데모 서버 운영 중
          </div>
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
                        <span className="text-[11px] text-primary">&#10003;</span>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://live.anchorlive.co.kr/broadcasterLive?type=F&site_no=1&user_id=demo&room_code=DEMO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-[13px] rounded-[10px] bg-dark text-white text-[15px] font-semibold no-underline hover:bg-gray-800 transition-colors"
                  >
                    방송 시작하기
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                {/* Broadcaster preview mockup */}
                <div className="bg-[#0F172A] rounded-card p-4 border border-white/5">
                  <div className="rounded-lg overflow-hidden" style={{ background: "linear-gradient(180deg, #1E293B, #0F172A)" }}>
                    <div className="p-4 pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-0.5 rounded bg-red-500/80 text-[9px] font-bold text-white flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: "pulse 2s infinite" }} />
                            LIVE
                          </div>
                          <span className="text-[10px] text-[#64748B]">00:15:32</span>
                        </div>
                        <span className="text-[10px] text-[#64748B]">127명 시청 중</span>
                      </div>
                      {/* Chart area */}
                      <div className="h-[100px] flex items-end gap-[2px] mb-3">
                        {Array.from({ length: 30 }, (_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-[1px]"
                            style={{
                              height: `${30 + Math.sin(i * 0.5) * 25 + Math.random() * 20}%`,
                              background: i > 22 ? "#22C55E" : "#334155",
                            }}
                          />
                        ))}
                      </div>
                      {/* Toolbar */}
                      <div className="flex gap-1.5">
                        {["MIC", "CAM", "화면", "그리기", "배경"].map((t) => (
                          <div key={t} className="px-2 py-1 rounded bg-white/5 text-[8px] text-[#94A3B8]">
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#64748B] text-center mt-3">클릭 시 새 창에서 방송 화면이 열립니다</p>
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
                        <span className="text-[11px] text-accent">&#10003;</span>
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
                      PC 시청
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                    <a
                      href="https://live.anchorlive.co.kr/mo/moViewLive?type=F&site_no=1&user_id=viewer&room_code=DEMO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-7 py-[13px] rounded-[10px] bg-gray-100 text-gray-800 text-[15px] font-semibold no-underline hover:bg-gray-200 transition-colors"
                    >
                      <Smartphone className="w-4 h-4" />
                      모바일 시청
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>
                {/* Viewer preview mockup */}
                <div className="bg-[#0F172A] rounded-card p-4 border border-white/5">
                  <div className="grid grid-cols-[1fr_120px] gap-0 rounded-lg overflow-hidden" style={{ background: "linear-gradient(180deg, #1E293B, #0F172A)" }}>
                    {/* Video */}
                    <div className="p-3">
                      <div className="h-[120px] rounded bg-gradient-to-br from-[#1a2332] to-[#0d1421] flex items-center justify-center mb-2">
                        <MonitorPlay className="w-8 h-8 text-white/10" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] text-[#94A3B8]">720p</div>
                        <div className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] text-[#94A3B8]">1x</div>
                        <div className="flex-1" />
                        <div className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] text-[#94A3B8]">전체화면</div>
                      </div>
                    </div>
                    {/* Chat */}
                    <div className="border-l border-white/5 p-2 flex flex-col">
                      <span className="text-[8px] text-white/40 mb-1.5">채팅</span>
                      <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                        {[
                          { name: "김투자", msg: "감사합니다" },
                          { name: "박차트", msg: "진입가 알려주세요" },
                          { name: "이분석", msg: "좋은 방송이에요" },
                          { name: "최매매", msg: "목표가는요?" },
                        ].map((c, i) => (
                          <div key={i} className="text-[7px]">
                            <span className="text-[#3B82F6]">{c.name}</span>
                            <span className="text-[#64748B] ml-1">{c.msg}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#64748B] text-center mt-3">PC/모바일 각각 최적화된 화면이 열립니다</p>
                </div>
              </div>
            )}
          </div>
        </R>

        {/* Demo guide */}
        <R delay={0.15}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { step: "1", title: "데모 페이지 접속", desc: "위 버튼을 클릭하면 새 창에서 방송/시청 화면이 열립니다." },
              { step: "2", title: "기능 체험", desc: "화면 공유, PIP, 실시간 그리기, 채팅 등 주요 기능을 직접 사용해보세요." },
              { step: "3", title: "상담 신청", desc: "체험 후 도입 문의를 주시면 전담 매니저가 맞춤 안내해드립니다." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3 p-4 rounded-card bg-gray-50 border border-gray-200">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-dark mb-0.5">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}
