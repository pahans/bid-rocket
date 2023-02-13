import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from './App';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common UI/App',
  component: App,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'App',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'App',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'App',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'App',
};
