import { createElement, forwardRef, HTMLAttributes, useReducer } from 'react';
import { Set } from 'immutable';
import classNames from 'classnames';
import DataTableCell from './DataTableCell';
import DataTableRow from './DataTableRow';
import DataTableStateRecordType, {
  DataTableSortState,
  select,
  sort,
} from './DataTable.State';
import DataTableStateReducer from './DataTable.Reducer';
import Checkbox from '../Checkbox/Checkbox';
import './DataTable.scss';

type DataTableHeader<T = any> = {
  title: string;
  key: keyof T;
  sortable?: boolean;
  responsive?: {
    sm?: MediaQueryList;
    md?: MediaQueryList;
    lg?: MediaQueryList;
  };
  render?: React.FunctionComponent<T>;
};

export type DataTableInnerProps<T = any> = {
  data: T[];
  headers: Array<DataTableHeader<T>>;
  offset?: number;
  limit?: number;
};

export type DataTableProps<T = any> = {
  dense?: boolean;
} & DataTableInnerProps<T> &
  HTMLAttributes<HTMLTableElement>;

function renderable(header: DataTableHeader): boolean {
  return (
    !header.responsive ||
    Boolean(header.responsive.lg?.matches) ||
    Boolean(header.responsive.md?.matches) ||
    Boolean(header.responsive.sm?.matches)
  );
}

function sorted(header: DataTableHeader, sort?: DataTableSortState) {
  console.log(sort);
  return {
    asc: header.sortable && sort?.column === header.key && sort.asc,
    desc: header.sortable && sort?.column === header.key && !sort.asc,
  };
}

const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
  function DataTable(props, ref) {
    const { data, headers, offset, limit, dense, className, ...rest } = props;
    const [state, dispatch] = useReducer(
      DataTableStateReducer,
      DataTableStateRecordType({ data: Set(data) })
    );
    const classes = classNames({ dense });

    return (
      <div className="table">
        <table {...rest} className={classes} ref={ref}>
          <thead>
            <DataTableRow>
              <DataTableCell header>
                <Checkbox
                  key="__selector"
                  indeterminate={state.indeterminate}
                  checked={state.all}
                  onChange={() => dispatch(select(data))}
                />
              </DataTableCell>
              {headers.filter(renderable).map(header => (
                <DataTableCell
                  header
                  onClick={() => dispatch(sort(header.key))}
                  className={classNames(sorted(header, state.sort))}
                  key={header.key as string}
                >
                  {header.title}
                </DataTableCell>
              ))}
            </DataTableRow>
          </thead>
          <tbody>
            {data.slice(offset, limit).map(row => (
              <DataTableRow>
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
        </table>
      </div>
    );
  }
);

export default DataTable;
