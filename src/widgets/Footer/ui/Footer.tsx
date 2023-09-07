import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface IFooterProps {
    className?: string;
}

const Footer: React.FC<IFooterProps> = memo(
    ({ className }: IFooterProps): JSX.Element => {
        const { t } = useTranslation();

        return (
            <footer className={classNames(cls.footer, {}, [className])}>
                <Text
                    text={t('@ 2023 Sadykov Alexader. All right Reserved.')}
                />
            </footer>
        );
    },
);

export default Footer;
