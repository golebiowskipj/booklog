module.exports = {
  siteMetadata: {
    title: `Booklog blog`,
    description: `This is a side project, which is a Gatsby + MDX blog where I keep track of some books that I read`,
    author: `Piotr Gołębiowski`,
    url: 'localhost:8000',
    image: '/images/logo.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
