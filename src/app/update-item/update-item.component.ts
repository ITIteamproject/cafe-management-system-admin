import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as toastify from 'toastify-js';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  id: any;
  product: any;
  photo: any;
  selected: any = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) private idNew: any,
    private prod: ProductsService
  ) {}
  ngOnInit(): void {
    this.id = this.idNew.id;
    // console.log(this.id);
    this.prod.getProductx(this.id).subscribe((res) => {
      // console.log(res);
      this.product = res;
      // console.log(this.product.data);
    });
    // console.log(this.product);
  }
  onSelect(e: any) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      this.selected = e.target.files[0];
      reader.onload = (event: any) => {
        this.photo = event.target.result;
      };
    }
  }
  update(name: any, price: string, description: any) {
    let product;
    if (this.selected) {
      product = { name, price, description, photo: this.selected };
      this.selected = null;
    } else {
      product = { name, price, description };
    }
    
    this.prod.updateProducts(this.id, product).subscribe((res) => {
      this.prod.getProducts().subscribe(res => {
        this.product = res;
      });
    });
    toastify({
      text: 'Login Failed pleace check password or user name',
      duration: 1000,
      style: {
        background: 'orange',
      },
    }).showToast();
  }
}
