import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class FileitemsService {
  
  api_url:string = 'http://localhost:5000';

  constructor(private http: HttpClient, private router:Router) { }

  getFilesOfUser(){

    let end_point = "/files";

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      return this.http.get(this.api_url+end_point,{headers: new HttpHeaders().set('Authorization', token )})
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }
  }

  deleteFileOfUser(id){

    let end_point = '/deleteitem';

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      return this.http.post(this.api_url+end_point,{id},{headers: new HttpHeaders().set('Authorization', token )})
       
    }else{

      alert("Please Re login can not found authorization token");
      
      this.router.navigate(['/login']);

    }

  }

  downloadFileOfUser(id){

    let end_point = '/file';

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      return this.http.post(this.api_url+end_point,{id},{headers: new HttpHeaders().set('Authorization', token ),responseType: "blob"})
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }
  }

  toggleDataPricacy(dataObj){

    let { id, value } = dataObj;

    let end_point = "/updateprivacy";

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      return this.http.post(this.api_url+end_point,{id,is_public:value},{headers: new HttpHeaders().set('Authorization', token )})
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }

  }

  getAllPublicFiles(){

    let end_point = "/public";

    if (localStorage.getItem("token")) {

      let token = `Bearer ${localStorage.getItem("token")}`;

      return this.http.get(this.api_url+end_point,{headers: new HttpHeaders().set('Authorization', token )})
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }
  }


}
