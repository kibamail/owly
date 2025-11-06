import type { Meta, StoryFn } from "@storybook/react"
import * as React from "react"
import { LetterAvatar } from "./letter-avatar"

import "./letter-avatar.css"

const meta: Meta<typeof LetterAvatar> = {
  title: "Components/LetterAvatar",
  component: LetterAvatar,
}

type LetterAvatarStoryFn = StoryFn<typeof LetterAvatar>

export const Sizes: LetterAvatarStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Small</h5>
        <LetterAvatar size="small" color="info">
          John Doe
        </LetterAvatar>
      </div>
      <div className="box">
        <h5>Medium (default)</h5>
        <LetterAvatar size="medium" color="info">
          John Doe
        </LetterAvatar>
      </div>
    </>
  )
}

export const Colors: LetterAvatarStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Info</h5>
        <LetterAvatar color="info">John</LetterAvatar>
      </div>
      <div className="box">
        <h5>Notice</h5>
        <LetterAvatar color="notice">Sarah</LetterAvatar>
      </div>
      <div className="box">
        <h5>Negative</h5>
        <LetterAvatar color="negative">Mike</LetterAvatar>
      </div>
      <div className="box">
        <h5>Positive</h5>
        <LetterAvatar color="positive">Emma</LetterAvatar>
      </div>
      <div className="box">
        <h5>Highlight</h5>
        <LetterAvatar color="highlight">Alex</LetterAvatar>
      </div>
    </>
  )
}

export default meta
