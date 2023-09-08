import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import Motion from '@/shared/ui/Motion';

interface IFooterProps {
    className?: string;
}

const Footer: React.FC<IFooterProps> = memo(
    ({ className }: IFooterProps): JSX.Element => {
        const { t } = useTranslation();

        return (
            <footer className={classNames(cls.footer, {}, [className])}>
                <Motion delay={1}>
                    <Text
                        text={t('@ 2023 Sadykov Alexader. All right Reserved.')}
                    />
                </Motion>
            </footer>
        );
    },
);

export default Footer;
