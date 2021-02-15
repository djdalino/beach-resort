import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
export const InfoSection = styled.section`
  width: 100%;
`;
export const InfoContainer = styled.div`
  margin: auto;
`;
export const InfoWrapper = styled.div`
  max-width: 1168px;
  padding: 15px 15px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InfoColumnLeft = styled.div`
  ${Column}
  flex-direction: column;
  h1 {
    font-size: clamp(1.6rem, 6vw, 2rem);
  }
  p {
    margin: 1.3rem 0;
    color: gray;
  }
`;
export const InfoColumnRight = styled.div`
  ${Column}
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const View = styled(Link)`
  padding: 8px 24px;
  background: #111;
  width: 220px;
  text-align: center;
  border-radius: 2px;
  outline: none;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    padding: 9px 25px;
  }
`;
