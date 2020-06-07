import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Menu from '../components/menu'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

const Blog=({data})=> {
    return (
        <Layout>
        <Menu/>
        <SEO title="Blogs" />
        <div>
                <h1>Blogs</h1>
                <hr/>
                {data.allMarkdownRemark.edges.map(post=>(
                    <div>
                        <h5>{post.node.frontmatter.title}</h5>
                        <small>Posted {post.node.frontmatter.date}</small>
                        <br/>
                        <Link to={post.node.frontmatter.path}>Read</Link>
                        <hr/>
                    </div>
                ))}
                
                
       </div>
      </Layout>
        
    )
}
export const pageQuery=graphql`
query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
  
`
export default Blog