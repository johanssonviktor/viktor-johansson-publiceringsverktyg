import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { LatestArticles, BlogsCenter } from "../elements/SectionElements"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <LatestArticles>
      <Title title={title} />
      <BlogsCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </BlogsCenter>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Alla artiklar
        </Link>
      )}
    </LatestArticles>
  )
}
export default Blogs
