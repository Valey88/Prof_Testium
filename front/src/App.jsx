import React from "react";
import "./App.css";
//yarn add react-fetch-hook

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Rates from "./components/Home/Rates/Rates";
import LogIn from "./pages/LogIn/LogIn";
import Integration from "./components/Home/Integration/Integration";
import Opportunities from "./components/Home/Opportunities/Opportunities";
import Reviews from "./components/Home/Reviews/Reviews";
import Support from "./components/Home/Support/Support";
import Register from "./pages/Register/Register";
import Input from "./components/globalComponents/Input/Input";
import Button from "./components/globalComponents/Buttons/Button";
import Trial from "./pages/Trial/Trial";

function App() {
  return (
    <>
      <header style={{ display: "flex", gridGap: 20 }}>
        <div className="headerLogo">
          <Link to="/">ПрофТестиум</Link>
        </div>
        <ul className="headerMenu">
          <li>
            <a>Возможности</a>
          </li>
          <li>
            <a>Тарифы</a>
          </li>
          <li>
            <a>Внедрение</a>
          </li>
          <li>
            <a>Отзывы</a>
          </li>
          <li>
            <a>Поддержка</a>
          </li>
        </ul>
        <div className="logSigIn">
          <Link to="/register">Регистрация</Link>
          <div>|</div>
          <Link to="/login">Авторизация</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
      <footer>
        <div className="footerBlock">
          <div className="footerLogo">
            <Link to="/">ПрофТестиум</Link>
          </div>
          <div className="footerMenu">
            <ul className="">
              <li>
                <a>Возможности</a>
              </li>
              <li>
                <a>Тарифы</a>
              </li>
              <li>
                <a>Внедрение</a>
              </li>
              <li>
                <a>Отзывы</a>
              </li>
              <li>
                <a>Поддержка</a>
              </li>
            </ul>
          </div>
          <div className="footerMenu">
            <ul className="">
              <li>
                <a>Возможности</a>
              </li>
              <li>
                <a>Тарифы</a>
              </li>
              <li>
                <a>Внедрение</a>
              </li>
              <li>
                <a>Отзывы</a>
              </li>
              <li>
                <a>Поддержка</a>
              </li>
            </ul>
          </div>
          <form className="formFooter">
            <div className="formHeading">
              <a>Оставить заявку</a>
            </div>
            <Input widthInp={300} backInp="#fff" placeInp="Имя:"></Input>
            <Input widthInp={300} backInp="#fff" placeInp="Телефон:"></Input>
            <textarea placeholder="Cообщение:"></textarea>
            <div className="footerButton">
              <Button
                widthBtn={250}
                backBtn="none"
                borderBtn="1px solid #fff"
                colorBtn="#fff"
              >
                Отправить
              </Button>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
}
export default App;
