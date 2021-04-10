import { Component, OnInit } from '@angular/core';
import {Subscribable, Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  sub: Subscription| any;
  id: any;
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id');
      this.deleteProduct(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  private deleteProduct(id: any) {
    this.productService.deleteProduct(id);
    this.router.navigate(['/']);
  }
}
