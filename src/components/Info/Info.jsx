import React from "react";
import ImageOne from "../../images/ImageOne.jpg";
import {
  InfoSection,
  InfoContainer,
  InfoWrapper,
  InfoColumnLeft,
  InfoColumnRight,
  View
} from "./InfoStyles";
const Info = () => {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoWrapper>
          <InfoColumnLeft>
            <h1>Explore our beautiful hotel and resort</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <View to="/">View homes</View>
          </InfoColumnLeft>
          <InfoColumnRight>
            <img src={ImageOne} alt="image one" />
          </InfoColumnRight>
        </InfoWrapper>
      </InfoContainer>
    </InfoSection>
  );
};

export default Info;
