import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogWrapper } from '../../logger/log-wrapper';
import { LogService } from '../../logger/log.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends LogWrapper implements OnInit, OnDestroy {

  constructor(
    protected logService: LogService
  ) {
    super(logService);
  }

  ngOnInit() {
  }
  
  ngOnDestroy() { }
}
