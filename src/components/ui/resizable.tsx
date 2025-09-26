"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroupComponent = ResizablePanelGroup;
const ResizablePanelComponent = ResizablePanel;

const ResizableHandleComponent = React.forwardRef<
  React.ElementRef<typeof ResizableHandle>,
  React.ComponentPropsWithoutRef<typeof ResizableHandle> & {
    withHandle?: boolean;
  }
>(({ withHandle, className, ...props }, ref) => (
  <ResizableHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizableHandle>
));
ResizableHandleComponent.displayName = ResizableHandle.displayName;

export {
  ResizablePanelGroupComponent as ResizablePanelGroup,
  ResizablePanelComponent as ResizablePanel,
  ResizableHandleComponent as ResizableHandle,
};