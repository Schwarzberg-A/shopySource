import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  param = 'none';

  constructor(private route: ActivatedRoute, public dataService: DataService) {
    this.route.queryParams.subscribe((queryParam) => {
      this.param = queryParam.param;
      // this.newArray = this.dataService.data
    });
  }
  }
