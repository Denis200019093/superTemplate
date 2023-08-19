import { FC } from "react";

import CartImg from "assets/icon-cart.svg";

import { IProductSliderTypes } from "types/SliderTypes";

import "SCSS/ReusableStyles.scss";
import "./ProductSlide.scss";

interface IProps {
  product: IProductSliderTypes;
}

const ProductSlide: FC<IProps> = ({ product }) => {
  return (
    <div className="product-slide">
      <img src={product.img} alt={"Helloo"} />
      <div className="product-slide__body">
        <div className="product-slide__info">
          <h6>{product.title}</h6>
          <p>{product.description}</p>
        </div>
        <div className="product-slide__price flex-between">
          <p>${product.price} / 100 g</p>
          <img src={CartImg} alt={"Hello"} />
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
