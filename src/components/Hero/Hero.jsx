import React, { useState, useEffect, useRef } from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  ArrowNext,
  ArrowPrev,
  ViewButton
} from "./HeroStyles";
// import { sliderData } from "../../data/SliderData";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const next = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(next, 3000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  return (
    <HeroContainer>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide keys={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.image} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <ViewButton to={slide.path}>{slide.label}</ViewButton>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <ArrowPrev onClick={prevSlide} />
          <ArrowNext onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
