import { Record, Set } from 'immutable';
import { createContext } from 'react';

export type DataTableHeader<T = any> = {
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

export type DataTableSortState<T = any> = {
  column: keyof T;
  asc: boolean;
};

export type DataTableState<T = any> = {
  sort?: DataTableSortState<T>;
  data: Set<T>;
  selected: Set<T>;
  indeterminate: boolean;
  all: boolean;
};

export type SortEventDirection = 'asc' | 'desc';
export type SortEvent<T = any> = {
  type: 'sort';
  column: keyof T;
  direction: SortEventDirection;
};
export function sortEvent<T = any>(
  column: keyof T,
  direction: SortEventDirection
) {
  return {
    type: 'sort',
    column,
    direction,
  } as SortEvent<T>;
}

export type SortAction<T = any> = {
  type: 'sort';
  column: keyof T;
};
export function sort<T = any>(column: keyof T): SortAction<T> {
  return {
    type: 'sort',
    column,
  };
}

export type SelectAction<T = any> = {
  type: 'select';
  rows: Array<T>;
};
export function select<T = any>(rows: Array<T>): SelectAction<T> {
  return {
    type: 'select',
    rows,
  };
}

export type Actions<T = any> = SortAction<T> | SelectAction<T>;
export type Events<T = any> = SortEvent<T>;

const DataTableStateRecordType = Record<DataTableState>({
  selected: Set([]),
  data: Set([]),
  sort: undefined,
  indeterminate: false,
  all: false,
});

export const DataTableContext = createContext({
  state: DataTableStateRecordType(),
  dispatch: (action: Actions) => {},
});

export default DataTableStateRecordType;
