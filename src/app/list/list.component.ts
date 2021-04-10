import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productList: Iproduct[] = [];
  constructor(private productService: ProductService) {
    this.getAllProduct();
  }
  // tslint:disable-next-line:typedef
  getAllProduct() {
    this.productList = this.productService.getAllProduct();
  }
  ngOnInit(): void {
  }

}
