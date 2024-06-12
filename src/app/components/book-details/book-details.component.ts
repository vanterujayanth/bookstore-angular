import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/bookServices/book.service';
import { HttpService } from '../../Services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private book: BookService, private httpService: HttpService, private router:Router){}
  id: any;
  Books: any;
  count:any=1
  button=true

  data: any = {
    id:'',
      title:'',
      originalprice:'',
      ratting:'',
      numberOfRattings:'',
      discountprice:'',
      author: '',
      description:'',
      quantity:'',
      image: ''
    
  };

  ngOnInit(): void {
     // Accessing the 'id' route parameter
     this.id = this.activatedRoute.snapshot.params;

     // Fetching books from the service
     this.book.getBooks().subscribe(resp => {
       this.Books = resp.data;
 
       // Filtering the book with the specified 'id'
       const result = this.Books.filter((item: any) => item.id ==this.id.id);
       console.log(result);
       this.data=result[0];
       console.log(this.data); 
     }); 
  }
  add(cartItem:any){

    let reqData={
      id:localStorage.getItem('userid'),
      bookid:cartItem
    }
    console.log(reqData);

    this.book.addWish(reqData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.success){
        this.router.navigate(['Dashboard/wish'])
      }
    })
  }
  increment(){
    this.count+=1;
  }

  decrement(){
    if(this.count>1){
      this.count-=1;
    }
  }

  Quantity(bookItem:any){
    this.button=!this.button;

    this.count=1;
    let reqData={
      quantity:this.count,
      bookId:bookItem,
      userid:localStorage.getItem('userid')

    }
    this.book.addcart(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
  onclick()
  {
    this.router.navigate(['Dashboard/wish']);
  }
 
}
