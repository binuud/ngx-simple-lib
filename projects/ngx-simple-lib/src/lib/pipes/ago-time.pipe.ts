import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agoTime'
})

// AgoTimePipe
// convert time in seconds into [some time] ago text
// eg: like 5 years ago, 3 months ago, 10 days ago
export class AgoTimePipe implements PipeTransform {

  transform(value: number | string | undefined ): string {
    if (!value) return '';
    if (typeof value === 'string') {
      value = parseInt(value);
    }
    interface AgoTimeMap {
      [key: string]: number 
    }

    const currentTime = Math.floor(Date.now() / 1000); // Current Unix time in seconds
    const seconds = currentTime - value;
    
    const intervals :AgoTimeMap = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0) {
        if (counter === 1) {
          return counter + ' ' + i + ' ago'; // singular (1 day ago)
        } else {
          return counter + ' ' + i + 's ago'; // plural (2 days ago)
        }
      }
    }

    // If less than a second, show as 'just now'
    return 'just now';
  }

}
