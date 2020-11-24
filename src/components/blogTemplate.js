import React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import Img from "gatsby-image"
import styles from "blog.module.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="text-2xl p-3">{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <Img fluid={featuredImgFluid} style={{ maxHeight: 350}} className="m-5" />
        <div
          className="blog-post-content {styles}"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`