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
          name: 'markdown-pages',
          path: `${__dirname}/src/pages/blog`,
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-netlify-cms',
      'gatsby-remark-images'

        
      
    ]

}