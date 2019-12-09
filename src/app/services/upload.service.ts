import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  api_url:string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  uploadFiles(formData){

    let end_point = "/upload";

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      alert("upload started..");

      this.http.post(
        this.api_url+end_point, 
        formData,
        {headers: new HttpHeaders().set('Authorization', token )})
        .subscribe((response) => {

         console.log('response received is ', response);

         if(response["type"] == "fail"){

          alert("upload failed..");

         }else{

          alert("upload completed successfully..");
          
         }

      })

    }else{
      alert("Please Re login can not found authorization token");
    }
  }
}
