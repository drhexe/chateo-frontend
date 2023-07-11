import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, useState } from 'react';

/**
 *
 * returns `ripples` and `onMouseDown`. render `ripples` as children.
 * bind the `onMouseDown` function to the triggering element.
 *
 * note that the parent element should have a non static position and overflow hidden.
 */
export function useRipple() {
    type RippleMouseEvent = Parameters<
        Required<ComponentProps<'button'>>['onMouseDown']
    >[0];
    type RippleInfo = {
        id: number;
        x: number;
        y: number;
        animationComplete: boolean;
    };
    const [rippleInfos, setRippleInfos] = useState<RippleInfo[]>([]);

    function handleAnimationComplete(id: number) {
        setRippleInfos((prev) => prev.filter((ripple) => ripple.id !== id));
    }
    function onMouseDown(event: RippleMouseEvent) {
        const { offsetX, offsetY } = event.nativeEvent;
        const id = Date.now();
        setRippleInfos((prev) => [
            ...prev,
            { id, x: offsetX, y: offsetY, animationComplete: false },
        ]);
    }
    const ripples = (
        <AnimatePresence>
            {rippleInfos.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onAnimationComplete={() =>
                        handleAnimationComplete(ripple.id)
                    }
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        x: '-50%',
                        y: '-50%',
                    }}
                    className="pointer-events-none absolute aspect-square w-full rounded-full bg-[#A8B0AF]"
                />
            ))}
        </AnimatePresence>
    );
    return {
        ripples,
        onMouseDown,
    };
}
