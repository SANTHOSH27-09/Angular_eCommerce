import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {
 index:any
 config: any = [{}];
 i:any;
  constructor(private product: ProductServiceService,private route:ActivatedRoute) {
    this.product.getProductDetails()
      .subscribe((data: any) => {
         
        this.config = {
          productImageSrc: data[this.index].productImageSrc,
          productName:data[this.index].productName,
          price: data[this.index].price,
          productDes : data[this.index].productDes
        }
        
   });
  }

  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('index');

    
  }


}
