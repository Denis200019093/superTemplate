import Coockies from "assets/coockies.png";
import Fistache from "assets/fistache.png";
import Something from "assets/something.png";
import Kasha from "assets/kasha.png";
import Nuts from "assets/nuts.png";
import Heart from "assets/heart.png";
import Mark from "assets/mark.png";
import Meri from "assets/meri.png";
import Karla from "assets/karla.png";

import { IProductSliderTypes, IReviewsSliderTypes } from "types/SliderTypes";

export const bestSellersProducts: IProductSliderTypes[] = [
  {
    id: 1,
    img: Coockies,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 2,
    img: Fistache,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 3,
    img: Something,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 4,
    img: Fistache,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 5,
    img: Something,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 6,
    img: Fistache,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
];

export const newProducts: IProductSliderTypes[] = [
  {
    id: 1,
    img: Kasha,
    title: "Грецькі горіхи",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 2,
    img: Nuts,
    title: "Набір фруктовий",
    description: "Набір фруктів вирощених в екологічно чистих умовах",
    price: "43,00",
  },
  {
    id: 3,
    img: Heart,
    title: "Набір фруктовий",
    description: "Натуральне кукурудзяне печиво \n" + "ручної роботи 100 гр",
    price: "43,00",
  },
  {
    id: 4,
    img: Kasha,
    title: "Набір фруктовий",
    description: "Натуральне кукурудзяне печиво \n" + "ручної роботи 100 гр",
    price: "43,00",
  },
  {
    id: 5,
    img: Nuts,
    title: "Набір фруктовий",
    description: "Натуральне кукурудзяне печиво \n" + "ручної роботи 100 гр",
    price: "43,00",
  },
  {
    id: 6,
    img: Kasha,
    title: "Набір фруктовий",
    description: "Натуральне кукурудзяне печиво \n" + "ручної роботи 100 гр",
    price: "43,00",
  },
];

export const reviewsData: IReviewsSliderTypes[] = [
  {
    id: 1,
    img: Mark,
    name: "Марк",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#A2E0DB",
    starColor: "#DBF923",
    description:
      "Як покупець Eco Food Ukraine, \n" +
      "я хотів би поділитися своїм враженням про їх екологічні продукти. Я дуже задоволений здоровою та екологічно чистою їжею, яку я отримую від цієї компанії.",
  },
  {
    id: 2,
    img: Meri,
    name: "Мері",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#F5DFC1",
    starColor: "#FF5722",
    description:
      "Одним великим плюсом є зручна доставка. Продукти доставляються до мого дверей у заздалегідь визначений час, що дуже зручно для мене.",
  },
  {
    id: 3,
    img: Karla,
    name: "Карла",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#B7CFB7",
    starColor: "#A2E0DB",
    description:
      "Я рекомендую їх продукти усім, хто прагне зберігати здоров'я \n" +
      "та займатися дбайливим ставленням до навколишнього середовища.",
  },
  {
    id: 4,
    img: Meri,
    name: "Мері",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#FFDBCB",
    starColor: "#FF5722",
    description:
      "Я рекомендую їх продукти усім, хто прагне зберігати здоров'я та займатися дбайливим ставленням до навколишнього середовища.",
  },
  {
    id: 5,
    img: Mark,
    name: "Марк",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#B7CFB7",
    starColor: "#DBF923",
    description:
      "Я рекомендую їх продукти усім, хто прагне зберігати здоров'я та займатися дбайливим ставленням до навколишнього середовища.",
  },
  {
    id: 5,
    img: Karla,
    name: "Карла",
    status: "Клієнт",
    rating: "5.0",
    bgColor: "#F5DFC1",
    starColor: "#A2E0DB",
    description:
      "Я рекомендую їх продукти усім, хто прагне зберігати здоров'я та займатися дбайливим ставленням до навколишнього середовища.",
  },
];

export const aboutUsTexts = {
  title: "Про нас",
  firstText:
    "Наша компанія присвячена створенню високоякісних продуктів, які вирощуються  та виробляються з дбайливим ставленням  до навколишнього середовища.",
  secondText:
    "Ми прагнемо забезпечити споживачів здоровою та натуральною альтернативою у світі харчових продуктів. ",
};

export const preparationTexts = {
  title: "Пошук та підготовка продуктів",
  firstText:
    "У Eco Food Ukraine ми покладаємо особливу увагу на процес пошуку та підготовки продуктів екологічного харчування. Наша компанія присвячена наданню найякісніших та екологічно чистих продуктів,  і ми прагнемо зробити цей процес легким та зручним для наших клієнтів.",
  secondText:
    "Здорова їжа, яка вирощується з дбайливим ставленням до навколишнього середовища, сприяє нашому фізичному та емоційному благополуччю. Тим самим, ми підтримуємо екологічне виробництво, зменшуємо використання шкідливих хімічних речовин та мінімізуємо негативний вплив на природу. ",
};

export const sertificatesTexts = {
  title: "Сертифікати якості",
  firstText:
    "Наша продукція сертифікована відповідно до міжнародного стандарту ENplus® ID-No.: UA 012 та DINplus No.: 7А377.",
  secondText:
    "Продукція виготовлена ​​з дотриманням технологічних норм та відповідає стандартам якості.",
};
