import React, { JSX } from 'react';
import Page from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import VoxelDog from '@/features/3DModel/ui/VoxelDog';

const MainPage: React.FC = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Page data-testid={'MainPage'}>
            <VoxelDog/>
        </Page>
    );
};

export default MainPage;
