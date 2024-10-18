import styles from "./contacts.module.css";
import { useState, useEffect } from "react";
import AppearAsScroll from "../../components/AppearAsScroll/AppearAsScroll";

interface ContactsProps {
  windowHeight: number;
}

export default function Contacts({ windowHeight }: Readonly<ContactsProps>) {
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

    // Apply slower scrolling
    window.scrollBy(0, event.deltaY * 1);
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
      id="contacts"
      className={`${styles.mainContactsContainer} ${
        visible ? styles.visible : styles.disapear
      }`}
    >
      <AppearAsScroll>
        <div style={{ height: "500px", backgroundColor: "#4caf50" }}>
          <h1>Bem-Vind@ à Flor de Linha</h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll>
        <div style={{ height: "500px", backgroundColor: "red" }}>
          <h1>
            O objetivo desta loja é começar a ganhar algum para depois dar um
            porsche ao meu namorado
          </h1>
        </div>
      </AppearAsScroll>
      <AppearAsScroll>
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
