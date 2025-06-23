
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
args: {
  title: 'Basic Card',
  description: 'This is a basic card without image or footer.',
},
};

export const WithImage:Story = {
  args: {
  title: 'Card with Image',
  description: 'This card includes an image at the top.',
  image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop',
},
};


export const WithFooter:Story = {
args: {
  title: 'Card with Footer',
  description: 'This card includes a footer section.',
  footer: <button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>,
},
};

export const FullCard:Story = {
args: {
  title: 'Full Card',
  description: 'This card includes an image and a footer.',
  image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop',
  footer: <div className="text-sm text-gray-500">Footer content here</div>,
},
};
