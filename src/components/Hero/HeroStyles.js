import styled from "styled-components";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export const HeroContainer = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroSlide = styled.div``;
export const HeroSlider = styled.div``;
export const HeroImage = styled.img``;
export const HeroContent = styled.div``;
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 30px;
  margin-right: 30px;
  display: flex;
`;
export const ArrowNext = styled(IoMdArrowForward)`
  display: block;
  cursor: pointer;
`;
export const ArrowPrev = styled(IoMdArrowBack)`
  display: block;
  cursor: pointer;
`;
