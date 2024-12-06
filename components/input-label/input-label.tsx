import React from "react"
import cn from "classnames"

export type InputLabelElement = React.ElementRef<"label">

export interface InputLabelProps
  extends React.ComponentPropsWithoutRef<"label"> { }

const InputLabel = React.forwardRef<InputLabelElement, InputLabelProps>(
  (props, forwardedRef) => {
    const { className, ...labelProps } = props

    return (
      <label
        {...labelProps}
        className={cn("kb-input-label", className)}
        ref={forwardedRef}
      />
    )
  }
)

export { InputLabel }
