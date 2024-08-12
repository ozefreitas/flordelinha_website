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
  isSticky: boolean;
  lastPosition: number;
}

export default function PageTitle({
  currentPage,
  pageTitleHeight,
  isSticky,
  lastPosition,
}: Readonly<PageTitleProps>) {
  const [pageTitle, setPageTitle] = useState("Home");
  const [animate, setAnimate] = useState(false);
  console.log(lastPosition);
  const location = useLocation().pathname;
  useEffect(() => {
    Object.entries(currentPage).map(([pages, isActive]) => {
      if (isActive) {
        route_matches.map((route) => {
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
        marginTop: !isSticky ? "35dvh" : `${lastPosition}px`,
        width: isSticky ? "100%" : ""
      }}
    >
      {pageTitle}
    </div>
  );
}
