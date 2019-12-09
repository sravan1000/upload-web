import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  fileData: File[] = null;
  constructor(private uploadService:UploadService) { }

  ngOnInit() {
    
  }

  onClickSubmit(){
    console.log("on submit pressed..");
    let formData = new FormData();
    for (var i = 0; i < this.fileData.length; i++) {
        formData.append("uploads[]", this.fileData[i], this.fileData[i].name);
    }
    this.uploadService.uploadFiles(formData);
   
  }
  onFileSelected(event){
    console.log(event);
    this.fileData = <File[]>event.target.files;
  }
}
