"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "솔루션 소개", href: "#sol" },
  { label: "도입 사례", href: "#cases" },
  { label: "기술 스펙", href: "#tech" },
  { label: "데모 체험", href: "#demo" },
  { label: "FAQ", href: "#faq" },
  { label: "도입 문의", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="메인 내비게이션"
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300 ${
        scrolled
          ? "bg-white/[.92] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-black/[.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-site items-center justify-between px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-[7px] no-underline">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#E17055" />
            <path d="M8 14L12 10V12.5H18V15.5H12V18L8 14Z" fill="white" />
          </svg>
          <span className="text-[17px] font-bold text-dark tracking-tight">
            앵커라이브
            <span className="ml-1 text-xs font-semibold text-primary">2.0</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-[9px] rounded-[10px] bg-primary text-white text-sm font-semibold no-underline hover:bg-primary-dark transition-colors"
          >
            상담 신청
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-dark hover:bg-gray-50 transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-center px-4 py-3 rounded-[10px] bg-primary text-white text-base font-semibold no-underline"
          >
            상담 신청
          </a>
        </div>
      </div>
    </nav>
  );
}
