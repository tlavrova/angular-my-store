import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-alerts',
  styleUrls: ['./product-alerts.component.css'],
  template: `
    <p *ngIf="product && product.price > 700">
      <button>Notify Me</button>
    </p>
  `
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product

  constructor() { }

  ngOnInit(): void {
  }

}
