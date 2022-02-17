import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  config: any = [{}];
  search:any=[{}];
  i:any;
  j:any=0;
  quantity:any;
  searchWord:any;
  
  
  constructor(private product: ProductServiceService, private router:Router,private route:ActivatedRoute) { 
    
    this.product.getProductDetails()
      .subscribe((data: any) => {
      
        for(this.i=0;this.i<data.length;this.i++)
        {
          if (this.searchWord==null||this.searchWord==undefined) {
          this.config[this.i] = {
          productImageSrc: data[this.i].productImageSrc,
          productName:data[this.i].productName,
          price: data[this.i].price,
          productDes : data[this.i].productDes,
          quantity : data[this.i].quantity
        }
        
      }
      else{
        
        if (data[this.i].productName.toLowerCase().startsWith(this.searchWord)){
          
          this.config[this.j] = {
            productImageSrc: data[this.i].productImageSrc,
            productName:data[this.i].productName,
            price: data[this.i].price,
            productDes : data[this.i].productDes,
            quantity : data[this.i].quantity
          }
          this.j++;
      }
      }
    
      }
      
      });

      this.searchWord=this.route.snapshot.paramMap.get('search');
      console.log(this.searchWord)
  }

  ngOnInit(): void {
  }
  view(index:any){
    this.router.navigate(["view",index]);
  }
  cart(cartIndex:any){
    this.quantity=this.config[cartIndex].quantity;
    this.router.navigate(["cart",cartIndex,this.quantity]);
  }
  quantityDecrement(i:any)
 {
    this.config[i].quantity-=1;
 }
 quantityIncrement(i:any){
  this.config[i].quantity+=1;
 }
}
