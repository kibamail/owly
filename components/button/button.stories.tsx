import React from "react";
import {
  SendDiagonal,
  CheckCircle,
  XmarkCircle,
  BadgeCheck,
  PathArrow,
} from "iconoir-react";
import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type ButtonStoryFn = StoryFn<typeof Button>;

export const Variants: ButtonStoryFn = () => {
  return (
    <>
      <div className="box">
        <h5>Primary</h5>
        <div>
          <Button variant="primary">
            <SendDiagonal />
            Publish website
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Primary disabled</h5>
        <div>
          <Button variant="primary" disabled>
            <SendDiagonal />
            Save changes
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Secondary</h5>
        <div>
          <Button variant="secondary">
            <CheckCircle />
            Save changes
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Secondary disabled</h5>
        <div>
          <Button variant="secondary" disabled>
            <XmarkCircle />
            Cancel action
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Destructive</h5>
        <div>
          <Button variant="destructive">
            <XmarkCircle />
            Delete emails
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Destructive disabled</h5>
        <div>
          <Button variant="destructive" disabled>
            <XmarkCircle />
            Delete emails
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Tertiary</h5>
        <div>
          <Button variant="tertiary">
            <BadgeCheck />
            Clean up emails
          </Button>
        </div>
      </div>

      <div className="box">
        <h5>Tertiary disabled</h5>
        <div>
          <Button variant="tertiary" disabled>
            <BadgeCheck />
            Clean up emails
          </Button>
        </div>
      </div>
    </>
  );
};
