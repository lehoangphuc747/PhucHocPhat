"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = PanelGroup;
const ResizablePanel = Panel;

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof PanelResizeHandle>, // Kiểu ref cho component này
  React.ComponentPropsWithoutRef<typeof PanelResizeHandle> & {
    withHandle?: boolean;
  }
>(({ withHandle, className, ...props }, ref) => (
  <PanelResizeHandle
    {...(props as React.ComponentProps<typeof PanelResizeHandle>)} // Ép kiểu props để bao gồm 'ref'
    ref={ref} // Truyền ref một cách rõ ràng
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
      className,
    )}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </PanelResizeHandle>
));
ResizableHandle.displayName = "ResizableHandle";

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
};