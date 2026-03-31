# 앵커라이브 2.0 마케팅 사이트 — Claude Code 프롬프트 (최종본 · 코랄 오렌지)

> 이 프롬프트를 Claude Code에서 단계별로 실행하세요.
> 한 번에 전체를 붙여넣지 말고, 단계별로 나눠서 진행하는 것을 권장합니다.

---

## 1단계: 프로젝트 생성 및 초기 설정

```
Next.js 14 App Router 프로젝트를 생성해줘.

프로젝트명: anchorlive-site
기술 스택:
- TypeScript
- Tailwind CSS
- framer-motion (스크롤 애니메이션)
- react-hook-form (문의 폼)
- lucide-react (아이콘)

폰트:
- Pretendard Variable (한국어 본문 전체) — CDN: cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css
- JetBrains Mono (코드 블록용) — CDN에서 로드

기본 설정:
- lang="ko"
- 단일 페이지 랜딩 (app/page.tsx)
- 컴포넌트는 components/ 폴더에 섹션별로 분리
- globals.css에 Tailwind + 커스텀 CSS 변수
```

---

## 2단계: 디자인 시스템 (tailwind.config.ts + globals.css)

```
다음 디자인 토큰을 tailwind.config.ts에 설정해줘.

■ 색상 (코랄 오렌지 기반)

  === Primary (코랄 오렌지 계열) ===
  primary: #E17055          (메인 코랄 오렌지 — 헤드라인 강조, 태그, 링크, 수치)
  primary-dark: #C0513A     (hover 상태, 진한 강조)
  primary-light: #FDEAE5    (배지 배경, 연한 하이라이트)
  primary-50: #FFF5F2       (매우 연한 배경)

  === Accent (민트 계열 — 보조 포인트) ===
  accent: #00C9B7           (보조 태그, 체크마크, 비교표 신규 항목)
  accent-light: #E6FAF7     (보조 배경)

  === Neutral (동일 유지) ===
  dark: #191F28             (기본 텍스트, 버튼 배경)
  gray-800: #333D4B
  gray-600: #4E5968
  gray-500: #6B7684
  gray-400: #8B95A1
  gray-200: #E5E8EB
  gray-100: #F2F4F6
  gray-50: #F9FAFB
  white: #FFFFFF

■ 색상 사용 규칙 (중요!)
  - primary(#E17055): 섹션 태그 텍스트, 헤드라인 강조 단어, 핵심 수치(150+, <1초 등), 링크 hover, 비교표 신규 값, 배지 텍스트
  - primary-light(#FDEAE5): 배지 배경, 아이콘 배경, hover 카드 보더
  - primary-dark(#C0513A): 버튼 hover, 진한 강조
  - dark(#191F28): CTA 버튼 기본 배경 (검정 계열 유지), 헤드라인 텍스트
  - accent(#00C9B7): 보조 태그(시청자 경험, 기존 대비 등), 체크마크, LIVE 뱃지 옆 pulse 점
  - CTA 버튼: "무료 데모 체험" = dark(#191F28) 배경, "상담 신청" = primary(#E17055) 배경
  - form 제출 버튼: primary(#E17055) 배경

■ 디자인 원칙 (반드시 지켜줘)

1. 토스(toss.im) 스타일의 깔끔함 + SGR소프트처럼 콘텐츠가 풍부한 사이트
2. 헤드라인: clamp(26px, 3.5vw, 38px), font-weight 800, letter-spacing -0.03em
3. 히어로 헤드라인만 더 큼: clamp(32px, 4.5vw, 48px)
4. 본문: 14~16px, color gray-500~gray-600, line-height 1.7~1.75
5. 섹션 패딩: 100px (상하), max-width 1200px
6. 카드: border-radius 16px, background gray-50, border 1px gray-200
7. 버튼: primary는 dark(#191F28), 보조는 gray-100(#F2F4F6), CTA/제출만 primary(#E17055)
8. 배경 교차: 흰색 → gray-50 → 흰색 → gray-50 반복으로 섹션 구분
9. 애니메이션: Intersection Observer + framer-motion, fade-up 0.7s cubic-bezier(.25,1,.5,1)
10. 절대 금지: 과도한 그라데이션, 코랄을 화면 전체에 도배, 바이브코딩 느낌, 빈 공간 과다
    코랄 오렌지는 포인트로만 사용하고, 전체 톤은 화이트+그레이 중심을 유지해야 세련됨

■ globals.css에 추가할 것
- 부드러운 스크롤: scroll-behavior: smooth
- @keyframes pulse (LIVE 뱃지용)
- selection 색상: primary-light (#FDEAE5)
- focus-visible 스타일: outline 2px primary (#E17055)
- ::selection { background: #FDEAE5; color: #C0513A; }
```

