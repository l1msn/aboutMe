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
import AppLink from '@/shared/ui/AppLink';
import { RoutePaths } from '@/shared/consts/routerPaths';

interface INavbarProps {
    className?: string;
}

const Navbar: React.FC<INavbarProps> = ({
    className,
}: INavbarProps): JSX.Element => {
    const { t, i18n } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <HStack max justify={'between'}>
                <AppLink to={RoutePaths.getRouteMain()}>
                    <HStack gap={'8'} max className={cls.logo}>
                        <Icon
                            height={54}
                            width={54}
                            Svg={LogoIcon}
                            className={cls.logoImg}
                        />
                        {i18n.language == 'en' && (
                            <TypeAnimation
                                sequence={[t('Alexander Sadykov')]}
                                speed={50}
                                style={{
                                    fontSize: '23px',
                                }}
                                wrapper={'h1'}
                            />
                        )}
                        {i18n.language == 'ru' && (
                            <TypeAnimation
                                sequence={[t('Александр Садыков')]}
                                speed={50}
                                style={{
                                    fontSize: '23px',
                                }}
                                wrapper={'h1'}
                            />
                        )}
                    </HStack>
                </AppLink>
                <HStack>
                    <LangSwitcher />
                    <ThemeSwitcher />
                </HStack>
            </HStack>
        </header>
    );
};

export default Navbar;
