'use client';

import { useRipple } from '$lib/hooks/use-ripple.hook';
import {
    WithChildren,
    WithClassName,
} from '$lib/types/helpers/component.helpers';
import { cn } from '$lib/utils/cn.util';
import routes, { isRoutePrivate } from '../configs/routes';

interface ButtonProps extends WithChildren, WithClassName {}

export function Button({ children, className }: ButtonProps) {
    const { onMouseDown, ripples } = useRipple();
    return (
        <button
            className={cn(
                'relative w-full overflow-hidden rounded-2xl bg-white p-4 font-semibold text-black',
                className
            )}
            onMouseDown={(e) => {
                onMouseDown(e);
                console.log(isRoutePrivate(routes.user.login));
            }}
        >
            {children}
            {ripples}
        </button>
    );
}
