import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent} from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProductComponent } from './Component/product/product.component';
import { ProductDetailedViewComponent } from './Component/product-detailed-view/product-detailed-view.component';

import { AuthServiceService } from './Service/auth-service.service';
import { ProductServiceService } from './Service/product-service.service';
import { LoginComponent } from './Component/login/login.component';
import { MaincontentComponent } from './Component/maincontent/maincontent.component';
import { CartComponent } from './Component/cart/cart.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    ProductDetailedViewComponent,
    LoginComponent,
    MaincontentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [AuthServiceService,ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
