import { Injectable, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { LogService } from '../logger/log.service';
import { LogWrapper } from '../logger/log-wrapper';

@Injectable({
  providedIn: 'root'
})
export class DataService extends LogWrapper implements OnDestroy {

  constructor(
    protected logService: LogService
  ) {
    super(logService);
  }
  
  ngOnDestroy() {}
  
  public getData(args: string) {
    return of({
      fakeData: [1, 2, 3],
    }).pipe(
      delay(1000)
    );
  }
}
