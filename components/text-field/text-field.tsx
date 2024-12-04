import React, { type ComponentPropsWithoutRef } from "react"
import cn from "classnames"
type TextFieldElement = React.ElementRef<"input">
import { composeRefs } from "@radix-ui/react-compose-refs"
import { createContext } from "@radix-ui/react-context"
import { getVariableClassNamesForProp } from "../../utils/props"
import { useId } from "@radix-ui/react-id"

import {
  type InputLabelElement,
  type InputLabelProps,
  InputLabel,
} from "../input-label"

import {
  InputError,
  InputHint,
  type InputHintElement,
  type InputHintProps,
  makeErrorId,
  makeHintId,
} from "../input-hint"

const TEXT_FIELD_NAME = "TextField"
const [TextFieldProvider, useTextFieldContext] = createContext<{
  baseId: string
}>(TEXT_FIELD_NAME)

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {}

const TextFieldRoot = React.forwardRef<TextFieldElement, TextFieldProps>(
  (props, forwardedRef) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const { className, children, ...inputProps } = props

    const baseId = useId()
    const hintId = makeHintId(baseId)
    const errorId = makeErrorId(baseId)

    function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
      const target = event.target as HTMLElement

      // If pointer event happened on an interactive element, do nothing.
      if (target.closest("input, button, a")) {
        return
      }

      const input = inputRef.current

      if (!input) {
        return
      }

      const endOfInputTextPosition = input.value.length

      requestAnimationFrame(function () {
        try {
          input.setSelectionRange(
            endOfInputTextPosition,
            endOfInputTextPosition
          )
        } catch (error) {}
        input.focus()
      })
    }

    const allChildren = React.Children.toArray(children)

    const slots = allChildren.filter(
      (child) =>
        React.isValidElement(child) &&
        child.type !== TextFieldHint &&
        child.type !== TextFieldError &&
        child.type !== TextFieldLabel
    )

    const isInvalid = allChildren.some(
      (child) => React.isValidElement(child) && child.type === TextFieldError
    )

    const hints = allChildren.filter(
      (child) =>
        React.isValidElement(child) &&
        (child.type === TextFieldHint || child.type === TextFieldError)
    )

    const label = allChildren.filter(
      (child) => React.isValidElement(child) && child.type === TextFieldLabel
    )

    return (
      <TextFieldProvider baseId={baseId}>
        <div
          data-invalid={isInvalid}
          onPointerDown={onPointerDown}
          className={cn("kb-text-field-root", className)}
        >
          {label}
          <div className={cn("kb-text-field-content")}>
            <input
              spellCheck={false}
              aria-invalid={isInvalid}
              data-invalid={isInvalid}
              aria-describedby={`${errorId} ${hintId}`}
              {...inputProps}
              ref={composeRefs(inputRef, forwardedRef)}
              className="kb-reset kb-text-field-input"
            />
            {slots}
          </div>
          {hints}
        </div>
      </TextFieldProvider>
    )
  }
)

TextFieldRoot.displayName = "TextField.Root"

export const sides = ["left", "right"] as const

type TextFieldSlotElement = React.ElementRef<"div">

export interface TextFieldSlotProps extends ComponentPropsWithoutRef<"div"> {
  side: (typeof sides)[number]
}

const TextFieldSlot = React.forwardRef<
  TextFieldSlotElement,
  TextFieldSlotProps
>((props, forwardedRef) => {
  const { side, ...slotProps } = props
  const { className: sideClassName } = getVariableClassNamesForProp<
    TextFieldSlotProps["side"]
  >("side", props.side)

  return (
    <div
      data-side={side}
      {...slotProps}
      ref={forwardedRef}
      className={cn("kb-text-field-slot", sideClassName)}
    />
  )
})

TextFieldSlot.displayName = "TextField.Slot"

const TEXT_FIELD_HINT_NAME = "TextField.Hint"

const TextFieldHint = React.forwardRef<
  InputHintElement,
  Omit<InputHintProps, "baseId">
>((props, forwardedRef) => {
  const { baseId } = useTextFieldContext(TEXT_FIELD_HINT_NAME)

  return <InputHint baseId={baseId} {...props} ref={forwardedRef} />
})

TextFieldHint.displayName = "TextField.Hint"

const TEXT_FIELD_ERROR_NAME = "TextField.Error"

const TextFieldError = React.forwardRef<
  InputHintElement,
  Omit<InputHintProps, "baseId">
>((props, forwardedRef) => {
  const { baseId } = useTextFieldContext(TEXT_FIELD_ERROR_NAME)

  return <InputError baseId={baseId} {...props} ref={forwardedRef} />
})

TextFieldError.displayName = "TextField.Error"

const TextFieldLabel = React.forwardRef<InputLabelElement, InputLabelProps>(
  (props, forwardedRef) => {
    return <InputLabel {...props} ref={forwardedRef} />
  }
)

TextFieldLabel.displayName = "TextField.Label"

export {
  TextFieldRoot as Root,
  TextFieldSlot as Slot,
  TextFieldHint as Hint,
  TextFieldError as Error,
  TextFieldLabel as Label,
}
