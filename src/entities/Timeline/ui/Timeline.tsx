import React, { JSX, memo } from 'react';
import './Timeline.scss';
import Motion from '@/shared/ui/Motion';
import { HStack } from '@/shared/ui/Stack';
import cls from '@/pages/MainPage/ui/MainPage.module.scss';
import { Text } from '@/shared/ui/Text';
import ParallaxText from '@/widgets/ParallaxText';
import { useTranslation } from 'react-i18next';

interface ITimelineProps {
    className?: string;
}

const Timeline: React.FC<ITimelineProps> = memo(
    ({ className }: ITimelineProps): JSX.Element => {
        return (
            <div className="timeline-section">
                <div className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2016</div>
                        <div className="timeline-content">
                            <h3>Lazarus | Delphi</h3>
                            <h5>Визуальная новелла</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2017</div>
                        <div className="timeline-content">
                            <h3>CSS | HTML</h3>
                            <h5>Создание своего первого сайта</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018</div>
                        <div className="timeline-content">
                            <h3>C++</h3>
                            <h5>Новый и жестокий мир</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2020</div>
                        <div className="timeline-content">
                            <h3>Java</h3>
                            <h5>Первая стажировка</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2021</div>
                        <div className="timeline-content">
                            <h3>TypeScript | Node | Express</h3>
                            <h5>Новая надежда</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2022</div>
                        <div className="timeline-content">
                            <h3>React | Redux | Webpack</h3>
                            <h5>Первая работа и начало нового пути</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);

export default Timeline;
