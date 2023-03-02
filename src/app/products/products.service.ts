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
    return this.http.get<any>('https://api-cafebuyers.onrender.com/api/products').pipe(
      map((res) => {
        // console.log(res.data);
        return res;
      })
    );
  }
  getOrders() {
    return this.http.get<any>('https://api-cafebuyers.onrender.com/orders/all').pipe(
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
      'https://api-cafebuyers.onrender.com/api/products/' + id,
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

    return this.http.post('https://api-cafebuyers.onrender.com/api/products/', formData);
  }

  deleteProduct(id: any) {
    return this.http.delete('https://api-cafebuyers.onrender.com/api/products/' + id);
  }
  getProductx(id: any) {
    return this.http.get('https://api-cafebuyers.onrender.com/api/products/' + id);
  }
  updateStatus(id: any, status: any) {
    console.log(status, id);
    return this.http.patch('https://api-cafebuyers.onrender.com/orders/' + id, status);
  }
  getUsers() {
    return this.http.get('https://api-cafebuyers.onrender.com/profile/all');
  }
}
