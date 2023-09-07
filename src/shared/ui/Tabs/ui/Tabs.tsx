import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import ITabItem from '../types/ITabItem';
import { Card } from '../../Card';
import Flex from '../../Stack/Flex';
import FlexDirection from '../../Stack/Flex/consts/FlexDirection';
import TestProps from '@/shared/types/tests';

interface ITabsProps extends TestProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
    direction?: FlexDirection;
}

const Tabs: React.FC<ITabsProps> = (props: ITabsProps): JSX.Element => {
    const {
        className,
        onTabClick,
        tabs,
        value,
        direction = 'row',
        'data-testid': dataTestId = 'Tabs',
    } = props;

    const onClickHandle = useCallback(
        (tab: ITabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap={'8'}
            className={classNames(cls.tabs, {}, [className])}
        >
            {tabs.map((tab, index) => (
                <Card
                    onClick={onClickHandle(tab)}
                    variant={'outline'}
                    data-testid={`${dataTestId}.${tab.value}`}
                    className={classNames(
                        cls.tab,
                        { [cls.selected]: tab.value === value },
                        [className],
                    )}
                    key={tab.value}
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
};

export default Tabs;
