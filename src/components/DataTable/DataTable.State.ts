import { Record, Set } from 'immutable';

export type DataTableState<T = any> = {
  sort?: {
    column: keyof T;
    asc: boolean;
  };
  selected: Set<T>;
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
  sort: undefined,
});

export default DataTableStateRecordType;
