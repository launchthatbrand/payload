import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

// Story type definitions
type Story = {
  args: {
    0?: any;
  };
};


export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // Enable automatic documentation
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
  argTypes: {
    0: {
      control: { type: 'text' },
    },

  }
};



// Template for component
const Template = (args: any) => <Button {...args} />;

// Default story
export const Default = Template.bind({}) as Story;
Default.args = {
  0: undefined,

};


