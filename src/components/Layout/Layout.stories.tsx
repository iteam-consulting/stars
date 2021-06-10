import { Meta, Story } from '@storybook/react';
import Layout, { LayoutProps } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Layout',
  style: {
    backgroundColor: 'cornflowerblue',
  },
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  children: '250px',
  style: {
    width: 250,
    backgroundColor: 'cornflowerblue',
  },
  mode: 'absolute',
};
