import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/premium.jpg";


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
  <title>천안 휴먼빌 퍼스트시티 - 프리미엄</title>
  <meta
    name="description"
    content="천안 휴먼빌 퍼스트시티 프리미엄을 확인하세요. 총 1,541세대 대단지, 지상 차 없는 공원형 단지, 부성역(예정)과 천안IC·두정역 등 광역 교통망, 특화 커뮤니티와 성성호수공원 인접 자연환경까지 모두 갖췄습니다."
  />
  <link rel="canonical" href="https://www.layershop.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티 - 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티만의 프리미엄 요소를 확인하세요.
  총 1,541세대 대단지, 지상 차 없는 공원형 단지 설계,
  부성역(예정)·천안IC·천안아산역 등 광역 교통망,
  피트니스·실내골프 등 브랜드 커뮤니티와
  성성호수공원 인접의 쾌적한 자연환경까지 갖춘 미래형 주거 단지입니다.
</p>

<div className={styles.textBox}>
  <div>천안의 새로운 주거 프리미엄</div>
  <div>천안 휴먼빌 퍼스트시티에서 일상의 품격을 경험하세요</div>
</div>



      <img
        src={page1}
        className={styles.image3}
        alt="천안 휴먼빌 퍼스트시티-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
