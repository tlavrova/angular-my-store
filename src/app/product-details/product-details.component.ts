import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.css'],
  template: `
    <h1>This is the Product Details</h1>
  `
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
