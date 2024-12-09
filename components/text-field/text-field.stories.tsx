import React from "react"
import type { Meta, StoryFn } from "@storybook/react"

import * as TextField from "./text-field"
import { Eye, Mail, XmarkCircle } from "iconoir-react"

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
}

type TextFieldStoryFn = StoryFn<typeof TextField>

export const Types: TextFieldStoryFn = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="box">
        <h5>Default - No icon slots</h5>

        <div className="">
          <TextField.Root placeholder="Enter your work email" type="email" />
        </div>
      </div>
      <div className="box">
        <h5>Slot left</h5>

        <div className="">
          <TextField.Root placeholder="Enter your work email" type="email">
            <TextField.Label>Email address</TextField.Label>
            <TextField.Slot side="left">
              <Mail />
            </TextField.Slot>
          </TextField.Root>
        </div>
      </div>

      <div className="box">
        <h5>Slot right</h5>

        <div className="">
          <TextField.Root placeholder="Enter a strong password" type="password">
            <TextField.Slot side="right">
              <Eye />
            </TextField.Slot>
          </TextField.Root>
        </div>
      </div>

      <div className="box">
        <h5>With hint text</h5>

        <div className="">
          <TextField.Root placeholder="Enter a strong password" type="password">
            <TextField.Slot side="right">
              <Eye />
            </TextField.Slot>
            <TextField.Hint>Must be at least 8 characters long</TextField.Hint>
          </TextField.Root>
        </div>
      </div>

      <div className="box">
        <h5>With error text</h5>

        <div className="">
          <TextField.Root placeholder="Enter a strong password" type="password">
            <TextField.Slot side="right">
              <Eye />
            </TextField.Slot>
            <TextField.Error>
              Must be at least 8 characters long
            </TextField.Error>
          </TextField.Root>
        </div>
      </div>

      <div className="box">
        <h5>With both error and hint text</h5>

        <div className="">
          <TextField.Root placeholder="Enter a strong password" type="password">
            <TextField.Slot side="right">
              <Eye />
            </TextField.Slot>
            <TextField.Error>Your password is incorrect.</TextField.Error>
            <TextField.Hint>
              It must be at least 8 characters long
            </TextField.Hint>
          </TextField.Root>
        </div>
      </div>

      <div className="box">
        <h5>With multiple hints</h5>

        <div className="">
          <TextField.Root placeholder="Enter a strong password" type="password">
            <TextField.Slot side="right">
              <Eye />
            </TextField.Slot>
            <TextField.Error>Your password is incorrect.</TextField.Error>
            <TextField.Hint>
              <TextField.HintIcon>
                <XmarkCircle />
              </TextField.HintIcon>
              It must be at least 8 characters long
            </TextField.Hint>
            <TextField.Hint>
              <TextField.HintIcon>
                <XmarkCircle />
              </TextField.HintIcon>
              Must contain at least one capital letter
            </TextField.Hint>
            <TextField.Hint>
              <TextField.HintIcon>
                <XmarkCircle />
              </TextField.HintIcon>
              Must have a special character
            </TextField.Hint>
            <TextField.Hint>
              <TextField.HintIcon>
                <XmarkCircle />
              </TextField.HintIcon>
              Must have a number
            </TextField.Hint>
          </TextField.Root>
        </div>
      </div>
    </div>
  )
}

export default meta
