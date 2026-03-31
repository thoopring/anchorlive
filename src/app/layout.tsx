import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션 - 소프트브리지",
  description:
    "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. 15년간 150+ 고객사가 선택한 WebRTC 기반 방송 솔루션. 무료 데모 체험 가능.",
  keywords:
    "증권방송솔루션, 실시간방송, WebRTC방송, 주식방송프로그램, 코인방송솔루션, 증권라이브, 앵커라이브, 소프트브리지, 화상방송, 투자자문방송, 증권방송플랫폼, 실시간스트리밍",
  openGraph: {
    title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션",
    description: "설치 없이 브라우저만으로 실시간 증권·코인 방송",
    url: "https://anchorlive.co.kr",
    siteName: "앵커라이브",
    locale: "ko_KR",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport = {
  themeColor: "#E17055",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "소프트브리지",
      legalName: "㈜소프트브리지",
      url: "https://anchorlive.co.kr",
      foundingDate: "1998",
      address: {
        "@type": "PostalAddress",
        streetAddress: "삼일대로 308 조양빌딩 본관 12층",
        addressLocality: "중구",
        addressRegion: "서울특별시",
        addressCountry: "KR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+82-2-2085-6102",
          contactType: "sales",
          availableLanguage: "Korean",
        },
        {
          "@type": "ContactPoint",
          telephone: "+82-2-2085-6105",
          contactType: "customer service",
          availableLanguage: "Korean",
        },
      ],
      email: "tom@softbridge.co.kr",
    },
    {
      "@type": "SoftwareApplication",
      name: "앵커라이브 2.0",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. WebRTC 기반 방송 솔루션.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
        description: "무료 데모 체험 가능",
      },
      provider: {
        "@type": "Organization",
        name: "소프트브리지",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "앵커라이브 도입 시 별도 설치가 필요한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "아닙니다. 앵커라이브 2.0은 WebRTC 기반 웹 솔루션으로 방송자와 시청자 모두 별도 프로그램 설치 없이 웹 브라우저(Chrome, Safari, Edge 등)만으로 이용 가능합니다.",
          },
        },
        {
          "@type": "Question",
          name: "기존 홈페이지에 어떻게 연동하나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "URL 호출 방식으로 연동합니다. 고객사 웹 서버에서 방송 시작/시청 URL에 파라미터(type, site_no, user_id, room_code)를 전달하면 됩니다. 보통 1~2주 내에 연동이 완료됩니다.",
          },
        },
        {
          "@type": "Question",
          name: "동시 접속자 수 제한이 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "기본적으로 동시 접속자 수에 제한이 없습니다. AWS/IDC 이중화 구성과 자동 스케일링으로 수백~수천 명의 동시 접속을 안정적으로 처리합니다.",
          },
        },
        {
          "@type": "Question",
          name: "방송 지연시간이 실제로 1초 미만인가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네, WebRTC 기술 특성상 방송자에서 시청자까지 1초 미만의 지연시간을 제공합니다. 기존 RTMP/HLS 방식의 6~30초 지연과 비교해 획기적으로 빠릅니다.",
          },
        },
        {
          "@type": "Question",
          name: "모바일에서도 방송을 진행할 수 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "현재 방송 송출은 PC 웹 브라우저에서 진행하며, 시청은 PC와 모바일(iOS Safari, Android Chrome) 모두에서 가능합니다.",
          },
        },
        {
          "@type": "Question",
          name: "요금 체계는 어떻게 되나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "고객사의 규모, 동시 접속 수, 녹화 용량 등에 따라 맞춤형 요금이 책정됩니다. 기본적으로 월 구독 방식이며, 무료 데모 체험 후 결정하실 수 있습니다.",
          },
        },
        {
          "@type": "Question",
          name: "녹화된 방송은 어디에 저장되나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "녹화된 VOD는 앵커라이브 서버에 저장되며, 녹화 완료 시 고객사 서버로 녹화 정보를 콜백합니다.",
          },
        },
        {
          "@type": "Question",
          name: "기존 앵커라이브 1.5에서 2.0으로 마이그레이션 가능한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네, 기존 사이트 구조를 유지하면서 URL 연동 방식만 변경하므로 최소한의 수정으로 전환이 가능합니다.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
