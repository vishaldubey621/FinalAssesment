import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm: any[]): unknown {
    return value.filter(function(search){
      return search.firstname.toLowerCase().indexOf(searchterm).toLowerCase() > -1
    })
  }

}