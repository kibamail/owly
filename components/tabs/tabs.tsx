import React from "react";
import * as TabsPrimitive from "./tabs-primitive.js";

import { type TabsRootProps } from "./tabs.props.js";

import cn from "classnames";
import { getResponsiveClassNamesForProp } from "../utils/props.js";

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ className, width, ...props }, ref) => {
  const { className: widthClassName } = getResponsiveClassNamesForProp<
    TabsRootProps["width"]
  >("width", width, "fit");

  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn("kb-tabs-root", widthClassName, className)}
      {...props}
    />
  );
});

TabsRoot.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("kb-tabs-list", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn("kb-reset kb-tabs-trigger", className)}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("kb-tabs-content", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const TabsIndicator = React.forwardRef<
  React.ElementRef<(typeof TabsPrimitive)["Indicator"]>,
  React.ComponentPropsWithoutRef<(typeof TabsPrimitive)["Indicator"]>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Indicator
    ref={ref}
    className={cn("kb-tabs-indicator", className)}
    {...props}
  />
));

const Root = TabsRoot;
const List = TabsList;
const Trigger = TabsTrigger;
const Content = TabsContent;
const Indicator = TabsIndicator;

export {
  //
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  //
  Root,
  List,
  Trigger,
  Content,
  Indicator,
};
