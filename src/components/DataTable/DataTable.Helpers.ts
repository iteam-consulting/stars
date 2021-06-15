import { DataTableHeader, DataTableSortState } from './DataTable.State';

export function renderable(header: DataTableHeader): boolean {
  return (
    !header.responsive ||
    Boolean(header.responsive.lg?.matches) ||
    Boolean(header.responsive.md?.matches) ||
    Boolean(header.responsive.sm?.matches)
  );
}

export function sorted(header: DataTableHeader, sort?: DataTableSortState) {
  return {
    asc: header.sortable && sort?.column === header.key && sort.asc,
    desc: header.sortable && sort?.column === header.key && !sort.asc,
  };
}
