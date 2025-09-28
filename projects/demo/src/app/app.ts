import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgoTimePipe, FilterByPipe, SafePipe, StorageUnitsPipe, MicroTimeDisplayPipe } from 'ngx-simple-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StorageUnitsPipe, AgoTimePipe, MicroTimeDisplayPipe, SafePipe, FilterByPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('demo');
  now = new Date();


  storage = {
    valGB: 2613487599,
    valMB: 159645696,
    valKB: 10542
  }

  intervals: any;

  constructor() {


    const nowSec = Math.floor( this.now.getTime() / 1000 );
    this.intervals = {
      year: nowSec - 31536000 * 2,
      month: nowSec - 2592000 * 3,
      week: nowSec - 604800 * 4 ,
      day: nowSec - 86400 * 5,
      hour: nowSec - 3600 * 6,
      minute: nowSec - 60 * 4,
      second: nowSec - 1 *54
    };

  }

}
