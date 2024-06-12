import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

  UserLogin(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
        //'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('https://localhost:7266/api/User/login',reqData,false,header);
  }

  register(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
        //'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('https://localhost:7266/api/User/Create',reqData,false,header);
  }
}
