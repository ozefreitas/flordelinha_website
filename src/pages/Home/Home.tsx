import styles from "./home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const handleDynamicHeight = () => {
    const scrollPosition = window.scrollY
    const magicDiv = document.getElementById("magic_div");
    if (magicDiv) {
      if (scrollPosition >= 100) {
        setVisible(true);
        if (scrollPosition >= 220 && scrollPosition <= 350) {
          setIsSticky(true)
        } else setIsSticky(false)
      } else {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleDynamicHeight);
    return () => {
      window.removeEventListener("scroll", handleDynamicHeight);
    };
  });

  return (
    <div id="home" className={styles.mainHomeContainer}>
      <div
        id="magic_div"
        className={`${styles.magic_div} ${visible ? styles.visible : ""} ${isSticky ? styles.sticked : ""}`}
      >
        Bem-Vind@ à Flor de Linha
      </div>
    </div>
  );
}
