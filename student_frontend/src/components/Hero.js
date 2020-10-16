import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import {
  HeroWrapper,
  ArticleWrapper,
  HeroInfo,
} from "../elements/HeaderElements"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "jag.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroWrapper>
      <ArticleWrapper className="section-center">
        <HeroInfo>
          <div>
            <h1>
              Viktor<span>Johansson</span>
            </h1>
            {/* <div className="underline"></div> */}
            <h4>Student tuc yrkeshögskola</h4>
            <p>
              Pluggar för tillfället till systemutvecklare på tuc yrkeshögskola.
              <br />
            </p>
            <p>
            Mina erfarenheter:
            <br/>
            - Goda kunskaper inom HTML CSS
            <br />
            - Javascript
            <br />
            - C# .net och Blazor
            <br />
            - PHP
            </p>
            <p>
              Söker även arbete inom Webbutveckling
              <br />
              Vill ni kontakta mig om en projekt idè eller liknade
              <br />
              Så kan ni klicka på knappen nedanför:)
            </p>
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </HeroInfo>
        <Image fluid={fluid} className="hero-img" />
      </ArticleWrapper>
    </HeroWrapper>
  )
}
export default Hero
