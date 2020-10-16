import styled from "styled-components"

// Syle componets for the sections

export const Section = styled.section`
  padding: 5rem 0;
  background: #e4e3e685;
`

export const SectionJobs = styled.section`
  padding: 5rem 0;

  .btn {
      background: #b1a296;
      color: white;

      &:hover {
          background: #8c7b6e;
      }
  }
`

export const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    width: 95vw;

    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export const UnderLine = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
`

export const SectionService = styled.article`
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
`

export const JobsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const JobButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  &:hover {
    color: var(--clr-primary-5);
    background: #8c7b6e;
    box-shadow: 0 2px var(--clr-primary-5);
  }

  /* .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  } */

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    &:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
`

export const JobInfo = styled.article`
  /* min-height: 420px; */

  h3 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }

  p {
    letter-spacing: var(--spacing);
  }
`

export const JobDesc = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
`

export const SectionProjects = styled.section`
  padding: 5rem 0;
  background: #e4e3e685;

  .btn {
    background: #b1a296;
    color: white;

    &:hover {
        background: #8c7b6e;
    }
  }
`

export const LatestArticles = styled.section`
  padding: 5rem 0;

  .btn {
      background: #b1a296;
      color: white;

      &:hover {
          background: #8c7b6e;
      }
  }
`
export const BlogsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

