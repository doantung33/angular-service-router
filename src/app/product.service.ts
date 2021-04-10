import { Injectable } from '@angular/core';
import {Iproduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Iproduct[] = [
    {
      id : 1,
      name: 'may tinh',
      description: 'den'
    },
    {
      id : 2,
      name: 'dien thoai',
      description: 'xịn'
    },
    {
      id : 3,
      name: 'ti vi',
      description: '100 inch'
    }
];
  getAllProduct(): Iproduct[] {
    return this.productList;
  }
  // tslint:disable-next-line:typedef
  getProductById(id: number){
        return this.productList[id - 1];
  }
  // tslint:disable-next-line:typedef
  addProduct(product: Iproduct){
    product.id = this.productList.length + 1;
    this.productList.push(product);
  }
  // tslint:disable-next-line:typedef
  saveProduct(id: number, p: Iproduct){
    p = this.productList[id - 1];
  }
  // tslint:disable-next-line:typedef
  deleteProduct(id: number){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id){
        this.productList.splice(i , 1 );
      }
    }
  }
  constructor() { }
}
