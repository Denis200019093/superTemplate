import React, { FC } from "react";

import BannerImg from "assets/bannerCoockies.png";

import "SCSS/ReusableStyles.scss"
import "./Banner.scss";

const Banner: FC = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="Banner img" className="" />
      <div className="banner__content">
        <div className="test">
          <h3>Натуральне Веганське Печиво ручної роботи 100 гр</h3>
          <p>
            Склад: фініки, банан, вівсяні пластівці, борошно спельтове, сода
            харчова, лимонний сік, насіння кунжуту, льон, гарбузове пюре,
            насіння гарбуза.
          </p>
          <button>Купити зараз</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
