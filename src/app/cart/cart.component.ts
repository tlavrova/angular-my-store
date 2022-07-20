import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.css'],
  template: `
    <h3>Cart</h3>

    <p>
      <a routerLink="/shipping">Shipping Prices</a>
    </p>

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

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Process checkout data here

    this.items = this.cartService.clearCart()
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
