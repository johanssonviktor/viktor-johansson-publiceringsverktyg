import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Section, SectionCenter, SectionService } from "../elements/SectionElements"
const Services = () => {
  return (
    <Section>
      <Title title="Tjänster" />
      <SectionCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <SectionService key={id}>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </SectionService>
          )
        })}
      </SectionCenter>
    </Section>
  )
}

export default Services
