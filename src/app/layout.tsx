import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션 - 소프트브리지",
  description:
    "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. 15년간 150+ 고객사가 선택한 WebRTC 기반 방송 솔루션.",
  keywords:
    "증권방송솔루션, 실시간방송솔루션, WebRTC증권방송, 주식방송프로그램, 코인방송솔루션, 증권라이브방송, 화상방송솔루션, 투자자문방송, 앵커라이브, 소프트브리지, 증권방송플랫폼, 실시간스트리밍",
  openGraph: {
    title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션 - 소프트브리지",
    description:
      "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. 15년간 150+ 고객사가 선택한 WebRTC 기반 방송 솔루션.",
    type: "website",
    locale: "ko_KR",
    siteName: "앵커라이브 2.0",
  },
  twitter: {
    card: "summary_large_image",
    title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션 - 소프트브리지",
    description:
      "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. 15년간 150+ 고객사가 선택한 WebRTC 기반 방송 솔루션.",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
          name: "앵커라이브는 별도 설치가 필요한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "아니요, 앵커라이브는 별도 설치 없이 Chrome, Safari, Edge 등 최신 브라우저만으로 방송과 시청이 모두 가능합니다. ActiveX나 별도 프로그램이 필요하지 않습니다.",
          },
        },
        {
          "@type": "Question",
          name: "실시간 방송 지연시간은 얼마나 되나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "앵커라이브는 WebRTC 기술을 기반으로 1초 미만의 초저지연 실시간 방송을 제공합니다. 기존 HLS 방식(3~10초 지연) 대비 획기적으로 빠른 속도입니다.",
          },
        },
        {
          "@type": "Question",
          name: "기존 사이트에 어떻게 연동하나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "iframe 태그 한 줄로 기존 웹사이트에 방송 기능을 바로 탑재할 수 있습니다. 별도 서버 구축 없이 URL 호출만으로 간편하게 연동됩니다.",
          },
        },
        {
          "@type": "Question",
          name: "모바일에서도 시청할 수 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네, 모바일 브라우저에서 앱 설치 없이 바로 시청할 수 있습니다. iOS Safari, Android Chrome 등 주요 모바일 브라우저를 모두 지원합니다.",
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
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
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
