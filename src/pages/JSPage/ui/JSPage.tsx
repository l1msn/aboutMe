import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import ParallaxText from '@/widgets/ParallaxText';

interface IJSPageProps {
    className?: string;
}

const JSPage: React.FC<IJSPageProps> = ({
    className,
}: IJSPageProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid={'JSPage'}
            className={classNames('', {}, [className])}
        >
            <VStack max gap={'8'}>
                <section>
                    <ParallaxText baseVelocity={5}>HTML CSS</ParallaxText>
                    <ParallaxText baseVelocity={-5}>JavaScript</ParallaxText>
                </section>
            </VStack>
        </Page>
    );
};

export default JSPage;
