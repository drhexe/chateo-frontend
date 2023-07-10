'use client';

import { useRipple } from './use-ripple.hook';
import {
    WithChildren,
    WithClassName,
} from '@/lib/types/helpers/component.helpers';
import { cn } from '@/lib/utils/cn.util';

interface ButtonProps extends WithChildren, WithClassName {}

export function Button({ children, className }: ButtonProps) {
    const { onMouseDown, ripples } = useRipple();
    return (
        <button
            className={cn(
                'relative mb-10 w-full overflow-hidden rounded-2xl bg-white p-4 font-semibold text-black',
                className
            )}
            onMouseDown={onMouseDown}
        >
            {children}
            {ripples}
        </button>
    );
}
