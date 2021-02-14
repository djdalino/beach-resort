import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  ArrowNext,
  ArrowPrev
} from "./HeroStyles";
import { sliderData } from "../../data/SliderData";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        {sliderData.map((slide, index) => (
          <HeroSlide keys={index}>
            <HeroSlider>
              <HeroImage src={slide.image} />
              <HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
              </HeroContent>
            </HeroSlider>
          </HeroSlide>
        ))}
        <SliderButtons>
          <ArrowPrev />
          <ArrowNext />
        </SliderButtons>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
