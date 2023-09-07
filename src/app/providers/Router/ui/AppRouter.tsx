import React, { JSX, memo, Suspense, useCallback } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageLoader from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';
import { AnimatePresence, motion } from 'framer-motion';

const AppRouter: React.FC = memo((): JSX.Element => {
    const location = useLocation();

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Routes location={location} key={location.pathname}>
                    {Object.values(routeConfig).map(renderWithWrapper)}
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
});

export default AppRouter;
