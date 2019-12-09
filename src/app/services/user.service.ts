import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {FileInfo} from '../models/FileInfo';
import { Router } from '@angular/router';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  api_url:string = 'http://localhost:5000';

  constructor(private http:HttpClient, private router: Router) { }

  register(userData){
    let end_point = "/register";
    console.log("user data in service...",userData);
    var result = this.http.post(this.api_url+end_point,userData).subscribe(res=>{
      console.log("result of subsribe is..",res);
      if(res["type"] == "success"){
        alert("successfully Registered.");
      }
    });

  }
  validate(userData){

    let end_point = "/validate";

    console.log("user data in validate service...",userData);

    var result = this.http.post(this.api_url+end_point,userData).subscribe(res=>{
      console.log("result of subsribe is..",res);
      if((res["type"] == "success") && res["token"]){
        alert("successfully loged in");
        localStorage.setItem('token', res["token"]);
      }else{
          console.log("redirect to login..");
          this.router.navigate(['/register']);
      }
    });

  }
}
