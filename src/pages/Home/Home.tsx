import styles from "./home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [disapear, setDisapear] = useState(false);

  const divs = [
    document.getElementById("welcome"),
    document.getElementById("objectives"),
    document.getElementById("div3"),
    document.getElementById("div4"),
    document.getElementById("div5"),
  ];

  const ranges = [
    { start: 100, end: 450 },
    { start: 450, end: 800 },
    { start: 1400, end: 2000 },
    { start: 2000, end: 2600 },
    { start: 2600, end: 3200 },
  ];

  const handleDynamicHeight = () => {
    const scrollPosition = window.scrollY;
    divs.forEach((div, index) => {
      const { start, end } = ranges[index];
      if (div) {
        if (scrollPosition >= start) {
          div.classList.add("visible");
          if (scrollPosition >= start && scrollPosition <= end) {
            div.classList.add("sticked");
            div.classList.remove("disapear");
          } else {
            setIsSticky(false);
            setDisapear(true);
          }
        } else {
          setVisible(false);
          div.classList.remove("visible");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleDynamicHeight);
    return () => {
      window.removeEventListener("scroll", handleDynamicHeight);
    };
  });

  return (
    <div id="home" className={styles.mainHomeContainer}>
      <div id="welcome" className="magic_div">
        Bem-Vind@ à Flor de Linha
      </div>
      <div id="objectives" className="magic_div"></div>
    </div>
  );
}
