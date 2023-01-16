import { Component, DoCheck, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, OnDestroy, Optional } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'roma-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  hotelName = "Roma`s Hotel";
  numberOfRooms = "10";

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    allRooms: 15,
  }

  roomlist: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!:  HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;
  
  // roomService = new RoomsService();

  constructor(@Optional() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomlist = this.roomsService.getRooms();
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
    // this.headerComponents.forEach
    this.headerComponents.last.header = "Last Header"
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
    
  }
  
}
