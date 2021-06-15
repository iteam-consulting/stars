import { HTMLAttributes, useReducer } from 'react';
import { Set } from 'immutable';
import classNames from 'classnames';
import DataTableStateRecordType, {
  DataTableHeader as DataTableHeaderType,
  SortEventDirection,
  DataTableContext,
} from './DataTable.State';
import DataTableStateReducer from './DataTable.Reducer';
import './DataTable.scss';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

export type DataTableEvents<T = any> = {
  onSort?: (col: keyof T, direction: SortEventDirection) => Promise<T[]>;
};

export type DataTableInnerProps<T = any> = {
  data: T[];
  headers: Array<DataTableHeaderType<T>>;
  offset?: number;
  limit?: number;
};

export type DataTableProps<T = any> = {
  dense?: boolean;
} & DataTableInnerProps<T> &
  DataTableEvents<T> &
  HTMLAttributes<HTMLTableElement>;

function DataTable<T extends Object = any>(props: DataTableProps<T>) {
  const {
    data,
    headers,
    offset,
    limit,
    dense,
    className,
    onSort,
    ...rest
  } = props;

  const [state, dispatch] = useReducer(
    DataTableStateReducer,
    DataTableStateRecordType({ data: Set(data) })
  );
  const classes = classNames(className, { dense });

  return (
    <DataTableContext.Provider value={{ state, dispatch }}>
      <div className="table">
        <table {...rest} className={classes}>
          <DataTableHeader headers={headers} />
          <DataTableBody headers={headers} offset={offset} limit={limit} />
        </table>
      </div>
    </DataTableContext.Provider>
  );
}

export default DataTable;
