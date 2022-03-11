import { Component, VERSION } from '@angular/core';
import { PRODUCTS } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  product1 = PRODUCTS[0];
  product2 = PRODUCTS[1];
  product3 = PRODUCTS[2];
  product4 = PRODUCTS[3];
}
