import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import LangSwitcher from '@/features/LangSwitcher';
import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import LogoIcon from '@/shared/assets/icons/logo-icon.svg';
import GitHubIcon from '@/shared/assets/icons/github-icon.svg';
import Icon from '@/shared/ui/Icon';
import { TypeAnimation } from 'react-type-animation';
import AppLink from '@/shared/ui/AppLink';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { motion } from 'framer-motion';
import TypeAnimationText from '@/shared/ui/AnimationText';

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
                        <motion.div
                            animate={{
                                y: [4, -4, 4],
                                x: 0,
                            }}
                            style={{ display: 'flex' }}
                            transition={{
                                ease: 'easeOut',
                                delay: 1,
                                duration: 4,
                                repeat: Infinity,
                            }}
                        >
                            <Icon
                                height={54}
                                width={54}
                                Svg={LogoIcon}
                                className={cls.logoImg}
                            />
                        </motion.div>
                        <TypeAnimationText
                            speed={50}
                            style={{
                                fontSize: '22px',
                            }}
                            text={{
                                ru: ['Александр Садыков'],
                                en: ['Alexander Sadykov'],
                            }}
                        />
                    </HStack>
                </AppLink>
                <HStack className={cls.additional}>
                    <Icon
                        className={cls.iconGitHub}
                        width={50}
                        height={50}
                        clickable
                        Svg={GitHubIcon}
                        onClick={() => {
                            window.open('https://github.com/l1msn/aboutMe');
                        }}
                    />
                    <LangSwitcher />
                    <ThemeSwitcher />
                </HStack>
            </HStack>
        </header>
    );
};

export default Navbar;
