import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {


  transform(items: any[], searchText: string, fieldName: string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText || searchText === '') { return items; }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();
    // console.log("searchText ", searchText, fieldName );

    return items.filter(item => {
      const fieldVal = this.getPropByString(item, fieldName);
      if (fieldVal) {
        return fieldVal.toLowerCase().includes(searchText);
      }
      return item;
    });
  }

  // get deep nested field
  getPropByString(obj: any, propString: string) {
    if (!propString)
      return obj;
  
    var prop, props = propString.split('.');
  
    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
      prop = props[i];
  
      var candidate = obj[prop];
      if (candidate !== undefined) {
        obj = candidate;
      } else {
        break;
      }
    }
    return obj[props[i]];
  }
  

}
