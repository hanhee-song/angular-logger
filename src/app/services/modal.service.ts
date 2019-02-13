import { LogService } from './../logger/log.service';
import { Injectable, OnDestroy } from '@angular/core';
import { LogWrapper } from '../logger/log-wrapper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends LogWrapper implements OnDestroy {
  private modalSubject: Subject<boolean> = new Subject<boolean>();
  private isOpen: boolean = true;

  constructor(
    protected logService: LogService
  ) {
    super(logService);
    
    this.modalSubject.subscribe(isOpen => this.isOpen = isOpen);
  }
  
  ngOnDestroy() { }
  
  public closeModel() {
    this.modalSubject.next(false);
  }
  
  public openModal() {
    this.modalSubject.next(true);
  }
  
  public getModalSubject() {
    return this.modalSubject;
  }
}
