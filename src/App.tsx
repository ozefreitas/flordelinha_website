import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
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
  const subHeaderRef = useRef<HTMLDivElement>(null);

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
      }
      setIsSubHeaderOpen({
        baby: false,
        flowers: false,
        accessories: false,
        angels: false,
      });
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

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

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
      <PageTitle currentPage={currentPage}></PageTitle>
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
