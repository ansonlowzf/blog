import defaultThemeStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"

export default {
  ...defaultThemeStyles,
  img: {
    boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
  },
  a: {
    color: `primary`,
    textDecoration: `none`,

    ":hover, :focus": {
      color: `orange`,
    },
  },
}
