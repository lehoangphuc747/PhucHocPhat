"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarContextValue = {
  open: boolean;
  toggleSidebar: () => void;
  setOpen: (open: boolean) => void;
  isCollapsible: boolean;
  isFloating: boolean;
};

const SidebarContext = React.createContext<SidebarContextValue>(
  {} as SidebarContextValue,
);

const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a <Sidebar>");
  }
  return context;
};

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    { defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openState, setOpenState] = React.useState(defaultOpen ?? false);

    const open = openProp ?? openState;
    const setOpen = setOpenProp ?? setOpenState;

    const toggleSidebar = () => {
      setOpen(!open);
    };

    const isCollapsible = false; // For now, we'll keep it simple
    const isFloating = isMobile;

    const contextValue = React.useMemo(
      () => ({
        open,
        toggleSidebar,
        setOpen,
        isCollapsible,
        isFloating,
      }),
      [open, toggleSidebar, setOpen, isCollapsible, isFloating],
    );

    if (isFloating) {
      return (
        <SidebarContext.Provider value={contextValue}>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="flex h-full w-full flex-col">
              {children}
            </SheetContent>
          </Sheet>
        </SidebarContext.Provider>
      );
    }

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            ref={ref}
            className={cn(
              "flex h-full",
              className,
            )}
            style={style}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
Sidebar.displayName = "Sidebar";

interface SidebarPanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarPanelVariants> {
  side?: "left" | "right";
  collapsible?: "none" | "collapse" | "offcanvas";
}

const sidebarPanelVariants = cva(
  "flex flex-col h-full",
  {
    variants: {
      variant: {
        default: "bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border",
        inset: "bg-card text-card-foreground border border-border rounded-lg",
        floating: "bg-popover text-popover-foreground border border-border rounded-lg shadow-lg",
      },
      size: {
        default: "w-64",
        sm: "w-48",
        lg: "w-80",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarPanel = React.forwardRef<HTMLDivElement, SidebarPanelProps>(
  (
    { side = "left", variant = "default", collapsible = "none", className, children, ...props },
    ref,
  ) => {
    const { open, isFloating } = useSidebar();

    if (isFloating) {
      return null; // Rendered by SheetContent in Sidebar
    }

    return (
      <div
        ref={ref}
        className={cn(
          sidebarPanelVariants({ variant, className }),
          collapsible === "collapse" && "transition-all duration-300 ease-in-out",
          collapsible === "collapse" && (open ? "w-64" : "w-16"),
          collapsible === "offcanvas" && (open ? "w-64" : "w-0 overflow-hidden"),
          side === "right" && "border-l border-r-0",
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SidebarPanel.displayName = "SidebarPanel";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open, isFloating } = useSidebar();

  if (isFloating) {
    return (
      <div ref={ref} className={cn("flex flex-col h-full", className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col h-full",
        open ? "px-4 py-6" : "px-2 py-6 items-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-grow overflow-y-auto", className)}
      {...props}
    />
  );
});
SidebarMain.displayName = "SidebarMain";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-4", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-end p-4", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar, open, isFloating } = useSidebar();

  if (isFloating) {
    return null; // Handled by SheetTrigger in Sidebar
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn(
        "h-8 w-8",
        open ? "rotate-0" : "rotate-180",
        className,
      )}
      onClick={(e) => {
        toggleSidebar();
        onClick?.(e);
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarToggle.displayName = "SidebarToggle";

const SidebarClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { setOpen } = useSidebar();

  return (
    <button
      ref={ref}
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        className,
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      <PanelLeft className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
});
SidebarClose.displayName = "SidebarClose";

const SidebarOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarOverlay.displayName = "SidebarOverlay";

const SidebarMainContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn("flex-1 overflow-y-auto p-4", className)}
      {...props}
    />
  );
});
SidebarMainContent.displayName = "SidebarMainContent";

const SidebarSearch = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      type="search"
      placeholder="Search..."
      className={cn("h-9", className)}
      {...props}
    />
  );
});
SidebarSearch.displayName = "SidebarSearch";

