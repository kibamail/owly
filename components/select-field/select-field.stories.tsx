import React from "react"
import type { Meta, StoryFn } from "@storybook/react"

import * as Select from "./select-field"
import {
  Eye,
  Mail,
  NavArrowRight,
  Plus,
  UserBadgeCheck,
  XmarkCircle,
} from "iconoir-react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
}

type SelectStoryFn = StoryFn<typeof Select>

export const Types: SelectStoryFn = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="box">
        <h5>Default - A basic select</h5>

        <div className="">
          <Select.Root defaultValue="apple">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
              <Select.Item value="grape" disabled>
                Grape
              </Select.Item>
              <Select.Separator />

              <Select.Item value="workspace-1">Workspace 1</Select.Item>
              <Select.Item value="workspace-2">workspace-2</Select.Item>
              <Select.Item value="workspace-3">workspace-3</Select.Item>
              <Select.Item value="workspace-4">workspace-4</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>No default value - Placeholder</h5>

        <div className="">
          <Select.Root name="baba-lola">
            <Select.Trigger placeholder="Select a fruit" />
            <Select.Content>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>With Label</h5>

        <div className="">
          <Select.Root>
            <Select.Label htmlFor="your-favourite-fruit">
              Your favourite fruit
            </Select.Label>
            <Select.Trigger
              aria-labelledby="your-favourite-fruit"
              id="your-favourite-fruit"
              placeholder="Select a fruit"
            />
            <Select.Content>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>With Error message</h5>

        <div className="">
          <Select.Root>
            <Select.Trigger placeholder="Select a fruit" />
            <Select.Content>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Content>

            <Select.Error>
              We failed to save your changes. Please try again.
            </Select.Error>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>With Hint / Helper message</h5>

        <div className="">
          <Select.Root defaultValue="carrot">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Content>

            <Select.Hint>You can only select one option</Select.Hint>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>With custom icons and content in select items</h5>

        <div className="">
          <Select.Root defaultValue="carrot">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="orange" className="flex items-center">
                <UserBadgeCheck />
                Orange
              </Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>

              <Select.Separator />
              <div className="sticky bottom-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-8">
                    <Plus />
                    Create a new option
                  </div>

                  <NavArrowRight />
                </div>
              </div>
            </Select.Content>

            <Select.Hint>You can only select one option</Select.Hint>
          </Select.Root>
        </div>
      </div>

      <div className="box">
        <h5>Disabled</h5>

        <div className="">
          <Select.Root defaultValue="orange" disabled>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="orange" className="flex items-center">
                <UserBadgeCheck />
                Orange
              </Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="carrot">Carrot</Select.Item>
            </Select.Content>

            <Select.Hint>You can only select one option</Select.Hint>
          </Select.Root>
        </div>
      </div>
    </div>
  )
}

export const Sizes: SelectStoryFn = () => {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="box">
        <h5>Regular Size (default)</h5>
        <Select.Root defaultValue="apple">
          <Select.Label>Choose a fruit</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="box">
        <h5>Small Size</h5>
        <Select.Root size="sm" defaultValue="apple">
          <Select.Label>Choose a fruit</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="box">
        <h5>Regular with Hint</h5>
        <Select.Root defaultValue="carrot">
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Content>
          <Select.Hint>You can only select one option</Select.Hint>
        </Select.Root>
      </div>

      <div className="box">
        <h5>Small with Hint</h5>
        <Select.Root size="sm" defaultValue="carrot">
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Content>
          <Select.Hint>You can only select one option</Select.Hint>
        </Select.Root>
      </div>
    </div>
  )
}

export default meta
