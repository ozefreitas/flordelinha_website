import { useEffect, useState } from "react";
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
}

export default function PageTitle({ currentPage }: PageTitleProps) {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    Object.entries(currentPage).map(([pages, isActive]) => {
      if (isActive) {
        route_matches.map((route) => {
          if (route.path === pages) {
            setPageTitle(route.page);
          }
        });
      }
    });
  }, [currentPage]);

  console.log(pageTitle);
  return (
    <div id="pagetitle" className={styles.mainPageTitleContainer}>
      {pageTitle}
    </div>
  );
}
