import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';
import Themes from '@/shared/consts/theme';
import '@/app/styles/index.scss';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        variant: 'primary',
    },
};

export const RedDark: Story = {
    args: {
        children: 'Link',
        variant: 'red',
    },
};
