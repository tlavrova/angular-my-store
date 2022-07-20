import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-alerts',
  styleUrls: ['./product-alerts.component.css'],
  template: `
    <p *ngIf="product && product.price > 700">
      <button (click)="notify.emit()">Notify Me</button>
    </p>
  `
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product
  @Output() notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
