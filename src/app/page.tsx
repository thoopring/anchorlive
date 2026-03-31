"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Anchor,
  ChevronDown,
  Mic,
  Monitor,
  Camera,
  Pencil,
  Settings,
  Play,
  Users,
  Send,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

/* ───────────────────────── 공통 ───────────────────────── */

const DEMO_BASE = "https://live.anchorlive.co.kr";
const DEMO_PARAMS = "type=F&site_no=1&user_id=demo&room_code=DEMO";

function useFadeUp() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      hidden: {},
      visible: () => ({}),
    };
  }
  return {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
    }),
  };
}

const clients = [
  "MTN PLUS", "SBS CNBC", "이베스트증권", "아시아경제TV",
  "뉴지스탁", "코인티비", "815TV", "JPTV",
  "여의도증권방송", "조은스탁", "트레이드스터디", "몬스터투자클럽",
  "GB스탁스", "씽크인베스트", "평택촌놈", "수급마스터",
];

const reviews = [
  { company: "MTN PLUS", text: "ActiveX 없이 바로 방송 가능해서 시청자 이탈이 확 줄었습니다.", name: "김O수 PD" },
  { company: "코인티비", text: "모바일 시청자가 60% 넘는데, 앱 설치 없이 바로 접속되니 만족도가 높습니다.", name: "이O진 대표" },
  { company: "뉴지스탁", text: "기존 HLS 대비 지연이 거의 없어서 실시간 매매 방송에 최적입니다.", name: "박O현 팀장" },
];

const navLinks = [
  { href: "#features", label: "기능 소개" },
  { href: "#clients", label: "고객사" },
  { href: "#demo", label: "데모 체험" },
  { href: "#contact", label: "도입 문의" },
];

/* ────────────────────── 1. Navigation ────────────────────── */

