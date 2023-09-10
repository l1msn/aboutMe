import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './BioPart.module.scss';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface IBioPartProps {
    className?: string;
    title?: string;
    children: React.ReactNode;
}

const BioPart: React.FC<IBioPartProps> = ({
    className,
    title,
    children,
}: IBioPartProps): JSX.Element => {
    return (
        <VStack align={'center'} max gap={'8'}>
            {title && (
                <Text
                    bold
                    title={title}
                    className={classNames(cls.title, {})}
                />
            )}
            <Card className={classNames(cls.bioPart, {}, [className])}>
                {children}
            </Card>
        </VStack>
    );
};

export default BioPart;
