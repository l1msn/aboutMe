import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './MainInfo.module.scss';
import VoxelDog from '@/features/3DModel';
import { Card } from '@/shared/ui/Card';
import TypeAnimationText from '@/shared/ui/AnimationText';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import Avatar from '@/shared/ui/Avatar';
import ParallaxText from '@/widgets/ParallaxText';
import { motion } from 'framer-motion';
import Icon from '@/shared/ui/Icon';
import LocationIcon from '@/shared/assets/icons/location-icon.svg';
import YearsOldIcon from '@/shared/assets/icons/yearsold-icon.svg';
import LoveIcon from '@/shared/assets/icons/love-icon.svg';
import { useTranslation } from 'react-i18next';

interface IMainInfoProps {
    className?: string;
}

const MainInfo: React.FC<IMainInfoProps> = memo(
    ({ className }: IMainInfoProps): JSX.Element => {
        const { t } = useTranslation();
        return (
            <>
                <VoxelDog />
                <Card max className={cls.greeting}>
                    <TypeAnimationText
                        speed={80}
                        style={{ fontSize: '20px' }}
                        text={{
                            ru: [
                                'Обычный парень, мечтающий стать Fullstack Web разработчиком 🚀',
                                3000,
                                'Обычный парень, мечтающий стать Frontend Web разработчиком 🚀',
                                3000,
                                'Обычный парень, мечтающий стать Backend Web разработчиком 🚀',
                                3000,
                            ],
                            en: [
                                'An ordinary man who dreams of becoming a programmer Fullstack Web Developer 🚀',
                                3000,
                                'An ordinary man who dreams of becoming a programmer Frontend Web Developer 🚀',
                                3000,
                                'An ordinary man who dreams of becoming a programmer Backend Web Developer 🚀',
                                3000,
                            ],
                        }}
                        repeat
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
                            <Text text={t('Saint-Petersburg')} />
                        </HStack>
                        <HStack>
                            <motion.div
                                animate={{
                                    rotate: ['8deg', '-8deg', '8deg'],
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
                            <Text text={t('23 years old')} />
                        </HStack>
                        <HStack>
                            <motion.div
                                animate={{ opacity: [0.8, 1.8, 0.8] }}
                                transition={{
                                    ease: 'easeOut',
                                    delay: 3,
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                            >
                                <Icon Svg={LoveIcon} />
                            </motion.div>
                            <Text text={t('Programming, Sport and people')} />
                        </HStack>
                    </HStack>
                </ParallaxText>
            </>
        );
    },
);

export default MainInfo;
