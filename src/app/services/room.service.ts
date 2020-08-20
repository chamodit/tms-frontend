import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http: HttpClient
  ) { }

  public createRoomInBuilding(building_id, room_name, room_type) {
    return this.http.post(`${AppConfig.environment}/buildings/${building_id}/rooms`, {room_name, room_type});
  }

}
