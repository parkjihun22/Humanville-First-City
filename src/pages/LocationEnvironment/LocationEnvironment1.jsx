import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "성성생활권 중심 입지<br />미래가치 기대되는 개발지",
    contentText:
      "천안 서북구 부대동 위치, 신도시급 자족생활권 조성<br />불당지구 생활 인프라와 천안시청 행정타운 인접",
  },
  {
    img: section2Image2,
    titleText: "대형 산업단지 배후<br />풍부한 직주근접 수요",
    contentText:
      "삼성전자 천안캠퍼스, 3산단, 성거일반산단 인근<br />출퇴근 수요 확보된 실거주 중심 입지",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 확장 기대<br />서울·수도권 접근성 강화",
    contentText:
      "경부고속도로·천안IC 인접<br />1호선 부성역(예정), KTX 천안아산역 약 15분 거리",
  },
  {
    img: section2Image4,
    titleText: "풍부한 생활 인프라<br />완성도 높은 도심환경",
    contentText:
      "이마트·신세계백화점·천안터미널 차량 10분<br />불당 학원가·대형병원 등 도심 편의시설 밀집",
  },
  {
    img: section2Image5,
    titleText: "천안 최대급 대단지<br />프리미엄 주거 브랜드",
    contentText:
      "지하 3층~지상 33층, 총 12개동 1,541세대 구성<br />피트니스·실내골프·작은도서관 등 커뮤니티 특화",
  },
  {
    img: section2Image6,
    titleText: "공원형 단지 설계<br />쾌적한 자연·휴식 환경",
    contentText:
      "성성호수공원 인접, 단지 내 지상 차 없는 설계<br />산책·휴식·커뮤니티가 어우러진 힐링 라이프",
  },
];





const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>천안 휴먼빌 퍼스트시티 - 입지환경</title>
  <meta
    name="description"
    content="천안 서북구 성성생활권에 위치한 천안 휴먼빌 퍼스트시티의 입지환경을 확인하세요. 부성역 신설(예정), 천안IC·두정역·천안아산역 등 교통망과 이마트·백화점·학군 등 생활 인프라, 성성호수공원 등 자연환경까지."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.abcya4.com/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />
  <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 입지환경" />
  <meta
    property="og:description"
    content="천안 성성지구 핵심 입지: 부성역(예정), 천안IC·두정역·천안아산역 등 교통망과 불당지구 생활 인프라, 성성호수공원 등 쾌적한 자연환경까지 누리는 천안 휴먼빌 퍼스트시티."
  />
  <meta property="og:url" content="https://www.abcya4.com/LocationEnvironment/intro" />
  <meta property="og:image" content="https://www.abcya4.com/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="천안 휴먼빌 퍼스트시티 - 입지환경" />
  <meta
    name="twitter:description"
    content="천안 성성생활권의 중심 입지. 부성역 신설 예정, 천안IC·두정역·천안아산역 교통망과 이마트·백화점·병원 등 완성형 인프라, 성성호수공원까지 갖춘 입지환경을 확인하세요."
  />
  <meta name="twitter:image" content="https://www.abcya4.com/img/og/location.jpg" />
  <meta name="twitter:url" content="https://www.abcya4.com/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "천안 휴먼빌 퍼스트시티 - 입지환경",
      "url": "https://www.abcya4.com/LocationEnvironment/intro",
      "description":
        "천안 서북구 성성생활권에 위치한 천안 휴먼빌 퍼스트시티의 입지환경. 부성역(예정), 천안IC·두정역·KTX 천안아산역 등 교통망과 이마트·백화점·학군·공원 등 생활환경과 자연을 모두 갖춘 입지를 확인해보세요.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.abcya4.com/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.abcya4.com/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.abcya4.com/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티의 입지 정보를 확인하세요. 성성생활권 중심 입지로 천안IC, 두정역, 천안아산역 등 광역교통망과
  신설 예정인 부성역(1호선), 불당지구 상권과 이마트, 신세계백화점, 학군, 성성호수공원까지 풍부한 주거 인프라를 갖춘
  천안 서북부의 미래 핵심 입지입니다.
</p>

<div className={styles.textBox}>
  <div>천안의 미래를 품은 입지</div>
  <div>삶을 채우는 중심, 성성생활권</div>
  <div>천안 휴먼빌 퍼스트시티가 시작점이 됩니다</div>
</div>


      <img
        src={page1}
        className={styles.image2}
        alt="천안 휴먼빌 퍼스트시티입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 천안 휴먼빌 퍼스트시티사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
