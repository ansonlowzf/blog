import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const MyTwitter = () => {
  return (
    <a href="https://twitter.com/ansonlowzf">
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        style={{ color: `rgb(29,161,242)`, marginBottom: `1rem` }}
      />
    </a>
  )
}

export default MyTwitter
