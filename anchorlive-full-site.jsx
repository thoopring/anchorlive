import { useState, useEffect, useRef } from "react";

const C = {
  blue: "#3182F6", blueDark: "#1B64DA", blueLight: "#E8F3FF",
  mint: "#00C9B7", mintLight: "#E6FAF7",
  dark: "#191F28", gray800: "#333D4B", gray600: "#4E5968",
  gray500: "#6B7684", gray400: "#8B95A1", gray200: "#E5E8EB",
  gray100: "#F2F4F6", gray50: "#F9FAFB", white: "#FFFFFF",
};
const F = "'Pretendard Variable','Pretendard',-apple-system,'Apple SD Gothic Neo',sans-serif";

function useReveal(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function R({children,delay=0,style={}}){const[r,v]=useReveal();return<div ref={r} style={{...style,opacity:v?1:0,transform:v?"translateY(0)":"translateY(36px)",transition:`opacity 0.7s cubic-bezier(.25,1,.5,1) ${delay}s, transform 0.7s cubic-bezier(.25,1,.5,1) ${delay}s`}}>{children}</div>}

/* ══════ NAV ══════ */
function Nav(){
  const[s,setS]=useState(false);
  useEffect(()=>{const h=()=>setS(window.scrollY>30);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);
  const links=[{l:"솔루션 소개",h:"#sol"},{l:"도입 사례",h:"#cases"},{l:"기술 스펙",h:"#tech"},{l:"데모 체험",h:"#demo"},{l:"FAQ",h:"#faq"},{l:"도입 문의",h:"#contact"}];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,height:60,background:s?"rgba(255,255,255,.92)":"transparent",backdropFilter:s?"saturate(180%) blur(20px)":"none",WebkitBackdropFilter:s?"saturate(180%) blur(20px)":"none",borderBottom:s?"1px solid rgba(0,0,0,.06)":"1px solid transparent",transition:"all .3s"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%"}}>
        <a href="#" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:7}}>
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill={C.blue}/><path d="M8 14L12 10V12.5H18V15.5H12V18L8 14Z" fill="white"/></svg>
          <span style={{fontSize:17,fontWeight:700,color:C.dark,fontFamily:F,letterSpacing:"-.02em"}}>앵커라이브<span style={{color:C.blue,marginLeft:3,fontSize:12,fontWeight:600}}>2.0</span></span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:24}}>
          {links.map((x,i)=><a key={i} href={x.h} style={{textDecoration:"none",fontSize:14,fontWeight:500,color:C.gray600,fontFamily:F,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.dark} onMouseLeave={e=>e.target.style.color=C.gray600}>{x.l}</a>)}
          <a href="#contact" style={{padding:"9px 20px",borderRadius:10,background:C.blue,color:"#fff",fontSize:14,fontWeight:600,fontFamily:F,textDecoration:"none"}}>상담 신청</a>
        </div>
      </div>
    </nav>
  );
}

