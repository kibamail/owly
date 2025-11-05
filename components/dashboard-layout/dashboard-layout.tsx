import * as React from "react"
import cn from "classnames"

type DashboardLayoutElement = React.ElementRef<"div">
type DashboardLayoutContentShellElement = React.ElementRef<"div">
type DashboardLayoutSidebarElement = React.ElementRef<"div">

interface DashboardLayoutProps extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutContentShellProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const DashboardLayoutRoot = React.forwardRef<
  DashboardLayoutElement,
  DashboardLayoutProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-root", className)}
    >
      {children}
    </div>
  )
})

DashboardLayoutRoot.displayName = "DashboardLayout.Root"

const DashboardLayoutContentShell = React.forwardRef<
  DashboardLayoutContentShellElement,
  DashboardLayoutContentShellProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-content-shell", className)}
    >
      {children}
    </div>
  )
})

DashboardLayoutContentShell.displayName = "DashboardLayout.ContentShell"

const DashboardLayoutSidebar = React.forwardRef<
  DashboardLayoutSidebarElement,
  DashboardLayoutSidebarProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar", className)}
    >
      {children}
    </div>
  )
})

DashboardLayoutSidebar.displayName = "DashboardLayout.Sidebar"

export {
  DashboardLayoutRoot,
  DashboardLayoutContentShell,
  DashboardLayoutSidebar,
  DashboardLayoutRoot as Root,
  DashboardLayoutContentShell as ContentShell,
  DashboardLayoutSidebar as Sidebar,
}
