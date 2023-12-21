import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // déclaration du @destinataire 
userUrl: string="http://localhost:3000/users";


  constructor(private httpClient: HttpClient) { }
  login(user:any){
    return this.httpClient.post<{msg : string, token:string}>(this.userUrl +"/login", user);
  }
 
  signup(user:any, photo:File){
    let formData= new FormData;
    formData.append("firstName",user.firstName);
    formData.append("lastName",user.lastName);
    formData.append("email",user.email);
    formData.append("pwd",user.pwd);
    formData.append("role",user.role);
    formData.append("img",photo);
    return this.httpClient.post(this.userUrl +"/signup", formData);
  }
  editProfile(user:any){
    return this.httpClient.put(this.userUrl, user);
  }
  


}
