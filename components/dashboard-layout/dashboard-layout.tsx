import * as React from "react"
import cn from "classnames"
import { createContext } from "@radix-ui/react-context"

const DASHBOARD_LAYOUT_NAME = "DashboardLayout"

type DashboardLayoutElement = React.ElementRef<"div">
type DashboardLayoutContentShellElement = React.ElementRef<"div">
type DashboardLayoutSidebarElement = React.ElementRef<"div">
type DashboardLayoutSidebarDropdownElement = React.ElementRef<"div">
type DashboardLayoutSidebarFooterElement = React.ElementRef<"div">

interface DashboardLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
  sidebarOpen?: boolean
  onSidebarOpenChange?: (open: boolean) => void
}
interface DashboardLayoutContentShellProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarDropdownProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarFooterProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const [DashboardLayoutProvider, useDashboardLayoutContext] = createContext<{
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}>(DASHBOARD_LAYOUT_NAME)

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 19H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DashboardLayoutRoot = React.forwardRef<
  DashboardLayoutElement,
  DashboardLayoutProps
>((props, forwardedRef) => {
  const { className, children, sidebarOpen: sidebarOpenProp, onSidebarOpenChange, ...divProps } = props
  const [sidebarOpen, setSidebarOpen] = React.useState(sidebarOpenProp ?? false)

  React.useEffect(() => {
    if (sidebarOpenProp !== undefined) {
      setSidebarOpen(sidebarOpenProp)
    }
  }, [sidebarOpenProp])

  const handleSidebarOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setSidebarOpen(newOpen)
      onSidebarOpenChange?.(newOpen)
    },
    [onSidebarOpenChange]
  )

  return (
    <DashboardLayoutProvider sidebarOpen={sidebarOpen} setSidebarOpen={handleSidebarOpenChange}>
      <div
        {...divProps}
        ref={forwardedRef}
        className={cn("kb-dashboard-layout-root", className)}
      >
        {children}
      </div>
    </DashboardLayoutProvider>
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

const DashboardLayoutSidebarDropdown = React.forwardRef<
  DashboardLayoutSidebarDropdownElement,
  DashboardLayoutSidebarDropdownProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props
  const { sidebarOpen, setSidebarOpen } = useDashboardLayoutContext("DashboardLayout.Sidebar.Dropdown")

  // Extract first child (UserDropdown) and rest of children
  const childrenArray = React.Children.toArray(children)
  const userDropdown = childrenArray[0]
  const dropdownContent = childrenArray.slice(1)

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar-dropdown", className)}
      data-state={sidebarOpen ? "open" : "closed"}
    >
      <div className="kb-dashboard-layout-sidebar-dropdown-header">
        {userDropdown}
        <button
          className="kb-dashboard-layout-sidebar-menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
      </div>
      <div className="kb-dashboard-layout-sidebar-dropdown-content">
        {dropdownContent}
      </div>
    </div>
  )
})

DashboardLayoutSidebarDropdown.displayName = "DashboardLayout.Sidebar.Dropdown"

const DashboardLayoutSidebarFooter = React.forwardRef<
  DashboardLayoutSidebarFooterElement,
  DashboardLayoutSidebarFooterProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar-footer", className)}
    >
      {children}
    </div>
  )
})

DashboardLayoutSidebarFooter.displayName = "DashboardLayout.SidebarFooter"

export {
  DashboardLayoutRoot,
  DashboardLayoutContentShell,
  DashboardLayoutSidebar,
  DashboardLayoutSidebarDropdown,
  DashboardLayoutSidebarFooter,
  DashboardLayoutRoot as Root,
  DashboardLayoutContentShell as ContentShell,
  DashboardLayoutSidebar as Sidebar,
  DashboardLayoutSidebarDropdown as SidebarDropdown,
  DashboardLayoutSidebarFooter as SidebarFooter,
}
