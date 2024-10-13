import styles from "./home.module.css";
import { useEffect, useState } from "react";
import AppearAsScroll from "../../components/AppearAsScroll/AppearAsScroll";

interface HomeProps {
  hasAnimatedFirstDiv: boolean;
  setHasAnimatedFirstDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({
  hasAnimatedFirstDiv,
  setHasAnimatedFirstDiv,
}: HomeProps) {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 150) {
      console.log(visible);
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="home" className={`${styles.mainHomeContainer} ${visible ? styles.visible : styles.disapear}`}>
      <AppearAsScroll
        hasAnimatedFirstDiv={hasAnimatedFirstDiv}
        setHasAnimatedFirstDiv={setHasAnimatedFirstDiv}
        isFirstDivFromPage={true}
      >
        <div style={{ height: "300px", backgroundColor: "#4caf50" }}>
          <h1>Bem-Vind@ à Flor de Linha</h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll
        hasAnimatedFirstDiv={hasAnimatedFirstDiv}
        setHasAnimatedFirstDiv={setHasAnimatedFirstDiv}
        isFirstDivFromPage={false}
      >
        <div style={{ height: "300px", backgroundColor: "red" }}>
          <h1>
            O objetivo desta loja é começar a ganhar algum para depois dar um
            porsche ao meu namorado
          </h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll
        hasAnimatedFirstDiv={hasAnimatedFirstDiv}
        setHasAnimatedFirstDiv={setHasAnimatedFirstDiv}
        isFirstDivFromPage={false}
      >
        <div style={{ height: "300px", backgroundColor: "yellow" }}>
          <h1>
            O objetivo desta loja é começar a ganhar algum para depois dar um
            porsche ao meu namorado
          </h1>
        </div>
      </AppearAsScroll>
    </div>
  );
}
