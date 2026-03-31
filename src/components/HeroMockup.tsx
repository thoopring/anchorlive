"use client";

/**
 * CSS-only product mockup for the Hero section.
 * Renders a realistic broadcast interface preview without requiring an image file.
 * Replace this with an actual screenshot/image when available.
 */
export default function HeroMockup() {
  return (
    <div className="rounded-[20px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,.12)] bg-[#0F172A] border border-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1E293B] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-[#0F172A] rounded-md px-3 py-1 text-[10px] font-mono text-[#64748B] truncate">
            live.anchorlive.co.kr/broadcasterLive
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-[1fr_200px] gap-0 relative" style={{ minHeight: 280 }}>
        {/* Video area */}
        <div className="relative p-3">
          {/* Main screen share area */}
          <div className="rounded-lg overflow-hidden relative" style={{ background: "linear-gradient(135deg, #1a2332 0%, #0d1421 100%)" }}>
            {/* Fake chart */}
            <div className="p-4 pb-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-[#64748B]">KOSPI 2,687.45</span>
                <span className="text-[10px] font-mono text-[#22C55E]">+1.23%</span>
              </div>
              {/* Chart bars */}
              <div className="flex items-end gap-[3px] h-[80px]">
                {[40, 55, 35, 65, 50, 72, 45, 60, 80, 55, 70, 48, 62, 75, 58, 85, 65, 70, 90, 72, 68, 78, 82, 76].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-[1px]"
                    style={{
                      height: `${h}%`,
                      background: i > 18 ? "#22C55E" : i > 14 ? "#EF4444" : "#334155",
                    }}
                  />
                ))}
              </div>
              {/* Candlestick simulation */}
              <div className="flex items-end gap-[2px] h-[50px] mt-2">
                {[30, 45, 25, 55, 40, 60, 35, 50, 70, 45, 58, 38, 52, 65, 48, 72, 55, 62, 78, 60].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0">
                    <div
                      className="w-[1px] rounded-full"
                      style={{
                        height: `${h * 0.3}%`,
                        background: i % 3 === 0 ? "#EF4444" : "#22C55E",
                      }}
                    />
                    <div
                      className="w-full rounded-[1px]"
                      style={{
                        height: `${h * 0.5}%`,
                        background: i % 3 === 0 ? "#EF4444" : "#22C55E",
                      }}
                    />
                    <div
                      className="w-[1px] rounded-full"
                      style={{
                        height: `${h * 0.2}%`,
                        background: i % 3 === 0 ? "#EF4444" : "#22C55E",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Drawing overlay indicator */}
            <div className="absolute top-3 right-3 flex gap-1.5">
              <div className="px-2 py-0.5 rounded bg-[#EF4444]/80 text-[9px] font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: "pulse 2s infinite" }} />
                LIVE
              </div>
              <div className="px-2 py-0.5 rounded bg-white/10 text-[9px] text-white/60">
                REC
              </div>
            </div>

            {/* PIP window */}
            <div className="absolute bottom-3 right-3 w-[80px] h-[60px] rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E17055 0%, #C0513A 100%)" }}
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between mt-2 px-1">
            <div className="flex gap-2">
              {["mic", "cam", "share", "draw", "bg"].map((tool) => (
                <div
                  key={tool}
                  className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-sm bg-[#64748B]" />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="px-2.5 py-1 rounded-md bg-[#EF4444]/20 text-[9px] font-semibold text-[#EF4444]">
                방송 종료
              </div>
            </div>
          </div>
        </div>

        {/* Chat sidebar */}
        <div className="border-l border-white/5 flex flex-col">
          <div className="px-3 py-2 border-b border-white/5">
            <span className="text-[10px] font-semibold text-white/60">실시간 채팅</span>
            <span className="text-[9px] text-[#64748B] ml-1.5">127명</span>
          </div>
          <div className="flex-1 px-3 py-2 flex flex-col gap-1.5 overflow-hidden">
            {[
              { name: "김투자", msg: "지금 진입 타이밍 맞나요?", color: "#22C55E" },
              { name: "박차트", msg: "감사합니다 선생님", color: "#3B82F6" },
              { name: "이매수", msg: "목표가 얼마로 보시나요", color: "#F59E0B" },
              { name: "최분석", msg: "MACD 골든크로스!", color: "#8B5CF6" },
              { name: "정수익", msg: "오늘 수익 인증합니다", color: "#EC4899" },
              { name: "한종목", msg: "다음 종목 기대됩니다", color: "#14B8A6" },
              { name: "윤매매", msg: "손절 라인은 어디인가요?", color: "#F97316" },
            ].map((chat, i) => (
              <div key={i} className="flex gap-1.5 items-start">
                <span
                  className="text-[9px] font-semibold shrink-0 mt-[1px]"
                  style={{ color: chat.color }}
                >
                  {chat.name}
                </span>
                <span className="text-[9px] text-[#94A3B8] leading-tight">{chat.msg}</span>
              </div>
            ))}
          </div>
          {/* Chat input */}
          <div className="px-2 py-2 border-t border-white/5">
            <div className="bg-white/5 rounded-md px-2 py-1.5 text-[9px] text-[#475569]">
              메시지를 입력하세요...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