function Navigation() {
  const [open, setOpen] = useState(false);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav aria-label="메인 내비게이션" className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-transparent backdrop-blur-md transition-colors [border-bottom-color:rgba(0,0,0,.06)]">
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-dark font-bold text-lg">
          <Anchor className="h-6 w-6 text-blue" />
          앵커라이브
        </a>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-dark transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* hamburger button */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setOpen(!open)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile slide-in */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-dark hover:bg-gray-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ────────────────────── 2. Hero ────────────────────── */

function Hero() {
  const fadeUp = useFadeUp();
  const reduced = useReducedMotion();

  return (
    <section aria-label="히어로" className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <motion.h1
        className="font-extrabold text-dark leading-tight text-[38px] md:text-[clamp(38px,6vw,56px)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        증권방송의 모든 것
        <br />
        앵커라이브에서 쉽고 간편하게
      </motion.h1>

      <motion.p
        className="mt-6 text-base md:text-[19px] leading-relaxed text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        설치 없이 브라우저만으로 1초 미만 초저지연 실시간 방송.
        <br />
        15년간 150곳 이상이 선택한 WebRTC 방송 솔루션.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        <a
          href="#demo"
          className="rounded-full bg-dark px-7 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
        >
          무료 데모 체험
        </a>
        <a
          href="#contact"
          className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
        >
          도입 상담
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        animate={reduced ? {} : { y: [0, 12, 0] }}
        transition={reduced ? {} : { repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7 text-gray-400" />
      </motion.div>
    </section>
  );
}

/* ──────────────── 3. 브랜드 카피 + 핵심 수치 ──────────────── */

const stats = [
  { value: "150+", label: "도입사" },
  { value: "<1초", label: "지연" },
  { value: "15년", label: "경력" },
  { value: "Zero", label: "설치" },
];

function BrandStats() {
  const fadeUp = useFadeUp();

  return (
    <section aria-label="핵심 수치" className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-24 text-center">
      <motion.p
        className="max-w-2xl text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-snug text-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        국내 증권·코인 방송 시장에서
        <br />
        가장 많은 고객사가 선택한 실시간 방송 솔루션입니다.
        <br />
        <span className="text-blue">앵커라이브</span>와 함께라면 방송이 달라집니다.
      </motion.p>

      {/* 모바일: 2x2 그리드 / 데스크톱: 1x4 가로 */}
      <motion.div
        className="mt-16 grid grid-cols-2 gap-6 md:flex md:gap-0 md:divide-x md:divide-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center px-6 md:px-12 ${
              i < 2 ? "border-b border-gray-200 pb-6 md:border-b-0 md:pb-0" : "pt-0"
            } ${i % 2 === 0 ? "border-r border-gray-200 md:border-r-0" : ""}`}
          >
            <p className="text-3xl font-bold text-dark md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ──────────────── 기능 섹션 공통 레이아웃 ──────────────── */

function FeatureSection({
  id,
  tag,
  tagColor = "blue",
  headline,
  description,
  visual,
  reverse = false,
  bg = "white",
}: {
  id?: string;
  tag: string;
  tagColor?: "blue" | "mint";
  headline: string;
  description?: string;
  visual: React.ReactNode;
  reverse?: boolean;
  bg?: "white" | "gray";
}) {
  const fadeUp = useFadeUp();
  const bgClass = bg === "gray" ? "bg-gray-50" : "bg-white";
  const tagBg = tagColor === "mint" ? "bg-emerald-50 text-mint" : "bg-blue-light text-blue";

  return (
    <section id={id} aria-label={tag} className={`flex items-center lg:min-h-screen ${bgClass}`}>
      <div
        className={`mx-auto flex w-full max-w-[1140px] flex-col items-center gap-10 px-6 py-16 md:py-20 lg:flex-row lg:gap-20 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          className="flex-1 space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={`inline-block rounded-full px-3.5 py-1 text-xs font-semibold ${tagBg}`}>
            {tag}
          </span>
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-snug text-dark">
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          {description && <p className="text-base leading-relaxed text-gray-500">{description}</p>}
        </motion.div>

        <motion.div
          className="w-full flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────── 4. 기능1: 실시간 방송 비주얼 ───────────── */

function BroadcastMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#1a1a2e] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
          <span className="text-xs text-white/60">12:34:56</span>
        </div>
        <span className="text-xs text-white/40">1,247명 시청 중</span>
      </div>

      <div className="relative px-4 py-6">
        <svg viewBox="0 0 400 160" className="w-full" role="img" aria-label="캔들차트 예시">
          {[40, 70, 100, 130, 160, 190, 220, 250, 280, 310, 340].map((x, i) => {
            const h = 30 + Math.abs(Math.sin(i * 1.2)) * 60;
            const y = 130 - h;
            const up = i % 3 !== 0;
            return (
              <g key={i}>
                <line x1={x + 8} y1={y - 10} x2={x + 8} y2={y + h + 10} stroke={up ? "#22c55e" : "#ef4444"} strokeWidth="1.5" />
                <rect x={x} y={y} width="16" height={h} rx="2" fill={up ? "#22c55e" : "#ef4444"} opacity="0.85" />
              </g>
            );
          })}
        </svg>
        <div className="absolute bottom-4 right-4 hidden h-20 w-28 items-center justify-center rounded-lg border border-white/20 bg-gray-700 sm:flex">
          <Camera className="h-6 w-6 text-white/40" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-white/10 bg-[#12122a] px-4 py-3 sm:gap-5">
        {[Mic, Monitor, Camera, Pencil, Settings].map((Icon, i) => (
          <button key={i} className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 transition-colors sm:p-2.5" aria-label={["마이크", "화면공유", "카메라", "그리기", "설정"][i]}>
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ───────────── 5. 기능2: 시청자 경험 비주얼 ───────────── */

function ViewerMockup() {
  const chatMessages = [
    { name: "투자의달인", msg: "이 자리 지지선 맞나요?" },
    { name: "주식초보", msg: "감사합니다 선생님!" },
    { name: "코인러버", msg: "차트 공유 감사합니다" },
  ];

  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-[#1a1a2e] shadow-2xl sm:flex-row">
      <div className="flex-1 p-3">
        <div className="relative flex h-full min-h-[180px] items-center justify-center rounded-lg bg-[#12122a] sm:min-h-[220px]">
          <Play className="h-10 w-10 text-white/30" />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col border-t border-white/10 sm:w-48 sm:border-l sm:border-t-0">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
          <Users className="h-3.5 w-3.5 text-blue" />
          <span className="text-xs text-white/70">접속자 847명</span>
        </div>
        <div className="flex-1 space-y-2 overflow-y-auto p-3">
          {chatMessages.map((c, i) => (
            <div key={i}>
              <span className="text-[11px] font-semibold text-blue">{c.name}</span>
              <p className="text-[11px] text-white/60">{c.msg}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-3 py-2">
          <div className="flex items-center rounded bg-white/10 px-2 py-1.5">
            <span className="flex-1 text-[11px] text-white/30">채팅 입력...</span>
            <Send className="h-3 w-3 text-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 6. 기능3: 비교표 ───────────── */

function ComparisonTable() {
  const rows = [
    { label: "설치", old: "ActiveX / EXE 필수", now: "설치 없음 (브라우저)" },
    { label: "지연", old: "3~10초 (HLS)", now: "< 1초 (WebRTC)" },
    { label: "모바일", old: "별도 앱 필요", now: "모바일 브라우저 지원" },
    { label: "브라우저", old: "IE 전용", now: "Chrome · Safari · Edge" },
    { label: "화면 공유", old: "외부 프로그램", now: "브라우저 내장 API" },
  ];

  return (
    <>
      {/* 데스크톱: 테이블 */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left font-medium text-gray-500">항목</th>
              <th className="px-5 py-3 text-left font-medium text-gray-400">기존 방식</th>
              <th className="px-5 py-3 text-left font-medium text-blue">앵커라이브</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-3 font-medium text-dark">{r.label}</td>
                <td className="px-5 py-3 text-gray-400 line-through">{r.old}</td>
                <td className="px-5 py-3 font-medium text-dark">{r.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 모바일: 카드형 */}
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((r, i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-blue">{r.label}</p>
            <p className="mt-1.5 text-sm text-gray-400 line-through">{r.old}</p>
            <p className="mt-1 text-sm font-medium text-dark">{r.now}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ───────────── 7. 기능4: 코드 에디터 목업 ───────────── */

function CodeEditorMockup() {
  const code = `<!-- 방송 페이지에 삽입 -->
<iframe
  src="https://live.anchorlive.co.kr
       /viewerLive
       ?type=F
       &site_no=1
       &room_code=ROOM_001"
  width="100%"
  height="720"
  allow="autoplay"
/>`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#1e1e2e] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/30">index.html</span>
      </div>
      <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed sm:p-5 sm:text-[13px]">
        <code className="text-green-400">{code}</code>
      </pre>
    </div>
  );
}

/* ──────────────── 8. 고객사 레퍼런스 ──────────────── */

function Clients() {
  const fadeUp = useFadeUp();

  return (
    <section id="clients" aria-label="고객사 레퍼런스" className="flex flex-col items-center justify-center bg-white px-6 py-20 lg:min-h-screen lg:py-24">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="inline-block rounded-full bg-blue-light px-3.5 py-1 text-xs font-semibold text-blue">
          고객사
        </span>
        <h2 className="mt-5 text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-snug text-dark">
          150곳 이상의 증권·코인 방송사가
          <br />
          앵커라이브를 사용하고 있습니다
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        {clients.map((c) => (
          <span
            key={c}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue hover:text-blue sm:px-4 sm:py-2 sm:text-sm"
          >
            {c}
          </span>
        ))}
      </motion.div>

      {/* 후기: 모바일/태블릿 1열, 데스크톱 3열 */}
      <motion.div
        className="mt-12 grid w-full max-w-4xl gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        {reviews.map((r) => (
          <div key={r.company} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-gray-600">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-light text-xs font-bold text-blue">
                {r.name[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-dark">{r.name}</p>
                <p className="text-[11px] text-gray-400">{r.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ──────────────── 9. 데모 체험 ──────────────── */

function Demo() {
  const [tab, setTab] = useState<"broadcaster" | "viewer">("broadcaster");
  const fadeUp = useFadeUp();
  const reduced = useReducedMotion();

  return (
    <section id="demo" aria-label="데모 체험" className="flex flex-col items-center justify-center bg-gray-50 px-6 py-20 lg:min-h-screen lg:py-24">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="inline-block rounded-full bg-blue-light px-3.5 py-1 text-xs font-semibold text-blue">
          데모 체험
        </span>
        <h2 className="mt-5 text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-snug text-dark">
          직접 체험해 보세요
        </h2>
      </motion.div>

      <div className="mt-10 inline-flex rounded-full bg-gray-200 p-1" role="tablist">
        {(["broadcaster", "viewer"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              tab === t ? "bg-white text-dark shadow" : "text-gray-500"
            }`}
          >
            {t === "broadcaster" ? "방송자" : "시청자"}
          </button>
        ))}
      </div>

      <motion.div
        key={tab}
        role="tabpanel"
        className="mt-8 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8"
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? {} : { duration: 0.3 }}
      >
        {tab === "broadcaster" ? (
          <>
            <h3 className="text-lg font-bold text-dark">방송자 데모</h3>
            <p className="mt-2 text-sm text-gray-500">
              화면 공유, PIP, 그리기 도구 등 방송 기능을 직접 체험하세요.
            </p>
            <a
              href={`${DEMO_BASE}/broadcasterLive?${DEMO_PARAMS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-blue px-7 py-3 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
            >
              방송자 데모 시작
            </a>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold text-dark">시청자 데모</h3>
            <p className="mt-2 text-sm text-gray-500">
              설치 없이 브라우저만으로 실시간 방송을 시청해 보세요.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`${DEMO_BASE}/viewerLive?${DEMO_PARAMS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue px-7 py-3 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
              >
                PC 시청자 데모
              </a>
              <a
                href={`${DEMO_BASE}/mo/moViewLive?${DEMO_PARAMS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
              >
                모바일 시청자 데모
              </a>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}

/* ──────────────── 10. 도입 문의 폼 ──────────────── */

interface ContactFormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

function Contact() {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const fadeUp = useFadeUp();

  const onSubmit = (data: ContactFormData) => {
    console.log("문의 데이터:", data);
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-400 outline-none transition-colors focus:border-blue";

  return (
    <section id="contact" aria-label="도입 문의" className="flex flex-col items-center justify-center bg-white px-6 py-20 lg:min-h-screen lg:py-24">
      <motion.div
        className="w-full max-w-[580px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-light px-3.5 py-1 text-xs font-semibold text-blue">
            도입 문의
          </span>
          <h2 className="mt-5 text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-snug text-dark">
            앵커라이브 도입,
            <br />
            편하게 상담받으세요
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
          {/* 모바일 1열 / 데스크톱 2열 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input {...register("company")} placeholder="회사명" className={inputClass} />
            <input {...register("name")} placeholder="담당자명" className={inputClass} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input {...register("phone")} placeholder="연락처" className={inputClass} />
            <input {...register("email")} placeholder="이메일" type="email" className={inputClass} />
          </div>
          <textarea
            {...register("message")}
            placeholder="문의 내용을 입력해주세요"
            rows={5}
            className={inputClass + " resize-none"}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue py-3.5 text-sm font-semibold text-white hover:bg-blue-dark transition-colors"
          >
            무료 상담 신청하기
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-1 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> 02-2085-6102 / 02-2085-6105
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> tom@softbridge.co.kr
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ──────────────── 11. Footer ──────────────── */

function Footer() {
  return (
    <footer aria-label="회사 정보" className="bg-gray-100 px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-4 text-center text-sm text-gray-500 md:flex-row md:items-start md:text-left">
        <a href="#" className="flex items-center gap-2 font-bold text-dark">
          <Anchor className="h-5 w-5 text-blue" />
          앵커라이브
        </a>
        <address className="space-y-1 not-italic md:ml-8">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" /> 서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
          </p>
          <p className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 shrink-0" /> 02-2085-6102 / 02-2085-6105
          </p>
          <p className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 shrink-0" /> tom@softbridge.co.kr
          </p>
        </address>
        <p className="text-gray-400 md:ml-auto">&copy; 2026 SoftBridge Co., Ltd.</p>
      </div>
    </footer>
  );
}

/* ──────────────── 페이지 조합 ──────────────── */

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
      <Hero />

      <BrandStats />

      <FeatureSection
        id="features"
        tag="실시간 방송"
        headline={"화면 공유부터 PIP까지,\n전문가 방송에 필요한\n모든 기능을 한번에"}
        description="HTS 차트 공유, PIP 얼굴 송출, 그리기 도구, AI 가상배경까지. 전문 방송에 필요한 모든 기능이 브라우저 안에 있습니다."
        visual={<BroadcastMockup />}
      />

      <FeatureSection
        tag="시청자 경험"
        headline={"설치가 필요 없으니까,\n시청자가 더 쉽게\n방송에 들어옵니다"}
        visual={<ViewerMockup />}
        reverse
        bg="gray"
      />

      <FeatureSection
        tag="기존 대비"
        tagColor="mint"
        headline={"ActiveX는 이제 그만,\nWebRTC로 완전히\n달라진 방송 경험"}
        visual={<ComparisonTable />}
      />

      <FeatureSection
        tag="간편 연동"
        headline={"URL 호출 한 줄이면\n기존 사이트에\n방송 기능 탑재 완료"}
        visual={<CodeEditorMockup />}
        reverse
        bg="gray"
      />

      <Clients />

      <Demo />

      <Contact />
      </main>

      <Footer />
    </>
  );
}
