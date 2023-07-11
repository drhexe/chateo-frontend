'use client';

import { cn } from '@/lib/utils/cn.util';
import { Variants, animate, motion } from 'framer-motion';
import { ComponentPropsWithRef, forwardRef, useId, useState } from 'react';

interface TextInputProps extends ComponentPropsWithRef<'input'> {
    label?: ComponentPropsWithRef<typeof motion.label>;
    container?: ComponentPropsWithRef<'div'>;
}

export const TextInput = forwardRef(function TextInput(
    {
        className,
        label: { className: labelClassName, ...label } = {},
        id,
        container: { className: containerClassName, ...container } = {},
        ...rest
    }: TextInputProps,
    ref: TextInputProps['ref']
) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const labelTransition = {
        small: {
            x: 0,
            y: '0%',
        },
        large: {
            x: 10,
            y: '30%',
        },
    } satisfies Variants;
    const [currentVariant, setCurrentVariant] =
        useState<keyof typeof labelTransition>('large');
    return (
        <div
            className={cn(
                'relative flex h-14 w-80 cursor-text flex-col justify-between overflow-hidden',
                containerClassName
            )}
            {...container}
        >
            <motion.label
                htmlFor={inputId}
                {...label}
                initial="large"
                animate={currentVariant}
                variants={labelTransition}
                className={cn(
                    'absolute left-0 top-0 block h-full w-full origin-top-left cursor-text select-none font-medium text-[#5EBAAE]',
                    labelClassName
                )}
            />
            <input
                type="text"
                id={inputId}
                {...rest}
                ref={ref}
                className={cn(
                    'relative mt-auto border-b-2 border-[#595E5C] bg-transparent p-1 outline-none',
                    className
                )}
                onFocus={() => setCurrentVariant('small')}
                onBlur={(e) => {
                    if (e.target.value === '') setCurrentVariant('large');
                }}
            />
        </div>
    );
});
