import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Iproduct} from '../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: any;
  product: Iproduct = {
    id: 0,
    name: '',
    description: '',
  };
  constructor(private router: Router,
              private productService: ProductService,
              private activateRouter: ActivatedRoute) {
    this.sub = this.activateRouter.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id');
      this.product = this.productService.getProductById(this.id);
      });
  }
  // tslint:disable-next-line:typedef
  private getProductById(id: number){
    this.product = this.productService.getProductById(id);
  }
  // tslint:disable-next-line:typedef
  edit() {
    this.productService.saveProduct(this.id, this.product);
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
