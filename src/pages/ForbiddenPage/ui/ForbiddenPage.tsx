import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page';

interface IForbiddenPageProps {
    className?: string;
}

const ForbiddenPage: React.FC<IForbiddenPageProps> = ({
    className,
}: IForbiddenPageProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid={'ForbiddenPage'}
            className={classNames('', {}, [className])}
        >
            {t('No access')}
        </Page>
    );
};

export default ForbiddenPage;
