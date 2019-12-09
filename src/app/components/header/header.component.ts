import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttons = [
    {value:"home",link:"/home"},
    {value:"public", link:"/public"},
    // {value:"publications", link:"/publications"},
    {value:"upload",link:"/upload"},
    {value:"logout",link:"/logout"}]
  constructor() { }

  ngOnInit() {
  }

}
