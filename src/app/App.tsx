import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import AppRouter from '@/app/providers/Router';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import LangSwitcher from '@/features/LangSwitcher';
import { Card } from '@/shared/ui/Card';

interface IAppProps {
    className?: string;
}

const App: React.FC<IAppProps> = ({ className }: IAppProps): JSX.Element => {
    return (
        <div className={classNames('app', {}, [className])}>
            <div className="content-page">
                <AppRouter />
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default App;