---

## 3단계: SEO 메타데이터 (app/layout.tsx)

```
app/layout.tsx에 다음 SEO 설정을 적용해줘.

metadata:
  title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션 - 소프트브리지"
  description: "설치 없이 브라우저만으로 1초 미만 초저지연 실시간 증권·코인 방송. 15년간 150+ 고객사가 선택한 WebRTC 기반 방송 솔루션. 무료 데모 체험 가능."
  keywords: "증권방송솔루션, 실시간방송, WebRTC방송, 주식방송프로그램, 코인방송솔루션, 증권라이브, 앵커라이브, 소프트브리지, 화상방송, 투자자문방송, 증권방송플랫폼, 실시간스트리밍"
  
  openGraph:
    title: "앵커라이브 2.0 | WebRTC 실시간 증권방송 솔루션"
    description: "설치 없이 브라우저만으로 실시간 증권·코인 방송"
    url: "https://anchorlive.co.kr"
    siteName: "앵커라이브"
    locale: "ko_KR"
    type: "website"

  robots: index, follow
  themeColor: "#E17055"

JSON-LD 구조화 데이터 (script 태그):
  1. Organization — ㈜소프트브리지, 주소, 전화, 이메일, 웹사이트
  2. SoftwareApplication — 앵커라이브 2.0, WebRTC 방송 솔루션
  3. FAQPage — FAQ 섹션의 8개 질문/답변

sitemap.xml과 robots.txt도 생성해줘.
```

---

## 4단계: 네비게이션 (components/Nav.tsx)

```
고정형 네비게이션을 만들어줘.

구조:
- position fixed, 높이 60px, max-width 1200px (내부)
- 좌측: 로고 아이콘 + "앵커라이브" 텍스트 + "2.0" 배지
  - 로고 아이콘: 코랄 오렌지(#E17055) 배경의 28x28 둥근 사각형, 안에 흰색 방송 아이콘(▶ 또는 화살표)
  - "2.0" 배지: color #E17055, font-size 12px
- 우측 메뉴: 솔루션 소개 | 도입 사례 | 기술 스펙 | 데모 체험 | FAQ | 도입 문의
  - 메뉴 hover 시 color: #E17055 (코랄)
- 맨 우측: "상담 신청" 버튼 — background #E17055, 흰 텍스트, border-radius 10

스크롤 동작:
- 스크롤 30px 이상: 배경 rgba(255,255,255,.92) + backdrop-filter blur(20px) + 하단 border
- 0px: 배경 투명

모바일 (768px 이하):
- 햄버거 메뉴 아이콘
- 클릭 시 전체 화면 오버레이 메뉴 (slide-in)

각 메뉴 smooth scroll:
  솔루션 소개 → #sol, 도입 사례 → #cases, 기술 스펙 → #tech, 데모 체험 → #demo, FAQ → #faq, 도입 문의 → #contact
```

---

## 5단계: 히어로 섹션 (components/Hero.tsx)

