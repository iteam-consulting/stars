import { Meta, Story } from '@storybook/react';
import DataTable, { DataTableProps } from './DataTable';
import han from './solo.jpeg';
import luke from './luke.png';
import { Layout, Avatar } from '..';

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

type StarWarsData = {
  user: { name: string; img: string };
  role: string;
};

const Template: Story<DataTableProps<StarWarsData>> = args => (
  <DataTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      user: { name: 'Han Solo', img: han },
      role: 'Scoundrel',
    },
    {
      user: { name: 'Luke Skywalker', img: luke },
      role: 'Jedi',
    },
  ],
  headers: [
    {
      title: 'Character',
      key: 'user',
      sortable: true,
      render: row => (
        <Layout mode="flex">
          <Avatar src={row.user.img} size="lg" />
          <Layout mode="flex" alignment="center" spacing="md">
            {row.user.name}
          </Layout>
        </Layout>
      ),
    },
    {
      title: 'Role',
      key: 'role',
      sortable: true,
    },
  ],
};
