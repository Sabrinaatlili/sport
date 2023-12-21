import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as e from 'express';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  test=true;
  path!: string;
  imagePreview:any;
  constructor( 
    private formBuilder:FormBuilder, 
    private userService:UserService,
    private router: Router) {
  
   }
   ngOnInit(): void {
this.path=this.router.url;
console.log("Here path :  ",this.path);

    this.signupForm=this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(5)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      pwd:["",[Validators.required,Validators.minLength(8)]],
      confirmpwd:["",[Validators.required]],
      img : [""]
    });  
  }
  

  
  signup(){
    console.log("here is my function sign up",this.signupForm.value);
   if (this.path=="/subscription") {
    this.signupForm.value.role="user"
   } else {
    this.signupForm.value.role="admin"

   }
    //  form Template Diven Form 
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe();

 
  }
  matchPwd(){
    let pwd=this.signupForm.value.pwd;
    let confirmpwd=this.signupForm.value.confirmpwd;

    if (confirmpwd!="") {
       this.test=false;
      if (pwd==confirmpwd) {
          this.test=true;
           } else {
           this.test=false;
        } 
      }

  }
  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = (fileInput.files as FileList)[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}

