import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(signInForm){
    this.router.navigate(['/adminmenu'])
  }
}
