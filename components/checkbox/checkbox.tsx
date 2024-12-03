import React from "react"
import cn from "classnames"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import type { CheckboxElement, CheckboxProps } from "./checkbox.props"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import {
  getResponsiveClassNamesForProp,
  getVariableClassNamesForProp,
} from "../../utils/props"

import { CheckIcon, MinusIcon } from "./checkbox-icons"

export const Check = React.forwardRef<CheckboxElement, CheckboxProps>(
  (props, forwardedRef) => {
    const {
      checked,
      defaultChecked,
      onCheckedChange,
      className,
      variant,
      size,
      ...checkboxProps
    } = props
    const [state, setState] = useControllableState({
      defaultProp: defaultChecked,
      prop: checked,
      onChange: onCheckedChange,
    })
    const { className: variantClassName } = getVariableClassNamesForProp<
      CheckboxProps["variant"]
    >("variant", variant, "default")

    const { className: sizeClassName } = getResponsiveClassNamesForProp<
      CheckboxProps["size"]
    >("size", size, "md")

    return (
      <CheckboxPrimitive.Root
        {...checkboxProps}
        ref={forwardedRef}
        className={cn(
          "kb-reset",
          "kb-checkbox-root",
          variantClassName,
          sizeClassName,
          className
        )}
        defaultChecked={defaultChecked}
        checked={state}
        asChild={false}
        onCheckedChange={setState}
      >
        <CheckboxPrimitive.Indicator className="kb-checkbox-indicator" asChild>
          {state === "indeterminate" ? <MinusIcon /> : <CheckIcon />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
