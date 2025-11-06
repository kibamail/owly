import * as React from "react";
import cn from "classnames";
import { createContext } from "@radix-ui/react-context";
import { Slot } from "@radix-ui/react-slot";

const DASHBOARD_LAYOUT_NAME = "DashboardLayout";

type DashboardLayoutElement = React.ElementRef<"div">;
type DashboardLayoutContentShellElement = React.ElementRef<"div">;
type DashboardLayoutSidebarElement = React.ElementRef<"div">;
type DashboardLayoutSidebarDropdownElement = React.ElementRef<"div">;
type DashboardLayoutSidebarGroupElement = React.ElementRef<"div">;
type DashboardLayoutSidebarItemElement = React.ElementRef<"div">;
type DashboardLayoutSidebarFooterElement = React.ElementRef<"div">;
type DashboardLayoutFooterNotesElement = React.ElementRef<"div">;
type DashboardLayoutFooterNotesLinkGroupElement = React.ElementRef<"div">;
type DashboardLayoutFooterNotesLinkElement = React.ElementRef<"div">;

interface DashboardLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
  sidebarOpen?: boolean;
  onSidebarOpenChange?: (open: boolean) => void;
}
interface DashboardLayoutContentShellProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarDropdownProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutSidebarGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  title?: string;
}
interface DashboardLayoutSidebarItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  active?: boolean;
}
interface DashboardLayoutSidebarFooterProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutFooterNotesProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutFooterNotesLinkGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {}
interface DashboardLayoutFooterNotesLinkProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const [DashboardLayoutProvider, useDashboardLayoutContext] = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}>(DASHBOARD_LAYOUT_NAME);

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
);

const DashboardLayoutRoot = React.forwardRef<
  DashboardLayoutElement,
  DashboardLayoutProps
>((props, forwardedRef) => {
  const {
    className,
    children,
    sidebarOpen: sidebarOpenProp,
    onSidebarOpenChange,
    ...divProps
  } = props;
  const [sidebarOpen, setSidebarOpen] = React.useState(
    sidebarOpenProp ?? false
  );

  React.useEffect(() => {
    if (sidebarOpenProp !== undefined) {
      setSidebarOpen(sidebarOpenProp);
    }
  }, [sidebarOpenProp]);

  const handleSidebarOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setSidebarOpen(newOpen);
      onSidebarOpenChange?.(newOpen);
    },
    [onSidebarOpenChange]
  );

  return (
    <DashboardLayoutProvider
      sidebarOpen={sidebarOpen}
      setSidebarOpen={handleSidebarOpenChange}
    >
      <div
        {...divProps}
        ref={forwardedRef}
        className={cn("kb-dashboard-layout-root", className)}
      >
        {children}
      </div>
    </DashboardLayoutProvider>
  );
});

DashboardLayoutRoot.displayName = "DashboardLayout.Root";

const DashboardLayoutContentShell = React.forwardRef<
  DashboardLayoutContentShellElement,
  DashboardLayoutContentShellProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-content-shell", className)}
    >
      {children}
    </div>
  );
});

DashboardLayoutContentShell.displayName = "DashboardLayout.ContentShell";

const DashboardLayoutSidebar = React.forwardRef<
  DashboardLayoutSidebarElement,
  DashboardLayoutSidebarProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar", className)}
    >
      {children}
    </div>
  );
});

DashboardLayoutSidebar.displayName = "DashboardLayout.Sidebar";

const DashboardLayoutSidebarDropdown = React.forwardRef<
  DashboardLayoutSidebarDropdownElement,
  DashboardLayoutSidebarDropdownProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;
  const { sidebarOpen, setSidebarOpen } = useDashboardLayoutContext(
    "DashboardLayout.Sidebar.Dropdown"
  );

  // Extract first child (UserDropdown) and rest of children
  const childrenArray = React.Children.toArray(children);
  const userDropdown = childrenArray[0];
  const dropdownContent = childrenArray.slice(1);

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
  );
});

DashboardLayoutSidebarDropdown.displayName = "DashboardLayout.Sidebar.Dropdown";

const DashboardLayoutSidebarGroup = React.forwardRef<
  DashboardLayoutSidebarGroupElement,
  DashboardLayoutSidebarGroupProps
