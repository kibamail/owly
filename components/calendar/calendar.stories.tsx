import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { Calendar } from "./calendar";

const meta = {
 title: "Components/Calendar",
} satisfies Meta<typeof Calendar>;

export default meta;

type ButtonStoryFn = StoryFn<typeof Calendar>;

export const Variants: ButtonStoryFn = () => {
 return (
  <>
   <div className="box">
    <h5>Default - Day Picker</h5>
    <div>
     <Calendar datePickerProps={{ dates: { minDate: new Date() } }} />
    </div>
   </div>
  </>
 );
};
