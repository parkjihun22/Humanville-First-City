// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/premium.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
      <li>
        <strong>사업명</strong>
        <span>천안 휴먼빌 퍼스트시티</span>
      </li>
      <li>
        <strong>대지위치</strong>
        <span>충청남도 천안시 서북구 부대동 416-1 일원</span>
      </li>
      <li>
        <strong>건축규모</strong>
        <span>지하 3층 ~ 지상 33층, 총 12개동</span>
      </li>
      <li>
        <strong>주택형</strong>
        <span>전용 84㎡ 단일면적 (84A/B/C/D 타입)</span>
      </li>
      <li>
        <strong>세대수</strong>
        <span>총 1,541세대 (100% 일반분양)</span>
      </li>
    </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            생활중심과 학세권을 누리는<br />
            천안 휴먼빌 퍼스트시티 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "성성생활권 중심 입지",
      desc:
        "천안 서북부 핵심 주거지인 성성생활권 위치<br/>성성호수공원 인접, 쾌적한 자연환경<br/>불당지구 생활 인프라와 시청, 백화점 등 공유",
    },
    {
      img: slide2,
      title: "직주근접 우수한 배후 수요",
      desc:
        "삼성전자 천안캠퍼스, 천안산업단지 인접<br/>천안아산역·두정역 통한 광역 출퇴근 수요 확보<br/>산업 종사자 중심의 임대 및 실거주 수요 기대",
    },
    {
      img: slide3,
      title: "미래가치 높은 교통 개발 호재",
      desc:
        "2029년 전철 1호선 부성역(예정) 도보권 입지<br/>경부·천안IC·당진천안고속도로 인접<br/>GTX-C 천안 연장 논의 등 교통망 확장 기대",
    },
    {
      img: slide4,
      title: "풍부한 교육·생활 인프라",
      desc:
        "단지 앞 초등학교 신설 예정<br/>불당 학원가·이마트·신세계백화점 차량 10분<br/>병원·터미널 등 도심 생활 인프라 근접",
    },
    {
      img: slide5,
      title: "천안 최대급 1,541세대 대단지",
      desc:
        "지하 3층~지상 33층, 총 12개동 규모<br/>전용 84㎡ 단일 평형 4가지 타입 특화 설계",
    },
    {
      img: slide6,
      title: "휴먼빌 브랜드와 상품 경쟁력",
      desc:
        "4Bay·팬트리·알파룸 등 실용 설계 강화<br/>중도금 대출 알선·전매제한 無<br/>일신건영 시공, 2029년 5월 입주 예정",
    },
  ];
  
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
