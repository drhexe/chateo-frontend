'use client';

import { useRipple } from '$lib/hooks/use-ripple.hook';
import { cn } from '$lib/utils/cn.util';
import routes, { isRoutePrivate } from '../configs/routes';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
    variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ children, className, variant, ...rest }: ButtonProps) {
    const { onMouseDown, ripples } = useRipple();
    return (
        <button
            className={cn(
                'relative w-full overflow-hidden rounded-2xl bg-white p-4 font-semibold text-black disabled:cursor-not-allowed',
                variant === 'secondary' &&
                    'bg-[#24786D] text-white disabled:bg-[#232929] disabled:text-[#797C7B]',
                variant === 'ghost' &&
                    'bg-transparent text-white transition-all hover:bg-[#797C7B] hover:bg-opacity-10',
                className
            )}
            onMouseDown={(e) => {
                onMouseDown(e);
                console.log(isRoutePrivate(routes.user.login));
            }}
            {...rest}
        >
            {children}
            {ripples}
        </button>
    );
}
