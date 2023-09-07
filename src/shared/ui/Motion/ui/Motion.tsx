import React, { JSX } from 'react';
import { motion } from 'framer-motion';

interface IMotionProps {
    children?: React.ReactNode;
    delay?: number;
}

const Motion: React.FC<IMotionProps> = ({
    children,
    delay = 0.3,
}: IMotionProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
};

export default Motion;
