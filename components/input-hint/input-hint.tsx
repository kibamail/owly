import React from "react"
import cn from "classnames"
import { WarningCircleIcon } from "./input-hint-icons.js"

export type InputHintElement = React.ElementRef<"span">

export interface InputHintProps extends React.ComponentPropsWithoutRef<"span"> {
  baseId: string
}

const InputHint = React.forwardRef<InputHintElement, InputHintProps>(
  (props, forwardedRef) => {
    const { className, id, baseId, ...hintProps } = props

    const hintId = makeHintId(baseId)

    return (
      <div className={cn("kb-input-hint", className)}>
        <WarningCircleIcon aria-hidden />
        <span
          {...hintProps}
          id={id || hintId}
          className={"kb-input-hint-text"}
          ref={forwardedRef}
        />
      </div>
    )
  }
)

const InputError = React.forwardRef<InputHintElement, InputHintProps>(
  (props, forwardedRef) => {
    const { className, baseId, ...hintProps } = props

    const errorId = makeErrorId(baseId)

    return (
      <InputHint
        baseId={baseId}
        id={errorId}
        {...hintProps}
        className={cn("kb-input-hint-error", className)}
        ref={forwardedRef}
      />
    )
  }
)

function makeHintId(baseId: string) {
  return `${baseId}-hint`
}

function makeErrorId(baseId: string) {
  return `${baseId}-error`
}

export { InputHint, InputError, makeErrorId, makeHintId }
