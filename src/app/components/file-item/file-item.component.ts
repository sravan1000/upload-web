import { Component, OnInit, Input } from '@angular/core';
import {FileInfo} from '../../models/FileInfo';
@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() fileItem:FileInfo; 
  
  constructor() { }

  ngOnInit() {
  }

}
