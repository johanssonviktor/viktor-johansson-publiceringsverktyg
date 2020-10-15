import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { SectionJobs, JobsCenter, BtnContainer, JobButton, JobInfo, JobDesc } from "../elements/SectionElements"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <SectionJobs>
      <Title title="erfarenhet" />
      <JobsCenter>
        {/* btn container */}
        <BtnContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </JobButton>
            )
          })}
        </BtnContainer>
        {/* job info */}
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p>{date}</p>
          {desc.map(item => {
            return (
              <JobDesc key={item.id}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </JobDesc>
            )
          })}
        </JobInfo>
      </JobsCenter>
      <Link to="/about" className="btn center-btn">
        Mitt CV
      </Link>
    </SectionJobs>
  )
}

export default Jobs
