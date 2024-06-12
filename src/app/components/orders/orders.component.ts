import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../Services/bookServices/book.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'] // Fixed 'styleUrl' to 'styleUrls'
})
export class OrdersComponent implements OnInit {
  constructor(private book: BookService, private router: Router) {}
  
  cart!: any[];
  orders: boolean = false;
  
  ngOnInit(): void {
    this.orders = true;
    let reqData = {
      userid: localStorage.getItem('userid') // Removed the semicolon here
    };
  
    this.book.getAllOrders(reqData).subscribe((res: any) => {this.cart=res.data
      console.log(res);
      console.log(res.data);
      
      
      // Ensure 'res' is an array
    //   if (Array.isArray(res)) {
    //     this.cart = res;
    //     console.log(this.cart);

    //   } else {
    //     console.error('Received data is not an array:', res);
    //   }
    //   console.log(res);
    //   console.log(reqData);
    //   console.log(this.cart);
    // }, (error) => {
    //   console.error('Error fetching orders:', error);
    });
    console.log(this.cart);
  }
}
