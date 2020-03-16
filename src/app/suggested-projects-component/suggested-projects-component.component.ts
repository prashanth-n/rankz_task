import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../services/mock-api.service';

@Component({
  selector: 'app-suggested-projects-component',
  templateUrl: './suggested-projects-component.component.html',
  styleUrls: ['./suggested-projects-component.component.scss']
})
export class SuggestedProjectsComponentComponent implements OnInit {

  constructor(private dataService: MockapiService) { }
  suggestedProjects;
  ngOnInit(): void {
    this.dataService.getSuggestedProject().subscribe(res => {
      this.suggestedProjects = res;
    });
  }

}
