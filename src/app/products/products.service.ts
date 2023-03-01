import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  photo: any;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('http://localhost:3000/api/products').pipe(
      map((res) => {
        // console.log(res.data);
        return res.data;
      })
    );
  }
  getOrders() {
    return this.http.get<any>('http://localhost:3000/orders/all').pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateProducts(id: any, product: any) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    if (product.photo) {
      formData.append('photo', product.photo, product.photo?.name);
    }

    return this.http.patch(
      'http://localhost:3000/api/products/' + id,
      formData
    );
  }

  AddProduct(product: any) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);

    formData.append('photo', product.photo, product.photo?.name);
    console.log(formData);

    return this.http.post('http://localhost:3000/api/products/', formData);
  }

  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/api/products/' + id);
  }
  getProductx(id: any) {
    return this.http.get('http://localhost:3000/api/products/' + id);
  }
  updateStatus(id: any, status: any) {
    console.log(status, id);
    return this.http.patch('http://localhost:3000/orders/'+id, status);
  }
  getUsers() {
    return this.http.get('http://localhost:3000/profile/all');
  }
}
