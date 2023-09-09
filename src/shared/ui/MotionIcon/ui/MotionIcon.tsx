import React, { JSX, useRef } from 'react';
import cls from './MotionIcon.module.scss';
import { motion, useInView } from 'framer-motion';

interface IMotionIconProps {
    className?: string;
    pathMotion: string;
}

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 1)',
    },
};

const MotionIcon: React.FC<IMotionIconProps> = ({
    className,
    pathMotion,
}: IMotionIconProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    return (
        <div ref={ref} className={cls.container}>
            {isInView && (
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="3 0 10 10"
                    className={cls.item}
                >
                    <motion.path
                        d={pathMotion}
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 3, ease: 'easeInOut' },
                            fill: {
                                duration: 3,
                                ease: [1, 0, 0, 1],
                            },
                        }}
                    />
                </motion.svg>
            )}
        </div>
    );
};

export default MotionIcon;
