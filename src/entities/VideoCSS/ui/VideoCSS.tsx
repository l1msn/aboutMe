import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './VideoCSS.module.scss';
import { Card } from '@/shared/ui/Card';

interface IVideoCSSProps {
    className?: string;
}

const VideoCSS: React.FC<IVideoCSSProps> = memo(
    ({ className }: IVideoCSSProps): JSX.Element => {
        return (
            <Card max className={classNames(cls.videoCss, {}, [className])}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZYYOBhjtbco"
                    title="Интересная фишка для CSS"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Card>
        );
    },
);

export default VideoCSS;
