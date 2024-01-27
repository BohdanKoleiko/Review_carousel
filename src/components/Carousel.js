import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import styles from "./Carousel.module.scss";
import Button from "./Button/Button";
import Title from "./Title/Title";
import cardsData from "../data";

const images = require.context("../images", true);
const imageList = images.keys().map((image) => images(image));

const updatedCardsData = cardsData.map((card, i) => {
   return { ...card, img: imageList[i] };
});

const Carousel = function () {
   const [slideIndex, setSlideIndex] = useState(0);

   const nextSlideHandler = function () {
      setSlideIndex((prev) =>
         prev !== updatedCardsData.length - 1 ? prev + 1 : updatedCardsData.length - 1,
      );
   };

   const prevSlideHandler = function () {
      setSlideIndex((prev) => (prev !== 0 ? prev - 1 : 0));
   };

   const setRundomSlide = () => {
      setSlideIndex(Math.floor(Math.random() * updatedCardsData.length));
   };

   return cardsData.length === 0 ? (
      <h2>There are no items for slider</h2>
   ) : (
      <div className={styles.carousel}>
         <div
            style={{
               overflow: "hidden",
            }}
         >
            <div
               className={styles.carouselCards}
               style={{
                  transform: `translateX(-${slideIndex * 100}%)`,
                  transition: "transform 0.3s ease-in",
               }}
            >
               {updatedCardsData.map((card, i) => {
                  return (
                     <div className={styles.carouselCard} key={i}>
                        <div className={styles.carouselCardImgWrapper}>
                           <figure className={styles.carouselCardImg}>
                              <img src={card.img} alt="avatar" loading="lazy" />
                           </figure>
                        </div>
                        <div className={styles.personInfo}>
                           <Title type="h4">{card.name}</Title>
                           <Title type="h5">{card.job}</Title>
                        </div>

                        <p>{card.about}</p>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className={styles.carouselInner}>
            <Button
               classNames={styles.carouselBtnPrev}
               disabled={slideIndex === 0 ? true : false}
               onClick={prevSlideHandler}
            >
               <MdArrowBackIosNew />
            </Button>
            <Button
               classNames={styles.carouselBtnNext}
               disabled={slideIndex === updatedCardsData.length - 1 ? true : false}
               onClick={nextSlideHandler}
            >
               <MdArrowBackIosNew />
            </Button>
         </div>

         <Button classNames={styles.randomPostGeneratorBtn} onClick={setRundomSlide}>
            surprise me
         </Button>
      </div>
   );
};

export default Carousel;
