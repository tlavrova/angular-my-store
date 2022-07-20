import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.css'],
  template: `
    <h3>Cart</h3>

    <div
      class="cart-item"
      *ngFor="let item of items"
    >
      <span>{{ item.name }}</span>
      <span>{{ item.price | currency }}</span>
    </div>
  `
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
