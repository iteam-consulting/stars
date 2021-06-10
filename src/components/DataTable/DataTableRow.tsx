import { forwardRef, HTMLAttributes } from 'react';

export type DataTableRowProps = {} & HTMLAttributes<HTMLTableRowElement>;

const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  function DataTableRow(props, ref) {
    return <tr {...props} ref={ref} />;
  }
);

export default DataTableRow;
