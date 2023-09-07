import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page';

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
            CSS
        </Page>
    );
};

export default CSSPage;
