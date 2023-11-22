import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:8080/api/v1/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.url);
  }
}
