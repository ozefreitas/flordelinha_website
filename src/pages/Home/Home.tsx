import styles from "./home.module.css";
import { useEffect, useState } from "react";
import AppearAsScroll from "../../components/AppearAsScroll/AppearAsScroll";

interface HomeProps {
  windowHeight: number;
}

export default function Home({
  windowHeight,
}: Readonly<HomeProps>) {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollLimit = windowHeight >= 800 ? 250 : 200;
    if (scrollPosition >= scrollLimit) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleSlowScroll = (event: WheelEvent) => {
    // Prevent default scroll behavior
    event.preventDefault();
    const scrollPosition = window.scrollY;

    // Apply slower scrolling
    if (scrollPosition >= 150) {
      window.scrollBy({
        top: event.deltaY * 1.2,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({
        top: event.deltaY * 1.5,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleSlowScroll, { passive: false });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleSlowScroll);
    };
  });

  return (
    <div
      id="home"
      className={`${styles.mainHomeContainer} ${
        visible ? styles.visible : styles.disapear
      }`}
    >
      <AppearAsScroll
      >
        <div style={{ height: "500px", backgroundColor: "#4caf50" }}>
          <h1>Bem-Vind@ à Flor de Linha</h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll
      >
        <div style={{ height: "500px", backgroundColor: "red" }}>
          <h1>
            O objetivo desta loja é começar a ganhar algum para depois dar um
            porsche ao meu namorado
          </h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll
      >
        <div style={{ height: "1000px", backgroundColor: "yellow" }}>
          <h1>
            O objetivo desta loja é começar a ganhar algum para depois dar um
            porsche ao meu namorado
          </h1>
        </div>
      </AppearAsScroll>
    </div>
  );
}
