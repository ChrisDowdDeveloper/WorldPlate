import { useState, useEffect } from "react";
import MealsCard from "../cards/MealsCard";
import Image from "next/image";

const Carousel = ({ meals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? meals.length - slidesToShow : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= meals.length - slidesToShow;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <div className="flex justify-center space-x-4 overflow-hidden relative px-8">
        {meals.slice(currentIndex, currentIndex + slidesToShow).map((meal) => (
          <MealsCard key={meal.idMeal} meal={meal} className="w-80 h-auto" />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute sm:left-0 left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full z-10"
      >
        <Image src="/arrows/arrow-left.png" alt="Left Arrow" width={30} height={30} />
      </button>

      <button
        onClick={goToNext}
        className="absolute sm:right-0 right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full z-10"
      >
        <Image src="/arrows/arrow-right.png" alt="Left Arrow" width={30} height={30} />
      </button>
    </div>
  );
};

export default Carousel;
