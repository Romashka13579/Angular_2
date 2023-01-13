import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'roma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular_2';

  loginType = 'Admin';

  @ViewChild('templateName', {static:true}) name! :ElementRef;

  ngOnInit(){
    this.name.nativeElement.innerText = "My Hotel"
  }
}
