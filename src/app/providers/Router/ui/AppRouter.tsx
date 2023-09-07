import React, { JSX, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';

const AppRouter: React.FC = memo((): JSX.Element => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default AppRouter;
