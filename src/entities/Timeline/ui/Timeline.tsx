import React, { JSX, memo, useRef } from 'react';
import './Timeline.scss';
import { HStack } from '@/shared/ui/Stack';
import { useInView } from 'framer-motion';
import TypeAnimationText from '@/shared/ui/AnimationText';
import { useTranslation } from 'react-i18next';

interface ITimelineProps {
    className?: string;
}

const Timeline: React.FC<ITimelineProps> = memo(
    ({ className }: ITimelineProps): JSX.Element => {
        const ref = useRef<HTMLDivElement>(null);
        const { t } = useTranslation();
        const inView = useInView(ref);
        return (
            <div ref={ref}>
                <HStack className="logo" max gap={'16'} justify={'center'}>
                    {inView ? (
                        <TypeAnimationText
                            speed={80}
                            text={{
                                ru: ['Мой путь в IТ'],
                                en: ['My Path in IT'],
                            }}
                            style={{
                                fontSize: '23px',
                                paddingTop: '10px',
                            }}
                        />
                    ) : (
                        <div></div>
                    )}
                </HStack>
                <div className="timeline-section">
                    <div className="timeline-items">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2016</div>
                            <div className="timeline-content">
                                <h3>Lazarus | Delphi</h3>
                                <h5>{t('Visual Novel')}</h5>
                                <p>
                                    {t(
                                        'Since school I began to be interested in programming, thanks to my teacher I discovered Lazarus | Delphi and development desktop applications. I created my first game and realized the beauty of programming.',
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2017</div>
                            <div className="timeline-content">
                                <h3>CSS | HTML</h3>
                                <h5>{t('Creating my first website')}</h5>
                                <p>
                                    {t(
                                        'I created my first website and realized that the front end is a very cool thing, since you can immediately feel what you have done.',
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2018</div>
                            <div className="timeline-content">
                                <h3>C++ | STL | Boost</h3>
                                <h5>{t('New world')}</h5>
                                <p>
                                    {t(
                                        'In the army and at the university I studied C++ and realized that programming in it is also a quest to find pointers. I started working as a freelancer and creating custom, complex Allocators.',
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2020</div>
                            <div className="timeline-content">
                                <h3>Java EE | Spring</h3>
                                <h5>{t('First internship')}</h5>
                                <p>
                                    {t(
                                        'Switched to a more popular technology stack and completed my first internship. Learned to work in a team and work with the backend. I attached it to my old website and, one might say, created my first Web FullStack application.',
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2021</div>
                            <div className="timeline-content">
                                <h3>TypeScript | Node | Express</h3>
                                <h5>{t('New hope')}</h5>
                                <p>
                                    {t(
                                        'I decided to improve my front-end skills and realized that you can write everything in JavaScript. I understood all its simplicity and conciseness, and my experience after Java gave me an excellent basis for moving to a new backend stack.',
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2022</div>
                            <div className="timeline-content">
                                <h3>React | Redux | Webpack</h3>
                                <h5>
                                    {t(
                                        'First job and the beginning of a new path',
                                    )}
                                </h5>
                                <p>
                                    {t(
                                        'I graduated from university, found my first job, and learned the beauty of commercial development. Gained incredible practical experience in front-end and working with a team.',
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);

export default Timeline;
