import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortField: string): any {
    if (!sortField) return value;
    if (!value.length || value.length === 1) return value;

    if (Number(value[0][sortField]) != NaN) return value.sort((a, b) => a[sortField] < b[sortField] ? -1 : 1);
    if (value[0][sortField] instanceof Date) return value.sort((a, b) => a[sortField] < b[sortField] ? -1 : 1);

    return value.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }

}
