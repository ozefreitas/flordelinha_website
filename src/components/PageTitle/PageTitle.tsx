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
  scrollDirection: string;
}

export default function PageTitle({
  currentPage,
  pageTitleHeight,
  pageTitleFontSize,
  isSticky,
  lastPosition,
  windowHeight,
  scrollDirection,
}: Readonly<PageTitleProps>) {
  const [pageTitle, setPageTitle] = useState("Home");
  const [animate, setAnimate] = useState(false);
  const [topReduction, setTopReduction] = useState(0);
  const [widthReduction, setWidthReduction] = useState(100);
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

  useEffect(() => {
    if (scrollDirection == "down") {
      setTopReduction(-130);
      setWidthReduction(80);
    } else {
      setTopReduction(0);
      setWidthReduction(100);
    }
  }, [scrollDirection]);

  return (
    <div
      id="pagetitle"
      className={`${styles.mainPageTitleContainer} 
      ${animate ? styles.animate : ""}`}
      style={{
        height: `${pageTitleHeight}px`,
        position: isSticky ? "fixed" : "relative",
        top: `${topReduction}px`,
        marginTop: !isSticky
          ? windowHeight >= 850
            ? "350px"
            : "250px"
          : `${lastPosition}px`,
        width: isSticky ? "100%" : "",
        fontSize: `${pageTitleFontSize}px`,
        transition: "top 1.2s ease, width 1s ease-in-out",
      }}
    >
      {pageTitle}
    </div>
  );
}
