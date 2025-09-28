import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storageUnits'
})
// StorageUnitsPipe
// convert bytes value automatically into corresponding bucket of b, kb, mb, gb, tb, pb, eb, zb, yb
// eg: value | storageUnits
// this will convert the bytes data into the closest bucket of storage units.
export class StorageUnitsPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    let ms = value;
    if (ms < 1000) {
      return `${(ms).toFixed(0)}b`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}kb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}mb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}gb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}tb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}pb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}eb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}zb`;
    }
    ms = ms/1000;
    if (ms < 1000) {
      return `${(ms).toFixed(3)}yb`;
    }
    return "Too Big"; 
  }

}
