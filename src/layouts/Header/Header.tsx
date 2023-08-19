import { useState, FC } from "react";

import Logo from "components/UI/Logo";

import planetSVG from "assets/ph_globe-simple.svg";
import arrowSVG from "assets/icon-chevron-down.svg";
import cartSVG from "assets/icon-cart.svg";

import "./Header.scss";
import "SCSS/ReusableStyles.scss";

interface IProps {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavigation: FC<IProps> = ({ showMobileNav, setShowMobileNav }) => {
  return (
    <div className={`mobile-navigation ${showMobileNav ? "show" : ""}`}>
      {/* <Logo /> */}
      <nav className="mobile-navigation__nav">
        <ul>
          <li>Крамниця</li>
          <li>Про нас</li>
          <li>Відгуки</li>
          <li>Зв'язатися з нами</li>
        </ul>
      </nav>
      <span className="close-btn" onClick={() => setShowMobileNav(false)}>
        &times;
      </span>
    </div>
  );
};

const Header: FC = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <>
      <header className="header flex-between default-sides-paddings">
        <MobileNavigation
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
        />
        <div className="header__logo-burder">
          <label
            htmlFor="burger-toggle"
            onClick={() => setShowMobileNav(true)}
            className="header__burger"
          >
            &#9776;
          </label>
          <Logo />
        </div>
        <nav className="header__navigation">
          <ul>
            <li>Крамниця</li>
            <li>Про нас</li>
            <li>Відгуки</li>
            <li>Зв'язатися з нами</li>
          </ul>
        </nav>
        <div className="header__actions">
          <div className="header__select">
            <img src={planetSVG} alt="Planet" />
            <span>Укр</span>
            <img src={arrowSVG} alt="Arrow" />
          </div>
          <img className="header__cart" src={cartSVG} alt="Arrow" />
        </div>
      </header>
    </>
  );
};

export default Header;
