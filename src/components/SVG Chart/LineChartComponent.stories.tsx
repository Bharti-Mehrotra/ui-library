import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import LineChartComponent from './LineChartComponent';

const meta: Meta<typeof LineChartComponent> = {
  title: 'Charts/LineChart',
  component: LineChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineChartComponent>;

export const Default: Story = {
  name: 'Line Chart',
  render: () => (
    <div className="max-w-xl mx-auto">
      <LineChartComponent />
    </div>
  ),
};
