import React from "react";
import {
  AtSignCircle,
  CheckCircle,
  CheckSquare,
  Eye,
  InfoCircle,
  WarningCircle,
} from "iconoir-react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

type TextStoryFn = StoryFn<typeof Text>;

export const Sizes: TextStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Size - Extra Small</h5>

        <div>
          <Text size="xs">The quick brown fox jumps over the lazy dog</Text>
        </div>
      </div>
      <div className="box">
        <h5>Size - Small</h5>

        <div>
          <Text size="sm">The quick brown fox jumps over the lazy dog</Text>
        </div>
      </div>

      <div className="box">
        <h5>Size - Medium</h5>

        <div>
          <Text size="md">The quick brown fox jumps over the lazy dog</Text>
        </div>
      </div>

      <div className="box">
        <h5>Size - Large</h5>

        <div>
          <Text size="lg">The quick brown fox jumps over the lazy dog</Text>
        </div>
      </div>

      <div className="box">
        <h5>Size - Extra large</h5>

        <div>
          <Text size="xl">The quick brown fox jumps over the lazy dog</Text>
        </div>
      </div>
    </>
  );
};

export default meta;
