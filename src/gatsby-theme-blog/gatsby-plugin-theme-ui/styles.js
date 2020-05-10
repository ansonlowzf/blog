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
  blockquote: {
    color: `inherit`,
    borderLeft: `calc(0.2vw + 2px) solid orange`,
    padding: `0.1% 6% 0.1% 4%`,
    margin: `1.6em 1vw`,
    fontSize: `0.92em`,
    lineHeight: `1.4em`,
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`,
    },
  },
}
