import { Meta, Story } from '@storybook/react';
import Button from '../Button/Button';
import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = args => (
  <DropdownMenu {...args}>
    <Button>Dropdown</Button>
    <ul style={{ padding: '1rem', margin: 0, listStyle: 'none' }}>
      <li>
        <a href="#">Option 1</a>
      </li>
      <li>Option 2</li>
      <li>Option 3</li>
    </ul>
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};
