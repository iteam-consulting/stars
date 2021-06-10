import { createElement, forwardRef, HTMLAttributes } from 'react';
import Layout from '../Layout/Layout';
import './DataTable.scss';
import DataTableCell from './DataTableCell';
import DataTableRow from './DataTableRow';

type DataTableHeader = {
  title: string;
  key: string;
  sortable?: boolean;
  render?: React.FunctionComponent<any>;
};

export type DataTableProps = {
  data: any[];
  headers: DataTableHeader[];
  offset?: number;
  limit?: number;
} & HTMLAttributes<HTMLTableElement>;

const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
  function DataTable(props, ref) {
    const { data, headers, offset, limit, ...rest } = props;

    return (
      <table {...rest} ref={ref}>
        <thead>
          <DataTableRow>
            {headers.map(header => (
              <DataTableCell header key={header.key}>
                <Layout mode="flex">
                  <Layout fill>{header.title}</Layout>
                  <Layout mode="flex" alignment="center" orientation="y">
                    {header.sortable && <span>Icon</span>}
                  </Layout>
                </Layout>
              </DataTableCell>
            ))}
          </DataTableRow>
        </thead>
        <tbody>
          {data.slice(offset, limit).map(row => (
            <DataTableRow>
              {headers.map(header => (
                <DataTableCell key={header.key}>
                  {row.hasOwnProperty(header.key) &&
                    (header.render
                      ? createElement(header.render, row)
                      : row[header.key])}
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </tbody>
      </table>
    );
  }
);

export default DataTable;
