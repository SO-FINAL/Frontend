import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private url: string = environment.baseURL + '/suppliers';

  constructor(private http: HttpClient) { }

  getAllSuppliers() {
    return this.http.get(this.url);
  }

  getSupplierById(id: number) {
    return this.http.get(this.url + '/' + id);
  }



}
