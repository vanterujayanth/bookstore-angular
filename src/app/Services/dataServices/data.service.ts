import { Injectable } from '@angular/core';
import { Book } from '../../Model/bookstore.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  Books:Book[]=[];


  private bookList=new BehaviorSubject<any>([]);
  bookListAccess=this.bookList.asObservable();

  updateBookList(newValue:any){
    this.bookList.next(newValue);
  }

  private searchBook=new BehaviorSubject<string>('');
  searchBookAccess=this.searchBook.asObservable(); 

}
