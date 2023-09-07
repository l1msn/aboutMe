import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Tabs from './Tabs';
import { action } from '@storybook/addon-actions';
import Themes from '@/shared/consts/theme';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        tabs: [
            {
                value: 'value 1',
                content: 'content 1',
            },
            {
                value: 'value 2',
                content: 'content 2',
            },
        ],
        value: 'tab 2',
        onTabClick: action('Click Tab 2'),
    },
};
