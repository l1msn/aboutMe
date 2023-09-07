import React, { JSX, useEffect, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import AppRouter from '@/app/providers/Router';
import Navbar from '@/widgets/Navbar';
import { VStack } from '@/shared/ui/Stack';
import Preloader from '@/widgets/Preloader';

interface IAppProps {
    className?: string;
}

const App: React.FC<IAppProps> = ({ className }: IAppProps): JSX.Element => {
    const [loading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading((prevState) => !prevState);
        }, 2000);
    }, []);

    if (loading) {
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
            <div className="content-page">
                <VStack max align={'center'}>
                    <Navbar />
                    <AppRouter />
                </VStack>
            </div>
        </div>
    );
};

export default App;
