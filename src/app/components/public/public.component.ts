import { Component, OnInit } from '@angular/core';
import { FileitemsService } from "../../services/fileitems.service";
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  filesInfo = [];
  
  constructor(private fileitemsService:FileitemsService,  private router:Router) { }

  ngOnInit() {

    if (localStorage.getItem("token")) {

      this.fileitemsService.getAllPublicFiles().subscribe(res =>{

        console.log("public files res..", res);
  
        if(res["type"] == "success"){
          this.filesInfo = res["data"];
        }
  
      })
       
    }else{

      alert("Please Re login can not found authorization token");

      this.router.navigate(['/login']);

    }
    
  }



}
