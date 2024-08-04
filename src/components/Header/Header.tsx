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
}

export default function Header({
  currentPage,
  setCurrentPage,
  setIsSubHeaderOpen,
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
    console.log("restart")
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
    <div id="header" className={styles.mainHeaderContainer}>
      <div
        className={styles.logoContainer}
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
      <div className={styles.headers}>
        <div
          className={`${styles.headerPage} ${
            currentPage.about ? styles.current : ""
          }`}
        >
          <Link
            to="/about"
            onClick={() => {
              setNewCurrentPage("about");
              setIsSubHeaderOpen({
                baby: false,
                flowers: false,
                accessories: false,
                angels: false,
              });
            }}
          >
            Sobre
          </Link>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.baby ? styles.current : ""
          }`}
        >
          <span
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
                baby: prevIsSubHeaderopen.baby ? false : true
              }));
            }}
          >
            Bebé
          </span>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.flowers ? styles.current : ""
          }`}
        >
          <span
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
                flowers: prevIsSubHeaderopen.flowers ? false : true
              }));
            }}
          >
            Flores
          </span>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.accessories ? styles.current : ""
          }`}
        >
          <span
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
                accessories: prevIsSubHeaderopen.accessories ? false : true
              }));
            }}
          >
            Acessórios
          </span>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.angels ? styles.current : ""
          }`}
        >
          <span
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
                angels: prevIsSubHeaderopen.angels ? false : true
              }));
            }}
          >
            Anjinhos
          </span>
        </div>
        <div
          className={`${styles.headerPage} ${
            currentPage.contacts ? styles.current : ""
          }`}
        >
          <Link
            to="/contacts"
            onClick={() => {
              setNewCurrentPage("contacts");
              setIsSubHeaderOpen({
                baby: false,
                flowers: false,
                accessories: false,
                angels: false,
              });
            }}
          >
            Contactos
          </Link>
        </div>
      </div>
    </div>
  );
}
