import { Meta, Story } from '@storybook/react';
import DataTable, { DataTableProps } from './DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const Template: Story<DataTableProps> = args => <DataTable {...args} />;

export const Default = Template.bind({});
