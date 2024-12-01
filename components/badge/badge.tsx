import cn from "classnames";
import React, { forwardRef, type ElementRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { BadgeProps } from "./badge.props";
import {
  getResponsiveClassNamesForProp,
  getVariableClassNamesForProp,
} from "../../utils/props";

export const Badge = forwardRef<ElementRef<"span">, BadgeProps>(
  function BaseBadge(props, ref) {
    const { asChild, className: classNameProp, variant, size, ...rest } = props;
    const Container = asChild ? Slot : "span";

    const { className } = getResponsiveClassNamesForProp<BadgeProps["size"]>(
      "size",
      size,
      "md",
    );
    const { className: variantClassName } = getVariableClassNamesForProp<
      BadgeProps["variant"]
    >("variant", variant, "info");

    return (
      <Container
        {...rest}
        ref={ref}
        className={cn("kb-badge", className, variantClassName, classNameProp)}
      />
    );
  },
);

Badge.displayName = "Badge";