```
2열 레이아웃 히어로를 만들어줘.

배경: linear-gradient(180deg, #FFF5F2 0%, #FFFFFF 100%)  ← 코랄 틴트
배경 위에 도트 패턴: radial-gradient(circle at 1px 1px, rgba(225,112,85,.04) 1px, transparent 0), 32px 간격

좌측 (텍스트 영역):
  1. 배지: "WebRTC 기반 차세대 방송 솔루션"
     - pill 형태, background rgba(225,112,85,.08), border 1px rgba(225,112,85,.15)
     - 좌측에 accent mint(#00C9B7) pulse 점
     - 텍스트 color #E17055, font-weight 600

  2. 헤드라인: "설치 없이 브라우저만으로\n실시간 증권방송을\n시작하세요"
     - "실시간 증권방송" 부분만 color #E17055 (코랄)
     - 나머지는 color #191F28 (dark)
     - font-size clamp(32px, 4.5vw, 48px), weight 800

  3. 서브카피: (동일)

  4. CTA 버튼 2개:
     - "무료 데모 체험 →" — background #191F28 (dark), 흰 텍스트
     - "도입 상담" — background #F2F4F6 (gray), color #333D4B

  5. 핵심 수치 3개:
     - 숫자 color: #E17055 (코랄)
     - "150+" 도입 고객사 | "<1초" 방송 지연 | "15년" 업계 경력

우측 (제품 목업):
  방송 화면 UI 목업 — 이전과 동일한 구조이되:
  - LIVE 뱃지 배경: #E17055 (코랄 오렌지)로 변경
  - 활성 마이크 버튼: #E17055 (코랄)로 변경
  - 나머지는 다크 테마 유지 (차트, 캔들 등)

모바일: 1열 (텍스트 위, 목업 아래)
```

---

## 6단계: Trust Bar (components/TrustBar.tsx)

```
히어로 바로 아래 고객사 신뢰 바. 이전과 동일.
pill hover 시 background: #FDEAE5, border-color: #E17055, color: #E17055
```

---

## 7단계: 솔루션 딥다이브 (components/Solutions.tsx)

```
id="sol", 배경 white.

상단:
- 태그: "SOLUTION" — color #E17055, 14px, weight 700, letter-spacing .04em
- 헤드라인: "증권방송에 필요한 모든 기능,\n하나의 솔루션에서"
- 서브카피: (동일)

3개 하위 섹션:

━━━ 섹션 A: 실시간 라이브 방송 ━━━
태그 color: #E17055 (코랄)
헤드라인: "HTS 화면을 공유하며\n전문가 방송을 진행하세요"
2x2 기능 카드 (내용 동일):
  🖥️ 화면 공유 / 📷 PIP / ✏️ 실시간 그리기 / 🎨 AI 가상배경
카드 hover: border-color rgba(225,112,85,.3)

━━━ 섹션 B: 시청자 경험 ━━━
태그 color: #00C9B7 (accent mint)
헤드라인: "설치 없이 웹 브라우저만으로\n실시간 방송에 입장합니다"
2x2 기능 카드:
  💬 양방향 실시간 채팅 / 🤫 귓속말 & 종목 상담 / 📢 공지 등록 / 🔒 접근 제어

━━━ 섹션 C: 녹화 & VOD ━━━
태그 color: #F59E0B (amber)
헤드라인: "방송을 녹화하면\n자동으로 VOD가 생성됩니다"
2x2 기능 카드:
  🔴 원클릭 녹화 / 📹 VOD 자동 변환 / 📱 PC/모바일 VOD 재생 / 💰 유료 VOD 설정

각 카드 상세 설명 텍스트는 이전 프롬프트와 동일.
```

---

## 8단계: 비교표 (components/Comparison.tsx)

