import { Component, OnInit } from '@angular/core';
import { Result, CoronaService } from '../corona.service';
import * as Loading from 'simple-loading-animation';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public isLoading = false;
  public isError = false;

  public gridData: Result[] = [];

  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    Loading.show();
    const intervalTimeout = 60000; // 1 minute

    setInterval(() => this.getData(), intervalTimeout);
    this.getData(); // initial startup
  }

  private getData() {
    this.coronaService.getData().then(
      (result: Result[]) => this.handleResult(result),
      (error: Error) => this.handleError(error),
    );
  }

  private handleResult(result: Result[]) {
    this.isError = this.isLoading = false;
    Loading.hide();
    this.gridData = result;
  }

  private handleError(error: Error) {
    console.error(error);
    Loading.hide();
    this.isLoading = false;
    this.isError = true;
  }
}
