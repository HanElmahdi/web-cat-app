import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host:string = (Math.random()>0.2)?environment.host:environment.unreachableHost;
  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.host+"/products");
  }
  
  getSelectedProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.host+"/products?selected=true");
  }
  
  getAvailableProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.host+"/products?available=true");
  }
  
  searchProducts(keyword:string):Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.host+"/products?name_like="+keyword);
  }

  select(product:Product):Observable<Product> {
    product.selected = !product.selected;
    return this.httpClient.put<Product>(this.host+"/products/"+product.id,product);
  }

  deleteProduct(product:Product):Observable<void> {
    return this.httpClient.delete<void>(this.host+"/products/"+product.id);
  }

  save(product:Product):Observable<Product> {
    return this.httpClient.post<Product>(this.host+"/products",product);
  }

  getProduct(id?:number|null):Observable<Product> {
    return this.httpClient.get<Product>(this.host+"/products/"+id);
  }

  updateProduct(product:Product):Observable<Product> {
    return this.httpClient.put<Product>(this.host+"/products/"+product.id,product);
  }

}
