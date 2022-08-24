import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent implements OnInit {


  constructor(private productsService:ProductsService) {}
  enterSearchValue:string;
  

  ngOnInit(): void {}
}
