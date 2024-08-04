import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import SubHeader from "./components/SubHeader/SubHeader";

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

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsSubHeaderOpen={setIsSubHeaderOpen}
      ></Header>
      <SubHeader isSubHeaderOpen={isSubHeaderOpen}></SubHeader>
      <div className="hiderContainer"></div>
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
