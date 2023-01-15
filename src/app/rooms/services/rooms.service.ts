import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  roomlist: RoomList[] = [
    { roomType: 'with 2 bedrooms', roomNumber: 10, roomPrice: 200, roomQuality: 'good', roomFreeTime: new Date('10-11-2021'), roomRating: 4.53553, },
    { roomType: 'with 2 bedrooms', roomNumber: 15, roomPrice: 150, roomQuality: 'normal', roomFreeTime: new Date('11-1-2021'), roomRating: 3.1259, },
    { roomType: 'with 3 bedrooms', roomNumber: 16, roomPrice: 400, roomQuality: 'perfect', roomFreeTime: new Date('10-25-2021'), roomRating: 2.8665, },
  ]
  getRooms(){
    return this.roomlist;
  }
}
