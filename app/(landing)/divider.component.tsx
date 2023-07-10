import { ReactNode } from 'react';

interface DividerProps {
    children: ReactNode | ReactNode[];
}

export function Divider({ children }: DividerProps) {
    return (
        <div className="mb-8 flex items-center gap-4">
            <div className="h-[2px] flex-1 rounded-full bg-[#CDD1D0] opacity-20"></div>
            {children}
            <div className="h-[2px] flex-1 rounded-full bg-[#CDD1D0] opacity-20"></div>
        </div>
    );
}
