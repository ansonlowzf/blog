import React from "react"
import { Styled, css } from "theme-ui"
import _ from "lodash"
import { Link } from "gatsby"

export const TagCount = ({ tag, isLast, isActive }) => (
  <>
    <Styled.a
      as={Link}
      css={css({
        fontWeight: isActive ? "bold" : "normal",
      })}
      to={`/tags/${_.kebabCase(tag.fieldValue)}`}
    >
      #{tag.fieldValue} ({tag.totalCount})
    </Styled.a>
    {isLast && ", "}
  </>
)

export const Tag = ({ tag, isLast }) => (
  <>
    <Styled.a as={Link} to={`/tags/${_.kebabCase(tag)}`}>
      #{tag}
    </Styled.a>
    {isLast && ", "}
  </>
)
