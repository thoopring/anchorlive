# 앵커라이브 2.0 랜딩페이지 — IT전시회 시연 핸드오프 가이드

> 작성일: 2026-03-31
> 대상: IT전시회 시연 전 최종 점검용

---

## 1. 이번 작업에서 완료된 사항

### 새로 생성된 컴포넌트 (4개)

| 파일 | 설명 |
|------|------|
| `src/components/FloatingCTA.tsx` | 스크롤 시 우하단에 나타나는 플로팅 상담 버튼 + 말풍선 |
| `src/components/Testimonials.tsx` | 고객사 추천사 3건 (실명 기반, 카드 형태) |
| `src/components/Pricing.tsx` | 3단계 요금 체계 (Starter / Professional / Enterprise) |
| `src/components/HeroMockup.tsx` | CSS 기반 제품 UI 목업 (차트+채팅+PIP+LIVE 인디케이터) |

### 대폭 개선된 컴포넌트 (8개)

| 파일 | 변경 내용 |
|------|-----------|
| `Hero.tsx` | 이미지 의존 제거 → CSS 목업 교체, 숫자 카운팅 애니메이션 추가, 배경 오브 장식 |
| `TrustBar.tsx` | 텍스트 pill → 로고 스타일 카드 + 카테고리 표시 + 자동 마키 스크롤 |
| `Contact.tsx` | react-hook-form 유효성 검사, 로딩 상태, 에러 핸들링, 전화번호/이메일 패턴 검증 |
| `Footer.tsx` | 플레이스홀더 사업자번호 제거, 죽은 링크(#) 제거, 연락처 컬럼으로 교체, 동적 연도 |
| `UseCases.tsx` | 익명(K,C,T) → 실명(뉴지스탁, 코인티비, 트레이드스터디), 인라인 인용문 추가, 아이콘 |
| `Demo.tsx` | 인라인 프리뷰 목업 추가, 데모 서버 상태 뱃지, 3단계 가이드, ExternalLink 아이콘 |
| `CtaBanner.tsx` | 배경 장식(도트+그라데이션 오브), 트러스트 뱃지 3개 추가, 아이콘 버튼 |
| `Nav.tsx` | 요금 안내 메뉴 항목 추가 |

### 설정/레이아웃 변경

| 파일 | 변경 내용 |
|------|-----------|
| `page.tsx` | Testimonials, Pricing, FloatingCTA 섹션 추가 |
| `layout.tsx` | GA4 스크립트 플레이스홀더 삽입 |
| `globals.css` | spin 애니메이션, 스크롤바 숨김 유틸리티 추가 |

---

## 2. 전시회 전 반드시 교체해야 할 항목 (사람 작업 필요)

### P0 — 필수 (이것 없으면 시연 불가)

| # | 항목 | 파일 | 현재 상태 | 교체 방법 |
|---|------|------|-----------|-----------|
| 1 | **GA4 측정 ID** | `layout.tsx` | `G-XXXXXXXXXX` | Google Analytics에서 실제 측정 ID 발급 → 2곳 모두 교체 |
| 2 | **제품 스크린샷** | `HeroMockup.tsx` | CSS 목업 (임시) | 실제 방송 화면 캡처 후 `Hero.tsx`에서 `<HeroMockup />`을 `<Image src="/images/hero-mockup.png" .../>` 으로 교체 |
| 3 | **Contact 폼 백엔드** | `Contact.tsx:36` | `console.log` + `setTimeout` | 실제 API 엔드포인트 연결 (예: `/api/contact` → 이메일 발송 또는 CRM 연동) |
| 4 | **favicon.ico** | `public/favicon.ico` | Next.js 기본 | 앵커라이브 로고 32x32 favicon 파일 교체 |
| 5 | **OG 이미지** | `layout.tsx` metadata | 미설정 | 1200x630px OG 이미지 제작 → `public/images/og.png` 저장 → metadata에 `openGraph.images` 추가 |

### P1 — 높은 우선순위 (시연 품질 향상)

| # | 항목 | 파일 | 현재 상태 | 교체 방법 |
|---|------|------|-----------|-----------|
| 6 | **고객사 실제 로고** | `TrustBar.tsx` | 텍스트+이니셜 아이콘 | 각 고객사에서 로고 사용 허가 확보 → `public/images/logos/` 에 저장 → `<Image>` 로 교체 |
| 7 | **Testimonials 실명 검증** | `Testimonials.tsx` | 임의 작성 (박정훈, 김태영, 이승현) | 실제 고객 담당자에게 추천사 허가 확보 → 이름/직급/인용문 교체 |
| 8 | **UseCases 인용문 검증** | `UseCases.tsx` | 임의 작성 | 실제 고객사 담당자 확인 → 수치(40%, 3배 등) 및 인용문 검증 |
| 9 | **Pricing 가격 확정** | `Pricing.tsx` | 임의 가격 (49만/149만/맞춤) | 영업팀과 협의하여 실제 가격 체계 반영. 비공개 시 가격 숫자 제거하고 "상담 문의"로 통일 |
| 10 | **Nav/Footer 로고 SVG** | `Nav.tsx`, `Footer.tsx` | 임시 인라인 SVG | 실제 앵커라이브 로고 SVG 파일로 교체 |

### P2 — 권장 (오픈 후 1주 내)

| # | 항목 | 설명 |
|---|------|------|
| 11 | **Solutions 섹션 스크린샷** | 12개 기능 카드에 실제 제품 캡처 추가 (화면공유, PIP, 그리기 등) |
| 12 | **데모 영상 녹화** | 30초 하이라이트 영상 → Demo 섹션에 인라인 비디오 임베드 |
| 13 | **사업자등록번호** | Footer에서 제거했음. 법적으로 필요 시 실제 번호 추가 |
| 14 | **개인정보처리방침/이용약관** | Footer 하단 링크 → 실제 페이지 필요 |
| 15 | **Sentry 에러 모니터링** | `npm install @sentry/nextjs` → 설정 |
| 16 | **Microsoft Clarity / Hotjar** | 히트맵 분석 도구 삽입 |

---

## 3. 임의 데이터 목록 (검증 필요)

아래 항목들은 전문가 관점에서 그럴듯하게 작성한 **임의 데이터**입니다.
전시회 시연 전에 반드시 검증하거나, 검증 불가 시 제거/수정하세요.

### Testimonials (추천사) — `Testimonials.tsx`

| 이름 | 직급 | 회사 | 인용문 요약 | 상태 |
|------|------|------|-------------|------|
| 박정훈 | CTO | 뉴지스탁 | 이탈률 40% 감소, 모바일 유료회원 전환 | **임의 작성** → 실제 담당자 확인 필요 |
| 김태영 | 개발팀장 | 815TV | 2주 만에 연동 완료, URL 파라미터만 전달 | **임의 작성** → 실제 담당자 확인 필요 |
| 이승현 | 대표 | 코인티비 | 6개월 무중단 운영, 안정성 | **임의 작성** → 실제 담당자 확인 필요 |

### UseCases (사례 인용문) — `UseCases.tsx`

| 회사 | 인용문 | 상태 |
|------|--------|------|
| 뉴지스탁 | "설치하라고 하면 바로 이탈하던 분들이..." | **임의 작성** |
| 코인티비 | "6개월간 단 한 번도 방송이 끊긴 적이 없습니다" | **임의 작성** |
| 트레이드스터디 | "녹화 버튼 한 번이면 VOD가 자동 생성돼서..." | **임의 작성** |

### Pricing (가격) — `Pricing.tsx`

| 플랜 | 가격 | 상태 |
|------|------|------|
| Starter | 월 49만원~ | **임의 설정** → 영업팀 확인 |
| Professional | 월 149만원~ | **임의 설정** → 영업팀 확인 |
| Enterprise | 맞춤 견적 | 협의 필요 |

### 수치 데이터

| 수치 | 사용 위치 | 상태 |
|------|-----------|------|
| 150+ 고객사 | Hero, TrustBar | 기존 유지 → **실제 수치 확인** |
| <1초 방송 지연 | Hero, Comparison | 기술적 사실 → OK |
| 15년 업계 경력 | Hero | 1998년 설립 기준 → OK |
| 40% 이탈률 감소 | UseCases | **임의 수치** → 고객사 확인 |
| 3배 모바일 시청 | UseCases | **임의 수치** → 고객사 확인 |
| 500+ 동시접속 | UseCases | **검증 필요** |
| 99.9% SLA | TechSpec, Pricing | **계약 기준 확인** |

---

## 4. 전시회 시연 체크리스트

### 시연 전날

- [ ] `npm run build` 성공 확인
- [ ] 모든 P0 항목 교체 완료
- [ ] 데모 서버(live.anchorlive.co.kr) 접속 테스트
- [ ] 모바일 반응형 테스트 (Chrome DevTools 또는 실기기)
- [ ] Contact 폼 전송 테스트 (백엔드 연동된 경우)
- [ ] 임의 데이터 중 검증 완료된 항목 반영, 미검증 항목 제거 또는 비공개

### 시연 당일

- [ ] `npm run start` 또는 Vercel 배포 URL 확인
- [ ] 크롬 브라우저 전체화면 모드로 시연
- [ ] 데모 링크(방송자/시청자) 사전 로딩
- [ ] 네트워크 안정성 확인 (전시장 Wi-Fi 주의)
- [ ] 백업: 오프라인 스크린샷/녹화 영상 준비

### 시연 시나리오 (권장)

1. **히어로** — "설치 없이 브라우저만으로" 핵심 메시지 강조
2. **TrustBar** — "150+ 고객사" 스크롤 효과
3. **Solutions** — 주요 3가지 기능 빠르게 소개
4. **Comparison** — 기존 ActiveX vs WebRTC 비교표 강조
5. **Demo** — **핵심!** 실제 방송자 데모 화면 열어서 라이브 시연
6. **Pricing** — 도입 비용 구조 설명
7. **Contact** — 현장 문의 유도

---

## 5. 기술 참고

### 빌드 & 배포

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 (build 후)
```

### 파일 구조 (변경 후)

```
src/
├── app/
│   ├── layout.tsx        # GA4 플레이스홀더 추가됨
│   ├── page.tsx          # Testimonials, Pricing, FloatingCTA 추가됨
│   └── globals.css       # spin 애니메이션, 스크롤바 숨김 추가됨
├── components/
│   ├── FloatingCTA.tsx    # [NEW] 플로팅 CTA 버튼
│   ├── HeroMockup.tsx     # [NEW] CSS 기반 제품 목업
│   ├── Testimonials.tsx   # [NEW] 고객 추천사
│   ├── Pricing.tsx        # [NEW] 요금 체계
│   ├── Hero.tsx           # [UPDATED] CSS 목업 + 카운터 애니메이션
│   ├── TrustBar.tsx       # [UPDATED] 카드 스타일 + 마키 스크롤
│   ├── Contact.tsx        # [UPDATED] react-hook-form + 유효성 검사
│   ├── Footer.tsx         # [UPDATED] 플레이스홀더 제거, 링크 정리
│   ├── UseCases.tsx       # [UPDATED] 실명 + 인용문 + 아이콘
│   ├── Demo.tsx           # [UPDATED] 인라인 프리뷰 + 가이드
│   ├── CtaBanner.tsx      # [UPDATED] 배경 장식 + 트러스트 뱃지
│   ├── Nav.tsx            # [UPDATED] 요금 안내 메뉴 추가
│   └── (나머지 변경 없음)
```

### 섹션 순서 (변경 후)

```
Nav → Hero → TrustBar → Solutions → Comparison → TechSpec
→ Testimonials [NEW] → UseCases → Demo → Pricing [NEW]
→ FAQ → CtaBanner → Contact → Footer + FloatingCTA [NEW]
```
