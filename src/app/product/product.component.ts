import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<String>;
  blurb: String;
  constructor() {
    this.products = ['Apples','Oranges','Grapes','Mangoes'];
    this.blurb = "This is a list of your products. You will find out how to edit it later.";
  }

  ngOnInit() {
  }

}
