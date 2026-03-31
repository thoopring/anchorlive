# 앵커라이브 2.0 랜딩페이지 — 개발 인수인계 문서

> 작성일: 2026-03-31  
> 프로젝트: anchorlive (랜딩페이지)  
> 상태: 프로토타입 완료, 프로덕션 이관 전

---

## 1. 프로젝트 개요

㈜소프트브리지의 WebRTC 실시간 증권방송 솔루션 **앵커라이브 2.0** 제품 랜딩페이지.  
토스 스타일의 풀스크린 섹션 기반 원페이지 구성이며, 11개 섹션으로 이루어져 있다.

### 대상 사용자
- 증권/코인 방송을 운영하거나 도입을 검토하는 B2B 고객사 담당자

### 핵심 목표
- 제품 가치 전달 (ActiveX 탈피, WebRTC 초저지연)
- 데모 체험 유도 → 도입 문의 전환

---

## 2. 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 14.2.35 |
| 언어 | TypeScript | ^5 |
| 스타일 | Tailwind CSS | ^3.4.1 |
| 애니메이션 | Framer Motion | ^12.38.0 |
| 폼 | React Hook Form | ^7.72.0 |
| 아이콘 | Lucide React | ^1.7.0 |
| 폰트 | Pretendard Variable | CDN (jsdelivr) |
| 런타임 | React | ^18 |

### 설치 및 실행

```bash
npm install
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```

---

## 3. 디렉토리 구조

```
anchorlive/
├── public/
│   └── favicon.ico              # TODO: 실제 파비콘 교체 필요
├── src/
│   └── app/
│       ├── layout.tsx           # 루트 레이아웃 (메타데이터, JSON-LD, 폰트)
│       ├── page.tsx             # 전체 랜딩페이지 (11개 섹션, 단일 파일)
│       ├── globals.css          # 글로벌 스타일 (focus-visible, reduced-motion)
│       ├── sitemap.ts           # sitemap.xml 자동 생성
│       └── robots.ts            # robots.txt 자동 생성
├── tailwind.config.ts           # 디자인 시스템 색상/폰트
├── next.config.mjs              # Next.js 설정 (현재 비어 있음)
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

### 현재 구조 특이사항
- **page.tsx가 단일 파일**(약 810줄)로 모든 섹션 컴포넌트를 포함하고 있다.
- 프로덕션 이관 시 컴포넌트 분리를 권장한다 (아래 "권장 리팩토링" 참조).

---

## 4. 디자인 시스템

### 4-1. 색상 (토스 팔레트 기반)

| 토큰 | 값 | Tailwind 클래스 | 용도 |
|------|----|-----------------|------|
| blue | `#3182F6` | `text-blue`, `bg-blue` | Primary, CTA, 링크 |
| blue-dark | `#1B64DA` | `bg-blue-dark` | Primary hover |
| blue-light | `#E8F3FF` | `bg-blue-light` | 태그 배경, 아바타 배경 |
| mint | `#00C9B7` | `text-mint` | 액센트 (비교 섹션 태그) |
| dark | `#191F28` | `text-dark` | 기본 텍스트 |
| gray-50~900 | 토스 그레이스케일 | `text-gray-500` 등 | 보조 텍스트, 배경, 테두리 |

### 4-2. 타이포그래피

| 요소 | 데스크톱 | 모바일 |
|------|----------|--------|
| h1 (Hero) | `clamp(38px, 6vw, 56px)` / 800 | 38px / 800 |
| h2 (섹션) | 40px / 700 | 28px / 700 |
| 브랜드 카피 | 34px / 600 | 24px / 600 |
| 본문 | 16px (base) | 16px |
| 서브카피 | 19px | 16px (base) |
| 캡션/라벨 | 14px (sm) | 14px |

### 4-3. 폰트

- **Pretendard Variable** — CDN 로드
- preload + stylesheet 이중 로딩 적용
- CDN URL: `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css`

---

## 5. 페이지 섹션 명세

