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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AnsonwLowZF Blog`,
        short_name: `Anson LowZF Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#66E0FF`,
        display: `standalone`,
        icon: `content/assets/anson-blog-logo.png`,
        theme_color_in_head: false,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Anson LowZF Blog`,
    author: `Anson LowZF`,
    description: `A self taught front-end developer documenting and sharing his learning process`,
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
