import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Button, { ButtonType, ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },

    type: {
      control: { type: 'select' },
      options: Object.values(ButtonType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSize),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    label: 'Secondary',
  },
};

export const Danger: Story = {
  args: {
    type: ButtonType.Danger,
    label: 'Danger',
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.Small,
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};
