import { Component } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.css'],
  template: `
    <h2>Products</h2>
    <div *ngFor="let product of products">
      <h3>
        <a [title]="product.name + ' details'">
          {{ product.name }}
        </a>
      </h3>

      <p *ngIf="product.description">
        Description: {{ product.description }}
      </p>

      <button (click)="share()">Share</button>

      <app-product-alerts
        [product]="product"
        (notify)="onNotify()"
      ></app-product-alerts>
    </div>
  `
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}
