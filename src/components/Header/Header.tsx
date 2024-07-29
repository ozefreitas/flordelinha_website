import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/flor_de_linha-removebg-preview.png";

interface Currentpage {
  home: boolean;
  about: boolean;
  baby: boolean;
  flowers: boolean;
  accessories: boolean;
  angels: boolean;
  contacts: boolean;
}

interface HeaderProps {
  currentPage: Currentpage;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<{
      home: boolean;
      about: boolean;
      baby: boolean;
      flowers: boolean;
      accessories: boolean;
      angels: boolean;
      contacts: boolean;
    }>
  >;
}

export default function Header({
  currentPage,
  setCurrentPage,
}: Readonly<HeaderProps>) {
  const navigate = useNavigate();
  const restartCurrentPage = () => {
    setCurrentPage({
      home: false,
      about: false,
      baby: false,
      flowers: false,
      accessories: false,
      angels: false,
      contacts: false,
    });
  };

  const setNewCurrentPage = (newPage: keyof Currentpage) => {
    restartCurrentPage();
    setCurrentPage((prevCurrentPage) => ({
      ...prevCurrentPage,
      [newPage]: true,
    }));
  };

  return (
    <div id="header" className={styles.mainHeaderContainer}>
      <div
        className={styles.logoContainer}
        onClick={() => {
          setNewCurrentPage("home");
          navigate("/");
        }}
      >
        <img src={Logo} alt="Flor de Linha Logo" />
      </div>
      <div className={styles.headers}>
        <div
          className={`${styles.headerPage} ${
            currentPage.about ? styles.current : ""
          }`}
        >
          <Link to="/about" onClick={() => setNewCurrentPage("about")}>
            Sobre
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.baby ? styles.current : ""
          }`}
        >
          <Link to="/about" onClick={() => setNewCurrentPage("baby")}>
            Bebé
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.flowers ? styles.current : ""
          }`}
        >
          <Link to="/flowers" onClick={() => setNewCurrentPage("flowers")}>
            Flores
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.accessories ? styles.current : ""
          }`}
        >
          <Link
            to="/accessories"
            onClick={() => setNewCurrentPage("accessories")}
          >
            Acessórios
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.angels ? styles.current : ""
          }`}
        >
          <Link to="/angels" onClick={() => setNewCurrentPage("angels")}>
            Anjinhos
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.angels ? styles.current : ""
          }`}
        >
          <Link to="/contacts" onClick={() => setNewCurrentPage("contacts")}>
            Contactos
          </Link>
        </div>
      </div>
    </div>
  );
}
