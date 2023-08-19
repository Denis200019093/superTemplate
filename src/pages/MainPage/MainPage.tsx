import { FC } from "react";

import Shop from "./components/Shop";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import VideoPlayer from "./components/VideoPlayer";
import TrioBlock from "./components/TrioBlock";
import ApproachInfo from "./components/ApproachInfo";
import Form from "./components/Form";
import {
  aboutUsTexts,
  bestSellersProducts,
  newProducts,
  reviewsData,
  preparationTexts,
  sertificatesTexts,
} from "utils/__mocks__";

const MainPage: FC = () => {
  return (
    <>
      <Shop />
      <TrioBlock
        title={aboutUsTexts.title}
        firstText={aboutUsTexts.firstText}
        secondText={aboutUsTexts.secondText}
        type="about-us"
      />
      <Slider sliderData={bestSellersProducts} title={"Хіти продажів"} />
      <Banner />
      <Slider sliderData={newProducts} title={"Наші новинки"} />
      <ApproachInfo />
      <VideoPlayer />
      <TrioBlock
        title={preparationTexts.title}
        firstText={preparationTexts.firstText}
        secondText={preparationTexts.secondText}
      />
      <Slider sliderData={reviewsData} title={"Відгуки"} type="reviews" />
      <TrioBlock
        title={sertificatesTexts.title}
        firstText={sertificatesTexts.firstText}
        secondText={sertificatesTexts.secondText}
        type="sertificates"
      />
      <Form />
    </>
  );
};

export default MainPage;
