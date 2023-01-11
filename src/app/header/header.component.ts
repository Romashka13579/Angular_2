import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  header:string = 'Header';

  constructor(){}

  ngOnInit(): void {
    
  }
}
