import React, { JSX } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import cls from './CircleIndicator.module.scss';

interface ICircleIndicatorProps {
    children?: React.ReactNode;
}

const CircleIndicator: React.FC<ICircleIndicatorProps> = ({
    children,
}: ICircleIndicatorProps): JSX.Element => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div className={cls.progressBar} style={{ scaleX }} />
            {children}
        </>
    );
};

export default CircleIndicator;
