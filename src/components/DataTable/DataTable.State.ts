import { Record, Set } from 'immutable';

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

const DataTableStateRecordType = Record<DataTableState>({
  selected: Set([]),
  data: Set([]),
  sort: undefined,
  indeterminate: false,
  all: false,
});

export default DataTableStateRecordType;