/* ══════ HERO ══════ */
function Hero(){
  return(
    <section style={{paddingTop:140,paddingBottom:80,background:`linear-gradient(180deg,#F0F4FF 0%,${C.white} 100%)`,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 1px 1px,rgba(49,130,246,.04) 1px,transparent 0)",backgroundSize:"32px 32px"}}/>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
          {/* left text */}
          <div>
            <R><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:100,background:"rgba(49,130,246,.08)",marginBottom:24}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:C.mint,animation:"pulse 2s infinite"}}/>
              <span style={{fontSize:13,fontWeight:600,color:C.blue,fontFamily:F}}>WebRTC 기반 차세대 방송 솔루션</span>
            </div></R>
            <R delay={.05}><h1 style={{fontSize:"clamp(32px,4.5vw,48px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.04em",lineHeight:1.25,marginBottom:20}}>
              설치 없이 브라우저만으로<br/><span style={{color:C.blue}}>실시간 증권방송</span>을<br/>시작하세요
            </h1></R>
            <R delay={.1}><p style={{fontSize:17,color:C.gray500,fontFamily:F,lineHeight:1.75,marginBottom:32,maxWidth:420}}>
              15년간 증권방송 시장을 선도한 소프트브리지의 노하우. PC·모바일 어디서든 1초 미만 지연으로 전문가 방송을 송출하고 시청할 수 있습니다.
            </p></R>
            <R delay={.15}><div style={{display:"flex",gap:10,marginBottom:40}}>
              <a href="#demo" style={{padding:"14px 30px",borderRadius:12,background:C.dark,color:"#fff",fontSize:15,fontWeight:600,fontFamily:F,textDecoration:"none"}}>무료 데모 체험 →</a>
              <a href="#contact" style={{padding:"14px 30px",borderRadius:12,background:C.gray100,color:C.gray800,fontSize:15,fontWeight:600,fontFamily:F,textDecoration:"none"}}>도입 상담</a>
            </div></R>
            <R delay={.2}><div style={{display:"flex",gap:32}}>
              {[{n:"150+",l:"도입 고객사"},{n:"<1초",l:"방송 지연"},{n:"15년",l:"업계 경력"}].map((s,i)=>(
                <div key={i}><span style={{fontSize:24,fontWeight:800,color:C.blue,fontFamily:F}}>{s.n}</span><span style={{display:"block",fontSize:13,color:C.gray400,fontFamily:F,marginTop:2}}>{s.l}</span></div>
              ))}
            </div></R>
          </div>
          {/* right visual */}
          <R delay={.1}>
            <div style={{background:C.dark,borderRadius:20,overflow:"hidden",boxShadow:"0 24px 60px rgba(0,0,0,.12)"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,padding:"12px 16px",background:"#0F172A"}}>
                {["#FF5F57","#FEBC2E","#28C840"].map((c,i)=><div key={i} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}
                <span style={{fontSize:11,color:"#475569",fontFamily:"monospace",marginLeft:12}}>live.anchorlive.co.kr/broadcasterLive</span>
              </div>
              <div style={{padding:16,position:"relative"}}>
                <div style={{background:"linear-gradient(180deg,#1E293B,#0F172A)",borderRadius:12,height:200,position:"relative",overflow:"hidden"}}>
                  <svg width="100%" height="100%" viewBox="0 0 440 200" style={{position:"absolute",bottom:0}}>
                    {[35,50,43,58,66,52,70,80,68,84,90,75,87,100,93,105,102,110,97,113,108,120].map((h,i)=>{const x=12+i*19,up=i%3!==0;return<g key={i}><line x1={x} y1={200-h-8} x2={x} y2={200-h+16} stroke={up?"#22C55E":"#EF4444"} strokeWidth="1.2"/><rect x={x-3.5} y={200-h} width="7" height="12" rx="1" fill={up?"#22C55E":"#EF4444"} opacity=".8"/></g>})}
                    <path d="M12,165 Q60,150 100,140 T200,112 T300,80 T430,58" fill="none" stroke="#FBBF24" strokeWidth="1.2" opacity=".5"/>
                    <path d="M12,170 Q80,162 140,152 T250,125 T380,92 T430,78" fill="none" stroke="#EC4899" strokeWidth="1" opacity=".3"/>
                  </svg>
                  <div style={{position:"absolute",top:10,left:10,display:"flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:6,background:"rgba(239,68,68,.9)"}}>
                    <div style={{width:5,height:5,borderRadius:"50%",background:"#fff",animation:"pulse 1.5s infinite"}}/>
                    <span style={{fontSize:10,fontWeight:700,color:"#fff",fontFamily:F}}>LIVE</span>
                  </div>
                  <div style={{position:"absolute",top:10,right:10,fontSize:10,color:"#94A3B8",fontFamily:F,background:"rgba(0,0,0,.4)",padding:"3px 8px",borderRadius:4}}>접속자 127명</div>
                </div>
                <div style={{display:"flex",gap:8,marginTop:12,justifyContent:"center",flexWrap:"wrap"}}>
                  {["🎙️ 마이크","🖥️ 화면공유","📷 카메라","✏️ 그리기","🎨 배경","⚙️ 설정"].map((t,i)=><div key={i} style={{padding:"6px 12px",borderRadius:8,background:i===0?C.blue:"rgba(255,255,255,.06)",fontSize:11,color:i===0?"#fff":"#94A3B8",fontFamily:F,fontWeight:500}}>{t}</div>)}
                </div>
                {/* PIP */}
                <div style={{position:"absolute",bottom:56,right:28,width:72,height:72,borderRadius:12,background:"linear-gradient(135deg,#334155,#1E293B)",border:"1.5px solid rgba(255,255,255,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>👤</div>
                {/* chat sidebar */}
                <div style={{position:"absolute",top:0,right:0,width:140,height:"100%",background:"rgba(15,23,42,.8)",borderLeft:"1px solid rgba(255,255,255,.06)",padding:"10px 8px",display:"flex",flexDirection:"column",fontSize:10,fontFamily:F}}>
                  <div style={{fontWeight:700,color:"#E2E8F0",marginBottom:6,paddingBottom:4,borderBottom:"1px solid rgba(255,255,255,.06)"}}>채팅</div>
                  {[{n:"투자고수",m:"이 구간 주목",c:C.blue},{n:"주린이",m:"감사합니다 🙏",c:"#94A3B8"},{n:"달인",m:"매수 타점!",c:"#94A3B8"},{n:"코인맨",m:"좋은 분석이네요",c:"#94A3B8"}].map((c,i)=><div key={i} style={{marginBottom:4,lineHeight:1.4}}><span style={{fontWeight:600,color:c.c}}>{c.n}</span><span style={{color:"#94A3B8",marginLeft:4}}>{c.m}</span></div>)}
                  <div style={{marginTop:"auto",padding:"5px 8px",borderRadius:6,background:"rgba(255,255,255,.05)",color:"#475569",fontSize:10}}>메시지 입력</div>
                </div>
              </div>
            </div>
          </R>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </section>
  );
}

/* ══════ TRUST BAR ══════ */
function TrustBar(){
  const clients=["MTN PLUS","SBS CNBC","이베스트증권","아시아경제TV","뉴지스탁","815TV","JPTV","여의도증권방송","트레이드스터디","조은스탁","코인티비","GB스탁스"];
  return(
    <section style={{padding:"48px 32px",background:C.white,borderTop:`1px solid ${C.gray200}`,borderBottom:`1px solid ${C.gray200}`}}>
      <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:13,fontWeight:600,color:C.gray400,fontFamily:F,marginBottom:20,letterSpacing:".02em"}}>150개 이상의 증권·코인 방송사가 사용 중</p>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8}}>
          {clients.map((c,i)=><span key={i} style={{padding:"8px 18px",borderRadius:100,background:C.gray50,fontSize:13,fontWeight:600,color:C.gray500,fontFamily:F,border:`1px solid ${C.gray200}`}}>{c}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ══════ SOLUTIONS DEEP DIVE ══════ */
function Solutions(){
  const sections=[
    {
      tag:"실시간 라이브 방송",tagColor:C.blue,
      title:"HTS 화면을 공유하며\n전문가 방송을 진행하세요",
      points:[
        {icon:"🖥️",title:"화면 공유",desc:"HTS, 증권사 차트, 분석 프로그램 등 PC 화면을 그대로 실시간 송출합니다. 탭 단위 또는 전체 화면 선택 가능."},
        {icon:"📷",title:"PIP (Picture-in-Picture)",desc:"화면 공유 위에 전문가 얼굴을 PIP로 동시 송출. 크기 조절, 위치 이동, 좌우 반전 모두 지원합니다."},
        {icon:"✏️",title:"실시간 그리기",desc:"방송 중 차트 위에 직접 선, 도형, 텍스트를 그려 핵심 포인트를 설명합니다. 되돌리기와 전체 클리어 기능 포함."},
        {icon:"🎨",title:"AI 가상배경",desc:"AI가 사람을 인식하여 배경을 투명 또는 흐림 처리. 별도 크로마키 장비 없이 전문적인 방송 환경을 연출합니다."},
      ],
      visual:"broadcast"
    },
    {
      tag:"시청자 경험",tagColor:C.mint,
      title:"설치 없이 웹 브라우저만으로\n실시간 방송에 입장합니다",
      points:[
        {icon:"💬",title:"양방향 실시간 채팅",desc:"시청자와 전문가 간 실시간 텍스트 채팅. 유료/무료 회원별 채팅 권한 설정이 가능합니다."},
        {icon:"🤫",title:"귓속말 & 종목 상담",desc:"특정 시청자에게만 보이는 귓속말 기능과 종목 상담 요청 기능을 제공합니다."},
        {icon:"📢",title:"공지 등록",desc:"방송 중 중요 공지사항을 채팅 창 상단에 고정 표시합니다."},
        {icon:"🔒",title:"접근 제어",desc:"유료방/무료방 구분, 회원 인증, 강제 퇴장 등 체계적인 접근 제어를 지원합니다."},
      ],
      visual:"viewer"
    },
    {
      tag:"녹화 & VOD",tagColor:"#F59E0B",
      title:"방송을 녹화하면\n자동으로 VOD가 생성됩니다",
      points:[
        {icon:"🔴",title:"원클릭 녹화",desc:"방송 중 녹화 버튼 클릭으로 즉시 녹화 시작. 1회 최대 30분, 횟수 제한 없이 제공됩니다."},
        {icon:"📹",title:"VOD 자동 변환",desc:"녹화 종료 시 자동으로 VOD 파일이 생성되며, 고객사 서버로 녹화 정보를 콜백합니다."},
        {icon:"📱",title:"PC/모바일 VOD 재생",desc:"녹화된 방송은 PC와 모바일 웹에서 별도 설치 없이 바로 시청 가능합니다."},
        {icon:"💰",title:"유료 VOD 설정",desc:"VOD별로 유료/무료를 설정하고, 회원 등급에 따른 접근 제어가 가능합니다."},
      ],
      visual:"vod"
    },
  ];

  return(
    <section id="sol" style={{padding:"100px 32px 0",background:C.white}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <R><div style={{textAlign:"center",marginBottom:80}}>
          <span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>SOLUTION</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10,marginBottom:14}}>증권방송에 필요한 모든 기능,<br/>하나의 솔루션에서</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F,lineHeight:1.7,maxWidth:520,margin:"0 auto"}}>15년간 현장의 요구를 반영해 만든 기능들. 방송 송출부터 시청, 녹화, 관리까지 모든 워크플로우를 지원합니다.</p>
        </div></R>

        {sections.map((sec,si)=>(
          <div key={si} style={{padding:"80px 0",borderTop:si>0?`1px solid ${C.gray200}`:"none"}}>
            <R><span style={{fontSize:14,fontWeight:700,color:sec.tagColor,fontFamily:F}}>{sec.tag}</span></R>
            <R delay={.04}><h3 style={{fontSize:"clamp(24px,3vw,34px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.35,marginTop:10,marginBottom:40,whiteSpace:"pre-line"}}>{sec.title}</h3></R>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {sec.points.map((p,i)=>(
                <R key={i} delay={i*.05}>
                  <div style={{padding:28,borderRadius:16,background:C.gray50,border:`1px solid ${C.gray200}`,transition:"all .25s",cursor:"default"}}
                    onMouseEnter={e=>{e.currentTarget.style.background=C.white;e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,.04)";e.currentTarget.style.borderColor="#d0d5dd"}}
                    onMouseLeave={e=>{e.currentTarget.style.background=C.gray50;e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=C.gray200}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                      <span style={{fontSize:20}}>{p.icon}</span>
                      <span style={{fontSize:16,fontWeight:700,color:C.dark,fontFamily:F}}>{p.title}</span>
                    </div>
                    <p style={{fontSize:14,color:C.gray500,fontFamily:F,lineHeight:1.7}}>{p.desc}</p>
                  </div>
                </R>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════ COMPARISON ══════ */
function Comparison(){
  const rows=[
    {f:"설치 프로그램",o:"ActiveX / EXE 설치 필수",n:"설치 불필요 (웹 브라우저)",d:"시청자 이탈의 가장 큰 원인인 설치 장벽을 완전히 제거"},
    {f:"방송 지연시간",o:"6~30초 지연",n:"1초 미만 초저지연",d:"WebRTC 기술로 실시간 시세 해설에 최적화된 속도 제공"},
    {f:"모바일 시청",o:"iOS/Android 전용 앱 필수",n:"모바일 웹 즉시 시청",d:"앱 설치 없이 URL 접속만으로 모바일에서 바로 시청"},
    {f:"브라우저 호환",o:"IE/ActiveX 의존 (지원 종료)",n:"Chrome·Safari·Edge·Firefox",d:"모든 최신 브라우저를 공식 지원"},
    {f:"화면 공유",o:"별도 화면 캡처 프로그램",n:"브라우저 내장 화면 공유",d:"WebRTC 기본 기능으로 추가 프로그램 불필요"},
    {f:"연동 방식",o:"ActiveX COM 오브젝트",n:"URL 호출 방식 (REST)",d:"기존 사이트에 URL 파라미터만 전달하면 즉시 연동"},
  ];
  return(
    <section style={{padding:"100px 32px",background:C.gray50}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <R><div style={{textAlign:"center",marginBottom:56}}>
          <span style={{fontSize:14,fontWeight:700,color:C.mint,fontFamily:F,letterSpacing:".04em"}}>COMPARISON</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10}}>기존 솔루션 vs 앵커라이브 2.0</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F,marginTop:12}}>ActiveX 시대에서 WebRTC 시대로, 무엇이 달라졌는지 비교해보세요.</p>
        </div></R>
        <R delay={.08}>
          <div style={{borderRadius:16,overflow:"hidden",border:`1px solid ${C.gray200}`,background:C.white}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr 1.5fr",padding:"14px 24px",background:C.gray100,borderBottom:`1px solid ${C.gray200}`}}>
              <span style={{fontSize:13,fontWeight:700,color:C.gray400,fontFamily:F}}>항목</span>
              <span style={{fontSize:13,fontWeight:700,color:C.gray400,fontFamily:F}}>기존 방식</span>
              <span style={{fontSize:13,fontWeight:700,color:C.blue,fontFamily:F}}>앵커라이브 2.0</span>
            </div>
            {rows.map((r,i)=>(
              <div key={i} style={{borderBottom:i<rows.length-1?`1px solid ${C.gray100}`:"none"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr 1.5fr",padding:"16px 24px",alignItems:"start"}}>
                  <span style={{fontSize:14,fontWeight:700,color:C.dark,fontFamily:F}}>{r.f}</span>
                  <span style={{fontSize:14,color:C.gray400,fontFamily:F}}>✕ {r.o}</span>
                  <span style={{fontSize:14,fontWeight:600,color:C.blue,fontFamily:F}}>✓ {r.n}</span>
                </div>
                <div style={{padding:"0 24px 14px",paddingLeft:24}}><span style={{fontSize:13,color:C.gray400,fontFamily:F,fontStyle:"italic"}}>{r.d}</span></div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ══════ TECH SPEC ══════ */
function TechSpec(){
  return(
    <section id="tech" style={{padding:"100px 32px",background:C.white}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <R><div style={{marginBottom:56}}>
          <span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>TECHNOLOGY</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10,marginBottom:14}}>기술 스펙 & 연동 구조</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F,lineHeight:1.7,maxWidth:600}}>WebRTC 기술 기반으로 설계된 앵커라이브 2.0의 기술 아키텍처와 연동 방식을 확인하세요.</p>
        </div></R>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,marginBottom:48}}>
          {[
            {title:"WebRTC 코어",items:["Web Real-Time Communication 표준","SFU (Selective Forwarding Unit) 서버","적응형 비트레이트 (ABR) 지원","DTLS-SRTP 암호화 통신"]},
            {title:"서버 인프라",items:["Spring Framework 기반 백엔드","AWS/IDC 이중화 구성","자동 스케일링 (동시접속 대응)","99.9% SLA 가동률 보장"]},
            {title:"클라이언트",items:["순수 웹 기술 (HTML5/JS)","반응형 UI (PC/태블릿/모바일)","Chrome 80+, Safari 14+, Edge 80+","iOS Safari, Android Chrome 지원"]},
          ].map((b,i)=>(
            <R key={i} delay={i*.06}>
              <div style={{padding:28,borderRadius:16,background:C.gray50,border:`1px solid ${C.gray200}`,height:"100%"}}>
                <h4 style={{fontSize:16,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:16}}>{b.title}</h4>
                {b.items.map((item,j)=>(
                  <div key={j} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:10}}>
                    <span style={{color:C.blue,fontSize:12,marginTop:3,flexShrink:0}}>●</span>
                    <span style={{fontSize:14,color:C.gray600,fontFamily:F,lineHeight:1.6}}>{item}</span>
                  </div>
                ))}
              </div>
            </R>
          ))}
        </div>

        {/* integration flow */}
        <R delay={.1}>
          <div style={{padding:36,borderRadius:16,background:"#0F172A",color:"#CBD5E1"}}>
            <h4 style={{fontSize:16,fontWeight:700,color:"#E2E8F0",fontFamily:F,marginBottom:6}}>연동 구조</h4>
            <p style={{fontSize:14,color:"#64748B",fontFamily:F,marginBottom:20}}>URL 호출 기반의 심플한 연동. 고객사 웹 서버에서 파라미터를 전달하면 방송이 시작됩니다.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
              <div>
                <p style={{fontSize:12,fontWeight:600,color:C.blue,fontFamily:F,marginBottom:8}}>방송자 URL</p>
                <pre style={{fontSize:13,fontFamily:"'JetBrains Mono',monospace",lineHeight:1.7,margin:0,color:"#94A3B8",background:"rgba(0,0,0,.3)",padding:16,borderRadius:10,overflow:"auto"}}>{`https://live.anchorlive.co.kr
  /broadcasterLive
  ?type=P          // P:유료, F:무료
  &site_no=1       // 사이트 번호
  &user_id=expert  // 전문가 ID
  &room_code=ACL20260401`}</pre>
              </div>
              <div>
                <p style={{fontSize:12,fontWeight:600,color:C.mint,fontFamily:F,marginBottom:8}}>시청자 URL (PC/Mobile 자동 분기)</p>
                <pre style={{fontSize:13,fontFamily:"'JetBrains Mono',monospace",lineHeight:1.7,margin:0,color:"#94A3B8",background:"rgba(0,0,0,.3)",padding:16,borderRadius:10,overflow:"auto"}}>{`// PC
https://live.anchorlive.co.kr
  /viewerLive?type=P&site_no=1
  &user_id=user01&room_code=ACL...

// Mobile
https://live.anchorlive.co.kr
  /mo/moViewLive?type=P&site_no=1
  &user_id=user01&room_code=ACL...`}</pre>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ══════ USE CASES ══════ */
function UseCases(){
  const cases=[
    {tag:"증권 투자자문사",title:"K투자자문 — 시청자 이탈률 40% 감소",stat:[{n:"40%↓",l:"이탈률 감소"},{n:"2주",l:"도입 완료"},{n:"3배",l:"모바일 시청"}],
      desc:"기존 ActiveX 기반 방송에서 웹 방송으로 전환. 설치 장벽이 사라지면서 시청자 유입이 크게 증가했고, 특히 모바일 시청자가 3배 이상 늘었습니다. 연동은 기존 사이트 URL 수정만으로 2주 만에 완료."},
    {tag:"코인 방송",title:"C코인방송 — 앱 없이 모바일 시청 전환",stat:[{n:"60%",l:"모바일 비율"},{n:"Zero",l:"앱 설치"},{n:"24/7",l:"무중단 운영"}],
      desc:"코인 시장 특성상 24시간 방송이 필수. 기존에는 별도 앱이 필요했으나 웹 방송 전환 후 앱 없이도 모바일에서 바로 시청 가능해져 접근성이 크게 개선되었습니다."},
    {tag:"교육 플랫폼",title:"T트레이드스터디 — 실시간 교육 방송 운영",stat:[{n:"500+",l:"동시 접속"},{n:"<1초",l:"지연 시간"},{n:"VOD",l:"자동 생성"}],
      desc:"주식 교육 플랫폼에서 실시간 강의와 VOD 재시청을 모두 활용. 방송 녹화가 자동으로 VOD로 변환되어 수강생들이 언제든 다시 볼 수 있는 구조를 구축했습니다."},
  ];
  return(
    <section id="cases" style={{padding:"100px 32px",background:C.gray50}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <R><div style={{marginBottom:56}}>
          <span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>USE CASES</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10,marginBottom:14}}>도입 사례</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F}}>다양한 업종에서 앵커라이브를 어떻게 활용하고 있는지 확인하세요.</p>
        </div></R>
        <div style={{display:"flex",flexDirection:"column",gap:24}}>
          {cases.map((c,i)=>(
            <R key={i} delay={i*.06}>
              <div style={{padding:40,borderRadius:20,background:C.white,border:`1px solid ${C.gray200}`}}>
                <span style={{fontSize:13,fontWeight:700,color:C.blue,fontFamily:F}}>{c.tag}</span>
                <h3 style={{fontSize:"clamp(20px,2.5vw,26px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.02em",marginTop:8,marginBottom:20}}>{c.title}</h3>
                <div style={{display:"flex",gap:32,marginBottom:20}}>
                  {c.stat.map((s,j)=>(
                    <div key={j}>
                      <span style={{fontSize:28,fontWeight:800,color:C.blue,fontFamily:F}}>{s.n}</span>
                      <span style={{display:"block",fontSize:13,color:C.gray400,fontFamily:F,marginTop:2}}>{s.l}</span>
                    </div>
                  ))}
                </div>
                <p style={{fontSize:15,color:C.gray600,fontFamily:F,lineHeight:1.75,maxWidth:700}}>{c.desc}</p>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════ DEMO ══════ */
function Demo(){
  const[tab,setTab]=useState("cast");
  return(
    <section id="demo" style={{padding:"100px 32px",background:C.white}}>
      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
        <R><span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>LIVE DEMO</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10,marginBottom:12}}>직접 체험해보세요</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F,marginBottom:40}}>방송자와 시청자 화면을 모두 체험할 수 있습니다. 회원가입 없이 즉시 이용 가능합니다.</p>
        </R>
        <R delay={.05}>
          <div style={{display:"inline-flex",borderRadius:12,background:C.gray100,padding:4,marginBottom:40}}>
            {[{k:"cast",l:"🎙️ 방송자 체험"},{k:"view",l:"📺 시청자 체험"}].map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} style={{padding:"11px 28px",borderRadius:9,border:"none",cursor:"pointer",background:tab===t.k?C.white:"transparent",color:tab===t.k?C.dark:C.gray500,fontSize:14,fontWeight:600,fontFamily:F,boxShadow:tab===t.k?"0 1px 4px rgba(0,0,0,.06)":"none",transition:"all .2s"}}>{t.l}</button>
            ))}
          </div>
        </R>
        <R delay={.1}>
          <div style={{background:C.gray50,borderRadius:20,padding:"48px 40px",border:`1px solid ${C.gray200}`,textAlign:"left"}}>
            {tab==="cast"?(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
                <div>
                  <h3 style={{fontSize:22,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:12}}>방송자 데모</h3>
                  <p style={{fontSize:15,color:C.gray500,fontFamily:F,lineHeight:1.7,marginBottom:8}}>실제 방송 환경과 동일한 화면에서 다음 기능을 체험할 수 있습니다:</p>
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:24}}>
                    {["마이크·카메라 설정 및 테스트","화면 공유 (탭/전체화면)","PIP 모드 (위치·크기 조절)","실시간 그리기 도구","가상배경 (투명/흐림)","방송 녹화 기능"].map((t,i)=>(
                      <span key={i} style={{fontSize:14,color:C.gray600,fontFamily:F,display:"flex",alignItems:"center",gap:6}}>
                        <span style={{color:C.blue,fontSize:11}}>✓</span>{t}
                      </span>
                    ))}
                  </div>
                  <a href="https://live.anchorlive.co.kr/broadcasterLive?type=F&site_no=1&user_id=demo&room_code=DEMO" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"13px 32px",borderRadius:10,background:C.dark,color:"#fff",fontSize:15,fontWeight:600,fontFamily:F,textDecoration:"none"}}>방송 시작하기 →</a>
                </div>
                <div style={{background:C.dark,borderRadius:16,padding:20,textAlign:"center"}}>
                  <div style={{background:"linear-gradient(180deg,#1E293B,#0F172A)",borderRadius:10,height:180,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
                    <span style={{fontSize:48}}>🎙️</span>
                  </div>
                  <p style={{fontSize:12,color:"#64748B",fontFamily:F}}>클릭 시 새 창에서 방송 화면이 열립니다</p>
                </div>
              </div>
            ):(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
                <div>
                  <h3 style={{fontSize:22,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:12}}>시청자 데모</h3>
                  <p style={{fontSize:15,color:C.gray500,fontFamily:F,lineHeight:1.7,marginBottom:8}}>PC와 모바일에서 각각 최적화된 시청 환경을 체험합니다:</p>
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:24}}>
                    {["실시간 영상 시청 (1초 미만 지연)","화질 선택 (저/중/고해상도/자동)","양방향 실시간 채팅","음량 조절 및 전체화면","접속자 리스트 확인"].map((t,i)=>(
                      <span key={i} style={{fontSize:14,color:C.gray600,fontFamily:F,display:"flex",alignItems:"center",gap:6}}>
                        <span style={{color:C.mint,fontSize:11}}>✓</span>{t}
                      </span>
                    ))}
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    <a href="https://live.anchorlive.co.kr/viewerLive?type=F&site_no=1&user_id=viewer&room_code=DEMO" target="_blank" rel="noopener noreferrer" style={{padding:"13px 28px",borderRadius:10,background:C.dark,color:"#fff",fontSize:15,fontWeight:600,fontFamily:F,textDecoration:"none"}}>PC 시청 →</a>
                    <a href="https://live.anchorlive.co.kr/mo/moViewLive?type=F&site_no=1&user_id=viewer&room_code=DEMO" target="_blank" rel="noopener noreferrer" style={{padding:"13px 28px",borderRadius:10,background:C.gray100,color:C.gray800,fontSize:15,fontWeight:600,fontFamily:F,textDecoration:"none"}}>모바일 시청 →</a>
                  </div>
                </div>
                <div style={{background:C.dark,borderRadius:16,padding:20,textAlign:"center"}}>
                  <div style={{background:"linear-gradient(180deg,#1E293B,#0F172A)",borderRadius:10,height:180,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
                    <span style={{fontSize:48}}>📺</span>
                  </div>
                  <p style={{fontSize:12,color:"#64748B",fontFamily:F}}>PC/모바일 각각 최적화된 화면이 열립니다</p>
                </div>
              </div>
            )}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ══════ FAQ ══════ */
function FAQ(){
  const[open,setOpen]=useState(null);
  const items=[
    {q:"앵커라이브 도입 시 별도 설치가 필요한가요?",a:"아닙니다. 앵커라이브 2.0은 WebRTC 기반 웹 솔루션으로 방송자와 시청자 모두 별도 프로그램 설치 없이 웹 브라우저(Chrome, Safari, Edge 등)만으로 이용 가능합니다."},
    {q:"기존 홈페이지에 어떻게 연동하나요?",a:"URL 호출 방식으로 연동합니다. 고객사 웹 서버에서 방송 시작/시청 URL에 파라미터(type, site_no, user_id, room_code)를 전달하면 됩니다. 복잡한 서버 설정이나 SDK 설치가 필요하지 않으며, 보통 1~2주 내에 연동이 완료됩니다."},
    {q:"동시 접속자 수 제한이 있나요?",a:"기본적으로 동시 접속자 수에 제한이 없습니다. AWS/IDC 이중화 구성과 자동 스케일링으로 수백~수천 명의 동시 접속을 안정적으로 처리합니다. 대규모 방송이 예상되는 경우 사전 협의를 통해 인프라를 준비해드립니다."},
    {q:"방송 지연시간이 실제로 1초 미만인가요?",a:"네, WebRTC 기술 특성상 방송자에서 시청자까지 1초 미만의 지연시간을 제공합니다. 기존 RTMP/HLS 방식의 6~30초 지연과 비교해 획기적으로 빠르며, 실시간 시세 해설이 핵심인 증권방송에 최적화되어 있습니다."},
    {q:"모바일에서도 방송을 진행할 수 있나요?",a:"현재 방송 송출은 PC 웹 브라우저에서 진행하며, 시청은 PC와 모바일(iOS Safari, Android Chrome) 모두에서 가능합니다. 모바일 방송 송출 기능은 향후 업데이트 예정입니다."},
    {q:"요금 체계는 어떻게 되나요?",a:"고객사의 규모, 동시 접속 수, 녹화 용량 등에 따라 맞춤형 요금이 책정됩니다. 기본적으로 월 구독 방식이며, 상세한 요금은 상담을 통해 안내해드립니다. 무료 데모 체험 후 결정하실 수 있습니다."},
    {q:"녹화된 방송은 어디에 저장되나요?",a:"녹화된 VOD는 앵커라이브 서버에 저장되며, 녹화 완료 시 고객사 서버로 녹화 정보(room_code 기반)를 콜백합니다. 장기 보관이 필요한 경우 별도 보관 등록 기능을 제공합니다."},
    {q:"기존 앵커라이브 1.5에서 2.0으로 마이그레이션 가능한가요?",a:"네, 기존 앵커라이브 1.5 고객사의 경우 2.0으로의 마이그레이션을 지원합니다. 기존 사이트 구조를 유지하면서 URL 연동 방식만 변경하므로 최소한의 수정으로 전환이 가능합니다."},
  ];
  return(
    <section id="faq" style={{padding:"100px 32px",background:C.gray50}}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        <R><div style={{textAlign:"center",marginBottom:48}}>
          <span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>FAQ</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10}}>자주 묻는 질문</h2>
        </div></R>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {items.map((it,i)=>(
            <R key={i} delay={i*.03}>
              <div style={{borderRadius:14,background:C.white,border:`1px solid ${C.gray200}`,overflow:"hidden"}}>
                <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",padding:"20px 24px",border:"none",background:"transparent",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"left"}}>
                  <span style={{fontSize:15,fontWeight:600,color:C.dark,fontFamily:F,flex:1,paddingRight:16}}>{it.q}</span>
                  <span style={{fontSize:20,color:C.gray400,transition:"transform .2s",transform:open===i?"rotate(45deg)":"none"}}>+</span>
                </button>
                {open===i&&(
                  <div style={{padding:"0 24px 20px"}}>
                    <p style={{fontSize:14,color:C.gray600,fontFamily:F,lineHeight:1.75}}>{it.a}</p>
                  </div>
                )}
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════ CTA BANNER ══════ */
function CtaBanner(){
  return(
    <section style={{padding:"80px 32px",background:C.dark}}>
      <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
        <R><h2 style={{fontSize:"clamp(24px,3.5vw,36px)",fontWeight:800,color:C.white,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginBottom:16}}>
          지금 바로 앵커라이브 2.0을<br/>체험해보세요
        </h2></R>
        <R delay={.06}><p style={{fontSize:16,color:"#94A3B8",fontFamily:F,lineHeight:1.7,marginBottom:36}}>
          무료 데모 체험과 전문 상담을 통해 귀사에 최적화된 방송 솔루션을 확인하세요.<br/>
          도입부터 연동 완료까지 평균 2주, 전담 엔지니어가 함께합니다.
        </p></R>
        <R delay={.1}><div style={{display:"flex",gap:12,justifyContent:"center"}}>
          <a href="#demo" style={{padding:"14px 36px",borderRadius:12,background:C.blue,color:"#fff",fontSize:16,fontWeight:600,fontFamily:F,textDecoration:"none"}}>무료 데모 체험 →</a>
          <a href="#contact" style={{padding:"14px 36px",borderRadius:12,background:"rgba(255,255,255,.1)",color:"#fff",fontSize:16,fontWeight:600,fontFamily:F,textDecoration:"none",border:"1px solid rgba(255,255,255,.15)"}}>도입 상담 신청</a>
        </div></R>
      </div>
    </section>
  );
}

/* ══════ CONTACT ══════ */
function Contact(){
  const[sent,setSent]=useState(false);
  const[form,setForm]=useState({company:"",name:"",phone:"",email:"",type:"증권방송",msg:""});
  const iS={width:"100%",padding:"13px 16px",borderRadius:10,border:`1.5px solid ${C.gray200}`,fontSize:14,fontFamily:F,outline:"none",background:C.gray50,transition:"all .2s",boxSizing:"border-box"};
  return(
    <section id="contact" style={{padding:"100px 32px",background:C.white}}>
      <div style={{maxWidth:640,margin:"0 auto"}}>
        <R><span style={{fontSize:14,fontWeight:700,color:C.blue,fontFamily:F,letterSpacing:".04em"}}>CONTACT</span>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:C.dark,fontFamily:F,letterSpacing:"-.03em",lineHeight:1.3,marginTop:10,marginBottom:12}}>도입 문의</h2>
          <p style={{fontSize:16,color:C.gray500,fontFamily:F,lineHeight:1.7,marginBottom:40}}>전문 상담원이 귀사의 상황에 맞는 최적의 솔루션을 안내해드립니다.<br/>영업일 기준 1일 이내에 연락드립니다.</p>
        </R>
        {sent?(
          <R><div style={{textAlign:"center",padding:"64px 0"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:C.mintLight,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:24}}>✓</div>
            <h3 style={{fontSize:20,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:8}}>문의가 접수되었습니다</h3>
            <p style={{fontSize:15,color:C.gray500,fontFamily:F}}>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
          </div></R>
        ):(
          <R delay={.05}><div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <input placeholder="회사명 *" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} style={iS} onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.background="#fff"}} onBlur={e=>{e.target.style.borderColor=C.gray200;e.target.style.background=C.gray50}}/>
              <input placeholder="담당자명 *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={iS} onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.background="#fff"}} onBlur={e=>{e.target.style.borderColor=C.gray200;e.target.style.background=C.gray50}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <input placeholder="연락처 *" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={iS} onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.background="#fff"}} onBlur={e=>{e.target.style.borderColor=C.gray200;e.target.style.background=C.gray50}}/>
              <input type="email" placeholder="이메일 *" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={iS} onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.background="#fff"}} onBlur={e=>{e.target.style.borderColor=C.gray200;e.target.style.background=C.gray50}}/>
            </div>
            <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{...iS,color:C.gray600}}>
              <option>증권방송</option><option>코인방송</option><option>교육/강의</option><option>기타</option>
            </select>
            <textarea placeholder="문의 내용 (도입 예상 시기, 동시 접속 규모, 현재 사용 중인 솔루션 등)" rows={4} value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} style={{...iS,resize:"vertical"}} onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.background="#fff"}} onBlur={e=>{e.target.style.borderColor=C.gray200;e.target.style.background=C.gray50}}/>
            <button onClick={()=>setSent(true)} style={{padding:"15px",borderRadius:10,border:"none",background:C.blue,color:"#fff",fontSize:16,fontWeight:700,fontFamily:F,cursor:"pointer"}}>무료 상담 신청하기</button>
            <div style={{display:"flex",justifyContent:"center",gap:28,marginTop:12}}>
              <span style={{fontSize:13,color:C.gray400,fontFamily:F}}>📞 02-2085-6102</span>
              <span style={{fontSize:13,color:C.gray400,fontFamily:F}}>📧 tom@softbridge.co.kr</span>
            </div>
          </div></R>
        )}
      </div>
    </section>
  );
}

