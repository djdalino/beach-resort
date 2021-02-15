import styled, { css } from "styled-components/macro";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
export const HeroContainer = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0vh;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 25%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  max-width: 1600px;
  width: calc(100% - 100px);
  flex-direction: column;
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
  }
  p {
    font-size: clamp(1rem, 8vw, 1.5rem);
    margin-bottom: 1rem;
  }
`;
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 30px;
  margin-right: 30px;
  display: flex;
`;

const ArrowButtons = css`
  display: block;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 50px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ArrowNext = styled(IoMdArrowForward)`
  ${ArrowButtons}
`;
export const ArrowPrev = styled(IoMdArrowBack)`
  ${ArrowButtons}
`;

export const ViewButton = styled(Link)`
  padding: 8px 24px;
  border-radius: 2px;
  border: 2px solid #fff;
  background: transparent;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  z-index: 1000;
  position: relative;
  max-width: 160px;
  &:hover {
    transform: scale(1.3);
  }
`;
