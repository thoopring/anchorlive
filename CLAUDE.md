# 앵커라이브 2.0 랜딩페이지

## 프로젝트 개요

㈜소프트브리지의 WebRTC 실시간 증권방송 솔루션 **앵커라이브 2.0** 제품 랜딩페이지.
B2B 고객사 대상으로 제품 가치를 전달하고, 데모 체험 및 도입 문의를 유도하는 마케팅 사이트.

## 기술 스택

- **프레임워크**: Next.js 14 (App Router), TypeScript
- **스타일**: Tailwind CSS 3.4
- **애니메이션**: 자체 `useReveal` 훅 (Intersection Observer 기반 fade-up)
- **폼**: react-hook-form
- **아이콘**: lucide-react (이모지/이모티콘 사용 금지 — Lucide 아이콘만 사용)
- **폰트**: Pretendard Variable (CDN), JetBrains Mono (코드용)

## 실행 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```

## 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx        # 루트 레이아웃, 메타데이터, JSON-LD, 폰트
│   ├── page.tsx          # 섹션 컴포넌트 조합 (진입점)
│   ├── globals.css       # Tailwind + 커스텀 CSS (pulse, fade-up, selection)
│   ├── sitemap.ts        # sitemap.xml 자동 생성
│   └── robots.ts         # robots.txt 자동 생성
├── components/
│   ├── RevealWrapper.tsx  # 공통 스크롤 애니메이션 래퍼 (useReveal 훅)
│   ├── Nav.tsx            # 고정 네비게이션 (데스크톱 + 모바일 햄버거)
│   ├── Hero.tsx           # 히어로 섹션 (2열: 텍스트 + 제품 이미지)
│   ├── TrustBar.tsx       # 고객사 pill 목록
│   ├── Solutions.tsx      # 솔루션 3개 하위섹션 (방송/시청/VOD)
│   ├── Comparison.tsx     # 기존 vs 앵커라이브 비교표
│   ├── TechSpec.tsx       # 기술 스펙 + URL 연동 구조
│   ├── UseCases.tsx       # 도입 사례 3건
│   ├── Demo.tsx           # 데모 체험 (방송자/시청자 탭)
│   ├── FAQ.tsx            # 아코디언 FAQ 8개
│   ├── CtaBanner.tsx      # 다크 배경 CTA 배너
│   ├── Contact.tsx        # 도입 문의 폼
│   └── Footer.tsx         # 푸터 (4열 링크 + 회사정보)
public/
└── images/
    └── hero-mockup.png    # 히어로 제품 목업 이미지 (나노바나나2로 생성)
```

## 디자인 시스템

### 색상 (코랄 오렌지 기반)

| 토큰 | 값 | 용도 |
|------|----|------|
| primary | `#E17055` | 메인 강조, 태그, 수치, CTA |
| primary-dark | `#C0513A` | hover 상태 |
| primary-light | `#FDEAE5` | 배지 배경, 연한 하이라이트 |
| primary-50 | `#FFF5F2` | 히어로 배경 틴트 |
| accent | `#00C9B7` | 보조 포인트 (민트) |
| accent-light | `#E6FAF7` | 보조 배경 |
| dark | `#191F28` | 기본 텍스트, 다크 버튼 |

### 색상 사용 원칙

- 코랄 오렌지는 **포인트로만** 사용. 전체 톤은 화이트+그레이 중심 유지
- CTA 버튼 "무료 데모 체험"은 dark(#191F28) 배경, "상담 신청"은 primary 배경
- 폼 제출/CTA 배너 메인 버튼만 primary 배경
- 배경 교차: 흰색 → gray-50 → 흰색 → gray-50 반복

### 타이포그래피

- 히어로 헤드라인: `clamp(32px, 4.5vw, 48px)`, weight 800
- 섹션 헤드라인: `clamp(26px, 3.5vw, 38px)`, weight 800
- 본문: 14~16px, gray-500~gray-600, line-height 1.7

### 레이아웃

- max-width: 1200px (Tailwind `max-w-site`)
- 섹션 패딩: 100px 상하
- 카드: border-radius 16px (`rounded-card`)

## 주요 컴포넌트 패턴

### RevealWrapper (R)
모든 섹션에서 사용하는 스크롤 애니메이션 래퍼.
`delay` prop으로 stagger 효과 적용. `useReveal` 훅이 Intersection Observer 기반.

```tsx
<R delay={0.05}>
  <h2>...</h2>
</R>
```

### 반응형 브레이크포인트

| 접두사 | 너비 | 대상 |
|--------|------|------|
| (없음) | < 640px | 모바일 |
| `sm:` | >= 640px | 소형 태블릿 |
| `md:` | >= 768px | 태블릿 |
| `lg:` | >= 1024px | 데스크톱 |

## 코딩 컨벤션

- 이모지/이모티콘 사용 금지. 아이콘은 lucide-react만 사용
- 컴포넌트는 `src/components/` 하위에 섹션 단위로 분리
- "use client" 지시어는 상태/이벤트가 있는 컴포넌트에만
- Tailwind 유틸리티 우선, 커스텀 CSS 최소화
- 하드코딩 색상 대신 Tailwind 토큰 사용 (text-primary, bg-dark 등)
- SVG 로고 등 불가피한 경우만 hex 직접 사용 (#E17055)

## SEO

- layout.tsx에 메타데이터 (title, description, keywords, OG, robots)
- JSON-LD 구조화 데이터: Organization, SoftwareApplication, FAQPage
- sitemap.xml, robots.txt 자동 생성
- 시맨틱 HTML: nav, main, section, footer, h1~h3, aria-label

## 회사 정보

- 법인명: ㈜소프트브리지
- 주소: 서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
- 전화: 02-2085-6102 / 02-2085-6105
- 이메일: tom@softbridge.co.kr

## 데모 URL

| 구분 | URL |
|------|-----|
| 방송자 | `https://live.anchorlive.co.kr/broadcasterLive` |
| PC 시청자 | `https://live.anchorlive.co.kr/viewerLive` |
| 모바일 시청자 | `https://live.anchorlive.co.kr/mo/moViewLive` |
| 공통 파라미터 | `?type=F&site_no=1&user_id=demo&room_code=DEMO` |

## 프로덕션 이관 전 TODO

### 필수

- [ ] `public/images/hero-mockup.png` — 히어로 제품 목업 이미지 추가
- [ ] `public/favicon.ico` — 실제 앵커라이브 로고로 교체
- [ ] OG 이미지 (1200x630px) 추가 + metadata에 openGraph.images 설정
- [ ] 문의 폼 백엔드 연동 (현재 console.log + alert만)
- [ ] 폼 유효성 검사 (required, 전화번호/이메일 패턴)
- [ ] sitemap.ts, robots.ts URL을 실제 도메인으로 확인
- [ ] 환경 변수 분리 (데모 URL 베이스 등)

### 권장

- [ ] 실제 로고 SVG 교체 (Nav, Footer의 인라인 SVG)
- [ ] 고객사 실제 로고 이미지 (TrustBar)
- [ ] Google Analytics 4 / GTM 삽입
- [ ] Sentry 에러 모니터링
- [ ] next.config.mjs 프로덕션 설정 (이미지 도메인, 헤더 등)

### 선택

- [ ] 스크롤 기반 네비게이션 하이라이트 (Intersection Observer)
- [ ] Playwright E2E 테스트
- [ ] Lighthouse CI / Core Web Vitals 모니터링
- [ ] i18n 영문 페이지 (next-intl)