### 섹션 구성 (순서)

| # | 섹션 | 배경 | 높이 | ID |
|---|------|------|------|----|
| 1 | Navigation | transparent + blur | 64px fixed | — |
| 2 | Hero | white | 100vh | — |
| 3 | 브랜드 카피 + 핵심 수치 | gray-50 | 100vh | — |
| 4 | 기능: 실시간 방송 | white | lg:100vh | `#features` |
| 5 | 기능: 시청자 경험 | gray-50 | lg:100vh | — |
| 6 | 기능: 기존 대비 | white | lg:100vh | — |
| 7 | 기능: 간편 연동 | gray-50 | lg:100vh | — |
| 8 | 고객사 레퍼런스 | white | lg:100vh | `#clients` |
| 9 | 데모 체험 | gray-50 | lg:100vh | `#demo` |
| 10 | 도입 문의 폼 | white | lg:100vh | `#contact` |
| 11 | Footer | gray-100 | auto | — |

### 섹션별 상세

#### 1. Navigation
- fixed, `backdrop-blur-md`, `h-16`, `max-w-[1140px]`
- 좌측: Anchor 아이콘 + "앵커라이브"
- 우측(데스크톱): 기능 소개 | 고객사 | 데모 체험 | 도입 문의
- 우측(모바일): 햄버거 → 슬라이드인 패널 (translate-x), body scroll lock

#### 2. Hero
- 중앙 정렬, 텍스트 only
- 헤드라인 + 서브카피 + CTA 2개("무료 데모 체험" dark, "도입 상담" outline)
- 하단 ChevronDown bounce 애니메이션

#### 3. 브랜드 카피 + 핵심 수치
- 중앙 대형 카피 (앵커라이브 텍스트 blue 강조)
- 4열 수치: 150+ 도입사 | <1초 지연 | 15년 경력 | Zero 설치
- 모바일: 2x2 그리드 + border 조정 / 데스크톱: divide-x

#### 4~7. 기능 섹션 (FeatureSection 공통 컴포넌트)
- 공통 레이아웃: 텍스트(tag + h2 + description) + 비주얼
- `reverse` prop으로 좌우 반전
- 모바일: 1열 (텍스트 위 → 비주얼 아래), min-height 제거

| 섹션 | 태그 색상 | 비주얼 컴포넌트 | reverse |
|------|-----------|-----------------|---------|
| 4. 실시간 방송 | blue | `BroadcastMockup` — 캔들차트 SVG + LIVE + 툴바 + PIP | No |
| 5. 시청자 경험 | blue | `ViewerMockup` — 플레이어 + 채팅 패널 | Yes |
| 6. 기존 대비 | mint | `ComparisonTable` — 5행 비교표(데스크톱) / 카드형(모바일) | No |
| 7. 간편 연동 | blue | `CodeEditorMockup` — macOS 크롬 + iframe 코드 | Yes |

#### 8. 고객사 레퍼런스
- 16개 고객사 pill 칩 (hover 시 blue 변환)
- 3개 후기 카드 (모바일/태블릿: 1열, 데스크톱: 3열)

#### 9. 데모 체험
- 방송자/시청자 pill 토글 (탭)
- 방송자 데모 → `live.anchorlive.co.kr/broadcasterLive`
- PC 시청자 → `live.anchorlive.co.kr/viewerLive`
- 모바일 시청자 → `live.anchorlive.co.kr/mo/moViewLive`
- 공통 파라미터: `type=F&site_no=1&user_id=demo&room_code=DEMO`

#### 10. 도입 문의 폼
- `max-w-[580px]` 중앙
- 필드: 회사명 + 담당자명 / 연락처 + 이메일 / 문의내용 (textarea)
- 모바일: 1열 / 데스크톱: 2열
- `focus:border-blue` 적용
- 제출 시 `console.log` + `alert` (백엔드 미연동)

