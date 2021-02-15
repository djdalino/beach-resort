import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export const NavbarContainer = styled.nav`
  margin: 0;
  padding: 15px 0;
  background: ${({ scroll }) => (scroll ? "#000" : "rgba(0, 0, 0, 0.2)")};
  color: #fff;
  width: 100%;
  position: fixed;
  z-index: 100;
  transition: all 0.5s ease-in-out;
`;

export const Nav = styled.div`
  max-width: 1168px;
  padding: 0 15px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(LinkR)`
  font-size: 3rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-items: self-start;
`;
export const MenuBarContainer = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100px;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const MenuBar = styled(FaBars)`
  font-size: 2.4rem;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ClosedBar = styled(AiOutlineClose)`
  font-size: 2.4rem;
  display: none;
  cursor: pointer;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    @keyframes slide {
      from {
        transform: translate(100%);
      }
      to {
        transform: translate(0%);
      }
    }
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: ${({ show }) => (show ? "column" : "row")};
    animation-name: slide;
    animation-duration: 0.1s;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    align-items: center;
    height: 100vh;
    justify-content: space-evenly;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavList = styled.li`
  list-style-type: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  &:hover {
    border-bottom: 1px solid #fff;
    font-size: 18px;
  }
`;

export const NavLink = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const NavContact = styled.div`
  @media screen and (max-width: 768px) {
    @keyframes slide {
      from {
        transform: translate(100%);
      }
      to {
        transform: translate(0%);
      }
    }
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: ${({ show }) => (show ? "column" : "row")};
  }
`;
export const NavBtn = styled(LinkR)`
  display: none;
  padding: 12px 36px;
  border-radius: 2px;
  outline: none;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  border: 1px solid #fff;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Contact = styled(LinkR)`
  padding: 8px 24px;
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
