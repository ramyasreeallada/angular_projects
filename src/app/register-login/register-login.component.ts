import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  registeredUsers=[
    {fullname: "sree", email: "sree@in.com", password: "1234"},
    {fullname: "priya", email: "priya@in.com", password: "1234"},
    {fullname: "ramu", email: "ramu@in.com", password: "1234"}
  ];
  reg_fullname;
  reg_email;
  reg_password;
  i;

  constructor() {
    this.reg_fullname='';
    this.reg_email='';
    this.reg_password='';


   }

  isLogin=true;
  isRegistrationSucc=false;
  isReset=false;
  login_class='';
  login_msg='';
  reset_class='';
  reset_msg='';
  
  

  ngOnInit() {
    
  }

  registration(){
    this.isLogin=false;
  }

  reset(){
    this.isReset=true;
  }

  submit_register(){
      this.registeredUsers.push({
          'fullname': this.reg_fullname,
          'email': this.reg_email,
          'password': this.reg_password
      });
  this.isRegistrationSucc=true; 
    
  }

  login(){
    this.isLogin=true;
  }

  login_authentication(login_email,login_pwd){
    if(this.registeredUsers.filter(x=>x.email === login_email && x.password === login_pwd).length>0){
      this.login_class='succ';
      this.login_msg='Login Successful';
    }else{
      this.login_class='err';
      this.login_msg='Invalid Credentials';
    }

  }

  reset_password(reset_email,reset_pwd){

    if(this.registeredUsers.filter(x=>x.email === reset_email).length>0){
       
       for (this.i = 0; this.i <this.registeredUsers.length; this.i++) {
            if (this.registeredUsers[this.i].email === reset_email) {
              this.registeredUsers[this.i].password = reset_pwd;
              this.reset_class = 'succ';
              this.reset_msg = 'Password Reset Successful!';
            } 
          }
console.log(this.registeredUsers);
    }else{
      this.reset_class = 'err';
      this.reset_msg = 'Invalid Credentials';
    }

  }

}
