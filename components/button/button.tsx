import React, { forwardRef, type ElementRef } from "react";
import type { ButtonProps } from "./button.props";
import cn from "classnames";
import { Slot } from "@radix-ui/react-slot";
import {
  getResponsiveClassNamesForProp,
  getVariableClassNamesForProp,
} from "../../utils/props";

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  function BaseButton(props, ref) {
    const {
      asChild,
      className: classNameProp,
      variant,
      size,
      disabled,
      ...rest
    } = props;

    const { className } = getResponsiveClassNamesForProp<ButtonProps["size"]>(
      "size",
      size,
      "lg",
    );
    const { className: variantClassName } = getVariableClassNamesForProp<
      ButtonProps["variant"]
    >("variant", variant, "primary");

    const Component = asChild ? Slot : "button";

    return (
      <Component
        data-kb-disabled={disabled}
        {...rest}
        ref={ref}
        className={cn("kb-button", variantClassName, className, classNameProp)}
        disabled={disabled}
      />
    );
  },
);
