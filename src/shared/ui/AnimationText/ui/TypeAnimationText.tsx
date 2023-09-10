import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import { Speed } from 'react-type-animation/dist/esm/components/TypeAnimation/index.types';
import { GranularSpeed } from 'react-type-animation/dist/cjs/components/TypeAnimation/index.types';

interface ITypeAnimationTextProps {
    className?: string;
    speed?: Speed | GranularSpeed;
    style?: React.CSSProperties;
    text: {
        ru: (string | number)[];
        en: (string | number)[];
    };
    repeat?: boolean;
    cursor?: boolean;
}

const TypeAnimationText: React.FC<ITypeAnimationTextProps> = (
    props: ITypeAnimationTextProps,
) => {
    const {
        className,
        repeat = false,
        cursor = true,
        style,
        speed,
        text,
    } = props;
    const { i18n } = useTranslation();

    return (
        <div>
            {i18n.language == 'en' && (
                <TypeAnimation
                    repeat={repeat ? Infinity : 0}
                    sequence={text.en}
                    speed={speed}
                    style={style}
                    cursor={cursor}
                />
            )}
            {i18n.language == 'ru' && (
                <TypeAnimation
                    repeat={repeat ? Infinity : 0}
                    sequence={text.ru}
                    speed={speed}
                    style={style}
                    cursor={cursor}
                />
            )}
        </div>
    );
};

export default TypeAnimationText;
