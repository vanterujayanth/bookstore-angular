import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
constructor(private router:Router){}
  @Input() Book:any;

  ngOnInit(): void {}
  toopenbook(){
    this.router.navigate(['Dashboard/bookDetails', this.Book.id])
  }
}
