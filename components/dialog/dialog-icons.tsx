import React from "react"

export type IconElement = React.ElementRef<"svg">
export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const XMarkIcon = React.forwardRef<IconElement, IconProps>(
  (props, forwardedRef) => {
    return (
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)

XMarkIcon.displayName = "IconoirXMarkIcon"