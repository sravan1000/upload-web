import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onClickSubmit(form){
    console.log(form);
    let email = form.email;
    let password = form.password;
    let re_password = form.re_password;
    if(!email){ alert("Please enter email address")}
    else if(!(password && re_password)){ alert("Please enter password!")}
    else if(password !== re_password){ alert("password deoesn't match!")}
    else{
      console.log("form is entering to service called from submit..",form);
      this.userService.register(form);
    }
  }
}
