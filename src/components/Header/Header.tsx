import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/flor_de_linha_no_bg_500px.png";

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
  setIsSubHeaderOpen: React.Dispatch<
    React.SetStateAction<{
      baby: boolean;
      flowers: boolean;
      accessories: boolean;
      angels: boolean;
    }>
  >;
  windowHeight: number;
}

export default function Header({
  currentPage,
  setCurrentPage,
  setIsSubHeaderOpen,
  windowHeight,
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

  const restartIsSubHeaderOpen = () => {
    setIsSubHeaderOpen({
      baby: false,
      flowers: false,
      accessories: false,
      angels: false,
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
    <div
      id="header"
      className={`${styles.mainHeaderContainer} ${
        windowHeight >= 800 ? "" : styles.smallHeightScreen
      }`}
    >
      <div
        className={`${styles.logoContainer} ${
          windowHeight >= 800 ? "" : styles.smallHeightScreen
        }`}
        onClick={() => {
          setNewCurrentPage("home");
          navigate("/");
          setIsSubHeaderOpen({
            baby: false,
            flowers: false,
            accessories: false,
            angels: false,
          });
        }}
      >
        <img src={Logo} alt="Flor de Linha Logo" />
      </div>
      <div
        className={`${styles.headers} ${
          windowHeight >= 800 ? "" : styles.smallHeightScreen
        }`}
      >
        <div
          className={`${styles.headerPage} ${
            currentPage.about ? styles.current : ""
          }`}
          onClick={() => {
            navigate("/about");
            setNewCurrentPage("about");
            setIsSubHeaderOpen({
              baby: false,
              flowers: false,
              accessories: false,
              angels: false,
            });
          }}
        >
          <span>Sobre</span>
        </div>
        <div
          data-exclude-click
          className={`${styles.headerPage} ${
            currentPage.baby ? styles.current : ""
          }`}
          onClick={() => {
            setNewCurrentPage("baby");
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              baby: prevIsSubHeaderopen.baby,
              flowers: false,
              accessories: false,
              angels: false,
            }));
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              ...prevIsSubHeaderopen,
              baby: prevIsSubHeaderopen.baby ? false : true,
            }));
          }}
        >
          <span>Bebé</span>
        </div>
        <div
          data-exclude-click
          className={`${styles.headerPage} ${
            currentPage.flowers ? styles.current : ""
          }`}
          onClick={() => {
            setNewCurrentPage("flowers");
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              baby: false,
              flowers: prevIsSubHeaderopen.flowers,
              accessories: false,
              angels: false,
            }));
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              ...prevIsSubHeaderopen,
              flowers: prevIsSubHeaderopen.flowers ? false : true,
            }));
          }}
        >
          <span>Flores</span>
        </div>
        <div
          data-exclude-click
          className={`${styles.headerPage} ${
            currentPage.accessories ? styles.current : ""
          }`}
          onClick={() => {
            setNewCurrentPage("accessories");
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              baby: false,
              flowers: false,
              accessories: prevIsSubHeaderopen.accessories,
              angels: false,
            }));
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              ...prevIsSubHeaderopen,
              accessories: prevIsSubHeaderopen.accessories ? false : true,
            }));
          }}
        >
          <span>Acessórios</span>
        </div>
        <div
          data-exclude-click
          className={`${styles.headerPage} ${
            currentPage.angels ? styles.current : ""
          }`}
          onClick={() => {
            setNewCurrentPage("angels");
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              baby: false,
              flowers: false,
              accessories: false,
              angels: prevIsSubHeaderopen.angels,
            }));
            setIsSubHeaderOpen((prevIsSubHeaderopen) => ({
              ...prevIsSubHeaderopen,
              angels: prevIsSubHeaderopen.angels ? false : true,
            }));
          }}
        >
          <span>Anjinhos</span>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.contacts ? styles.current : ""
          }`}
          onClick={() => {
            navigate("/contacts");
            setNewCurrentPage("contacts");
            setIsSubHeaderOpen({
              baby: false,
              flowers: false,
              accessories: false,
              angels: false,
            });
          }}
        >
          <span>Contactos</span>
        </div>
      </div>
    </div>
  );
}
