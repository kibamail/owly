import * as React from "react"
import cn from "classnames"
import {
  getVariableClassNamesForProp,
  getResponsiveClassNamesForProp,
} from "../utils/props.js"

type LetterAvatarElement = React.ElementRef<"div">

export interface LetterAvatarProps
  extends React.ComponentPropsWithoutRef<"div"> {
  size?: "small" | "medium"
  color?: "notice" | "negative" | "highlight" | "positive" | "info"
}

export const LetterAvatar = React.forwardRef<
  LetterAvatarElement,
  LetterAvatarProps
>(function LetterAvatar(props, ref) {
  const { children, className, size = "medium", color, ...divProps } = props

  const { className: sizeClassName } = getResponsiveClassNamesForProp<
    LetterAvatarProps["size"]
  >("size", size, "medium")

  const { className: colorClassName } = getVariableClassNamesForProp<
    LetterAvatarProps["color"]
  >("color", color)

  // Extract first character from children
  const getFirstChar = () => {
    if (typeof children === "string") {
      return children.charAt(0).toUpperCase()
    }
    return ""
  }

  return (
    <div
      {...divProps}
      ref={ref}
      className={cn(
        "kb-letter-avatar",
        sizeClassName,
        colorClassName,
        className
      )}
    >
      {getFirstChar()}
    </div>
  )
})
