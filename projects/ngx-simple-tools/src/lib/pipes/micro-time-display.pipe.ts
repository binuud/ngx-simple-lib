import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'microTimeDisplay'
})
// example numer | microTimeDisplay:"nano"
// example numer | microTimeDisplay:"micro"
export class MicroTimeDisplayPipe implements PipeTransform {

  transform(value: string | number | undefined, fromUnit: 'nano' | 'milli' | 'sec' = "nano"): string {

    let ms = 0;
    if (value === undefined) return "";
    if (typeof value === 'string') {
      ms = parseInt(value)
    } else {
      ms = value;
    }
   
    if (fromUnit == 'nano') {
      
      if (ms < 1000) {
        return `${(ms).toFixed(0)}ns`;
      }
      ms = ms/1000;
      if (ms < 1000) {
        return `${(ms).toFixed(3)}μs`;
      }
      ms = ms/1000;
    } 
    
    if (fromUnit == 'milli' || fromUnit == 'nano') {
      if (ms < 1000) {
        return `${(ms).toFixed(3)}ms`;
      }
      ms = ms/1000;
    }




    if (ms < 60) {
      return `${(ms).toFixed(3)}s`;
    }
    ms = ms/60;
    let rem = ms % 60;
    if (ms < 60) {
      return `${(ms).toFixed(0)}.${rem}m`;
    }
    ms = ms/60;
    rem = ms % 60;
    if (ms < 60) {
      return `${(ms).toFixed(0)}.${rem}h`;
    } 
    return ""; 
  }

}
