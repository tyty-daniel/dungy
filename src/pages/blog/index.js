import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/post-link"
import Layout from "../../components/layout"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink className="border-b border-blue-300 p-2 text-2xl" key={edge.node.id} post={edge.node}  />)

  return <div>
    <Layout>
      {Posts}
    </Layout>
    </div>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`