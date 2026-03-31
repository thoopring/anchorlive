# 앵커라이브 2.0 마케팅 사이트 — Claude Code 프롬프트 (최종본)

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

■ 색상
  primary(blue): #3182F6
  primary-dark: #1B64DA  
  primary-light: #E8F3FF
  accent(mint): #00C9B7
  accent-light: #E6FAF7
  dark: #191F28
  gray-800: #333D4B
  gray-600: #4E5968
  gray-500: #6B7684
  gray-400: #8B95A1
  gray-200: #E5E8EB
  gray-100: #F2F4F6
  gray-50: #F9FAFB

■ 디자인 원칙 (반드시 지켜줘)

1. 토스(toss.im) 스타일의 깔끔함 + SGR소프트처럼 콘텐츠가 풍부한 사이트
2. 헤드라인: clamp(26px, 3.5vw, 38px), font-weight 800, letter-spacing -0.03em
3. 히어로 헤드라인만 더 큼: clamp(32px, 4.5vw, 48px)
4. 본문: 14~16px, color gray-500~gray-600, line-height 1.7~1.75
5. 섹션 패딩: 100px (상하), max-width 1200px
6. 카드: border-radius 16px, background gray-50, border 1px gray-200
7. 버튼: primary는 dark(#191F28), 보조는 gray-100(#F2F4F6), CTA만 blue(#3182F6)
8. 배경 교차: 흰색 → gray-50 → 흰색 → gray-50 반복으로 섹션 구분
9. 애니메이션: Intersection Observer + framer-motion, fade-up 0.7s cubic-bezier(.25,1,.5,1)
10. 절대 금지: 과도한 그라데이션, 보라색 계열, 이모지 남발, 바이브코딩 느낌, 빈 공간 과다

■ globals.css에 추가할 것
- 부드러운 스크롤: scroll-behavior: smooth
- @keyframes pulse (LIVE 뱃지용)
- selection 색상: primary-light
- focus-visible 스타일: outline 2px primary
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
- 좌측: 로고 아이콘(blue 사각형 안에 흰색 화살표 SVG) + "앵커라이브" 텍스트 + "2.0" 배지
- 우측 메뉴: 솔루션 소개 | 도입 사례 | 기술 스펙 | 데모 체험 | FAQ | 도입 문의
- 맨 우측: "상담 신청" 버튼 (blue 배경, 흰 텍스트, border-radius 10)

스크롤 동작:
- 스크롤 30px 이상: 배경 rgba(255,255,255,.92) + backdrop-filter blur(20px) + 하단 border
- 0px: 배경 투명, border 투명

모바일 (768px 이하):
- 햄버거 메뉴 아이콘
- 클릭 시 전체 화면 오버레이 메뉴 (slide-in)
- 각 링크 클릭 시 오버레이 닫기

각 메뉴는 해당 섹션 id로 smooth scroll:
  솔루션 소개 → #sol
  도입 사례 → #cases
  기술 스펙 → #tech
  데모 체험 → #demo
  FAQ → #faq
  도입 문의 → #contact
```

---

## 5단계: 히어로 섹션 (components/Hero.tsx)

```
2열 레이아웃 히어로를 만들어줘. 히어로는 콘텐츠가 풍성해야 해.

배경: linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)
배경 위에 은은한 도트 패턴: radial-gradient(circle at 1px 1px, rgba(49,130,246,.04) 1px, transparent 0), 32px 간격

