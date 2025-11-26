import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  { title: "84A", key: "84A" },
  { title: "84B", key: "84B" },
  { title: "84C", key: "84C" },
  { title: "84D", key: "84D" },
];

const vrUrls = {
  "84A": "http://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84a.html",
  "84B": "http://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84b.html",
  "84C": "http://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84c.html",
  "84D": "http://xn--s22bi8elteog183ewjaq6as1t.com/vr/vtour/tour_84d.html",
};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
