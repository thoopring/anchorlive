"use client";

const clients = [
  "MTN PLUS", "SBS CNBC", "이베스트증권", "아시아경제TV",
  "뉴지스탁", "815TV", "JPTV", "여의도증권방송",
  "트레이드스터디", "조은스탁", "코인티비", "GB스탁스",
];

export default function TrustBar() {
  return (
    <section className="py-12 px-8 bg-white border-t border-b border-gray-200">
      <div className="max-w-site mx-auto text-center">
        <p className="text-[13px] font-semibold text-gray-400 tracking-wide mb-5">
          150개 이상의 증권·코인 방송사가 사용 중
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {clients.map((c) => (
            <span
              key={c}
              className="px-[18px] py-2 rounded-full bg-gray-50 text-[13px] font-semibold text-gray-500 border border-gray-200 hover:bg-primary-light hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
