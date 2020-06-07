import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { graphql } from "gatsby"
import Link from "gatsby-link"

const Post = ({ data }) => {
  return (
    <Layout>
      <Menu />
      <SEO title="Posts" />
      <div>
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <small>Posted by {data.markdownRemark.frontmatter.author} on {data.markdownRemark.frontmatter.date}</small>
        <hr/>
        <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
        <hr/>
        <Link to={"/blog"}>Go Back!</Link>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        path
        title
      }
    }
  }
`
export default Post
