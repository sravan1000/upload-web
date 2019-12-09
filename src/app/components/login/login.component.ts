import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router ) { }

  ngOnInit() {

    if (localStorage.getItem("token")) {

      this.router.navigate(['/home']);
      
    }
  }

  onClickSubmit(form){
    let email = form.email;
    let password = form.password;
    if(!email){ alert("Please enter email address")}
    else if(!password){ alert("Please enter password!")}
    else{
      this.userService.validate(form);
    }
  }

}
