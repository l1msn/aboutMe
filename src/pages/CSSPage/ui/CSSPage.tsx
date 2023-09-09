import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page';
import ParallaxText from '@/widgets/ParallaxText';
import { VStack } from '@/shared/ui/Stack';

interface ICSSPageProps {
    className?: string;
}

const CSSPage: React.FC<ICSSPageProps> = ({
    className,
}: ICSSPageProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid={'CSSPage'}
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

export default CSSPage;