#### 11. Footer
- `<address>` 태그 사용
- 회사 정보: 서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
- 전화: 02-2085-6102 / 02-2085-6105
- 이메일: tom@softbridge.co.kr

---

## 6. 반응형 브레이크포인트

Tailwind 기본 브레이크포인트 사용:

| 접두사 | 너비 | 적용 대상 |
|--------|------|-----------|
| (없음) | < 640px | 모바일 기본 |
| `sm:` | >= 640px | 소형 태블릿 |
| `md:` | >= 768px | 태블릿 |
| `lg:` | >= 1024px | 데스크톱 |

### 주요 반응형 동작

| 요소 | 모바일 | 태블릿 | 데스크톱 |
|------|--------|--------|----------|
| Navigation | 햄버거 + 슬라이드인 | 가로 메뉴 | 가로 메뉴 |
| 기능 섹션 | 1열, min-h 제거 | 1열, gap 축소 | 2열, 100vh |
| 핵심 수치 | 2x2 그리드 | 1x4 가로 | 1x4 가로 |
| 비교표 | 세로 카드형 | 테이블 | 테이블 |
| 후기 카드 | 1열 | 1열 | 3열 |
| 문의 폼 | 1열 | 2열 | 2열 |

---

## 7. SEO 구현 현황

### 메타데이터 (layout.tsx)
- title, description, keywords (12개)
- Open Graph (type, locale, siteName)
- Twitter Card (summary_large_image)
- `lang="ko"`

### JSON-LD 구조화 데이터
- `Organization` — ㈜소프트브리지 (설립 1998, 주소, 전화 2개, 이메일)
- `SoftwareApplication` — 앵커라이브 2.0 (무료 데모)
- `FAQPage` — 4개 Q&A (설치, 지연, 연동, 모바일)

### 자동 생성
- `sitemap.xml` — `src/app/sitemap.ts`
- `robots.txt` — `src/app/robots.ts`

### 시맨틱 HTML
- `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`
- `h1` 1개 (Hero), 각 섹션 `h2`
- 모든 section에 `aria-label`
- 탭에 `role="tablist"`, `role="tab"`, `aria-selected`
- SVG에 `role="img"` + `aria-label`
- 툴바 버튼에 개별 `aria-label`

---

## 8. 접근성 (a11y)

