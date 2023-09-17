import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 popularProducts:undefined | product[]
 trendyProduts:undefined | product[]
  constructor(private product:ProductService){

  }
  ngOnInit(){
    this.product.popularProducts().subscribe((data)=>{
      console.warn(data);
      this.popularProducts=data;
    });
    this.product.trendyProduts().subscribe((data)=>{
      this.trendyProduts=data;
    });

  }
}
