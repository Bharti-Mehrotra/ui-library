import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Section 1",
        cardTitle: "Card 1",
        cardContent: "This is the content of card 1.",
      },
      {
        title: "Section 2",
        cardTitle: "Card 2",
        cardContent: "This is the content of card 2.",
      },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        title: "Only Section",
        cardTitle: "Single Card",
        cardContent: "This is the only card in the accordion.",
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    items: [
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
    ],
  },
};
