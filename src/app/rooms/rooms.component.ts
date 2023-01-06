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
    {roomType:'with 2 bedrooms',roomNumber:10, roomPrice:200, roomQuality:'good', roomFreeTime: new Date('10-11-2021')},
    {roomType:'with 2 bedrooms',roomNumber:15, roomPrice:150, roomQuality:'nopmal', roomFreeTime: new Date('13-10-2021')},
    {roomType:'with 3 bedrooms',roomNumber:16, roomPrice:400, roomQuality:'perfectd', roomFreeTime: new Date('21-10-2021')},
  ]

  funcName(){
    this.hideRooms = !this.hideRooms;
  }
}
