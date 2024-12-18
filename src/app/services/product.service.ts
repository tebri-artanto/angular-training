import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private apiProducts =
    'https://6760f1a86be7889dc35f4484.mockapi.io/api/v1/products';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // get with cath error

  getUsers2(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  addUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // product
  getAllProducts(): Observable<any> {
    const response = this.http.get(this.apiProducts).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
    console.log(response);
    return response;
  }

  submitProduct(product: any): Observable<any> {
    return this.http.post(this.apiProducts, product);
  }

  getProductsMini(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products-mini.json');
  }
}


interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}


