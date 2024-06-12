import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/bookServices/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jayanth',
  templateUrl: './jayanth.component.html',
  styleUrl: './jayanth.component.scss'
})
export class JayanthComponent  implements OnInit{

  constructor(private book:BookService,private router:Router){}
  cartvalue:any
 orders:boolean=false
 count:any
 
 cart!:any[];


  ngOnInit(): void {
    
    this.orders = true;
    let reqData = {
      userid: localStorage.getItem('userid') // Removed the semicolon here
    };
  
    this.book.getAllOrders(reqData).subscribe((res: any[]) => {
      this.cart=res;
      console.log(res);
      console.log(reqData);
      this.cart=res;
      console.log(this.cart);
     
    });
  }

}
