import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper, FooterContent } from "../elements/FooterElements"
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent className="footer-content">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Viktor Johansson</span> | all rights reserved
        </h4>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
