import React, { JSX } from 'react';
import Page from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import VoxelDog from '@/features/3DModel';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './MainPage.module.scss';
import Avatar from '@/shared/ui/Avatar';
import BioPart from '@/entities/BioPart';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ImageContainer from '@/widgets/ImageContainer';
import SocialTab from '@/entities/SocialTab';
import MotionIcon from '@/shared/ui/MotionIcon';
import LocationIcon from '@/shared/assets/icons/location-icon.svg';
import LoveIcon from '@/shared/assets/icons/love-icon.svg';
import YearsOldIcon from '@/shared/assets/icons/yearsold-icon.svg';
import Icon from '@/shared/ui/Icon';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';

const MainPage: React.FC = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    const { height, width } = useWindowDimensions();

    return (
        <Page data-testid={'MainPage'}>
            <VStack
                className={cls.mainStackInfo}
                align={'center'}
                justify={'center'}
            >
                <VoxelDog />
                <Card max className={cls.greeting}>
                    {i18n.language == 'en' && (
                        <TypeAnimation
                            sequence={[
                                t(
                                    'A ordinary man who dreams of becoming a programmer Fullstack Web Developer 🚀',
                                ),
                            ]}
                            speed={80}
                            style={{ fontSize: '20px' }}
                        />
                    )}
                    {i18n.language == 'ru' && (
                        <TypeAnimation
                            sequence={[
                                t(
                                    'Обычный парень, мечтающий стать Fullstack Web разработчиком 🚀',
                                ),
                            ]}
                            speed={80}
                            style={{ fontSize: '20px' }}
                        />
                    )}
                </Card>
                <HStack max justify={'between'} className={cls.nameWithPhoto}>
                    <VStack>
                        <Text title={t('Alexander Sadykov')} />
                        <Text
                            text={t('IT Geek [ Developer / Designer / Gamer ]')}
                        />
                    </VStack>
                    <Avatar
                        alt={'foto'}
                        src={'https://i.imgur.com/x4YlWAO.jpg'}
                    />
                </HStack>
                <HStack className={cls.miniInfo} max justify={'between'}>
                    <HStack>
                        <motion.div
                            animate={{ y: [5, 0, 5], x: 0 }}
                            transition={{
                                ease: 'easeOut',
                                delay: 3,
                                duration: 6,
                                repeat: Infinity,
                            }}
                        >
                            <Icon Svg={LocationIcon} />
                        </motion.div>
                        <Text text={'Saint-Petersburg'} />
                    </HStack>
                    <HStack>
                        <motion.div
                            animate={{ opacity: [0.8, 1.2, 0.8] }}
                            transition={{
                                ease: 'easeOut',
                                delay: 3,
                                duration: 6,
                                repeat: Infinity,
                            }}
                        >
                            <Icon Svg={LoveIcon} />
                        </motion.div>
                        <Text text={'Programming, Sports and people'} />
                    </HStack>
                    <HStack>
                        <motion.div
                            animate={{ rotate: ['5deg', '-5deg', '5deg'] }}
                            transition={{
                                ease: 'easeOut',
                                delay: 3,
                                duration: 6,
                                repeat: Infinity,
                            }}
                        >
                            <Icon Svg={YearsOldIcon} />
                        </motion.div>
                        <Text text={'23 years old'} />
                    </HStack>
                </HStack>
                <VStack className={cls.bio} align={'center'} gap={'16'}>
                    <BioPart title={t('Biography')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </BioPart>
                    <BioPart right title={t('Old Biography')}>
                        <HStack max gap={'16'}>
                            <Text
                                text={t(
                                    'Lorem ipsum dolor sit amet, consectetur\n' +
                                        '                                adipiscing elit, sed do eiusmod tempor\n' +
                                        '                                incididunt ut labore et dolore magna aliqua. Ut\n' +
                                        '                                enim ad minim veniam, quis nostrud exercitation\n' +
                                        '                                ullamco laboris nisi ut aliquip ex ea commodo\n' +
                                        '                                consequat. Duis aute irure dolor in\n' +
                                        '                                reprehenderit in voluptate velit esse cillum\n' +
                                        '                                dolore eu fugiat nulla pariatur. Excepteur sint\n' +
                                        '                                occaecat cupidatat non proident, sunt in culpa\n' +
                                        '                                qui officia deserunt mollit anim id est laborum.',
                                )}
                            />
                            <HStack
                                max
                                justify={'center'}
                                className={cls.oldFoto}
                            >
                                <Avatar
                                    alt={'foto'}
                                    src={'https://i.imgur.com/x4YlWAO.jpg'}
                                />
                            </HStack>
                        </HStack>
                    </BioPart>
                    <BioPart title={t('New Biography')}>
                        <HStack max gap={'16'}>
                            <HStack
                                max
                                justify={'center'}
                                className={cls.newFoto}
                            >
                                <Avatar
                                    alt={'foto'}
                                    src={'https://i.imgur.com/x4YlWAO.jpg'}
                                />
                            </HStack>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </div>
                        </HStack>
                    </BioPart>
                    <VStack max justify={'center'} gap={'16'}>
                        <ImageContainer />
                    </VStack>
                    <HStack
                        className={cls.links}
                        max
                        gap={'32'}
                        justify={'center'}
                    >
                        <SocialTab
                            to={'https://t.me/L1msn'}
                            motionIcon={
                                <MotionIcon
                                    pathMotion={
                                        'M 12 -3 L -2 3 L 4 5 L 4 5 L 4 5 L 6 11 L 12 -3'
                                    }
                                />
                            }
                            content={width > 450 ? t('Telegram') : undefined}
                        />
                        <SocialTab
                            to={
                                'https://drive.google.com/file/d/1dJpyjpR03_uOZ1Yl3j4NiNmuB5vCIgWD/view?usp=sharing'
                            }
                            motionIcon={
                                <MotionIcon
                                    pathMotion={
                                        'M 0 0 L 0 9 L 0 10 H 10 L 10 3 L 10 1 L 7 -2 L 0 -2'
                                    }
                                />
                            }
                            content={width > 450 ? t('Portfolio') : undefined}
                        />
                        <SocialTab
                            to={'mailto:italexanders@gmail.com'}
                            motionIcon={
                                <MotionIcon
                                    pathMotion={
                                        'M 0 0 L 0 9 L 0 9 H 14 L 14 0 L 7 4 L 7 4 L 0 0'
                                    }
                                />
                            }
                            content={width > 450 ? t('Email') : undefined}
                        />
                    </HStack>
                </VStack>
            </VStack>
        </Page>
    );
};

export default MainPage;