const SidebarNav = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
});
SidebarNav.displayName = "SidebarNav";

const SidebarNavHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm font-semibold text-muted-foreground", className)}
      {...props}
    />
  );
});
SidebarNavHeader.displayName = "SidebarNavHeader";

const SidebarNavSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      className={cn("my-4", className)}
      {...props}
    />
  );
});
SidebarNavSeparator.displayName = "SidebarNavSeparator";

const SidebarNavContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});
SidebarNavContent.displayName = "SidebarNavContent";

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});
SidebarMenu.displayName = "SidebarMenu";

interface SidebarMenuItemProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  SidebarMenuItemProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuLinkProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

const SidebarMenuLink = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuLinkProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuLink.displayName = "SidebarMenuLink";

const SidebarMenuTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-semibold text-sidebar-foreground", className)}
    {...props}
  />
));
SidebarMenuTitle.displayName = "SidebarMenuTitle";

const SidebarMenuList = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenuList.displayName = "SidebarMenuList";

const SidebarMenuListItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
));
SidebarMenuListItem.displayName = "SidebarMenuListItem";

interface SidebarMenuLinkItemProps extends React.ComponentProps<"button">, VariantProps<typeof sidebarMenuLinkItemVariants> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string;
}

const sidebarMenuLinkItemVariants = cva(
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        primary: "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
      },
      size: {
        default: "h-auto",
        sm: "h-8",
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuLinkItem = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuLinkItemProps
>(
  (
    { asChild = false, isActive, variant, size, tooltip, className, ...props },
    ref,
  ) => {
    const { open, isCollapsible, isFloating } = useSidebar();
    const Comp = asChild ? Slot : "button";

    const button = (
      <Comp
        ref={ref}
        className={cn(
          sidebarMenuLinkItemVariants({ variant, size, className }),
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          !open && isCollapsible && "justify-center",
        )}
        {...props}
      />
    );

    if (tooltip && (!open || isFloating)) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent side="right">{tooltip}</TooltipContent>
        </Tooltip>
      );
    }

    return button;
  },
);
SidebarMenuLinkItem.displayName = "SidebarMenuLinkItem";

interface SidebarMenuSubItemProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  showOnHover?: boolean;
}

const SidebarMenuSubItem = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuSubItemProps
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-semibold text-sidebar-foreground", className)}
    {...props}
  />
));
SidebarMenuSubTitle.displayName = "SidebarMenuSubTitle";

interface SidebarMenuSkeletonProps extends React.ComponentProps<"div"> {
  showIcon?: boolean;
}

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  SidebarMenuSkeletonProps
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = Math.floor(Math.random() * (90 - 50 + 1) + 50);

  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="h-4 w-4" />}
      <Skeleton className="h-4" style={{ width: `${width}%` }} />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSubList = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenuSubList.displayName = "SidebarMenuSubList";

const SidebarMenuSubItemLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & { asChild?: boolean; isActive?: boolean; size?: "sm" | "md" | "lg" }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
        size === "sm" && "h-8",
        size === "md" && "h-9",
        size === "lg" && "h-10",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubItemLink.displayName = "SidebarMenuSubItemLink";

export {
  Sidebar,
  SidebarPanel,
  SidebarContent,
  SidebarMain,
  SidebarHeader,
  SidebarFooter,
  SidebarToggle,
  SidebarClose,
  SidebarOverlay,
  SidebarMainContent,
  SidebarSearch,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavSeparator,
  SidebarNavContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuLink,
  SidebarMenuTitle,
  SidebarMenuList,
  SidebarMenuListItem,
  SidebarMenuLinkItem,
  SidebarMenuSubItem,
  SidebarMenuSubTitle,
  SidebarMenuSkeleton,
  SidebarMenuSubList,
  SidebarMenuSubItemLink,
};