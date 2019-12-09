import { Component, OnInit } from '@angular/core';
import {FileInfo } from '../../models/FileInfo';
import { FileitemsService } from '../../services/fileitems.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-files-info',
  templateUrl: './files-info.component.html',
  styleUrls: ['./files-info.component.css']
})
export class FilesInfoComponent implements OnInit {

  filesInfo = [];

  constructor(private fileitemsService:FileitemsService,  private router:Router) { }

  ngOnInit() {
    
    if (localStorage.getItem("token")) {

      this.fileitemsService.getFilesOfUser().subscribe((response) => {

          console.log('response received is ', response);

          if(response["type"] == "success"){

            this.filesInfo = response["data"];

          }

      })
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }
  
  }

}
