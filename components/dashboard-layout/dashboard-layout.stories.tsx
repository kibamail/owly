import type { Meta, StoryFn } from "@storybook/react"
import * as React from "react"
import * as DashboardLayout from "./dashboard-layout"

import "./dashboard-layout.css"

const meta: Meta<typeof DashboardLayout> = {
  title: "Components/DashboardLayout",
}

type DashboardLayoutStoryFn = StoryFn<typeof DashboardLayout>

export const Default: DashboardLayoutStoryFn = () => {
  return (
    <>
      <DashboardLayout.Root>
        <DashboardLayout.Sidebar />
        <DashboardLayout.ContentShell />
      </DashboardLayout.Root>
    </>
  )
}

export default meta
