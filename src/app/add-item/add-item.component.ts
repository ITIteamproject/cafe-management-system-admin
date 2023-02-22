import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  id: any;
  product: any;
  photo: any;
  selected: any = null;
  constructor(
    private prod: ProductsService,
    @Inject(MAT_DIALOG_DATA) private idNew: any
  ) {}
  ngOnInit(): void {
    this.id = this.idNew.id;
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
  create(name: string, price: string, description: string) {
    let product;
    if (this.selected) {
      product = { name, price, description, photo: this.selected };
      this.selected = null;
    } else {
      product = { name, price, description };
    }
    this.prod.AddProduct(product).subscribe((res) => {
      location.reload();
    });
  }
}
