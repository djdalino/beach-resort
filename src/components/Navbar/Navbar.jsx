import React, { useState } from "react";
import {
  NavbarContainer,
  Nav,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  MenuBarContainer,
  MenuBar
} from "./NavbarStyles";
import { menuData } from "../../data/MenuData";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenuToggle = () => setNavMenu(!navMenu);
  return (
    <div>
      <NavbarContainer>
        <Nav>
          <NavLogo>TRVG</NavLogo>
          <MenuBarContainer>
            <MenuBar onClick={() => handleNavMenuToggle()} />
          </MenuBarContainer>
          <NavMenu show={navMenu}>
            {menuData.map((data, index) => (
              <NavList key={index}>
                <NavLink to={data.link} onClick={() => setNavMenu(false)}>
                  {data.title}
                </NavLink>
              </NavList>
            ))}
          </NavMenu>
        </Nav>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
