import { FC } from "react";

import first from "assets/first.png";
import second from "assets/second.png";

import "./Shop.scss";
import "SCSS/ReusableStyles.scss";

const Shop: FC = () => {
  return (
    <div className="shop default-sides-paddings">
      <div className="shop__first-image">
        <img src={first} alt={"First"} />
      </div>
      <div className="shop__second-image">
        <img src={second} alt={"Second"} />
      </div>
      <div className="shop__about">
        <h1>Eco Food Ukraine</h1>
        <p>
          Ми спеціалізуємось на виробництві органічних продуктів харчування
          місцевого виробництва.{" "}
        </p>
        <button>Крамниця</button>
      </div>
    </div>
  );
};

export default Shop;
