import React, { JSX, useEffect, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import AppRouter from '@/app/providers/Router';
import Navbar from '@/widgets/Navbar';
import { VStack } from '@/shared/ui/Stack';
import Preloader from '@/widgets/Preloader';
import CircleIndicator from '@/widgets/CircleIndicator';
import Footer from '@/widgets/Footer';

interface IAppProps {
    className?: string;
}

const App: React.FC<IAppProps> = ({ className }: IAppProps): JSX.Element => {
    const [loading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem(
                'preloader',
                JSON.stringify({ preloader: true }),
            );
        }, 2000);

        return () => {
            localStorage.removeItem('preloader');
        };
    }, [loading]);

    if (loading && !localStorage.getItem('preloader')) {
        return (
            <div className={classNames('app', {}, [className])}>
                <div className="preloader">
                    <Preloader loading={loading} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [className])}>
            <CircleIndicator>
                <div className="content-page">
                    <VStack max align={'center'}>
                        <Navbar />
                        <AppRouter />
                        <Footer />
                    </VStack>
                </div>
            </CircleIndicator>
        </div>
    );
};

export default App;
