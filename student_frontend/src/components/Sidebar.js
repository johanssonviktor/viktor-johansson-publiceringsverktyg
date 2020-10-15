import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { SideBarWrapper , CloseBtn, SideContainer} from "../elements/AsideElements"
// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
//       <button className="close-btn" onClick={toggleSidebar}>
//         <FaTimes />
//       </button>
//       <div className="side-container">
//         <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
//         <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
//       </div>
//     </aside>
//   )
// }

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SideBarWrapper className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <CloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </CloseBtn>
      <SideContainer>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </SideContainer>
    </SideBarWrapper>
  )
}

export default Sidebar
