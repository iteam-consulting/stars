import { Meta, Story } from '@storybook/react';
import SVGIcon, { SVGIconProps } from './SVGIcon';
import { ReactComponent as Icon } from './AddressBookIcon.svg';

export default {
  title: 'Components/SVGIcon',
  component: SVGIcon,
} as Meta;

const Template: Story<SVGIconProps> = args => <SVGIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Icon />,
};
