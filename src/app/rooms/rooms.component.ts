import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'roma-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "Roma`s Hotel";
  numberOfRooms = "10";

  hideRooms = false;

  rooms : Room = {
    availableRooms: 10,
    bookedRooms:5,
    allRooms:15,
  }

  roomlist: RoomList[] = [
    {roomType:'with 2 bedrooms',roomNumber:10, roomPrice:200, roomQuality:'good', roomFreeTime: new Date('10-11-2021'), roomRating: 4.53553,},
    {roomType:'with 2 bedrooms',roomNumber:15, roomPrice:150, roomQuality:'normal', roomFreeTime: new Date('11-1-2021'), roomRating: 3.1259,},
    {roomType:'with 3 bedrooms',roomNumber:16, roomPrice:400, roomQuality:'perfect', roomFreeTime: new Date('10-25-2021'), roomRating: 2.8665,},
  ]

  funcName(){
    this.hideRooms = !this.hideRooms;
  }
}
