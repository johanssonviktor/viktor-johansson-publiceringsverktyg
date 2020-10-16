import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { NavBar, NavCenter, NavHeader, ToggleBtn } from "../elements/NavElements"

const Navbar = ({ toggleSidebar }) => {
  return (
    // Calling the components
    <NavBar>
      <NavCenter id="top">
         <NavHeader>
          {/* <img src={logo} alt="logo" /> */}
          <ToggleBtn type="button" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </ToggleBtn>
        </NavHeader>
        <PageLinks styleClass="nav-links">
        </PageLinks>
       </NavCenter> 
    </NavBar>
  )
}

export default Navbar