좌측 (텍스트 영역):
  1. 배지: "WebRTC 기반 차세대 방송 솔루션" — pill 형태, blue 배경 8%, 좌측에 mint 색 pulse 점
  2. 헤드라인: "설치 없이 브라우저만으로\n실시간 증권방송을\n시작하세요"
     - "실시간 증권방송" 부분만 color blue
     - font-size clamp(32px, 4.5vw, 48px), weight 800
  3. 서브카피: "15년간 증권방송 시장을 선도한 소프트브리지의 노하우. PC·모바일 어디서든 1초 미만 지연으로 전문가 방송을 송출하고 시청할 수 있습니다."
     - font-size 17px, color gray-500, max-width 420px
  4. CTA 버튼 2개:
     - "무료 데모 체험 →" — dark 배경, 흰 텍스트
     - "도입 상담" — gray-100 배경, gray-800 텍스트
  5. 핵심 수치 3개 (가로 나열):
     - "150+" 도입 고객사 | "<1초" 방송 지연 | "15년" 업계 경력
     - 숫자: font-size 24px, weight 800, color blue

우측 (제품 목업):
  실제 방송 화면을 모방한 UI 목업을 만들어줘. 아주 디테일하게.

  전체 컨테이너: dark 배경, border-radius 20px, box-shadow 0 24px 60px rgba(0,0,0,.12)

  상단 브라우저 크롬:
  - macOS 스타일 3개 점 (빨/노/초)
  - URL: live.anchorlive.co.kr/broadcasterLive (monospace, 작은 글씨)

  메인 영역:
  - 차트 영역 (dark gradient 배경, border-radius 12px, height 200px)
    - SVG로 캔들차트를 그려줘 (22개 캔들, 상승은 초록 #22C55E, 하락은 빨강 #EF4444)
    - 이동평균선 2개 (노란색 #FBBF24, 핑크 #EC4899, 투명도 다르게)
    - LIVE 뱃지: 좌측 상단, 빨간 배경, pulse 애니메이션 점 + "LIVE" 텍스트
    - 접속자 수: 우측 상단, "접속자 127명"

  하단 툴바:
  - 6개 버튼: 🎙️ 마이크(blue 활성) | 🖥️ 화면공유 | 📷 카메라 | ✏️ 그리기 | 🎨 배경 | ⚙️ 설정
  - 마이크만 blue 배경(활성 상태), 나머지는 어둡게

  PIP 영역:
  - 우측 하단에 72x72px 둥근 사각형, 사람 아이콘

  우측 채팅 사이드바:
  - 140px 너비, 반투명 다크 배경
  - "채팅" 헤더
  - 4개 채팅 메시지 (닉네임 + 내용)
  - 하단 "메시지 입력" 인풋

  모든 텍스트는 매우 작게(10~12px) — 목업이므로 실제 읽히는 것보다 그럴듯하게 보이는 게 중요

모바일:
- 1열 레이아웃 (텍스트 위, 목업 아래)
- 목업에서 채팅 사이드바 숨기기
- 수치 2x2 그리드
```

---

## 6단계: Trust Bar (components/TrustBar.tsx)

```
히어로 바로 아래에 고객사 신뢰 바를 만들어줘.

구조:
- 상하 border (gray-200)
- padding 48px
- 중앙 정렬

내용:
- 상단 라벨: "150개 이상의 증권·코인 방송사가 사용 중" — font-size 13px, weight 600, gray-400
- 아래에 고객사 이름 pill 나열 (가로 wrap):
  MTN PLUS, SBS CNBC, 이베스트증권, 아시아경제TV, 뉴지스탁, 815TV, JPTV, 여의도증권방송, 트레이드스터디, 조은스탁, 코인티비, GB스탁스
  
  각 pill: padding 8px 18px, border-radius 100px, background gray-50, border gray-200
  font-size 13px, weight 600, color gray-500
```

---

## 7단계: 솔루션 딥다이브 (components/Solutions.tsx)

```
솔루션 상세 소개 섹션을 만들어줘. 콘텐츠가 풍부해야 한다. id="sol"

상단:
- 태그: "SOLUTION" (blue, 14px, weight 700, letter-spacing .04em)
- 헤드라인: "증권방송에 필요한 모든 기능,\n하나의 솔루션에서"
- 서브카피: "15년간 현장의 요구를 반영해 만든 기능들. 방송 송출부터 시청, 녹화, 관리까지 모든 워크플로우를 지원합니다." — max-width 520px

3개 하위 섹션 (각각 border-top으로 구분, padding 80px 0):

━━━ 섹션 A: 실시간 라이브 방송 ━━━
태그: "실시간 라이브 방송" (blue)
헤드라인: "HTS 화면을 공유하며\n전문가 방송을 진행하세요"

2x2 기능 카드 그리드:
  1. 🖥️ 화면 공유
     "HTS, 증권사 차트, 분석 프로그램 등 PC 화면을 그대로 실시간 송출합니다. 탭 단위 또는 전체 화면 선택 가능."
  2. 📷 PIP (Picture-in-Picture)  
     "화면 공유 위에 전문가 얼굴을 PIP로 동시 송출. 크기 조절, 위치 이동, 좌우 반전 모두 지원합니다."
  3. ✏️ 실시간 그리기
     "방송 중 차트 위에 직접 선, 도형, 텍스트를 그려 핵심 포인트를 설명합니다. 되돌리기와 전체 클리어 기능 포함."
  4. 🎨 AI 가상배경
     "AI가 사람을 인식하여 배경을 투명 또는 흐림 처리. 별도 크로마키 장비 없이 전문적인 방송 환경을 연출합니다."

각 카드: padding 28px, border-radius 16px, background gray-50, border gray-200
hover: background white, box-shadow, border 색상 변경

━━━ 섹션 B: 시청자 경험 ━━━
태그: "시청자 경험" (mint #00C9B7)
헤드라인: "설치 없이 웹 브라우저만으로\n실시간 방송에 입장합니다"

2x2 기능 카드:
  1. 💬 양방향 실시간 채팅 — "시청자와 전문가 간 실시간 텍스트 채팅. 유료/무료 회원별 채팅 권한 설정이 가능합니다."
  2. 🤫 귓속말 & 종목 상담 — "특정 시청자에게만 보이는 귓속말 기능과 종목 상담 요청 기능을 제공합니다."
  3. 📢 공지 등록 — "방송 중 중요 공지사항을 채팅 창 상단에 고정 표시합니다."
  4. 🔒 접근 제어 — "유료방/무료방 구분, 회원 인증, 강제 퇴장 등 체계적인 접근 제어를 지원합니다."

━━━ 섹션 C: 녹화 & VOD ━━━
태그: "녹화 & VOD" (amber #F59E0B)
헤드라인: "방송을 녹화하면\n자동으로 VOD가 생성됩니다"

2x2 기능 카드:
  1. 🔴 원클릭 녹화 — "방송 중 녹화 버튼 클릭으로 즉시 녹화 시작. 1회 최대 30분, 횟수 제한 없이 제공됩니다."
  2. 📹 VOD 자동 변환 — "녹화 종료 시 자동으로 VOD 파일이 생성되며, 고객사 서버로 녹화 정보를 콜백합니다."
  3. 📱 PC/모바일 VOD 재생 — "녹화된 방송은 PC와 모바일 웹에서 별도 설치 없이 바로 시청 가능합니다."
  4. 💰 유료 VOD 설정 — "VOD별로 유료/무료를 설정하고, 회원 등급에 따른 접근 제어가 가능합니다."

모바일: 카드 1열 레이아웃
```

---

## 8단계: 비교표 (components/Comparison.tsx)

```
기존 방식 vs 앵커라이브 2.0 비교표를 만들어줘. 배경 gray-50.

상단:
- 태그: "COMPARISON" (mint)
- 헤드라인: "기존 솔루션 vs 앵커라이브 2.0"
- 서브카피: "ActiveX 시대에서 WebRTC 시대로, 무엇이 달라졌는지 비교해보세요."

테이블 (border-radius 16px, background white, border gray-200):
  헤더: 항목 | 기존 방식 | 앵커라이브 2.0
  
  6개 행 (각 행에 비교 + 하단에 설명 한 줄 추가):
  1. 설치 프로그램
     기존: ✕ ActiveX / EXE 설치 필수
     신규: ✓ 설치 불필요 (웹 브라우저)
     설명: "시청자 이탈의 가장 큰 원인인 설치 장벽을 완전히 제거"
  
  2. 방송 지연시간
     기존: ✕ 6~30초 지연
     신규: ✓ 1초 미만 초저지연
     설명: "WebRTC 기술로 실시간 시세 해설에 최적화된 속도 제공"
  
  3. 모바일 시청
     기존: ✕ iOS/Android 전용 앱 필수
     신규: ✓ 모바일 웹 즉시 시청
     설명: "앱 설치 없이 URL 접속만으로 모바일에서 바로 시청"
  
  4. 브라우저 호환
     기존: ✕ IE/ActiveX 의존 (지원 종료)
     신규: ✓ Chrome·Safari·Edge·Firefox
     설명: "모든 최신 브라우저를 공식 지원"
  
  5. 화면 공유
     기존: ✕ 별도 화면 캡처 프로그램
     신규: ✓ 브라우저 내장 화면 공유
     설명: "WebRTC 기본 기능으로 추가 프로그램 불필요"
  
  6. 연동 방식
     기존: ✕ ActiveX COM 오브젝트
     신규: ✓ URL 호출 방식 (REST)
     설명: "기존 사이트에 URL 파라미터만 전달하면 즉시 연동"

  기존 값: color gray-400
  신규 값: color blue, weight 600
  설명: font-size 13px, italic, color gray-400

모바일: 가로 스크롤 또는 카드형 전환
```

---

## 9단계: 기술 스펙 (components/TechSpec.tsx)

```
기술 아키텍처와 연동 구조 섹션을 만들어줘. id="tech", 배경 white.

상단:
- 태그: "TECHNOLOGY"
- 헤드라인: "기술 스펙 & 연동 구조"
- 서브카피: "WebRTC 기술 기반으로 설계된 앵커라이브 2.0의 기술 아키텍처와 연동 방식을 확인하세요."

3열 기술 카드:
  1. WebRTC 코어
     - Web Real-Time Communication 표준
     - SFU (Selective Forwarding Unit) 서버
     - 적응형 비트레이트 (ABR) 지원
     - DTLS-SRTP 암호화 통신
  
  2. 서버 인프라
     - Spring Framework 기반 백엔드
     - AWS/IDC 이중화 구성
     - 자동 스케일링 (동시접속 대응)
     - 99.9% SLA 가동률 보장
  
  3. 클라이언트
     - 순수 웹 기술 (HTML5/JS)
     - 반응형 UI (PC/태블릿/모바일)
     - Chrome 80+, Safari 14+, Edge 80+
     - iOS Safari, Android Chrome 지원

  각 카드: padding 28px, border-radius 16px, background gray-50
  항목 앞에 blue 점(●)

하단 연동 구조 (dark 배경 카드, border-radius 16px):
  제목: "연동 구조"
  설명: "URL 호출 기반의 심플한 연동. 고객사 웹 서버에서 파라미터를 전달하면 방송이 시작됩니다."
  
  2열로 코드 블록:
  
  좌측 — "방송자 URL" (blue 라벨):
  ```
  https://live.anchorlive.co.kr
    /broadcasterLive
    ?type=P          // P:유료, F:무료
    &site_no=1       // 사이트 번호
    &user_id=expert  // 전문가 ID
    &room_code=ACL20260401
  ```

  우측 — "시청자 URL (PC/Mobile 자동 분기)" (mint 라벨):
  ```
  // PC
  https://live.anchorlive.co.kr
    /viewerLive?type=P&site_no=1
    &user_id=user01&room_code=ACL...

  // Mobile
  https://live.anchorlive.co.kr
    /mo/moViewLive?type=P&site_no=1
    &user_id=user01&room_code=ACL...
  ```
  
  코드 블록: JetBrains Mono, font-size 13px, dark 배경 안에 더 어두운 배경
  
모바일: 1열 코드 블록
```

---

## 10단계: 도입 사례 (components/UseCases.tsx)

```
구체적인 도입 사례 3건을 만들어줘. id="cases", 배경 gray-50.

상단:
- 태그: "USE CASES"
- 헤드라인: "도입 사례"
- 서브카피: "다양한 업종에서 앵커라이브를 어떻게 활용하고 있는지 확인하세요."

세로 카드 3개 (gap 24px):

1. K투자자문 — 시청자 이탈률 40% 감소
   태그: "증권 투자자문사" (blue)
   수치 3개: 40%↓ 이탈률 감소 | 2주 도입 완료 | 3배 모바일 시청
   설명: "기존 ActiveX 기반 방송에서 웹 방송으로 전환. 설치 장벽이 사라지면서 시청자 유입이 크게 증가했고, 특히 모바일 시청자가 3배 이상 늘었습니다. 연동은 기존 사이트 URL 수정만으로 2주 만에 완료."

2. C코인방송 — 앱 없이 모바일 시청 전환
   태그: "코인 방송" (blue)
   수치: 60% 모바일 비율 | Zero 앱 설치 | 24/7 무중단 운영
   설명: "코인 시장 특성상 24시간 방송이 필수. 기존에는 별도 앱이 필요했으나 웹 방송 전환 후 앱 없이도 모바일에서 바로 시청 가능해져 접근성이 크게 개선되었습니다."

3. T트레이드스터디 — 실시간 교육 방송 운영
   태그: "교육 플랫폼" (blue)
   수치: 500+ 동시 접속 | <1초 지연 시간 | VOD 자동 생성
   설명: "주식 교육 플랫폼에서 실시간 강의와 VOD 재시청을 모두 활용. 방송 녹화가 자동으로 VOD로 변환되어 수강생들이 언제든 다시 볼 수 있는 구조를 구축했습니다."

각 카드: padding 40px, border-radius 20px, background white, border gray-200
수치 숫자: font-size 28px, weight 800, color blue
```

---

## 11단계: 데모 체험 (components/Demo.tsx)

```
데모 체험 섹션을 만들어줘. id="demo", 배경 white.

상단:
- 태그: "LIVE DEMO"
- 헤드라인: "직접 체험해보세요"
- 서브카피: "방송자와 시청자 화면을 모두 체험할 수 있습니다. 회원가입 없이 즉시 이용 가능합니다."

탭 토글 (pill 형태, 2개):
- "🎙️ 방송자 체험" | "📺 시청자 체험"
- 활성 탭: white 배경 + shadow, 비활성: 투명

탭 내용 (gray-50 카드, border-radius 20px, padding 48px, 2열 레이아웃):

방송자 탭:
  좌측:
    제목: "방송자 데모"
    설명: "실제 방송 환경과 동일한 화면에서 다음 기능을 체험할 수 있습니다:"
    체크리스트 (✓ blue):
      - 마이크·카메라 설정 및 테스트
      - 화면 공유 (탭/전체화면)
      - PIP 모드 (위치·크기 조절)
      - 실시간 그리기 도구
      - 가상배경 (투명/흐림)
      - 방송 녹화 기능
    버튼: "방송 시작하기 →" (dark 배경)
    URL: https://live.anchorlive.co.kr/broadcasterLive?type=F&site_no=1&user_id=demo&room_code=DEMO
    target="_blank"
  
  우측: 다크 배경 미니 목업 (🎙️ 아이콘 + "클릭 시 새 창에서 방송 화면이 열립니다")

시청자 탭:
  좌측:
    제목: "시청자 데모"
    설명: "PC와 모바일에서 각각 최적화된 시청 환경을 체험합니다:"
    체크리스트 (✓ mint):
      - 실시간 영상 시청 (1초 미만 지연)
      - 화질 선택 (저/중/고해상도/자동)
      - 양방향 실시간 채팅
      - 음량 조절 및 전체화면
      - 접속자 리스트 확인
    버튼 2개:
      "PC 시청 →" (dark) → https://live.anchorlive.co.kr/viewerLive?type=F&site_no=1&user_id=viewer&room_code=DEMO
      "모바일 시청 →" (gray) → https://live.anchorlive.co.kr/mo/moViewLive?type=F&site_no=1&user_id=viewer&room_code=DEMO
  
  우측: 다크 배경 미니 목업 (📺 아이콘)
```

---

## 12단계: FAQ (components/FAQ.tsx)

```
아코디언 형태의 FAQ를 만들어줘. id="faq", 배경 gray-50, max-width 760px.

상단:
- 태그: "FAQ"
- 헤드라인: "자주 묻는 질문"

8개 질문/답변 (클릭 시 열림/닫힘, + 아이콘이 45도 회전):

1. Q: "앵커라이브 도입 시 별도 설치가 필요한가요?"
   A: "아닙니다. 앵커라이브 2.0은 WebRTC 기반 웹 솔루션으로 방송자와 시청자 모두 별도 프로그램 설치 없이 웹 브라우저(Chrome, Safari, Edge 등)만으로 이용 가능합니다."

2. Q: "기존 홈페이지에 어떻게 연동하나요?"
   A: "URL 호출 방식으로 연동합니다. 고객사 웹 서버에서 방송 시작/시청 URL에 파라미터(type, site_no, user_id, room_code)를 전달하면 됩니다. 복잡한 서버 설정이나 SDK 설치가 필요하지 않으며, 보통 1~2주 내에 연동이 완료됩니다."

3. Q: "동시 접속자 수 제한이 있나요?"
   A: "기본적으로 동시 접속자 수에 제한이 없습니다. AWS/IDC 이중화 구성과 자동 스케일링으로 수백~수천 명의 동시 접속을 안정적으로 처리합니다. 대규모 방송이 예상되는 경우 사전 협의를 통해 인프라를 준비해드립니다."

4. Q: "방송 지연시간이 실제로 1초 미만인가요?"
   A: "네, WebRTC 기술 특성상 방송자에서 시청자까지 1초 미만의 지연시간을 제공합니다. 기존 RTMP/HLS 방식의 6~30초 지연과 비교해 획기적으로 빠르며, 실시간 시세 해설이 핵심인 증권방송에 최적화되어 있습니다."

5. Q: "모바일에서도 방송을 진행할 수 있나요?"
   A: "현재 방송 송출은 PC 웹 브라우저에서 진행하며, 시청은 PC와 모바일(iOS Safari, Android Chrome) 모두에서 가능합니다. 모바일 방송 송출 기능은 향후 업데이트 예정입니다."

6. Q: "요금 체계는 어떻게 되나요?"
   A: "고객사의 규모, 동시 접속 수, 녹화 용량 등에 따라 맞춤형 요금이 책정됩니다. 기본적으로 월 구독 방식이며, 상세한 요금은 상담을 통해 안내해드립니다. 무료 데모 체험 후 결정하실 수 있습니다."

7. Q: "녹화된 방송은 어디에 저장되나요?"
   A: "녹화된 VOD는 앵커라이브 서버에 저장되며, 녹화 완료 시 고객사 서버로 녹화 정보(room_code 기반)를 콜백합니다. 장기 보관이 필요한 경우 별도 보관 등록 기능을 제공합니다."

8. Q: "기존 앵커라이브 1.5에서 2.0으로 마이그레이션 가능한가요?"
   A: "네, 기존 앵커라이브 1.5 고객사의 경우 2.0으로의 마이그레이션을 지원합니다. 기존 사이트 구조를 유지하면서 URL 연동 방식만 변경하므로 최소한의 수정으로 전환이 가능합니다."

각 항목: border-radius 14px, background white, border gray-200
열린 상태: 답변이 아래에 slide-down
```

---

## 13단계: CTA 배너 + 문의 폼 + 푸터

```
마지막 3개 섹션을 만들어줘.

━━━ CTA 배너 ━━━
배경: dark (#191F28), padding 80px
중앙 정렬:
  헤드라인: "지금 바로 앵커라이브 2.0을\n체험해보세요" (white)
  서브카피: "무료 데모 체험과 전문 상담을 통해 귀사에 최적화된 방송 솔루션을 확인하세요.\n도입부터 연동 완료까지 평균 2주, 전담 엔지니어가 함께합니다." (gray text)
  버튼: "무료 데모 체험 →" (blue) + "도입 상담 신청" (반투명 흰색 border)

━━━ 도입 문의 폼 ━━━ id="contact"
배경: white, max-width 640px
태그: "CONTACT"
헤드라인: "도입 문의"
서브카피: "전문 상담원이 귀사의 상황에 맞는 최적의 솔루션을 안내해드립니다.\n영업일 기준 1일 이내에 연락드립니다."

폼 필드:
  - 회사명* + 담당자명* (2열)
  - 연락처* + 이메일* (2열)
  - 업종 선택 (select): 증권방송 | 코인방송 | 교육/강의 | 기타
  - 문의 내용 (textarea, placeholder: "도입 예상 시기, 동시 접속 규모, 현재 사용 중인 솔루션 등")
  - 제출 버튼: "무료 상담 신청하기" (blue, 전체 너비)

input 스타일: border-radius 10px, border gray-200, background gray-50
focus 시: border blue, background white

하단 연락처: 📞 02-2085-6102 · 📧 tom@softbridge.co.kr

제출 후: 성공 메시지 표시 (체크 아이콘 + "문의가 접수되었습니다")

━━━ 푸터 ━━━
배경: gray-50, border-top gray-200, padding 48px

4열 레이아웃:
  1열 (넓게): 로고 + 회사 정보
    ㈜소프트브리지 | 대표이사
    사업자등록번호: 000-00-00000
    서울특별시 중구 삼일대로 308 조양빌딩 본관 12층
    02-2085-6102 · tom@softbridge.co.kr
  
  2열: 솔루션 — 실시간 방송, VOD 녹화, 화면 공유, 채팅 시스템, 연동 가이드
  3열: 고객지원 — 도입 문의, 데모 체험, 기술 문서, FAQ
  4열: 회사 — 회사 소개, 연혁, 채용, 블로그

하단 구분선 + 저작권:
  좌: © 2026 SoftBridge Co., Ltd. All rights reserved.
  우: 개인정보처리방침 · 이용약관

모바일: 1열 레이아웃
```

---

## 14단계: 반응형 & 접근성

```
전체 사이트에 다음 반응형 처리를 해줘.

모바일 (< 768px):
  - 네비게이션: 햄버거 메뉴 → 풀스크린 오버레이
  - 히어로: 1열 (텍스트 위, 목업 아래), 목업에서 채팅 사이드바 숨김
  - Trust Bar: 2줄 wrap
  - 솔루션 카드: 1열
  - 비교표: 세로 카드형 또는 가로 스크롤
  - 기술 스펙: 1열, 코드 블록 1열
  - 도입 사례: 수치 2열
  - 데모: 1열
  - FAQ: 그대로 (이미 1열)
  - 문의 폼: 모든 input 1열
  - 푸터: 1열

태블릿 (768~1024px):
  - 히어로: 목업 크기 축소
  - 솔루션/기술 카드: 2열 유지
  - 도입 사례: 카드 내 수치 줄이기

접근성:
  - 모든 interactive 요소에 focus-visible 스타일
  - prefers-reduced-motion: 애니메이션 비활성
  - 이미지 alt 텍스트
  - semantic HTML (nav, main, section, footer, h1~h3)
  - WCAG AA 색 대비 충족
  - aria-label 적용 (네비게이션, 폼)
```

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
