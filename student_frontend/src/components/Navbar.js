import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { NavBar, NavCenter, NavHeader, ToggleBtn } from "../elements/NavElements"

// const Navbar = ({ toggleSidebar }) => {
//   return (
//     <nav className="navbar">
//       <div id="top" className="nav-center">
//          <div className="nav-header">
//           {/* <img src={logo} alt="logo" /> */}
//           <button type="button" className="toggle-btn" onClick={toggleSidebar}>
//             <FaAlignRight></FaAlignRight>
//           </button>
//         </div>
//         <PageLinks styleClass="nav-links"></PageLinks>
//        </div> 
//     </nav>
//   )
// }

const Navbar = ({ toggleSidebar }) => {
  return (
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
