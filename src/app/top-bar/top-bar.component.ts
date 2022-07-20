import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  styleUrls: ['./top-bar.component.css'],
  template: `
    <a [routerLink]="['/']">
      <h1>My Store</h1>
    </a>

    <a
      class="button fancy-button"
      routerLink="/cart"
    ><i class="material-icons">shopping_cart</i>Checkout</a>
  `
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
