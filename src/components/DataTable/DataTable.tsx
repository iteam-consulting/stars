import { createElement, forwardRef, HTMLAttributes, useReducer } from 'react';
import Layout from '../Layout/Layout';
import DataTableCell from './DataTableCell';
import DataTableRow from './DataTableRow';
import DataTableStateRecordType, { select } from './DataTable.State';
import './DataTable.scss';
import { Set } from 'immutable';
import DataTableStateReducer from './DataTable.Reducer';
import Checkbox from '../Checkbox/Checkbox';

type DataTableHeader<T = any> = {
  title: string;
  key: keyof T;
  sortable?: boolean;
  render?: React.FunctionComponent<T>;
};

export type DataTableInnerProps<T = any> = {
  data: T[];
  headers: Array<DataTableHeader<T>>;
  offset?: number;
  limit?: number;
};

export type DataTableProps<T = any> = DataTableInnerProps<T> &
  HTMLAttributes<HTMLTableElement>;

const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
  function DataTable(props, ref) {
    const [state, dispatch] = useReducer(
      DataTableStateReducer,
      DataTableStateRecordType()
    );
    const { data, headers, offset, limit, ...rest } = props;
    const set = Set(data);

    return (
      <table {...rest} ref={ref}>
        <thead>
          <DataTableRow>
            <DataTableCell header>
              <Checkbox
                checked={state.selected.equals(set)}
                onClick={() => dispatch(select(data))}
              />
            </DataTableCell>
            {headers.map(header => (
              <DataTableCell header key={header.key as string}>
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
              <DataTableCell>
                <Checkbox
                  checked={state.selected.includes(row)}
                  onClick={() => dispatch(select([row]))}
                />
              </DataTableCell>
              {headers.map(header => (
                <DataTableCell key={header.key as string}>
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
