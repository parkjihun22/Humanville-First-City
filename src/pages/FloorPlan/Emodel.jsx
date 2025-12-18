import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = useMemo(
    () => [
      { title: "84A", key: "84A" },
      { title: "84B", key: "84B" },
      { title: "84C", key: "84C" },
      { title: "84D", key: "84D" },
    ],
    []
  );

  // ✅ 운영 HTTPS에서 Mixed Content 차단 때문에 iframe 불가
  // ✅ VR 서버가 HTTPS에서 406 에러 발생 -> HTTP 새창으로 열기 방식 사용
  const vrUrls = useMemo(
    () => ({
      "84A": "https://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84a.html",
      "84B": "https://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84b.html",
      "84C": "https://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84c.html",
      "84D": "https://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84d.html",
    }),
    []
  );

  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  const selectedUrl = vrUrls[selectedType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleOpenVr = () => {
  if (!selectedUrl) return;
  window.location.href = selectedUrl; // 현재 탭 이동
};
  return (
    <div className={styles.container}>
      <Helmet>
        {/* 핵심 SEO 페이지: E-모델하우스 */}
        <title>천안 휴먼빌 퍼스트시티 - E-모델하우스</title>
        <meta
          name="description"
          content="천안 휴먼빌 퍼스트시티 E-모델하우스를 온라인으로 편리하게 체험하세요. VR 가상 투어와 전용 84㎡ A·B·C·D 타입별 평면도 및 인테리어를 생생하게 확인하실 수 있습니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://sinbiapt.co.kr/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="천안 휴먼빌 퍼스트시티" />
        <meta property="og:title" content="천안 휴먼빌 퍼스트시티 - E-모델하우스" />
        <meta
          property="og:description"
          content="천안 휴먼빌 퍼스트시티 E-모델하우스: VR 투어와 전용 84㎡ A·B·C·D 타입별 평면도 및 인테리어를 통해 실감 나는 공간을 확인하세요."
        />
        <meta property="og:url" content="https://sinbiapt.co.kr/FloorPlan/Emodel" />
        <meta property="og:image" content="https://sinbiapt.co.kr/img/og/emodel.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="천안 휴먼빌 퍼스트시티 - E-모델하우스" />
        <meta
          name="twitter:description"
          content="천안 휴먼빌 퍼스트시티 E-모델하우스를 온라인으로 체험하세요. VR 투어와 전용 84㎡ A~D타입 평면도와 인테리어를 한눈에."
        />
        <meta name="twitter:image" content="https://sinbiapt.co.kr/img/og/emodel.jpg" />
        <meta name="twitter:url" content="https://sinbiapt.co.kr/FloorPlan/Emodel" />

        {/* JSON-LD (구조화데이터) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "천안 휴먼빌 퍼스트시티 - E-모델하우스",
            url: "https://sinbiapt.co.kr/FloorPlan/Emodel",
            description:
              "천안 휴먼빌 퍼스트시티 E-모델하우스를 온라인으로 편리하게 체험하세요. 전용 84㎡ A·B·C·D 타입별 평면도와 인테리어, VR 가상 투어를 확인할 수 있습니다.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://sinbiapt.co.kr/img/og/emodel.jpg",
              width: 1200,
              height: 630,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://sinbiapt.co.kr/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "E-모델하우스",
                  item: "https://sinbiapt.co.kr/FloorPlan/Emodel",
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>천안 휴먼빌 퍼스트시티 - E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          보안 정책(HTTPS)으로 인해 VR은 페이지 내 재생이 불가하여 <b>새 창</b>에서 열립니다.
        </p>

        <button
  type="button"
  className={styles.openVrButton}
  onClick={handleOpenVr}
>
  {selectedType} VR 새 창으로 열기
</button>


        {/* ✅ 버튼이 팝업 차단 등으로 안 될 때 대비: 링크 제공 */}
        {selectedUrl && (
          <p className={styles.vrFallbackLink}>
  새 창이 안 열리면{" "}
  <a
    href={selectedUrl}
    target="_blank"
    rel="noreferrer"
  >
    여기를 클릭
  </a>
  해주세요.
</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
