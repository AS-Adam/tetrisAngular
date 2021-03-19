import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(action: History[], field, dir = "asc"): History[] {
    if (!action) {
      return null;
    }
    return action.sort();
  }
}