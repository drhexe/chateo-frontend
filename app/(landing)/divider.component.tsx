import { ReactNode } from "react";

interface DividerProps {
  children: ReactNode | ReactNode[];
}

export function Divider({ children }: DividerProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-1 bg-[#CDD1D0] opacity-20 h-[2px] rounded-full"></div>
      {children}
      <div className="flex-1 bg-[#CDD1D0] opacity-20 h-[2px] rounded-full"></div>
    </div>
  );
}
