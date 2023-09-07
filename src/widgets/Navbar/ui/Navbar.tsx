import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import LangSwitcher from '@/features/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import LogoIcon from '@/shared/assets/icons/logo-icon.svg';
import Icon from '@/shared/ui/Icon';
import { TypeAnimation } from 'react-type-animation';

interface INavbarProps {
    className?: string;
}

const Navbar: React.FC<INavbarProps> = ({
    className,
}: INavbarProps): JSX.Element => {
    const { t, i18n } = useTranslation();

    return (
        <menu className={classNames(cls.navbar, {}, [className])}>
            <HStack max justify={'between'}>
                <HStack gap={'8'} max className={cls.logo}>
                    <Icon
                        height={48}
                        width={48}
                        Svg={LogoIcon}
                        className={cls.logoImg}
                    />
                    {i18n.language == 'en' && (
                        <TypeAnimation
                            sequence={[t('Alexander Sadykov')]}
                            speed={50}
                            style={{ fontSize: '22px' }}
                        />
                    )}
                    {i18n.language == 'ru' && (
                        <TypeAnimation
                            sequence={[t('Александр Садыков')]}
                            speed={50}
                            style={{ fontSize: '23px' }}
                        />
                    )}
                </HStack>
                <VStack>
                    <LangSwitcher />
                    <ThemeSwitcher />
                </VStack>
            </HStack>
        </menu>
    );
};

export default Navbar;
