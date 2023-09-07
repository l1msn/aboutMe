import React, { JSX, memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import SwitchIcon from '@/shared/assets/icons/theme.svg';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Icon from '@/shared/ui/Icon';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo(
    ({ className }: IThemeSwitcherProps): JSX.Element => {
        const { toggleTheme } = useTheme();

        const dispatch = useAppDispatch();

        return (
            <Icon
                Svg={SwitchIcon}
                className={cls.icon}
                onClick={toggleTheme}
                clickable
            />
        );
    },
);

export default ThemeSwitcher;
