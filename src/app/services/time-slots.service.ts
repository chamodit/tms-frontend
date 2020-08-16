import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment.prod';
import { TimeSlots } from 'app/models/time-slots.model';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotsService {
  selectedTimeSlot:TimeSlots;

  constructor(private http: HttpClient) {
    this.selectedTimeSlot = new TimeSlots();
  }

  public postTimeSlots(timeSlots:TimeSlots) {
    return this.http.post(`${AppConfig.environment}/timeSlots`,timeSlots);
  }
}
