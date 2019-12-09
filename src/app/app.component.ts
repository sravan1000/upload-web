import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Please upload Files you wanted..';

  constructor(){
    // this.title = "hello changed.."
    this.changeName("new title..");
  }

  changeName(name:string) {
    this.title = name;
  }
}
