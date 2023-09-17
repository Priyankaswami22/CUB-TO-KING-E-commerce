import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined | product[];
constructor(private activeRoute:ActivatedRoute, private product:ProductService){

}
ngOnInit():void{
  let query=this.activeRoute.snapshot.paramMap.get('query');
  console.warn(query);
  query && this.product.searchProduts(query).subscribe((result)=>{
    this.searchResult=result
  })
  
}
}
