import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import ArrowIcon from '@/shared/assets/icons/up-icon.svg';
import Icon from '@/shared/ui/Icon';
import cls from './ScrollToTopButton.module.scss';

interface IScrollToTopButtonProps {
    className?: string;
}

const ScrollToTopButton: React.FC<IScrollToTopButtonProps> = ({
    className,
}: IScrollToTopButtonProps): JSX.Element => {
    const onClickToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={cls.scroll}>
            <Icon
                Svg={ArrowIcon}
                onClick={onClickToTop}
                width={32}
                height={32}
                clickable
                className={classNames(cls.icon, {}, [className])}
            />
        </div>
    );
};

export default ScrollToTopButton;
