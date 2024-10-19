import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import SubHeader from "./components/SubHeader/SubHeader";
import PageTitle from "./components/PageTitle/PageTitle";

function App() {
  const [currentPage, setCurrentPage] = useState({
    home: false,
    about: false,
    baby: false,
    flowers: false,
    accessories: false,
    angels: false,
    contacts: false,
  });
  const [isSubHeaderOpen, setIsSubHeaderOpen] = useState({
    baby: false,
    flowers: false,
    accessories: false,
    angels: false,
  });
  const [pageTitleHeight, setPageTitleHeight] = useState(
    window.innerHeight >= 800 ? 250 : 180
  );
  const [lastPosition, setLastPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [pageTitleFontSize, setPageTitleFontSize] = useState(
    window.innerHeight >= 800 ? 120 : 90
  );
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  const handleMouseDown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest("[data-exclude-click]")) {
      return;
    }
    if (subHeaderRef.current) {
      const rect = subHeaderRef.current.getBoundingClientRect();
      const clickOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (clickOutside) {
        setIsSubHeaderOpen({
          baby: false,
          flowers: false,
          accessories: false,
          angels: false,
        });
      }
    }
  };

  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.code === "Escape") {
      setIsSubHeaderOpen({
        baby: false,
        flowers: false,
        accessories: false,
        angels: false,
      });
    }
  };

  const handleDynamicHeight = () => {
    const scrollPosition = window.scrollY;
    if (windowHeight >= 800) {
      if (scrollPosition >= 200 && !isSticky) {
        setPageTitleHeight(150);
        setPageTitleFontSize(70);
        setLastPosition(150);
        setIsSticky(true);
      } else if (scrollPosition < 200 && isSticky) {
        setIsSticky(false);
      } else if (!isSticky) {
        const newHeight = Math.max(150, 250 - scrollPosition * 3);
        const newFontSize = Math.max(70, 120 - scrollPosition * 1.8);
        setPageTitleHeight(newHeight);
        setPageTitleFontSize(newFontSize);
      }
    } else {
      if (scrollPosition >= 100 && !isSticky) {
        setPageTitleHeight(90);
        setPageTitleFontSize(40);
        setLastPosition(120);
        setIsSticky(true);
      } else if (scrollPosition < 100 && isSticky) {
        setIsSticky(false);
      } else if (!isSticky) {
        const newHeight = Math.max(90, 180 - scrollPosition * 3);
        const newFontSize = Math.max(40, 90 - scrollPosition * 1.5);
        setPageTitleHeight(newHeight);
        setPageTitleFontSize(newFontSize);
      }
    }
  };

  const handleScrollDirection = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 350) {
      if (scrollPosition > lastScrollPosition) {
        setLastScrollPosition(scrollPosition);
        setScrollDirection("down");
      } else {
        setLastScrollPosition(scrollPosition);
        setScrollDirection("up");
      }
    }
  };

  useEffect(() => {
    handleDynamicHeight();
  }, [windowHeight]);

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleDynamicHeight);
    window.addEventListener("scroll", handleScrollDirection);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleDynamicHeight);
      window.removeEventListener("scroll", handleScrollDirection);
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setLastPosition(0);
    setPageTitleHeight(window.innerHeight >= 800 ? 250 : 180);
    setIsSticky(false);
    setPageTitleFontSize(window.innerHeight >= 800 ? 120 : 90);
  }, [location.pathname]);

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsSubHeaderOpen={setIsSubHeaderOpen}
        windowHeight={windowHeight}
        scrollDirection={scrollDirection}
      ></Header>
      <SubHeader
        isSubHeaderOpen={isSubHeaderOpen}
        subHeaderRef={subHeaderRef}
      ></SubHeader>
      <div
        className={`hiderContainer ${
          windowHeight >= 800 ? "" : "smallHeightScreen"
        } ${scrollDirection == "down" ? "close" : "opened"}`}
      ></div>
      <div
        className={`hiderContainer2 ${
          windowHeight >= 800 ? "" : "smallHeightScreen"
        } ${scrollDirection == "down" ? "close" : "opened"}`}
      ></div>
      <PageTitle
        currentPage={currentPage}
        pageTitleHeight={pageTitleHeight}
        pageTitleFontSize={pageTitleFontSize}
        isSticky={isSticky}
        lastPosition={lastPosition}
        windowHeight={windowHeight}
        scrollDirection={scrollDirection}
      ></PageTitle>
      <div className="mainContentContainer">
        <Routes>
          <Route
            path="/"
            element={<Home windowHeight={windowHeight}></Home>}
          ></Route>
          <Route
            path="/about"
            element={<About windowHeight={windowHeight}></About>}
          ></Route>
          <Route
            path="/contacts"
            element={<Contacts windowHeight={windowHeight}></Contacts>}
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
