import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'roma-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];
   
  constructor(){}

  ngOnInit(): void {
    
  }
}
