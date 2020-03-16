import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http: HttpClient) { }
  getEarningsData() {
    return this.http.get('assets/data.json');
  }
  getSuggestedProject() {
    return this.http.get('assets/suggested.json');
  }
  getActivityAndEarnings() {
    return this.http.get('assets/activity-earnings.json');
  }
}
