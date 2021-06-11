import { RecordOf, Set } from 'immutable';
import { Actions, DataTableState } from './DataTable.State';

type DataTableReducerType<T = any> = {
  (state: RecordOf<DataTableState<T>>, action: Actions<T>): RecordOf<
    DataTableState<T>
  >;
};

function DataTableStateReducer<T = any>(
  state: RecordOf<DataTableState<T>>,
  action: Actions<T>
) {
  switch (action.type) {
    case 'select':
      const mutated = state.asMutable();
      let rows: T[] = [];

      if (action.rows.length > 1) {
        rows = state.selected.isSubset(action.rows)
          ? Set(action.rows).subtract(state.selected).toArray()
          : action.rows;
      } else {
        rows = action.rows;
      }

      if (rows.length === 0) {
        mutated.update('selected', rows => rows.clear());
      } else {
        rows.forEach(row => {
          mutated.set(
            'selected',
            mutated.selected.includes(row)
              ? mutated.selected.remove(row)
              : mutated.selected.add(row)
          );
        });
      }

      mutated.set('all', mutated.selected.equals(state.data));
      mutated.set(
        'indeterminate',
        mutated.selected.count() > 0 && mutated.selected.isSubset(state.data)
      );

      return mutated.asImmutable();
    case 'sort':
      console.log(action);
      return state.sort?.column === action.column
        ? state.set('sort', { column: action.column, asc: !state.sort.asc })
        : state.set('sort', { column: action.column, asc: true });
    default:
      throw new Error('Invalid operation');
  }
}

export default DataTableStateReducer as DataTableReducerType;
