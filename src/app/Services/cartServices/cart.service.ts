import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Book, Cart } from '../../Model/bookstore.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
token :any;
Books:Book[]=[]
Carts:Cart[]=[]
constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

private cartList = new BehaviorSubject<any>([]);
currCartList = this.cartList.asObservable();
updateCartList(newValue: any[]) {
  this.cartList.next(newValue);
}


  cartsList(reqData:any):Observable<any>{
    const userid = reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7266/api/Cart/GetCard?userid=${userid}`,true,header);
    // return this.httpService.getService(`https://localhost:7266/api/Cart/GetCard?userid=${userid}`,true,header);
    //https://localhost:7266/api/Cart/GetCard?userid=5
    //https://localhost:7266/api/Cart/AddToCart?userid=5
  }

  addcart(reqData:any):Observable<any>{
    let userid=reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:7266/api/Cart/AddToCart?userid=${userid}`,reqData,true,header);
    //https://localhost:7266/api/Cart/AddToCart?userid=5
  }

  getAllOrders(reqData:any):Observable<any>{
    const userid=reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7266/api/Order/GetAllOrder?userid=${userid}`,true,header);
    //https://localhost:7266/api/Order/GetAllOrder?userid=5
  }


}
