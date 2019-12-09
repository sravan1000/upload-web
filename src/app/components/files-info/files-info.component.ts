import { Component, OnInit } from '@angular/core';
import {FileInfo } from '../../models/FileInfo';
@Component({
  selector: 'app-files-info',
  templateUrl: './files-info.component.html',
  styleUrls: ['./files-info.component.css']
})
export class FilesInfoComponent implements OnInit {

  filesInfo:FileInfo[];

  constructor() { }

  ngOnInit() {

    
    this.filesInfo = [
      {
        id:"1",
        name: "ssss.jpg",
        size: "20kb",
        path: "desktop/help",
        public_access: false,
        uploaded_on: new Date(),
      },
      {
        id:"2",
        name: "ssss2.jpg",
        size: "20kb",
        path: "desktop/help2",
        public_access: false,
        uploaded_on: new Date(),
      }
    ]

  }

}
