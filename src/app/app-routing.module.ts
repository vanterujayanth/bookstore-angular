import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { CardsComponent } from './components/cards/cards.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { AddressComponent } from './components/address/address.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { JayanthComponent } from './components/jayanth/jayanth.component';
import { OrdersucessComponent } from './components/ordersucess/ordersucess.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';

const routes: Routes = [
  {path:'',component:OrdersummaryComponent},
  {path:'log',component:LoginSignupComponent},
  {path:'Dashboard',component:DashboardComponent,
  children:[  
    {path:'cards',component:DisplayCardsComponent},
     {path:'address',component:AddressComponent},
     {path:'myorders',component:OrdersComponent },
     {path:'wish',component:WishlistComponent},
     {path:'ordersucess', component:OrdersucessComponent},
     {path:'ordersummary',component:OrdersummaryComponent},
    
    // {path:'wish',component:WishlistComponent},
    {path:'bookDetails/:id',component:BookDetailsComponent},
    {path:'personal',component:ProfileInformationComponent},
    {path:'carts',component:CartComponent},
    // {path:'myorders', component:OrdersComponent}
    

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
