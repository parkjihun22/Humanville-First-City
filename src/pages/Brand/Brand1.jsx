import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/brand.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>천안 휴먼빌 퍼스트시티 - 브랜드 소개</title>
  <meta
    name="description"
    content="일신건영 휴먼빌 브랜드 철학과 가치를 소개합니다. 실용적 설계와 믿을 수 있는 품질로 천안의 새로운 주거 기준을 제시하는 천안 휴먼빌 퍼스트시티."
  />
  <link rel="canonical" href="https://sinbiapt.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />
  <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - 브랜드 소개" />
  <meta
    property="og:description"
    content="휴먼빌 브랜드 소개: 실용성과 신뢰, 차별화된 공간 설계로 프리미엄 주거 가치를 실현하는 천안 휴먼빌 퍼스트시티."
  />
  <meta property="og:url" content="https://sinbiapt.co.kr/Brand/intro" />
  <meta property="og:image" content="https://sinbiapt.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />
<h1 className={styles.screenReaderOnly}>천안 휴먼빌 퍼스트시티 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티는 신뢰를 바탕으로 한 일신건영의 휴먼빌(HUMANVILLE) 브랜드가 적용된 프리미엄 주거 단지입니다.
  가족 중심의 공간 구성, 효율적인 수납, 4Bay 특화설계 등 실용성과 품질을 동시에 갖춘 설계로
  쾌적하고 미래지향적인 주거 문화를 제안합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>삶의 본질을 담은 공간</div>
  <div>휴먼빌, 천안의 새로운 기준이 되다</div>
</div>



            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="천안 휴먼빌 퍼스트시티brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
