import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList!: Product[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.productList = response;
      }
    )
  }
}