```
배경 gray-50.

상단:
- 태그: "COMPARISON" — color #00C9B7 (accent mint)
- 헤드라인: "기존 솔루션 vs 앵커라이브 2.0"

테이블 6개 행 (내용 동일):
  - 헤더 "앵커라이브 2.0" 컬럼 라벨: color #E17055 (코랄)
  - 기존 값: ✕ + color gray-400
  - 신규 값: ✓ + color #E17055 (코랄), weight 600
  - 각 행 하단 설명: italic, gray-400
```

---

## 9단계: 기술 스펙 (components/TechSpec.tsx)

```
id="tech", 배경 white.

상단:
- 태그: "TECHNOLOGY" — color #E17055
- 헤드라인: "기술 스펙 & 연동 구조"

3열 기술 카드 (내용 동일):
  WebRTC 코어 / 서버 인프라 / 클라이언트
  항목 앞 점(●): color #E17055

하단 연동 구조 (dark 배경 카드):
  좌측 "방송자 URL" 라벨: color #E17055 (코랄)
  우측 "시청자 URL" 라벨: color #00C9B7 (accent mint)
  코드 내용 동일.
```

---

## 10단계: 도입 사례 (components/UseCases.tsx)

```
id="cases", 배경 gray-50.

상단 태그: "USE CASES" — color #E17055

3건 (내용 동일):
  K투자자문 / C코인방송 / T트레이드스터디
  
  각 카드:
  - 태그: color #E17055
  - 수치 숫자: color #E17055 (코랄)
  - 나머지 동일
```

---

## 11단계: 데모 체험 (components/Demo.tsx)

```
id="demo", 배경 white.

상단 태그: "LIVE DEMO" — color #E17055

탭 토글: 활성 탭 background white + shadow (동일)

내용 동일. 단:
  - "방송 시작하기 →" 버튼: background #191F28 (dark)
  - "PC 시청 →" 버튼: background #191F28
  - "모바일 시청 →" 버튼: background #F2F4F6
  - 체크마크 ✓: 방송자 탭은 color #E17055, 시청자 탭은 color #00C9B7

URL 동일:
  방송자: https://live.anchorlive.co.kr/broadcasterLive?type=F&site_no=1&user_id=demo&room_code=DEMO
  시청자 PC: https://live.anchorlive.co.kr/viewerLive?type=F&site_no=1&user_id=viewer&room_code=DEMO
  시청자 MO: https://live.anchorlive.co.kr/mo/moViewLive?type=F&site_no=1&user_id=viewer&room_code=DEMO
```

---

## 12단계: FAQ (components/FAQ.tsx)

```
id="faq", 배경 gray-50.

상단 태그: "FAQ" — color #E17055
헤드라인: "자주 묻는 질문"

8개 질문/답변 (내용 동일):
1. 별도 설치 필요한가요?
2. 기존 홈페이지에 어떻게 연동하나요?
3. 동시 접속자 수 제한이 있나요?
4. 방송 지연시간이 실제로 1초 미만인가요?
5. 모바일에서도 방송을 진행할 수 있나요?
6. 요금 체계는 어떻게 되나요?
7. 녹화된 방송은 어디에 저장되나요?
8. 기존 1.5에서 2.0으로 마이그레이션 가능한가요?

+ 아이콘 클릭 시 45도 회전 → × 형태
열린 항목의 + 아이콘 color: #E17055
```

---

## 13단계: CTA 배너 + 문의 폼 + 푸터

