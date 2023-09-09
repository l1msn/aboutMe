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
        ru: string;
        en: string;
    };
}

const TypeAnimationText: React.FC<ITypeAnimationTextProps> = (
    props: ITypeAnimationTextProps,
) => {
    const { className, style, speed, text } = props;
    const { i18n } = useTranslation();

    return (
        <div>
            {i18n.language == 'en' && (
                <TypeAnimation
                    sequence={[text.en]}
                    speed={speed}
                    style={style}
                />
            )}
            {i18n.language == 'ru' && (
                <TypeAnimation
                    sequence={[text.ru]}
                    speed={speed}
                    style={style}
                />
            )}
        </div>
    );
};

export default TypeAnimationText;
