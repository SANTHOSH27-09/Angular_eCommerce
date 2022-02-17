import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartIndex:any;
  displayCart=JSON.parse(localStorage.getItem("cart")!);
  config: any = [{}];
  i:any;
  index:any;
  cartStatus=false;
  quantity:any;
   constructor(private product: ProductServiceService,private route:ActivatedRoute,private data:AuthServiceService) {
     this.product.getProductDetails()
       .subscribe((data: any) => {
         
        for(this.i=0;this.i<this.displayCart.length;this.i++)
        {
        this.index=this.displayCart[this.i].index;
         
         this.config[this.i] = {
           productImageSrc: data[this.index].productImageSrc,
           productName:data[this.index].productName,
           price: data[this.index].price,
           productDes : data[this.index].productDes,
           quantity:this.displayCart[this.i].quantity
        } 
        }
        });
     
 
      }
   ngOnInit(): void {
    this.route.params.forEach((urlParams) => {
      this.cartIndex= urlParams['cartIndex'];
      this.quantity=urlParams['quantity'];
    });
     
     
     if(this.cartIndex){
       const index=parseInt(this.cartIndex);
       const quantity=parseInt(this.quantity);
       
       if(this.displayCart==null)
       {       this.displayCart=[{"index":index,"quantity":quantity}]
       localStorage.setItem('cart', JSON.stringify(this.displayCart));
     }
       else{
       this.displayCart.push({index,quantity});
       localStorage.setItem('cart', JSON.stringify(this.displayCart));
       }
     }

      
   }
   removeCartItem(removeCartItem:any){
     this.config.splice(removeCartItem,1);
    this.displayCart.splice(removeCartItem, 1);
    localStorage.setItem('cart', JSON.stringify(this.displayCart));
    alert("Removed Successfully!!");
   }

}
