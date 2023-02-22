import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  orders: any;
  constructor(private serve:ProductsService){}
  ngOnInit(): void {
    // this.orders = this.serve.getOrders().subscribe();
    // console.log(this.orders);
  }
}
