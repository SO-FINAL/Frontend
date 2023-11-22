import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;

  addShoppingCart(): void {

    var orderDetails = {
      product: this.product,
      quantity: 1,
      discount: 0,
    }

    if (sessionStorage.getItem('shoppingCart') == null) {
      sessionStorage.setItem('shoppingCart', JSON.stringify([]));
    }

    let shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart') || '{}');

    let index = shoppingCart.findIndex((shoppingCartProduct: Product) => shoppingCartProduct.get_id === this.product.get_id);


    if (index !== -1) {
      // If the item is found, increment its quantity
      shoppingCart[index].quantity += 1;
    } else {
      // If the item is not found, add it to the cart
      shoppingCart.push(orderDetails);
    }

    sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
  

}
