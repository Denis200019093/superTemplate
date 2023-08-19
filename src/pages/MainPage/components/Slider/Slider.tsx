import React, { FC } from "react";
import SliderSlick from "react-slick";

import ProductSlide from "./ProductSlide";
import ReviewsSlide from "./ReviewsSlide";
import { settings } from "utils/sliderSettings";
import {
  FinalSliderData,
  IProductSliderTypes,
  IReviewsSliderTypes,
} from "types/SliderTypes";

import PrevArrow from "assets/nextArrow.svg";
import NextArrow from "assets/prevArrow.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

interface IProps {
  title: string;
  sliderData: FinalSliderData[];
  type?: string;
}

const Slider: FC<IProps> = ({ sliderData, type = "product", title }) => {
  const sliderRef = React.useRef<SliderSlick | null>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="slider">
      <div className="slider__head flex-between">
        <h3>{title}</h3>
        <div className="slider__arrows">
          <span onClick={nextSlide} className="prev-arrow">
            <img src={PrevArrow} alt="Prev" />
          </span>
          <span onClick={prevSlide} className="next-arrow">
            <img src={NextArrow} alt="Prev" />
          </span>
        </div>
      </div>
      <SliderSlick ref={sliderRef} {...settings} arrows={false}>
        {sliderData.map((item) => (
          <React.Fragment key={item.id}>
            {type === "product" && (
              <ProductSlide product={item as IProductSliderTypes} />
            )}
            {type === "reviews" && (
              <ReviewsSlide review={item as IReviewsSliderTypes} />
            )}
          </React.Fragment>
        ))}
      </SliderSlick>
    </div>
  );
};

export default Slider;
