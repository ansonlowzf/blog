import React from "react"
import { TagCount } from "./Tag"
import { Styled } from "theme-ui"
import _ from "lodash"

const TagsBar = ({ tagsGroup, activeTag }) => {
  return (
    <Styled.p>
      <span>All Tags: </span>
      {_.orderBy(
        tagsGroup.group,
        ["totalCount", "fieldValue"],
        ["desc", "desc"]
      ).map((tag, i) => (
        <TagCount
          key={i}
          tag={tag}
          isLast={i < tagsGroup.group.length - 1}
          isActive={tag.fieldValue === activeTag}
        />
      ))}
    </Styled.p>
  )
}
export default TagsBar
