import React, { FC } from "react";

import blueImg from "assets/blue.png";
import orangeImg from "assets/orange.png";

import "SCSS/ReusableStyles.scss";
import "./TrioBlock.scss";

interface IProps {
  title: string;
  firstText: string;
  secondText: string;
  type?: "basic" | "about-us" | "sertificates";
}

const TrioBlock: FC<IProps> = ({
  title,
  firstText,
  secondText,
  type = "basic",
}) => {
  return (
    <div className="wrapper default-sides-paddings">
      <div className="trio-block flex-between">
        <h3>{title}</h3>
        <div className="trio-block__descriptions flex-between">
          <div className="trio-block__first-description">
            <p>{firstText}</p>
            {type === "about-us" && <button>Ознайомитись з продуктами</button>}
          </div>
          <div className="trio-block__second-description">
            <p>{secondText}</p>
          </div>
        </div>
      </div>
      {type === "sertificates" && (
        <div className="sertification-container">
          <span></span>
          <div className="sertification-container__sertificates">
            <img src={blueImg} alt="Sertificate" />
            <img src={orangeImg} alt="Sertificate" />
            <img src={blueImg} alt="Sertificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrioBlock;
