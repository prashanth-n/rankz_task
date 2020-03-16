import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../services/mock-api.service';

@Component({
  selector: 'app-activity-component',
  templateUrl: './activity-component.component.html',
  styleUrls: ['./activity-component.component.scss']
})
export class ActivityComponentComponent implements OnInit {

  constructor(private apiService: MockapiService) { }
  earningsAcctivityData;
  ngOnInit(): void {
    this.apiService.getActivityAndEarnings().subscribe(res => {
      this.earningsAcctivityData = res;
    });
  }

}