| 항목 | 구현 |
|------|------|
| focus-visible | 전역 `outline: 2px solid #3182F6`, offset 2px |
| reduced-motion | CSS `prefers-reduced-motion` + Framer Motion `useReducedMotion()` |
| 색 대비 | WCAG AA 충족 (dark #191F28 on white, gray-500 #8B95A1 on white = 4.6:1) |
| 햄버거 메뉴 | `aria-label`, `aria-expanded`, body scroll lock |
| 키보드 네비게이션 | 모든 인터랙티브 요소 focusable |

---

## 9. 애니메이션

### Framer Motion
- `useFadeUp()` 훅 — `opacity: 0→1`, `y: 40→0`, stagger delay `i * 0.12`
- `whileInView` + `viewport={{ once: true }}` (Intersection Observer 기반)
- `useReducedMotion()` — true일 경우 모든 variants를 빈 객체로 반환
- Hero 바운스 화살표: `animate={{ y: [0, 12, 0] }}`, infinite
- 데모 탭 전환: `opacity + y` 전환 (0.3s)

### CSS
- `animate-pulse` — LIVE 뱃지 점멸
- `transition-colors` — hover 상태 전환
- `transition-transform` — 모바일 메뉴 슬라이드

---

## 10. 프로덕션 이관 전 TODO

### 필수 (Must)

| # | 항목 | 설명 |
|---|------|------|
| 1 | **favicon 교체** | `public/favicon.ico`를 실제 앵커라이브 로고로 교체 |
| 2 | **OG 이미지** | 1200x630px OG 이미지 추가, metadata에 `openGraph.images` 설정 |
| 3 | **문의 폼 백엔드** | 현재 `console.log` + `alert`만 구현. 이메일 발송 API 또는 Google Sheets 연동 필요 |
| 4 | **폼 유효성 검사** | react-hook-form의 `required`, 전화번호/이메일 패턴 validation 추가 |
| 5 | **도메인 설정** | `sitemap.ts`, `robots.ts`의 URL을 실제 도메인으로 변경 (현재 `anchorlive.co.kr`) |
| 6 | **next.config.mjs** | 이미지 도메인 허용, 리다이렉트, 헤더 설정 등 프로덕션 설정 추가 |
| 7 | **환경 변수** | 데모 URL 베이스(`DEMO_BASE`)를 `.env`로 분리 |

### 권장 (Should)

| # | 항목 | 설명 |
|---|------|------|
| 8 | **컴포넌트 분리** | page.tsx(810줄)를 `src/components/sections/` 하위로 분리 |
| 9 | **로고 SVG** | Lucide `Anchor` 아이콘 대신 실제 앵커라이브 로고 SVG 사용 |
| 10 | **고객사 로고** | 텍스트 pill 대신 실제 고객사 로고 이미지 (next/image 최적화) |
| 11 | **Google Analytics** | GA4 또는 GTM 삽입 |
| 12 | **Sentry** | 에러 모니터링 연동 |
| 13 | **dark mode 제거** | globals.css의 `prefers-color-scheme: dark` 블록 — 랜딩페이지에서는 불필요할 수 있음 |

### 선택 (Nice to have)

| # | 항목 | 설명 |
|---|------|------|
| 14 | **스크롤 기반 네비게이션 하이라이트** | Intersection Observer로 현재 섹션 감지 → 네비 링크 활성화 |
| 15 | **페이지 전환 애니메이션** | 스크롤 기반 parallax 또는 섹션 진입 효과 강화 |
| 16 | **i18n** | 영문 페이지 필요 시 next-intl 도입 |
| 17 | **성능 최적화** | Lighthouse CI 연동, Core Web Vitals 모니터링 |
| 18 | **테스트** | Playwright E2E 테스트 (폼 제출, 모바일 메뉴, 탭 전환) |

---

## 11. 권장 컴포넌트 분리 구조

현재 `page.tsx` 단일 파일을 아래와 같이 분리하는 것을 권장한다:

```
src/
├── components/
│   └── sections/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── BrandStats.tsx
│       ├── FeatureSection.tsx      # 공통 레이아웃
│       ├── BroadcastMockup.tsx
│       ├── ViewerMockup.tsx
│       ├── ComparisonTable.tsx
│       ├── CodeEditorMockup.tsx
│       ├── Clients.tsx
│       ├── Demo.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── hooks/
│   └── useFadeUp.ts               # 애니메이션 variants 훅
├── constants/
│   └── index.ts                    # clients, reviews, stats, navLinks, DEMO_BASE 등
└── app/
    ├── layout.tsx
    └── page.tsx                    # 섹션 import + 조합만
```

---

## 12. 참고 정보

### 회사 정보
- 법인명: ㈜소프트브리지
- 설립: 1998년
- 주소: 서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
- 대표 전화: 02-2085-6102
- 고객지원: 02-2085-6105
- 이메일: tom@softbridge.co.kr

### 방송 데모 URL
| 구분 | URL |
|------|-----|
| 방송자 | `https://live.anchorlive.co.kr/broadcasterLive` |
| PC 시청자 | `https://live.anchorlive.co.kr/viewerLive` |
| 모바일 시청자 | `https://live.anchorlive.co.kr/mo/moViewLive` |
| 공통 파라미터 | `?type=F&site_no=1&user_id=demo&room_code=DEMO` |

### SEO 타깃 키워드
증권방송솔루션, 실시간방송솔루션, WebRTC증권방송, 주식방송프로그램,
코인방송솔루션, 증권라이브방송, 화상방송솔루션, 투자자문방송,
앵커라이브, 소프트브리지, 증권방송플랫폼, 실시간스트리밍
