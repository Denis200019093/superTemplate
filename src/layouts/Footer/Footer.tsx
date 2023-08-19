import { FC } from "react";

import Logo from "components/UI/Logo";

import vodafone from "assets/vodafone.png";
import kyivstar from "assets/kyivstar.png";
import insta from "assets/insta.svg";
import facebook from "assets/facebook.svg";
import Group from "assets/Group.svg";
import twitter from "assets/twitter.svg";

import "SCSS/ReusableStyles.scss";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer flex-between">
      <div className="footer__first-block">
        <Logo />
        <p>
          Виробництві органічних продуктів харчування місцевого виробництва.{" "}
        </p>
        <button>Ознайомитись з продуктами</button>
      </div>
      <div className="footer__second-block">
        <h6>Інформація</h6>
        <ul>
          <li>Про нас</li>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Політика конфеденційності</li>
          <li>Умови повернення</li>
        </ul>
      </div>
      <div className="footer__third-block flex-between">
        <div>
          <h6>Наша адреса</h6>
          <ul>
            <li>м. Ужгород, пр. Соборний, 24</li>
            <li>Email: info@ecofood.in.ua</li>
          </ul>
        </div>
        <span>Copyright © 2023 EcoFood Ukraine. All rights reserved.</span>
      </div>
      <div className="footer__fourth-block">
        <h6>Контакти</h6>
        <ul>
          <li>
            <img src={vodafone} alt="vodafone" />
            <a href="tel:+380998978889">(099) 897 88 89</a>
          </li>
          <li>
            <img src={kyivstar} alt="kyivstar" />
            <a href="tel:+380978552390">(097) 855 23 90</a>
          </li>
        </ul>
        <div className="social-icons">
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
          <img src={Group} alt="Group" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
