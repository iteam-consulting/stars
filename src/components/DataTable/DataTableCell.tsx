import classNames from 'classnames';
import { createElement, forwardRef, HTMLAttributes } from 'react';

export type DataTableCellProps = {
  header?: boolean;
} & HTMLAttributes<HTMLTableCellElement>;

const DataTableCell = forwardRef<HTMLTableCellElement, DataTableCellProps>(
  function DataTableCell(props, ref) {
    const { header, onClick, className, ...rest } = props;
    const classes = classNames(className, {
      clickable: Boolean(onClick),
    });

    return createElement(header ? 'th' : 'td', {
      className: classes,
      onClick,
      ref,
      ...rest,
    });
    // return header ? (
    //   <th {...rest} onClick={onClick} className={classes} ref={ref} />
    // ) : (
    //   <td {...rest} onClick={onClick} className={classes} ref={ref} />
    // );
  }
);

export default DataTableCell;
