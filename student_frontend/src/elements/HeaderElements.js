import styled from "styled-components"

export const HeroWrapper = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  /* background: var(--clr-primary-10); */
  background: var(--clr-primary-11);
  position: relative;

  .hero-img {
    display: none;
  }

  @media screen and (min-width: 992px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      /* background: var(--clr-white); */
    }

    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
`

export const ArticleWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const HeroInfo = styled.article`
  /* background: var(--clr-primary-10); */
  /* background: ; */
  color: whitesmoke;

  span {
    color: yellowgreen;
  }
  h4 {
    color: #b1a296;
  }

  p {
    color: white;
  }

  h1 {
    font-size: 2rem;
  }

  .social-link {
    color: white;

    &:hover {
      color: yellowgreen;
    }
  }

  .hero-icons {
    justify-items: flex-start;
  }

  .btn {
    margin-top: 1.25rem;
    background: #b1a296;
    color: white;

    &:hover {
      /* color: darkgreen; */
      background: #8c7b6e;
    }
  }

  .hero .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  @media screen and (min-width: 992px) {
    h4 {
      font-size: 0.85rem;
    }

    h1 {
      font-size: 3rem;
    }

    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
  }

  @media screen and (min-width: 1170px) {
    .hero h4 {
      font-size: 1rem;
    }

    .hero-info {
      grid-column: 1 / span 8;
    }

    .hero h4 {
      line-height: 1;
    }
  }
`
