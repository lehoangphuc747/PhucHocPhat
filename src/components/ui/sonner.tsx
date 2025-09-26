"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerPrimitive } from "sonner";

type SonnerToasterProps = React.ComponentProps<typeof SonnerPrimitive>;

const SonnerToaster = ({ ...props }: SonnerToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <SonnerPrimitive
      theme={theme as SonnerToasterProps["theme"]}
      className="toaster group"
      {...props}
    />
  );
};

export { SonnerToaster };