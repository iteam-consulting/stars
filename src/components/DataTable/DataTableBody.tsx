import { createElement, useContext } from 'react';
import { Checkbox } from '..';
import { renderable } from './DataTable.Helpers';
import {
  DataTableContext,
  DataTableHeader as DataTableHeaderType,
  select,
  sort,
} from './DataTable.State';
import DataTableCell from './DataTableCell';
import DataTableRow from './DataTableRow';

type DataTableBodyProps<T = any> = {
  headers: Array<DataTableHeaderType<T>>;
  offset?: number;
  limit?: number;
};

function DataTableBody<T = any>({
  offset,
  limit,
  headers,
}: DataTableBodyProps<T>) {
  const { state, dispatch } = useContext(DataTableContext);

  return (
    <tbody>
      {state.data.slice(offset, limit).map((row, idx) => (
        <DataTableRow key={idx}>
          <DataTableCell>
            <Checkbox
              key="__selector"
              checked={state.selected.includes(row)}
              onChange={() => dispatch(select([row]))}
            />
          </DataTableCell>
          {headers.filter(renderable).map(header => (
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
  );
}

export default DataTableBody;
