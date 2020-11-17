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
      'gatsby-plugin-netlify-cms',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'markdown-pages',
          path: `${__dirname}/blog`,
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-remark-images',


        
      
    ]

}