/* ══════ FOOTER ══════ */
function Footer(){
  return(
    <footer style={{padding:"48px 32px 36px",background:C.gray50,borderTop:`1px solid ${C.gray200}`}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:14}}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill={C.blue}/><path d="M8 14L12 10V12.5H18V15.5H12V18L8 14Z" fill="white"/></svg>
            <span style={{fontSize:15,fontWeight:700,color:C.dark,fontFamily:F}}>앵커라이브 2.0</span>
          </div>
          <div style={{fontSize:13,color:C.gray400,fontFamily:F,lineHeight:1.9}}>
            ㈜소프트브리지 | 대표이사<br/>
            사업자등록번호: 000-00-00000<br/>
            서울특별시 중구 삼일대로 308 조양빌딩 본관 12층<br/>
            02-2085-6102 · tom@softbridge.co.kr
          </div>
        </div>
        <div>
          <h4 style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:14}}>솔루션</h4>
          {["실시간 방송","VOD 녹화","화면 공유","채팅 시스템","연동 가이드"].map(l=><a key={l} href="#sol" style={{display:"block",fontSize:13,color:C.gray500,fontFamily:F,textDecoration:"none",marginBottom:8}}>{l}</a>)}
        </div>
        <div>
          <h4 style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:14}}>고객지원</h4>
          {["도입 문의","데모 체험","기술 문서","FAQ"].map(l=><a key={l} href="#faq" style={{display:"block",fontSize:13,color:C.gray500,fontFamily:F,textDecoration:"none",marginBottom:8}}>{l}</a>)}
        </div>
        <div>
          <h4 style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:F,marginBottom:14}}>회사</h4>
          {["회사 소개","연혁","채용","블로그"].map(l=><a key={l} href="#" style={{display:"block",fontSize:13,color:C.gray500,fontFamily:F,textDecoration:"none",marginBottom:8}}>{l}</a>)}
        </div>
      </div>
      <div style={{maxWidth:1200,margin:"24px auto 0",paddingTop:20,borderTop:`1px solid ${C.gray200}`,display:"flex",justifyContent:"space-between"}}>
        <span style={{fontSize:12,color:C.gray400,fontFamily:F}}>© 2026 SoftBridge Co., Ltd. All rights reserved.</span>
        <span style={{fontSize:12,color:C.gray400,fontFamily:F}}>개인정보처리방침 · 이용약관</span>
      </div>
    </footer>
  );
}

/* ══════ APP ══════ */
export default function App(){
  return(
    <div style={{fontFamily:F,overflowX:"hidden",background:C.white}}>
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" rel="stylesheet"/>
      <Nav/>
      <Hero/>
      <TrustBar/>
      <Solutions/>
      <Comparison/>
      <TechSpec/>
      <UseCases/>
      <Demo/>
      <FAQ/>
      <CtaBanner/>
      <Contact/>
      <Footer/>
    </div>
  );
}
