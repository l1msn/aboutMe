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
import Button from '@/shared/ui/Button';
import { TypeAnimation } from 'react-type-animation';
import AppLink from '@/shared/ui/AppLink';

const MainPage: React.FC = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    return (
        <Page data-testid={'MainPage'}>
            <VStack align={'center'} justify={'center'}>
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
                                    'Обычный человек, мечтающий стать программистом Fullstack Web Developer 🚀',
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
                            text={t('IT Geek ( Developer / Designer / Gamer )')}
                        />
                    </VStack>
                    <Avatar
                        alt={'foto'}
                        src={'https://i.imgur.com/x4YlWAO.jpg'}
                    />
                </HStack>
                <VStack align={'center'} gap={'16'}>
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
                    <BioPart right title={t('Biography')}>
                        <HStack max>
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
                            <Card className={cls.newFoto}>
                                <Avatar
                                    alt={'foto'}
                                    src={'https://i.imgur.com/x4YlWAO.jpg'}
                                />
                            </Card>
                        </HStack>
                    </BioPart>
                    <Button variant={'accept'}>
                        <AppLink
                            target="_blank"
                            to="https://drive.google.com/file/d/1dJpyjpR03_uOZ1Yl3j4NiNmuB5vCIgWD/view?usp=sharing"
                        >
                            {t('Portfolio')}
                        </AppLink>
                    </Button>
                </VStack>
            </VStack>
        </Page>
    );
};

export default MainPage;
