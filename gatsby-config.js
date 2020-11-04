/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'dungy',
    description:
      'homosexual weeb ramblings.',
  },
  /* Your site config here */
  plugins: 
    [
      'gatsby-plugin-postcss',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'blog',
          path: `${__dirname}/src/pages/blog`,
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-remark-images',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1000,
          
          }
        }
      }
    ]

}