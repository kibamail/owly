import React, { type ComponentPropsWithoutRef } from "react"
import cn from "classnames"
type TextFieldElement = React.ElementRef<"input">
import { composeRefs } from "@radix-ui/react-compose-refs"
import { createContext } from "@radix-ui/react-context"
import { getVariableClassNamesForProp } from "../../utils/props"
import { useId } from "@radix-ui/react-id"
import { WarningCircleIcon } from "./text-field-icons"

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
        child.type !== TextFieldError
    )

    const isInvalid = allChildren.some(
      (child) => React.isValidElement(child) && child.type === TextFieldError
    )

    const hint = allChildren.filter(
      (child) =>
        React.isValidElement(child) &&
        (child.type === TextFieldHint || child.type === TextFieldError)
    )

    return (
      <TextFieldProvider baseId={baseId}>
        <div
          onPointerDown={onPointerDown}
          data-invalid={isInvalid}
          className={cn("kb-text-field-root", className)}
        >
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
          {hint}
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

const TEXT_FIELD_HINT_NAME = "TextField.Hint"

type HintElement = React.ElementRef<"span">

export interface TextFieldHintProps extends ComponentPropsWithoutRef<"span"> {}

const TextFieldHint = React.forwardRef<HintElement, TextFieldHintProps>(
  (props, forwardedRef) => {
    const { className, id, ...hintProps } = props
    const { baseId } = useTextFieldContext(TEXT_FIELD_HINT_NAME)

    const hintId = makeHintId(baseId)

    return (
      <div className={cn("kb-text-field-hint", className)}>
        <WarningCircleIcon aria-hidden />
        <span
          {...hintProps}
          id={id || hintId}
          className={"kb-text-field-hint-text"}
          ref={forwardedRef}
        />
      </div>
    )
  }
)

TextFieldHint.displayName = "TextField.Hint"

const TEXT_FIELD_ERROR_NAME = "TextField.Error"

const TextFieldError = React.forwardRef<HintElement, TextFieldHintProps>(
  (props, forwardedRef) => {
    const { className, ...hintProps } = props
    const { baseId } = useTextFieldContext(TEXT_FIELD_ERROR_NAME)

    const errorId = makeErrorId(baseId)

    return (
      <TextFieldHint
        id={errorId}
        {...hintProps}
        className={cn("kb-text-field-error", className)}
        ref={forwardedRef}
      />
    )
  }
)

TextFieldError.displayName = "TextField.Error"

function makeHintId(baseId: string) {
  return `${baseId}-hint`
}

function makeErrorId(baseId: string) {
  return `${baseId}-error`
}

TextFieldSlot.displayName = "TextField.Slot"

export {
  TextFieldRoot as Root,
  TextFieldSlot as Slot,
  TextFieldHint as Hint,
  TextFieldError as Error,
}
