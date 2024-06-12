import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/dataServices/data.service';
import { BookService } from '../../Services/bookServices/book.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.scss'
})
export class DisplayCardsComponent  implements OnInit{
  BooksPrint=null
  Book:any=[]
  reqData:any;

  bookcount:number=0;


  constructor(private data:DataService,private book:BookService){}

  ngOnInit(): void {

    this.data.searchBookAccess.subscribe(resp=>{
      this.searchString=resp
    })


    this.book.getBooks().subscribe(response=>{
      console.log(response);
      this.BooksPrint=response.data;
      this.Book=response.data;
      this.bookcount=response.data.length;
    })
  }
  searchString='';
  page:number=1;
  count:number=0;
  booksize:number=12;
}
