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
  const [pageTitleHeight, setPageTitleHeight] = useState(250);
  const [lastPosition, setLastPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [pageTitleFontSize, setPageTitleFontSize] = useState(100);
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
    if (scrollPosition >= 100 && !isSticky) {
      setPageTitleHeight(100);
      setPageTitleFontSize(50);
      setLastPosition(150);
      setIsSticky(true);
    } else if (scrollPosition < 100 && isSticky) {
      setIsSticky(false);
    } else if (!isSticky) {
      console.log(scrollPosition);
      const newHeight = Math.max(100, 250 - scrollPosition * 3);
      const newFontSize = Math.max(50, 100 - scrollPosition);
      setPageTitleHeight(newHeight);
      setPageTitleFontSize(newFontSize);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleDynamicHeight);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleDynamicHeight);
    };
  });

  useEffect(() => {
    scrollTo(0, 0);
    setLastPosition(0)
    setPageTitleHeight(250)
    setIsSticky(false)
    setPageTitleFontSize(100)
  }, [location]);

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsSubHeaderOpen={setIsSubHeaderOpen}
      ></Header>
      <SubHeader
        isSubHeaderOpen={isSubHeaderOpen}
        subHeaderRef={subHeaderRef}
      ></SubHeader>
      <div className="hiderContainer"></div>
      <PageTitle
        currentPage={currentPage}
        pageTitleHeight={pageTitleHeight}
        pageTitleFontSize={pageTitleFontSize}
        isSticky={isSticky}
        lastPosition={lastPosition}
      ></PageTitle>
      <div className="mainContentContainer">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
