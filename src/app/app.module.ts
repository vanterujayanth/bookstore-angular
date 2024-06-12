import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './components/demo/demo.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';

import { SearchBookPipe } from './pipes/search-book.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { AddressComponent } from './components/address/address.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { JayanthComponent } from './components/jayanth/jayanth.component';
import { OrdersucessComponent } from './components/ordersucess/ordersucess.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginSignupComponent,
    LogincomponentComponent,
    SignupComponent,
    DashboardComponent,
    DemoComponent,
    DisplayCardsComponent,
    SearchBookPipe,
    CardsComponent,
    BookDetailsComponent,
    ProfileInformationComponent,
    AddressComponent,
    CartComponent,
    OrdersComponent,
    WishlistComponent,
    JayanthComponent,
    OrdersucessComponent,
    OrdersummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatMenuModule,
    HttpClientModule,
    MatRadioButton,
    MatRadioModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
