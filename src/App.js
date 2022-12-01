import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Logo from "./digimon_logo.png";
import Cards from "./pages/Cards";
import Search from "./pages/Search";
import Cardsdetails from "./pages/Cardsdetails";
import Searchdetails from "./pages/Searchdetails";
import About from "./pages/About";
import { GiCardRandom } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { HiHome } from "react-icons/hi";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="containerhead">
          <img src={Logo} alt="Logo" height={65} width={156} />
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Cardsdetails/:name/:itemcardnumber" element={<Cardsdetails />}></Route>
          <Route path="/Searchdetails/:name/:itemcardnumber" element={<Searchdetails />}></Route>
        </Routes>
      </div>
      <footer className="footer">
        <div className="containernav">
          <NavLink to="/home" className="iconwrapper">
            <HiHome className="icon" />
            Home
          </NavLink>
          <NavLink to="/cards" className="iconwrapper">
            <GiCardRandom className="icon" />
            Card List
          </NavLink>
          <NavLink to="/search" className="iconwrapper">
            <GoSearch className="icon" />
            Search
          </NavLink>
          <NavLink to="/about" className="iconwrapper">
            <CgProfile className="icon" />
            About
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
