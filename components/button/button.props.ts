import type { ComponentProps } from "react";
import type { ResponsiveProp, SlottableComponentProp } from "../../utils/props";

export const variants = [
  "primary",
  "secondary",
  "destructive",
  "tertiary",
] as const;

export const sizes = ["lg", "md", "sm", "xs"] as const;

export const buttonPropsDefinition = {
  size: {
    default: "sm",
  },
} satisfies {
  size: {
    default: ResponsiveProp<(typeof sizes)[number]>;
  };
};

export interface ButtonProps
  extends SlottableComponentProp,
    ComponentProps<"button"> {
  variant?: (typeof variants)[number];
  size?: ResponsiveProp<(typeof sizes)[number]>;
}
