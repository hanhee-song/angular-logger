import { ModalService } from './../../services/modal.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogWrapper } from '../../logger/log-wrapper';
import { LogService } from '../../logger/log.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends LogWrapper implements OnInit, OnDestroy {
  public cache: {
    data?: any,
  } = {};
  public data = {};
  public isLoaded: boolean;
  

  constructor(
    protected logService: LogService,
    private dataService: DataService,
    private modalService: ModalService
  ) {
    super(logService);
  }

  ngOnInit() {
    
    if (this.isCachePopulated()) {
      
    } else {
      this.initData();
    }
  }
  
  ngOnDestroy() { }
  
  private initData(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.modalService.openModal();
        this.dataService.getData("args").subscribe(this.initDataCallback.bind(this));
      }
    )});
  }
  
  private initDataCallback(data): void {
    this.modalService.closeModel();
    this.data = this.processData(data.fakeData);
    this.isLoaded = true;
    this.setCache(data.fakeData);
  }
  
  private processData(data: any[]) {
    return data.map(datum => datum * 2);
  }
  
  private isCachePopulated(): boolean {
    return !!this.cache.data;
  }
  
  private setCache(data): void {
    this.cache.data = data;
  }
}