>((props, forwardedRef) => {
  const { className, children, title, ...divProps } = props;

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar-group", className)}
    >
      {title && (
        <div className="kb-dashboard-layout-sidebar-group-title">{title}</div>
      )}
      <div className="kb-dashboard-layout-sidebar-group-items">{children}</div>
    </div>
  );
});

DashboardLayoutSidebarGroup.displayName = "DashboardLayout.Sidebar.Group";

const DashboardLayoutSidebarItem = React.forwardRef<
  DashboardLayoutSidebarItemElement,
  DashboardLayoutSidebarItemProps
>((props, forwardedRef) => {
  const {
    className,
    children,
    asChild = false,
    active = false,
    ...divProps
  } = props;
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar-item", className)}
      data-active={active}
    >
      {children}
    </Comp>
  );
});

DashboardLayoutSidebarItem.displayName = "DashboardLayout.Sidebar.Item";

const DashboardLayoutSidebarFooter = React.forwardRef<
  DashboardLayoutSidebarFooterElement,
  DashboardLayoutSidebarFooterProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-sidebar-footer", className)}
    >
      {children}
    </div>
  );
});

DashboardLayoutSidebarFooter.displayName = "DashboardLayout.SidebarFooter";

const DotSeparator = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2"
    height="2"
    viewBox="0 0 2 2"
    fill="none"
  >
    <circle cx="1" cy="1" r="1" fill="#716D6A" />
  </svg>
);

const DashboardLayoutFooterNotes = React.forwardRef<
  DashboardLayoutFooterNotesElement,
  DashboardLayoutFooterNotesProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-footer-notes", className)}
    >
      <svg
        // width={228}
        height={1}
        viewBox="0 0 228 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="kb-dashboard-layout-footer-notes-divider"
        role="img"
        aria-label="divider"
      >
        <line
          y1="0.5"
          x2={228}
          y2="0.5"
          stroke="#E0DCD9"
          strokeDasharray="4 4"
        />
      </svg>
      {children}
    </div>
  );
});

DashboardLayoutFooterNotes.displayName = "DashboardLayout.FooterNotes";

const DashboardLayoutFooterNotesLinkGroup = React.forwardRef<
  DashboardLayoutFooterNotesLinkGroupElement,
  DashboardLayoutFooterNotesLinkGroupProps
>((props, forwardedRef) => {
  const { className, children, ...divProps } = props;
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-footer-notes-link-group", className)}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && <DotSeparator />}
        </React.Fragment>
      ))}
    </div>
  );
});

DashboardLayoutFooterNotesLinkGroup.displayName =
  "DashboardLayout.FooterNotes.LinkGroup";

const DashboardLayoutFooterNotesLink = React.forwardRef<
  DashboardLayoutFooterNotesLinkElement,
  DashboardLayoutFooterNotesLinkProps
>((props, forwardedRef) => {
  const { className, children, asChild = false, ...divProps } = props;
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...divProps}
      ref={forwardedRef}
      className={cn("kb-dashboard-layout-footer-notes-link", className)}
    >
      {children}
    </Comp>
  );
});

DashboardLayoutFooterNotesLink.displayName = "DashboardLayout.FooterNotes.Link";

export {
  DashboardLayoutRoot,
  DashboardLayoutContentShell,
  DashboardLayoutSidebar,
  DashboardLayoutSidebarDropdown,
  DashboardLayoutSidebarGroup,
  DashboardLayoutSidebarItem,
  DashboardLayoutSidebarFooter,
  DashboardLayoutFooterNotes,
  DashboardLayoutFooterNotesLinkGroup,
  DashboardLayoutFooterNotesLink,
  DashboardLayoutRoot as Root,
  DashboardLayoutContentShell as ContentShell,
  DashboardLayoutSidebar as Sidebar,
  DashboardLayoutSidebarDropdown as SidebarDropdown,
  DashboardLayoutSidebarGroup as SidebarGroup,
  DashboardLayoutSidebarItem as SidebarItem,
  DashboardLayoutSidebarFooter as SidebarFooter,
  DashboardLayoutFooterNotes as FooterNotes,
  DashboardLayoutFooterNotesLinkGroup as FooterNotesLinkGroup,
  DashboardLayoutFooterNotesLink as FooterNotesLink,
};
