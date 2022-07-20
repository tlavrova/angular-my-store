import { Component, OnInit } from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.css'],
  template: `
    <h2>Product Details</h2>

    <div *ngIf="product">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price | currency }}</h4>
      <p>{{ product.description }}</p>
    </div>
  `
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute)
  }

}
