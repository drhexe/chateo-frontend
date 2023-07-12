import {
    WithChildren,
    WithClassName,
} from '$lib/types/helpers/component.helper';
import { cn } from '$lib/utils/cn.util';

interface DividerProps extends WithChildren, WithClassName {}

export function Divider({ children, className }: DividerProps) {
    return (
        <div className={cn('mb-8 flex items-center gap-4', className)}>
            <div className="h-[2px] flex-1 rounded-full bg-[#CDD1D0] opacity-20"></div>
            {children}
            <div className="h-[2px] flex-1 rounded-full bg-[#CDD1D0] opacity-20"></div>
        </div>
    );
}
