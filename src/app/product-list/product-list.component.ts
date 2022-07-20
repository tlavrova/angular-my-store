import { Component } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.css'],
  template: `
    <h2>Products</h2>
  `
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
