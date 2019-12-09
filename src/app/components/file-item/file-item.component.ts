import { Component, OnInit, Input } from '@angular/core';
// import {FileInfo} from '../../models/FileInfo';
import { FileitemsService } from "../../services/fileitems.service";
import { Router } from '@angular/router'; 
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() fileItem; 
  
  constructor(private fileitemsService:FileitemsService, private router:Router) { }

  ngOnInit() {
  }

  onClickDelete(event){
    console.log("event..",event.target.value);
    let id = event.target.value;
    this.fileitemsService.deleteFileOfUser(id).subscribe(response =>{
      console.log("response after delete is",response);
      if(response["type"] == "success"){
        alert("file succesfully deleted...");
        location.reload();
      }
    });
  }

  onClickDownload(event){
    console.log("event..",event.target.value);
    let id = event.target.value;
    let original_name = event.target.name
    console.log(event.target.name);
    this.fileitemsService.downloadFileOfUser(id).subscribe(blob =>{
      console.log("blob data..",blob);
      if(blob["type"] && (blob["type"] == 'fail')){
        alert(blob["data"]);
      }else{
        saveAs(blob,original_name); 
      }
    });
  }

  onPublicToggle(event){
    console.log("checkbox toggle is..",event);
    let data = {
      id: event.target.id,
      value: event.target.checked
    }

    this.fileitemsService.toggleDataPricacy(data).subscribe(res =>{
      console.log("resposne of toggle is..",res);
      if(res["type"] === "success"){
        console.log("matching...");
      }
    })

  }

}
