module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Anson LowZF's Blog`,
    author: `Anson LowZF`,
    description: `Document my learning to be a digital marketer & web developer`,
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
