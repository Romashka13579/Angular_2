import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'roma-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  employeeName:string = 'Roma';

  constructor(private roomsService: RoomsService){}
   
  ngOnInit(): void {
    
  }
}
