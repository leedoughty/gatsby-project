module.exports = {
  siteMetadata: {
    title: `cool ascii art`,
    siteUrl: 'leedoughty.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ascii`,
        path: `${__dirname}/src/ascii`,
      }
    },
    {
      resolve: "gatsby-transformer-remark"
    }
  ]
}
