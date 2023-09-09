import React, { JSX, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface IMotionProps {
    children?: React.ReactNode;
    delay?: number;
    onceMotion?: boolean;
}

const Motion: React.FC<IMotionProps> = ({
    children,
    onceMotion = true,
    delay = 0.5,
}: IMotionProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: onceMotion,
    });

    return (
        <div ref={ref}>
            {isInView && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: delay,
                        ease: 'linear',
                    }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default Motion;
