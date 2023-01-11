import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'roma-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomList[] = [];

  @Input() title: string = ''

  @Output() selectedRoom= new EventEmitter<RoomList>();
   
  constructor(){}

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
