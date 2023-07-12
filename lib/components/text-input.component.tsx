'use client';

import { Children } from '$lib/types/helpers/component.helper';
import { cn } from '$lib/utils/cn.util';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { ComponentPropsWithRef, forwardRef, useId, useState } from 'react';

const errorVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
} satisfies Variants;

interface TextInputProps extends ComponentPropsWithRef<'input'> {
    label?: ComponentPropsWithRef<typeof motion.label>;
    container?: ComponentPropsWithRef<'div'>;
    error?: Children;
}

export const TextInput = forwardRef(function TextInput(
    {
        className,
        label: { className: labelClassName, ...label } = {},
        id,
        container: { className: containerClassName, ...container } = {},
        error,
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
                'relative flex h-20 flex-col justify-between overflow-hidden',
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
                    'absolute left-0 top-0 block h-full w-full origin-top-left cursor-text select-none font-medium text-[#5EBAAE] transition-colors',
                    { 'text-[#FF2D1B]': error },
                    labelClassName
                )}
            />
            <input
                type="text"
                id={inputId}
                {...rest}
                ref={ref}
                className={cn(
                    'relative mt-auto border-b-2 border-[#595E5C] bg-transparent p-1 outline-none transition-colors focus:border-[#c7d1cd]',
                    {
                        'border-[#FF2D1B]': error,
                    },
                    className
                )}
                onFocus={() => setCurrentVariant('small')}
                onBlur={(e) => {
                    if (e.target.value === '') setCurrentVariant('large');
                }}
            />
            <AnimatePresence mode="wait">
                <motion.div
                    key={JSON.stringify(error)}
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="ml-auto mt-0.5 h-4 text-xs leading-4 text-[#FF2D1B]"
                >
                    {error}
                </motion.div>
            </AnimatePresence>
        </div>
    );
});
