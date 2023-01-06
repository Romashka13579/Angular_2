import { Component } from '@angular/core';

@Component({
  selector: 'roma-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "Roma`s Hotel";
  numberOfRooms = "10";

  hideRooms = false;
  
  funcName(){
    this.hideRooms = !this.hideRooms;
  }
}
