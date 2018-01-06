import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  title:string ;
  name: string;
  email:string ;
  password:string ; 
  constructor() {
    

   }

  ngOnInit() {
    this.title = "Login with your credentials";
    this.name = "Mrunalini Prasad"
    this.email = "test@gmail.com";
    this.password = "test123" ;
  }

  sayHello() {
    alert ('Hello');
  }

}
