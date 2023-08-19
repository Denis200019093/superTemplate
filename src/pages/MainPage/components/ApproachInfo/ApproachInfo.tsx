import { FC } from "react";

import premiumImg from "assets/premium.png";
import dontknowImg from "assets/dontknow.png";
import saveImg from "assets/save.png";

import "./ApproachInfo.scss";

const ApproachInfo: FC = () => {
  return (
    <div className="approach-info">
      <div className="approach-info__premium">
        <img src={premiumImg} alt="Premium" />
        <h6>Сучасні технології</h6>
        <p>
          Сучасні технології, такі як гідропоніка, аеропоніка, вертикальне
          фермерство та інші, дозволяють ефективно вирощувати їжу в умовах
          обмеженої площі та з використанням мінімальної кількості ресурсів.
        </p>
      </div>
      <div className="approach-info__dontknow">
        <img src={dontknowImg} alt="dont" />
        <h6>100% органічно</h6>
        <p>
          Сучасні методи переробки еко їжі використовуються з мінімальним
          використанням хімічних речовин та енергії.{" "}
        </p>
      </div>
      <div className="approach-info__save">
        <img src={saveImg} alt="save" />
        <h6>Якість</h6>
        <p>
          Ми надаємо споживачам детальну інформацію про методи вирощування та
          виробництва, сертифікацію, а також про довкілля та соціальну
          відповідальність компанії
        </p>
      </div>
    </div>
  );
};

export default ApproachInfo;
