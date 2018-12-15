module.exports = {
  siteMetadata: {
    title: 'Minneapolis Ice Rinks',
    description:
      'Find a list of the local Minneapolis ice rinks w/ their current open or closed status',
    author: '@steveeff',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'minneapolis-ice-rinks',
        short_name: 'minneapolis-ice-rinks',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '12qYKp4yMUzVEblNUUQ64vbuXQ38aQ3xNhtQwqIxoH_s',
        worksheetTitle: 'IceRinkStatus',
        credentials: require('./api-credentials.json'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