```
━━━ CTA 배너 ━━━
배경: #191F28 (dark), padding 80px
  헤드라인: white
  서브카피: #94A3B8
  버튼:
    "무료 데모 체험 →" — background #E17055 (코랄), 흰 텍스트
    "도입 상담 신청" — 반투명 흰색 border, 흰 텍스트

━━━ 도입 문의 폼 ━━━ id="contact"
배경 white, max-width 640px.

태그: "CONTACT" — color #E17055
헤드라인: "도입 문의"
서브카피: "전문 상담원이 귀사의 상황에 맞는 최적의 솔루션을 안내해드립니다.\n영업일 기준 1일 이내에 연락드립니다."

필드: 회사명+담당자 (2열) / 연락처+이메일 (2열) / 업종 select / 문의내용 textarea
input focus: border-color #E17055
제출 버튼: "무료 상담 신청하기" — background #E17055, hover시 #C0513A
하단: 📞 02-2085-6102 · 📧 tom@softbridge.co.kr

제출 후 성공: 체크 아이콘 배경 #FDEAE5, 아이콘 color #E17055

━━━ 푸터 ━━━
배경 gray-50, border-top gray-200

4열: 회사정보 / 솔루션 / 고객지원 / 회사
로고 아이콘 배경: #E17055
링크 hover: color #E17055

하단: © 2026 SoftBridge Co., Ltd. All rights reserved. | 개인정보처리방침 · 이용약관
```

---

## 14단계: 반응형 & 접근성

```
모바일 (< 768px):
  - 네비게이션 → 햄버거 메뉴 (오버레이 slide-in)
  - 히어로 → 1열 (텍스트 위, 목업 아래), 목업에서 채팅 사이드바 숨김
  - Trust Bar → 2줄 wrap
  - 솔루션 카드 → 1열
  - 비교표 → 세로 카드형 전환 또는 가로 스크롤
  - 기술 스펙 → 1열, 코드 블록 1열
  - 도입 사례 → 수치 2열
  - 데모 → 1열
  - 문의 폼 → 모든 input 1열
  - 푸터 → 1열

태블릿 (768~1024px):
  - 히어로 목업 크기 축소
  - 솔루션/기술 카드 2열 유지

접근성:
  - focus-visible: outline 2px #E17055
  - prefers-reduced-motion: 애니메이션 비활성
  - semantic HTML (nav, main, section, footer, h1~h3)
  - WCAG AA 색 대비 충족 (#E17055 on white = 3.13:1 → 큰 텍스트 OK, 본문은 dark 사용)
  - aria-label (네비게이션, 폼, 탭)
```

---

## 색상 적용 요약 (빠른 참조)

| 요소 | 색상 | 코드 |
|------|------|------|
| 섹션 태그 (SOLUTION, FAQ 등) | 코랄 | #E17055 |
| 헤드라인 강조 단어 | 코랄 | #E17055 |
| 핵심 수치 (150+, <1초) | 코랄 | #E17055 |
| 비교표 신규 값 | 코랄 | #E17055 |
| 로고 아이콘 배경 | 코랄 | #E17055 |
| 네비 "상담 신청" 버튼 | 코랄 | #E17055 |
| 폼 제출 버튼 | 코랄 | #E17055 |
| CTA 배너 메인 버튼 | 코랄 | #E17055 |
| input focus border | 코랄 | #E17055 |
| LIVE 뱃지 | 코랄 | #E17055 |
| 배지/pill 배경 | 코랄 연한 | #FDEAE5 |
| 히어로 배경 tint | 코랄 아주 연한 | #FFF5F2 |
| 보조 태그 (시청자, 비교) | 민트 | #00C9B7 |
| 기본 CTA 버튼 (데모 체험) | 다크 | #191F28 |
| 헤드라인 기본 | 다크 | #191F28 |
| 본문 텍스트 | 그레이 | #6B7684 |

---

## 참고: 회사 정보 & URL

회사: ㈜소프트브리지 (SoftBridge Co., Ltd.)
설립: 1998년
주소: 서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
전화: 02-2085-6102 / 02-2085-6105
이메일: tom@softbridge.co.kr / ahndong0213@softbridge.co.kr
웹사이트: www.softbridge.co.kr

방송 URL:
  방송자: https://live.anchorlive.co.kr/broadcasterLive
  PC 시청: https://live.anchorlive.co.kr/viewerLive
  MO 시청: https://live.anchorlive.co.kr/mo/moViewLive

데모용 파라미터: type=F&site_no=1&user_id=demo&room_code=DEMO
