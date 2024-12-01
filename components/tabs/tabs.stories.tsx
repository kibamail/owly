import React from "react";
import {
  SendDiagonal,
  CheckCircle,
  XmarkCircle,
  BadgeCheck,
  PathArrow,
} from "iconoir-react";
import type { Meta, StoryFn } from "@storybook/react";

import { Tabs } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type TabsStoryFn = StoryFn<typeof Tabs>;

export const Variants: TabsStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Primary</h5>
        <div>
          <Tabs />
        </div>
      </div>
    </>
  );
};
