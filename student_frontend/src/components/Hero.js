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

// const Hero = () => {
//   const {
//     file: {
//       childImageSharp: { fluid },
//     },
//   } = useStaticQuery(query)

//   // console.log(data)

//   return (
//     <header className="hero">
//       <div className="section-center hero-center">
//         <article className="hero-info">
//           <div>
//             <h1>Viktor Johansson</h1>
//             <div className="underline"></div>
//             <h4>Student tuc yrkeshögskola</h4>
//             -  I’m currently working on my own Portfolio site
//             <br />
//             - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
//             <br />
//             - 🤔 I’m looking for help with anything frontend :)
//             <br />
//             - 💬 Ask me about Rhodesian Ridgebacks
//             <br />
//             - 😄 Pronouns: Inquisitive, break the mold.. <br />- 💜{" "}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"
//             >
//               Strapi
//             </a>
//             ,{" "}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://reactjs.org/docs/getting-started.html"
//             >
//               React
//             </a>
//             ,{" "}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.gatsbyjs.org/docs/"
//             >
//               Gatsby
//             </a>{" "}
//             ,{" "}
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://styled-components.com/docs"
//             >
//               Styled Components
//             </a>
//             <br />
//             - ⚡ Fun fact: I used to fly planes
//             <br />
//             - 📫 How to reach me: use the link below :)
//             <br />
//             <Link to="/contact" className="btn">
//               kontakta mig
//             </Link>
//             <SocialLinks />
//           </div>
//         </article>
//         <Image fluid={fluid} className="hero-img" />
//       </div>
//     </header>
//   )
// }

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
