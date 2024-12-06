import { type TabsProps } from "./tabs-primitive.js";
import type { ResponsiveProp } from "../utils/props.js";

export const widths = ["fit", "full"] as const;

export interface TabsRootProps extends TabsProps {
  width?: ResponsiveProp<(typeof widths)[number]>;
}
