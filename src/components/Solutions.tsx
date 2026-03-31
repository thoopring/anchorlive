"use client";

import {
  Monitor,
  Camera,
  PenTool,
  Sparkles,
  MessageCircle,
  EyeOff,
  Megaphone,
  ShieldCheck,
  CircleDot,
  Film,
  Smartphone,
  BadgeDollarSign,
} from "lucide-react";
import R from "./RevealWrapper";

const sections = [
  {
    tag: "실시간 라이브 방송",
    tagColor: "text-primary",
    title: "HTS 화면을 공유하며\n전문가 방송을 진행하세요",
    points: [
      {
        icon: Monitor,
        iconBg: "bg-primary/10 text-primary",
        title: "화면 공유",
        desc: "HTS, 증권사 차트, 분석 프로그램 등 PC 화면을 그대로 실시간 송출합니다. 탭 단위 또는 전체 화면 선택 가능.",
      },
      {
        icon: Camera,
        iconBg: "bg-primary/10 text-primary",
        title: "PIP (Picture-in-Picture)",
        desc: "화면 공유 위에 전문가 얼굴을 PIP로 동시 송출. 크기 조절, 위치 이동, 좌우 반전 모두 지원합니다.",
      },
      {
        icon: PenTool,
        iconBg: "bg-primary/10 text-primary",
        title: "실시간 그리기",
        desc: "방송 중 차트 위에 직접 선, 도형, 텍스트를 그려 핵심 포인트를 설명합니다. 되돌리기와 전체 클리어 기능 포함.",
      },
      {
        icon: Sparkles,
        iconBg: "bg-primary/10 text-primary",
        title: "AI 가상배경",
        desc: "AI가 사람을 인식하여 배경을 투명 또는 흐림 처리. 별도 크로마키 장비 없이 전문적인 방송 환경을 연출합니다.",
      },
    ],
  },
  {
    tag: "시청자 경험",
    tagColor: "text-accent",
    title: "설치 없이 웹 브라우저만으로\n실시간 방송에 입장합니다",
    points: [
      {
        icon: MessageCircle,
        iconBg: "bg-accent/10 text-accent",
        title: "양방향 실시간 채팅",
        desc: "시청자와 전문가 간 실시간 텍스트 채팅. 유료/무료 회원별 채팅 권한 설정이 가능합니다.",
      },
      {
        icon: EyeOff,
        iconBg: "bg-accent/10 text-accent",
        title: "귓속말 & 종목 상담",
        desc: "특정 시청자에게만 보이는 귓속말 기능과 종목 상담 요청 기능을 제공합니다.",
      },
      {
        icon: Megaphone,
        iconBg: "bg-accent/10 text-accent",
        title: "공지 등록",
        desc: "방송 중 중요 공지사항을 채팅 창 상단에 고정 표시합니다.",
      },
      {
        icon: ShieldCheck,
        iconBg: "bg-accent/10 text-accent",
        title: "접근 제어",
        desc: "유료방/무료방 구분, 회원 인증, 강제 퇴장 등 체계적인 접근 제어를 지원합니다.",
      },
    ],
  },
  {
    tag: "녹화 & VOD",
    tagColor: "text-[#F59E0B]",
    title: "방송을 녹화하면\n자동으로 VOD가 생성됩니다",
    points: [
      {
        icon: CircleDot,
        iconBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
        title: "원클릭 녹화",
        desc: "방송 중 녹화 버튼 클릭으로 즉시 녹화 시작. 1회 최대 30분, 횟수 제한 없이 제공됩니다.",
      },
      {
        icon: Film,
        iconBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
        title: "VOD 자동 변환",
        desc: "녹화 종료 시 자동으로 VOD 파일이 생성되며, 고객사 서버로 녹화 정보를 콜백합니다.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
        title: "PC/모바일 VOD 재생",
        desc: "녹화된 방송은 PC와 모바일 웹에서 별도 설치 없이 바로 시청 가능합니다.",
      },
      {
        icon: BadgeDollarSign,
        iconBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
        title: "유료 VOD 설정",
        desc: "VOD별로 유료/무료를 설정하고, 회원 등급에 따른 접근 제어가 가능합니다.",
      },
    ],
  },
];

export default function Solutions() {
  return (
    <section id="sol" className="pt-[100px] px-8 bg-white">
      <div className="max-w-site mx-auto">
        <R>
          <div className="text-center mb-20">
            <span className="text-sm font-bold text-primary tracking-[.04em]">SOLUTION</span>
            <h2 className="text-heading-section text-dark mt-2.5 mb-3.5">
              증권방송에 필요한 모든 기능,
              <br />
              하나의 솔루션에서
            </h2>
            <p className="text-base text-gray-500 leading-[1.7] max-w-[520px] mx-auto">
              15년간 현장의 요구를 반영해 만든 기능들. 방송 송출부터 시청, 녹화, 관리까지 모든 워크플로우를 지원합니다.
            </p>
          </div>
        </R>

        {sections.map((sec, si) => (
          <div key={si} className={`py-20 ${si > 0 ? "border-t border-gray-200" : ""}`}>
            <R>
              <span className={`text-sm font-bold ${sec.tagColor}`}>{sec.tag}</span>
            </R>
            <R delay={0.04}>
              <h3 className="text-heading-sub text-dark mt-2.5 mb-10 whitespace-pre-line">
                {sec.title}
              </h3>
            </R>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sec.points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <R key={i} delay={i * 0.05}>
                    <div className="p-7 rounded-card bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,.04)] hover:border-primary/30 transition-all cursor-default">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${p.iconBg}`}>
                          <Icon className="w-[18px] h-[18px]" />
                        </div>
                        <span className="text-base font-bold text-dark">{p.title}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-[1.7]">{p.desc}</p>
                    </div>
                  </R>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
