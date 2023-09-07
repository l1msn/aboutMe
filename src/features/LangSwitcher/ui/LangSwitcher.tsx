import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import LangButton from '../consts/LangButton';
import RuIcon from '@/shared/assets/icons/lang-ru.svg';
import EnIcon from '@/shared/assets/icons/lang-en.svg';
import Icon from '@/shared/ui/Icon';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher: React.FC<ILangSwitcherProps> = memo(
    ({ className }: ILangSwitcherProps): JSX.Element => {
        const { i18n } = useTranslation();

        function toggleLang(): void {
            i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en');
        }

        return (
            <Icon
                Svg={i18n.language == LangButton.EN ? EnIcon : RuIcon}
                clickable
                onClick={toggleLang}
                className={classNames(cls.LangSwitcher, {}, [className])}
            />
        );
    },
);

export default LangSwitcher;
