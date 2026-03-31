"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* Company info */}
        <div>
          <div className="flex items-center gap-1.5 mb-3.5">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#E17055" />
              <path d="M8 14L12 10V12.5H18V15.5H12V18L8 14Z" fill="white" />
            </svg>
            <span className="text-[15px] font-bold text-dark">앵커라이브 2.0</span>
          </div>
          <div className="text-[13px] text-gray-400 leading-[1.9]">
            ㈜소프트브리지
            <br />
            서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
            <br />
            02-2085-6102 · 02-2085-6105
            <br />
            tom@softbridge.co.kr
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">솔루션</h4>
          {[
            { label: "실시간 방송", href: "#sol" },
            { label: "VOD 녹화", href: "#sol" },
            { label: "화면 공유", href: "#sol" },
            { label: "채팅 시스템", href: "#sol" },
            { label: "기술 스펙", href: "#tech" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="block text-[13px] text-gray-500 no-underline mb-2 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">고객지원</h4>
          {[
            { label: "도입 문의", href: "#contact" },
            { label: "데모 체험", href: "#demo" },
            { label: "요금 안내", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="block text-[13px] text-gray-500 no-underline mb-2 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">연락처</h4>
          <div className="flex flex-col gap-2 text-[13px] text-gray-500">
            <span>영업 문의: 02-2085-6102</span>
            <span>기술 지원: 02-2085-6105</span>
            <span>이메일: tom@softbridge.co.kr</span>
            <a
              href="#contact"
              className="inline-block mt-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-[13px] font-semibold no-underline hover:bg-primary/20 transition-colors text-center"
            >
              상담 신청
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-site mx-auto mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} SoftBridge Co., Ltd. All rights reserved.</span>
        <span className="text-xs text-gray-400">개인정보처리방침 · 이용약관</span>
      </div>
    </footer>
  );
}
