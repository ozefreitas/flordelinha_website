import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./pagetitle.module.css";
import route_matches from "../../assets/pagename_match.json";

interface PageTitleProps {
  currentPage: {
    home: boolean;
    about: boolean;
    baby: boolean;
    flowers: boolean;
    accessories: boolean;
    angels: boolean;
    contacts: boolean;
  };
  pageTitleHeight: number;
  pageTitleFontSize: number;
  isSticky: boolean;
  lastPosition: number;
  windowHeight: number;
}

export default function PageTitle({
  currentPage,
  pageTitleHeight,
  pageTitleFontSize,
  isSticky,
  lastPosition,
  windowHeight,
}: Readonly<PageTitleProps>) {
  const [pageTitle, setPageTitle] = useState("Home");
  const [animate, setAnimate] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    Object.entries(currentPage).forEach(([pages, isActive]) => {
      if (isActive) {
        route_matches.forEach((route) => {
          if (route.path === pages) {
            let newString = route.page[0].toUpperCase() + route.page.slice(1);
            setPageTitle(newString);
            setAnimate(true);
          }
        });
      }
    });
  }, [location]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500); // Remove animation class after animation duration
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div
      id="pagetitle"
      className={`${styles.mainPageTitleContainer} ${
        animate ? styles.animate : ""
      }`}
      style={{
        height: `${pageTitleHeight}px`,
        position: isSticky ? "fixed" : "relative",
        marginTop: !isSticky
          ? windowHeight >= 850
            ? "350px"
            : "250px"
          : `${lastPosition}px`,
        width: isSticky ? "100%" : "",
        fontSize: `${pageTitleFontSize}px`,
      }}
    >
      {pageTitle}
    </div>
  );
}
