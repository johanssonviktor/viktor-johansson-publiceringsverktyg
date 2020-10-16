import styled from "styled-components"

// Style components for the Navbar

export const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  @media screen and (min-width: 992px) {
    /* background: transparent; */
  }
`

export const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: flex-start;
  }

  .nav-links {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: flex-end;

      li {
        margin-right: 2rem;
      }

      a {
        text-transform: capitalize;
        color: var(--clr-grey-1);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;

        &:hover {
          color: var(--clr-primary-5);
          /* box-shadow: 0px 2px var(--clr-primary-5); */
        }
      }
    }
  }
`

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-bottom: 0.375rem;
  }
`

export const ToggleBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
