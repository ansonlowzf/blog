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
    title: `Anson LowZF`,
    author: `Anson LowZF`,
    description: `Blog and document my milestone, timeline, and how I learn to be a digital marketer & web developer`,
    siteUrl: `https://ansonlowzf.netlify.com`,
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
