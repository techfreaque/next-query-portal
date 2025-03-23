import { Slot } from "@radix-ui/react-slot";
import { cn } from "next-query-portal/shared/utils/utils";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";

import { buttonVariants } from "./button.core";
import type { BaseButtonProps } from "./button.types";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {}

// Web implementation using Radix's Slot for polymorphism.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, ...props },
    ref,
  ): ReactElement => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
