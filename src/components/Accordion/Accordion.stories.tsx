import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from './Accordion';
import { AccordionType, AccordionSize } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(AccordionType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(AccordionSize),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// const sampleItems = [
//   { title: 'Section 1', content: 'Content for section 1' },
//   { title: 'Section 2', content: 'Content for section 2' },
//   { title: 'Section 3', content: 'Content for section 3' },
// ];

const sampleItems = [
      {
        title: "Introduction",
        cardTitle: "Intro Card",
        cardContent: "Welcome to the introduction section.",
      },
      {
        title: "Details",
        cardTitle: "Details Card",
        cardContent: "Here are more details about the topic.",
      },
      {
        title: "Conclusion",
        cardTitle: "Conclusion Card",
        cardContent: "This is the conclusion of the accordion.",
      },
    ]

export const SingleMedium: Story = {
  args: {
    type: AccordionType.Single,
    size: AccordionSize.Medium,
    items: sampleItems,
  },
};

export const MultipleLarge: Story = {
  args: {
    type: AccordionType.Multiple,
    size: AccordionSize.Large,
    items: sampleItems,
  },
};

export const SingleSmall: Story = {
  args: {
    type: AccordionType.Single,
    size: AccordionSize.Small,
    items: sampleItems,
  },
};
