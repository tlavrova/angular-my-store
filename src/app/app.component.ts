import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-top-bar></app-top-bar>
    <app-product-list></app-product-list>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
