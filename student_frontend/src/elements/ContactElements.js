import styled from "styled-components"

// Style components for the Contact page

export const ContactPage = styled.section`
  background: #e4e3e685;
  min-height: calc(100vh - 5rem - 9rem);
  display: grid;
  place-items: center;
  padding: 5rem 0;
`

export const ContactForm = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;

  h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`

export const FormGroup = styled.div`
  padding: 1rem 1.5rem;

  input {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);

    &::placeholder {
      font-family: var(--ff-primary);
      color: var(--clr-grey-1);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
  }

  textarea {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);

    &::placeholder {
      font-family: var(--ff-primary);
      color: var(--clr-grey-1);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
  }
`

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  text-transform: uppercase;
  background: #b1a296;
  color: var(--clr-primary-9);
  letter-spacing: var(--spacing);
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  &:hover {
    color: var(--clr-primary-1);
    background: #8c7b6e;
  }
`
