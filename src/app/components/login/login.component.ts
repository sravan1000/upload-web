import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onClickSubmit(form){
    console.log(form);
    let email = form.email;
    let password = form.password;
    if(!email){ alert("Please enter email address")}
    else if(!password){ alert("Please enter password!")}
    else{
      console.log("form is entering to service called from submit..",form);
      this.userService.validate(form);
    }
  }

}
