import React, { JSX } from 'react';
import Page from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './MainPage.module.scss';
import BioPart from '@/entities/BioPart';
import ImageContainer from '@/widgets/ImageContainer';
import imagesOld from '@/shared/assets/image-data';
import SocialTab from '@/entities/SocialTab';
import MotionIcon from '@/shared/ui/MotionIcon';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import Timeline from '@/entities/Timeline';
import MainInfo from '@/entities/MainInfo';

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
                <MainInfo />
                <VStack className={cls.bioProgramming} gap={'16'}>
                    <BioPart title={t('A little bit about yourself')}>
                        <p>
                            {t(
                                'This Pokemon was born in the city of Peterhof back in the last millennium. I loved “Zhivchik“ lemonade, math and Naruto on 2x2. But, I didn’t enter the university in the field I wanted, so I had to rewatch the series “Soldiers” in real life. However, I was later able to enroll in the desired PMI and realize that my ability to remember jokes is much better than Further Mathematics. I recently received my Bachelors degree and am now looking for an opportunity to realize my dream....',
                            )}
                        </p>
                    </BioPart>
                    <HStack justify={'between'} gap={'16'} max>
                        <BioPart
                            title={t(
                                'Why did programming become my favorite thing?',
                            )}
                        >
                            <p>
                                {t(
                                    'My love for programming began from childhood, when I realized that this is something accessible to everyone and thanks to it you can create whatever your heart desires. Yes, I am of the opinion that programming is also a kind of art. Since programming has the same features as art - the tangibility of the process, overcoming the unknown and inspiring other people, this is precisely why programming has become something more for me.',
                                )}
                            </p>
                        </BioPart>
                        <ImageContainer images={imagesOld} />
                    </HStack>
                </VStack>
                <VStack className={cls.bioWhyMe} gap={'16'}>
                    <div></div>
                    <HStack justify={'between'} gap={'16'} max>
                        <ImageContainer images={imagesOld} />
                        <BioPart title={t('Why me?')}>
                            <p>
                                {t(
                                    "I spent most of my conscious life side by side with programming. I've changed a lot of frameworks, met a lot of people, but my love and determination for it is even greater than ever. I am the person who wants to learn something new, reach new heights and share this with someone, and I hope that this person or company will be you.",
                                )}
                            </p>
                        </BioPart>
                    </HStack>
                </VStack>
                <VStack>
                    <Timeline />
                </VStack>
                <Card max>
                    <VStack className={cls.thanks} gap={'16'} align={'center'}>
                        <Card>
                            <Text
                                align={'center'}
                                title={t(
                                    'Thank you for being there and getting to know me better.',
                                )}
                            />
                        </Card>

                        <HStack
                            className={cls.linksContainer}
                            justify={'between'}
                            gap={'16'}
                        >
                            <Card>
                                <VStack gap={'8'} align={'center'}>
                                    <Text text={t('Social')} align={'center'} />
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
                                                width > 450
                                                    ? t('Email')
                                                    : undefined
                                            }
                                        />
                                    </HStack>
                                </VStack>
                            </Card>
                            <Card>
                                <VStack gap={'8'} align={'center'}>
                                    <Text
                                        text={t('Hard-skills')}
                                        align={'center'}
                                    />
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
                                                    ? 'GitHub'
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
                                                    ? t('Resume')
                                                    : undefined
                                            }
                                        />
                                    </HStack>
                                </VStack>
                            </Card>
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
        </Page>
    );
};

export default MainPage;
