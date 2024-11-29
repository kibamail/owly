import React from 'react'
import { AtSignCircle, CheckCircle, CheckSquare, Eye, InfoCircle, WarningCircle } from 'iconoir-react'
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

type Story = StoryObj<typeof Badge>;
type BadgeStoryFn = StoryFn<typeof Badge>

export const Variants: BadgeStoryFn = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Badge variant='info'>
        <Eye />
        Under review
      </Badge>
      <Badge variant='success'>
        <CheckCircle />
        Paid
      </Badge>
      <Badge variant='error'>
        <WarningCircle />
        Payment failed.
      </Badge>
      <Badge variant='warning'>
        <AtSignCircle />
        Email credits expired
      </Badge>
      <Badge variant='neutral'>
        <InfoCircle />
        Arrived 93 days ago
      </Badge>
    </div>
  )
}

export const Sizes: BadgeStoryFn = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Badge size='sm' variant='warning'>
        <CheckCircle />
        Awaiting payment
      </Badge>
      <Badge size='md' variant='info'>
        <CheckSquare />
        Finished processing</Badge>
    </div>
  )
}

export default meta;
//kb-r-size-md md:kb-r-size-sm lg:kb-r-size-md xl:kb-r-size-sm sm:kb-r-size-md 2xl:kb-r-size-md :kb-r-size-sm
