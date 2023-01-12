import { Component, DoCheck, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'roma-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = "Roma`s Hotel";
  numberOfRooms = "10";

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    allRooms: 15,
  }

  roomlist: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor() { }

  ngOnInit(): void {
    this.roomlist = [
      { roomType: 'with 2 bedrooms', roomNumber: 10, roomPrice: 200, roomQuality: 'good', roomFreeTime: new Date('10-11-2021'), roomRating: 4.53553, },
      { roomType: 'with 2 bedrooms', roomNumber: 15, roomPrice: 150, roomQuality: 'normal', roomFreeTime: new Date('11-1-2021'), roomRating: 3.1259, },
      { roomType: 'with 3 bedrooms', roomNumber: 16, roomPrice: 400, roomQuality: 'perfect', roomFreeTime: new Date('10-25-2021'), roomRating: 2.8665, },
    ]
  }

  ngDoCheck(): void {
    console.log("An event has happened");
  }

  title = 'Room list'

  funcName() {
    this.hideRooms = !this.hideRooms;
    this.title = "new title"
  }

  selectedRoomType!: Date;

  selectRoom(room: RoomList) {
    this.selectedRoomType = room.roomFreeTime;
  }

  addRoom() {
    const oneRoom: RoomList = { 
      roomType: 'with 1 bedroom and picturesque view', roomNumber: 22, roomPrice: 170, roomQuality: 'very good', roomFreeTime: new Date('10-15-2021'), roomRating: 4.865, 
    }
    // this.roomlist.push(oneRoom);
    this.roomlist = [...this.roomlist, oneRoom];
  }
  ngAfterViewInit(){
    this.headerComponent.header = "Header"
  }
  
}
