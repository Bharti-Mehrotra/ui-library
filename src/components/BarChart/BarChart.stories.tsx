import type { Meta, StoryObj } from '@storybook/react-vite';
import BarChartComponent from './BarChartComponent';

const meta: Meta<typeof BarChartComponent> = {
  title: 'Charts/BarChart',
  component: BarChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Bar Chart (Recharts)',
  render: () => (
    <div className="max-w-xl mx-auto">
      <BarChartComponent />
    </div>
  ),
};
