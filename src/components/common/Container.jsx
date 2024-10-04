import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn("max-w-[1200px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};
