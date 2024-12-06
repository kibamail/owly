import React from "react";

import type { Meta, StoryFn } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
};

type HeadingStoryFn = StoryFn<typeof Heading>;

export const Sizes: HeadingStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Size - Extra Small</h5>

        <div>
          <Heading size="xs">
            The quick brown fox jumps over the lazy dog
          </Heading>
        </div>
      </div>
      <div className="box">
        <h5>Size - Small</h5>

        <div>
          <Heading size="sm">
            The quick brown fox jumps over the lazy dog
          </Heading>
        </div>
      </div>

      <div className="box">
        <h5>Size - Medium</h5>

        <div>
          <Heading size="md">
            The quick brown fox jumps over the lazy dog
          </Heading>
        </div>
      </div>

      <div className="box">
        <h5>Size - Large</h5>

        <div>
          <Heading size="lg">
            The quick brown fox jumps over the lazy dog
          </Heading>
        </div>
      </div>

      <div className="box">
        <h5>Size - Extra large</h5>

        <div>
          <Heading size="xl">
            The quick brown fox jumps over the lazy dog
          </Heading>
        </div>
      </div>
    </>
  );
};

export default meta;
