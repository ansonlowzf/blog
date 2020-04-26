module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-112015406-4`,
        head: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Anson LowZF Blog`,
    author: `Anson LowZF`,
    description: `A self taught developer learning to be a front-end developer, I document my learning experience in this blog`,
    siteUrl: `https://ansonlowzf.com`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ansonlowzf`,
      },
      {
        name: `github`,
        url: `https://github.com/ansonlowzf`,
      },
      {
        name: `Proudly hosted on Netlify`,
        url: `https://www.netlify.com/`,
      },
    ],
  },
}
