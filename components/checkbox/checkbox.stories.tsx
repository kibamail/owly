import React from "react"
import {
  SendDiagonal,
  CheckCircle,
  XmarkCircle,
  BadgeCheck,
} from "iconoir-react"
import type { Meta, StoryFn } from "@storybook/react"

import { Check } from "./checkbox"

const meta = {
  title: "Components/Checkbox",
} satisfies Meta<typeof Check>

export default meta

type ButtonStoryFn = StoryFn<typeof Check>

export const Variants: ButtonStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Default - square</h5>
        <div>
          <Check />
        </div>
      </div>

      <div className="box">
        <h5>Circle</h5>
        <div>
          <Check variant="circle" />
        </div>
      </div>
    </>
  )
}

export const Sizes: ButtonStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Medium - Default</h5>
        <div>
          <Check size="md" />
        </div>
      </div>

      <div className="box">
        <h5>Medium - Circle</h5>
        <div>
          <Check size="md" />
        </div>
      </div>

      <div className="box">
        <h5>Small - Default</h5>
        <div>
          <Check size="sm" />
        </div>
      </div>

      <div className="box">
        <h5>Small - Circle</h5>
        <div>
          <Check variant="circle" size="sm" />
        </div>
      </div>
    </>
  )
}

export const State: ButtonStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Indeterminate - default</h5>
        <div>
          <Check defaultChecked="indeterminate" />
        </div>
      </div>

      <div className="box">
        <h5>Indeterminate - circle</h5>
        <div>
          <Check defaultChecked="indeterminate" variant="circle" />
        </div>
      </div>

      <div className="box">
        <h5>Checked - default</h5>
        <div>
          <Check defaultChecked={true} />
        </div>
      </div>

      <div className="box">
        <h5>Checked - circle</h5>
        <div>
          <Check variant="circle" defaultChecked={true} />
        </div>
      </div>

      <div className="box">
        <h5>Disabled - default</h5>
        <div>
          <Check disabled defaultChecked={true} />
        </div>
      </div>

      <div className="box">
        <h5>Disabled - circle</h5>
        <div>
          <Check variant="circle" disabled defaultChecked={true} />
        </div>
      </div>
    </>
  )
}
