import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import {  HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book, Cart } from '../../Model/bookstore.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any
   Books:Book[]=[]
   Carts:Cart[]=[]

  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

  getBooks(): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.httpService.getService('https://localhost:7266/api/Book/GetAllBooks', true,header,);
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
   // https://localhost:7266/api/Cart/AddToCart?userid=1
  }

  addWish(reqData:any):Observable<any>{
    
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      
    }
    return this.httpService.postService('https://localhost:7266/api/Wishlist/AddToWishList',reqData,true,header);
    //https://localhost:7266/api/Wishlist/AddToWishList
  }

  getaddress(reqData: any) {
    const userid = reqData.userid;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.getService(`https://localhost:7266/api/Address/GetAddressByUserId?userid=${userid}`, true, header);
    // https://localhost:7266/api/Address/GetAddressByUserId?userid=5
  }

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
//     // return this.httpService.getService(`https://localhost:7266/api/Cart/GetCard?userid=${userid}`,true,header);
//     //https://localhost:7266/api/Cart/GetCard?userid=5
//     //https://localhost:7266/api/Cart/AddToCart?userid=5
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
//     //https://localhost:7266/api/Order/GetAllOrder?userid=5
  }



  wishList(reqData:any){
    const userid = reqData.userid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7266/api/Wishlist/GetWhishList?userid=${userid}`,true,header);
    //https://localhost:7266/api/Wishlist/GetWhishList?userid=5
  }

  private whishList=new BehaviorSubject<any>([]);
  currWhishList=this.whishList.asObservable();

  updatewhishList(newValue:any){
    this.whishList.next(newValue);
  }

  deleteWish(reqData:any):Observable<any>{
    const userid=reqData.userid;
    const bookid=reqData.bookid;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      
    }
    return this.httpService.postService('https://localhost:7266/api/Wishlist/DeleteWhishList',reqData,true,header);
    //https://localhost:7266/api/Wishlist/DeleteWhishList
  }
 

}
