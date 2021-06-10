import { forwardRef, HTMLAttributes } from 'react';

export type DataTableCellProps = {
  header?: boolean;
} & HTMLAttributes<HTMLTableCellElement>;

const DataTableCell = forwardRef<HTMLTableCellElement, DataTableCellProps>(
  function DataTableCell(props, ref) {
    const { header, ...rest } = props;
    return header ? <th {...rest} ref={ref} /> : <td {...rest} ref={ref} />;
  }
);

export default DataTableCell;
