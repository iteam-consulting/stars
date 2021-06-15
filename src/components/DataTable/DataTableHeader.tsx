import classNames from 'classnames';
import { useContext } from 'react';
import { Checkbox } from '..';
import { renderable, sorted } from './DataTable.Helpers';
import {
  DataTableContext,
  DataTableHeader as DataTableHeaderType,
  select,
  sort,
} from './DataTable.State';
import DataTableCell from './DataTableCell';
import DataTableRow from './DataTableRow';

type DataTableHeaderProps<T = any> = {
  headers: Array<DataTableHeaderType<T>>;
};

function DataTableHeader<T extends Object = any>({
  headers,
}: DataTableHeaderProps<T>) {
  const { state, dispatch } = useContext(DataTableContext);
  return (
    <thead>
      <DataTableRow>
        <DataTableCell header>
          <Checkbox
            key="__selector"
            indeterminate={state.indeterminate}
            checked={state.all}
            onChange={() => dispatch(select(state.data.toArray()))}
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
  );
}

export default DataTableHeader;
