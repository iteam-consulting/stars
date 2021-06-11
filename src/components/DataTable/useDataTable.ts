import { DataTableInnerProps } from './DataTable';

function useDataTable<T = any>(): DataTableInnerProps<T> {
  return {
    data: [],
    headers: [],
  };
}

export default useDataTable;
