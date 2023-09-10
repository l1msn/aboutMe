import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import PAGE_ID from '@/shared/consts/ids';
import TestProps from '@/shared/types/tests';
import Motion from '@/shared/ui/Motion';
import { HStack, VStack } from '@/shared/ui/Stack';
import ScrollToTopButton from '@/features/ScrollToTopButton';

interface IPageProps extends TestProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
    const { className, children } = props;

    return (
        <Motion>
            <main
                className={classNames(cls.page, {}, [className])}
                id={PAGE_ID}
                data-testid={props['data-testid'] ?? 'Page'}
            >
                {children}
            </main>
        </Motion>
    );
};

export default Page;
