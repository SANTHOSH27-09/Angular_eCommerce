import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Component/product/product.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductDetailedViewComponent } from './Component/product-detailed-view/product-detailed-view.component';
import { CartComponent } from './Component/cart/cart.component';

const routes: Routes = [{path:'mobiles',component:ProductComponent},
{path:'mobiles/:search',component:ProductComponent},
{path:'home',component: HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'login',component:LoginComponent},
{path:'login/:user',component:LoginComponent},
{path:'view/:index',component: ProductDetailedViewComponent},
{path:'cart/:cartIndex/:quantity',component: CartComponent},
{path:'cart',component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
