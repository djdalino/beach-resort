import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  Nav,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  MenuBarContainer,
  MenuBar,
  ClosedBar,
  NavContact,
  Contact,
  NavBtn
} from "./NavbarStyles";
import { menuData } from "../../data/MenuData";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOnScroll(window.scrollY ? true : false);
    });
  }, [onScroll]);

  const handleNavMenuToggle = () => setNavMenu(!navMenu);
  return (
    <div>
      <NavbarContainer scroll={onScroll}>
        <Nav>
          <NavLogo>TRVG</NavLogo>
          <MenuBarContainer>
            {!navMenu ? (
              <MenuBar onClick={() => handleNavMenuToggle()} />
            ) : (
              <ClosedBar onClick={() => handleNavMenuToggle()} />
            )}
            {/* <MenuBar onClick={() => handleNavMenuToggle()} /> */}
          </MenuBarContainer>
          <NavMenu show={navMenu}>
            {menuData.map((data, index) => (
              <NavList key={index}>
                <NavLink to={data.link} onClick={() => setNavMenu(false)}>
                  {data.title}
                </NavLink>
              </NavList>
            ))}
            <NavBtn>Contact</NavBtn>
          </NavMenu>
          <NavContact show={navMenu}>
            <Contact>Contact</Contact>
          </NavContact>
        </Nav>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
