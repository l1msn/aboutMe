import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import TranslationIcon from '@/shared/assets/icons/translate-icon.svg';
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
                width={50}
                height={50}
                Svg={TranslationIcon}
                clickable
                onClick={toggleLang}
                className={classNames(cls.LangSwitcher, {}, [className])}
            />
        );
    },
);

export default LangSwitcher;
