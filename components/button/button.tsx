import React from "react";
import cn from "classnames";
import { Slot } from "@radix-ui/react-slot";
import {
  getResponsiveClassNamesForProp,
  getVariableClassNamesForProp,
} from "../../utils/props";
import type { ButtonProps } from "./button.props";

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  function BaseButton(props, ref) {
    const {
      asChild,
      className: classNameProp,
      variant,
      size,
      width,
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
    const { className: widthClassName } = getResponsiveClassNamesForProp<
      ButtonProps["width"]
    >("width", width, "fit");

    const Component = asChild ? Slot : "button";

    return (
      <Component
        data-kb-disabled={disabled}
        {...rest}
        ref={ref}
        className={cn(
          "kb-button",
          variantClassName,
          widthClassName,
          className,
          classNameProp,
        )}
        disabled={disabled}
      />
    );
  },
);
