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
import ImageContainer from '@/widgets/ImageContainer';
import SocialTab from '@/entities/SocialTab';
import MotionIcon from '@/shared/ui/MotionIcon';
import LocationIcon from '@/shared/assets/icons/location-icon.svg';
import LoveIcon from '@/shared/assets/icons/love-icon.svg';
import YearsOldIcon from '@/shared/assets/icons/yearsold-icon.svg';
import Icon from '@/shared/ui/Icon';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import TypeAnimationText from '@/shared/ui/AnimationText';
import ParallaxText from '@/widgets/ParallaxText';
import Timeline from '@/entities/Timeline';

const MainPage: React.FC = (): JSX.Element => {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();

    return (
        <Page data-testid={'MainPage'}>
            <VStack
                className={cls.mainStackInfo}
                align={'center'}
                justify={'center'}
            >
                <VoxelDog />
                <Card max className={cls.greeting}>
                    <TypeAnimationText
                        speed={80}
                        style={{ fontSize: '20px' }}
                        text={{
                            ru: 'Обычный парень, мечтающий стать Fullstack Web разработчиком 🚀',
                            en: 'An ordinary man who dreams of becoming a programmer Fullstack Web Developer 🚀',
                        }}
                    />
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
                <ParallaxText baseVelocity={-1}>
                    <HStack
                        gap={'16'}
                        className={cls.miniInfo}
                        max
                        justify={'center'}
                    >
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
                                animate={{
                                    rotate: ['5deg', '-5deg', '5deg'],
                                }}
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
                        <HStack>
                            <motion.div
                                animate={{ opacity: [0.5, 1.5, 0.5] }}
                                transition={{
                                    ease: 'easeOut',
                                    delay: 3,
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                            >
                                <Icon Svg={LoveIcon} />
                            </motion.div>
                            <Text text={'Programming, Sport and people'} />
                        </HStack>
                    </HStack>
                </ParallaxText>
                <VStack className={cls.bio} align={'center'} gap={'16'}>
                    <BioPart title={t('A little bit about yourself')}>
                        <p>
                            {t(
                                'Этот покемон родился в городе Петергоф еще в прошлом тысячелетии. Любил лимонад "Живчик", математику и "Наруто" по 2x2. Но, не поступил в ВУЗ на то направление что хотел, поэтому пришлось пересматривать сериал "Солдаты" в реальной жизни. Однако, смог после поступить на желанное ПМИ и осознать, что способность запоминать анекдоты у меня куда лучше чем ВышМат. Недавно я получил Диплом и теперь ищу возможность реализовать свою мечту....',
                            )}
                        </p>
                    </BioPart>
                    <Text title={'TimeLine'} />
                    <Timeline />
                    <VStack max justify={'center'} gap={'16'}>
                        <ImageContainer />
                    </VStack>
                    <HStack justify={'between'} gap={'16'}>
                        <Card>
                            <VStack gap={'8'} align={'center'}>
                                <Text text={'Social'} />
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
                                        content={
                                            width > 450
                                                ? t('Telegram')
                                                : undefined
                                        }
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
                                        content={
                                            width > 450 ? t('Email') : undefined
                                        }
                                    />
                                </HStack>
                            </VStack>
                        </Card>
                        <Card>
                            <VStack gap={'8'} align={'center'}>
                                <Text text={'Hard-skills'} />
                                <HStack
                                    className={cls.links}
                                    max
                                    gap={'32'}
                                    justify={'center'}
                                >
                                    <SocialTab
                                        to={'https://github.com/l1msn'}
                                        motionIcon={
                                            <MotionIcon
                                                pathMotion={
                                                    'M 7 0 C -3 -2 -3 12 7 10 l 0 -4 l -3 0'
                                                }
                                            />
                                        }
                                        content={
                                            width > 450
                                                ? t('GitHub')
                                                : undefined
                                        }
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
                                        content={
                                            width > 450
                                                ? t('Portfolio')
                                                : undefined
                                        }
                                    />
                                </HStack>
                            </VStack>
                        </Card>
                    </HStack>
                </VStack>
            </VStack>
        </Page>
    );
};

export default MainPage;
