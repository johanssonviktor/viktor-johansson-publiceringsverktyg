import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactPage, ContactForm, FormGroup, SubmitButton } from "../elements/ContactElements"

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <ContactPage>
        <ContactForm>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/xpzoppaj" method="POST">
            <FormGroup>
              <input
                type="text"
                placeholder="namn"
                name="name"
                // className="form-control"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
                // className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
                // className="form-control"
              ></textarea>
            </FormGroup>
            <SubmitButton type="submit">
              Kontakta mig
            </SubmitButton>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default contact
