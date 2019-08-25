import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StopwatchService } from './stopwatch.service';
import { StopwatchTime } from './stopwatch-time';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {

  time: StopwatchTime = { minutes: 0, seconds: 0 };

  subscription: Subscription;

  constructor(private stopwatchService: StopwatchService) { }

  ngOnInit() {
    const stopwatchObservable = this.stopwatchService.createStopwatch();

    this.subscription = stopwatchObservable.subscribe(time => {
      this.time = time;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
