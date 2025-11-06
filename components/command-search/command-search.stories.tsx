import type { Meta, StoryFn } from "@storybook/react"
import * as React from "react"
import { CommandSearch } from "./command-search"

import "./command-search.css"
import "../text-field/text-field.css"

const meta: Meta<typeof CommandSearch> = {
  title: "Components/CommandSearch",
  component: CommandSearch,
}

type CommandSearchStoryFn = StoryFn<typeof CommandSearch>

export const Default: CommandSearchStoryFn = () => {
  const [value, setValue] = React.useState("")

  return (
    <>
      <div className="box">
        <h5>Default</h5>
        <CommandSearch
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export const WithCustomPlaceholder: CommandSearchStoryFn = () => {
  const [value, setValue] = React.useState("")

  return (
    <>
      <div className="box">
        <h5>Custom Placeholder</h5>
        <CommandSearch
          placeholder="Search commands..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default meta
