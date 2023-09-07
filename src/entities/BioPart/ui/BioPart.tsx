import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './BioPart.module.scss';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface IBioPartProps {
    className?: string;
    title?: string;
    right?: boolean;
    children: React.ReactNode;
}

const BioPart: React.FC<IBioPartProps> = ({
    className,
    title,
    children,
    right = false,
}: IBioPartProps): JSX.Element => {
    return (
        <VStack align={right ? 'end' : 'start'} max gap={'8'}>
            {title && (
                <Text
                    bold
                    title={title}
                    className={classNames(cls.title, {
                        [cls.right]: right,
                    })}
                />
            )}
            <Card className={classNames(cls.bioPart, {}, [className])}>
                {children}
            </Card>
        </VStack>
    );
};

export default BioPart;
