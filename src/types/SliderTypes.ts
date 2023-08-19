export type IProductSliderTypes = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
};

export type IReviewsSliderTypes = {
  id: number;
  img: string;
  name: string;
  status: string;
  rating: string;
  bgColor: string;
  starColor: string;
  description: string;
};

export type FinalSliderData = IProductSliderTypes | IReviewsSliderTypes;
