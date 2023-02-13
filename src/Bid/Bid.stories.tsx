import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WrappedBid } from './Bid';

export default {
  title: 'Common UI/Bid',
  component: WrappedBid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WrappedBid>;

const Template: ComponentStory<typeof WrappedBid> = (args) => <WrappedBid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Success = Template.bind({});
Success.args = {
  success: 'Your Bid of 0.30 placed successfully',
};

export const Error = Template.bind({});
Error.args = {
  error: 'There was error placing your bid',
};
