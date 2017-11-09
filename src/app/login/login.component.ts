import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  users :[{
    id:number,
    userName:string,
    password:string
  }]
  constructor() { 
    
  }

  ngOnInit() {
    this.users =[
      {
        id:1,
        userName:"bikram",
        password:"f1s0ft"
      },
      {
        id:2,
        userName:"bikash",
        password:"f1s0ft"
      },
      {
        id:3,
        userName:"rajesh",
        password:"f1s0ft"
      }
    ];
  }

  login(e,name,password){
      e.preventDefault();
      if(!name || !password){
        alert('Cannot leave any field Empty');
      }
      else{
        var flag = this.checkUser(name,password);
        if(flag ==1){
          alert('Log In');
        }
        else{
          alert("Wrong User or password")
        }
      }
  }
  checkUser(name,password){
    name = name.toLowerCase();    
    /*this.users.forEach(user =>{
      if(name === user.userName && password === user.password){
        alert('match');return 1;
      }
    });*/ 
    for(var i=0;i<this.users.length;i++){
      if(name === this.users[i].userName && password === this.users[i].password){
        return 1;
      }
    }
    return 0;
  }
}