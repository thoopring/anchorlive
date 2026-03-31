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
            ㈜소프트브리지 | 대표이사
            <br />
            사업자등록번호: 000-00-00000
            <br />
            서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
            <br />
            02-2085-6102 · tom@softbridge.co.kr
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">솔루션</h4>
          {["실시간 방송", "VOD 녹화", "화면 공유", "채팅 시스템", "연동 가이드"].map((l) => (
            <a key={l} href="#sol" className="block text-[13px] text-gray-500 no-underline mb-2 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">고객지원</h4>
          {[
            { label: "도입 문의", href: "#contact" },
            { label: "데모 체험", href: "#demo" },
            { label: "기술 문서", href: "#tech" },
            { label: "FAQ", href: "#faq" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="block text-[13px] text-gray-500 no-underline mb-2 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[13px] font-bold text-dark mb-3.5">회사</h4>
          {["회사 소개", "연혁", "채용", "블로그"].map((l) => (
            <a key={l} href="#" className="block text-[13px] text-gray-500 no-underline mb-2 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-site mx-auto mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-xs text-gray-400">© 2026 SoftBridge Co., Ltd. All rights reserved.</span>
        <span className="text-xs text-gray-400">개인정보처리방침 · 이용약관</span>
      </div>
    </footer>
  );
}
