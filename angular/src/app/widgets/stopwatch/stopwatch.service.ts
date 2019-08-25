import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StopwatchTime } from './stopwatch-time';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  createStopwatch(): Observable<StopwatchTime> {
    const numbers = interval(1000);
    const stopwatchObservable = numbers.pipe(map(counter => {
      counter = counter + 1;
      const minutes = Math.floor(counter / 60);
      const seconds = counter % 60;
      const result = { minutes, seconds };
      return result;
    }));
    return stopwatchObservable;
  }
}
