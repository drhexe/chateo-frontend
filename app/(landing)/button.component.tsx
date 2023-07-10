"use client";

import {
  WithChildren,
  WithClassName,
} from "@/lib/types/helpers/component.helpers";
import { useRipple } from "./use-ripple.hook";
import { cn } from "@/lib/utils/cn.util";

interface ButtonProps extends WithChildren, WithClassName {}

export function Button({ children, className }: ButtonProps) {
  const { onMouseDown, ripples } = useRipple();
  return (
    <button
      className={cn(
        "bg-white text-black w-full p-4 rounded-2xl font-semibold mb-10 relative overflow-hidden",
        className
      )}
      onMouseDown={onMouseDown}
    >
      {children}
      {ripples}
    </button>
  );
}
