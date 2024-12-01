import { type TabsProps } from "./tabs-primitive";
import type { ResponsiveProp } from "../../utils/props";

export const widths = ["fit", "full"] as const;

export interface TabsRootProps extends TabsProps {
  width?: ResponsiveProp<(typeof widths)[number]>;
}
