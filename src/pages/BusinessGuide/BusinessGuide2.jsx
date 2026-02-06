import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>천안 휴먼빌 퍼스트시티 - 분양일정</title>
  <meta
    name="description"
    content="천안 휴먼빌 퍼스트시티 분양(청약) 일정을 한눈에 확인하세요. 특별공급, 1·2순위 청약 접수, 모델하우스 오픈, 당첨자 발표 및 정당계약 등 핵심 일정을 안내합니다."
  />
  <link rel="canonical" href="https://www.abcya4.com/BusinessGuide/plan" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>천안 휴먼빌 퍼스트시티 - 분양일정</h1>
<p className={styles.screenReaderOnly}>
  천안 휴먼빌 퍼스트시티의 분양(청약) 일정을 한곳에서 확인하세요.
  특별공급, 1·2순위 청약 접수, 모델하우스 개관부터 당첨자 발표 및 정당 계약까지 단계별 일정을 안내합니다.
</p>

<div className={styles.textBox}>
  <div>천안의 새로운 프리미엄 단지</div>
  <div>천안 휴먼빌 퍼스트시티, 분양일정을 확인하세요.</div>
</div>


            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="천안 휴먼빌 퍼스트시티분양일정안내-image1" />

            <div className={styles.readyContainer}>
           
            </div>

            <Footer />
        </div>
    );
};

export default BusinessGuide2;
