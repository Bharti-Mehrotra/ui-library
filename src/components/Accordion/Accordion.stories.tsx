import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Accordion from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        title: "Basic Accordion",
        content: "This is the content of the basic accordion.",
    },
};

export const LongContent: Story = {
    args: {
        title: "Accordion with Long Content",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
    },
};

export const MultipleAccordions = () => (
  <>
    <Accordion title="Section 1" content="Content for section 1." />
    <Accordion title="Section 2" content="Content for section 2." />
    <Accordion title="Section 3" content="Content for section 3." />
  </>
);
