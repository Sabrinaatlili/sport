import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  errorMsg!: string;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }
  //  Fonction add Player va etre executer lors de click du boutton
  logIn() {
    console.log("here is my function logIn", this.user);
    

    this.userService.login(this.user).subscribe((data) => {

      console.log("Here response from BE ", data.msg, data.token);
      
      if (data.token) {
        
        console.log("Here token before decoding  : ", data.token);
      
          // Save token into session Storage
          sessionStorage.setItem("token", data.token);
        let user: any = this.decodeToken(data.token);
        console.log("Here user/token after decoding : ", user);
        
        if (user.role == "user") {
          this.router.navigate([''])

        } else {
          this.router.navigate(['dashboard']);
        }
      } else {
        this.errorMsg = " Please check your Email / Pwd";
      }

    });

  }
  decodeToken(token: string) {
    return jwt_decode(token);
  }
}