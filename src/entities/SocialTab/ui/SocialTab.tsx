import React, { JSX, memo } from 'react';
import cls from './SocialTab.module.scss';
import Icon from '@/shared/ui/Icon';
import AppLink from '@/shared/ui/AppLink';
import Button from '@/shared/ui/Button';

interface ISocialTabProps {
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    motionIcon?: React.ReactNode;
    content?: string;
    to: string;
}

const SocialTab: React.FC<ISocialTabProps> = memo(
    ({ icon, content, to, motionIcon }: ISocialTabProps): JSX.Element => {
        return (
            <Button variant={'accept'} className={cls.icon}>
                {icon && <Icon Svg={icon} />}
                {motionIcon && motionIcon}
                {content && (
                    <AppLink target="_blank" to={to}>
                        {content}
                    </AppLink>
                )}
            </Button>
        );
    },
);

export default SocialTab;
