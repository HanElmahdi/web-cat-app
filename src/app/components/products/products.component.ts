import {Component} from "@angular/core";
import { Router } from "@angular/router";
import {Observable, catchError, map, of, startWith} from "rxjs";
import {Product} from "src/app/model/product.model";
import {ProductService} from "src/app/services/product.service";
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from "src/app/state/product.state";

@Component({selector: "app-products", templateUrl: "./products.component.html", styleUrls: ["./products.component.css"]})
export class ProductsComponent {
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum=DataStateEnum // c'est pour rendre la class enum accessible avec des valeur dans le front Exemple DataStateEnum.LOADED va afficher 1

  constructor(private productsService : ProductService, private router:Router) {}

  onGetAllProducts() {
    this.products$ = 
      this.productsService.getAllProducts().pipe(
        map(data => {
          console.log(data)
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}), // Retourn qlqc au début de la requette
        catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))// pour l'erreur en ajoute of pour dire que c'est observable
      );
  }
  onGetSelectedProducts() {
    this.products$ = 
    this.productsService.getSelectedProducts().pipe(
      map(data => {
        console.log(data)
        return ({dataState: DataStateEnum.LOADED, data: data});
      }),
      startWith({dataState: DataStateEnum.LOADING}), // Retourn qlqc au début de la requette
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))// pour l'erreur en ajoute of pour dire que c'est observable
    );
  }
  onGetAvailableProducts() {
    this.products$ = 
    this.productsService.getAvailableProducts().pipe(
      map(data => {
        console.log(data)
        return ({dataState: DataStateEnum.LOADED, data: data});
      }),
      startWith({dataState: DataStateEnum.LOADING}), // Retourn qlqc au début de la requette
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))// pour l'erreur en ajoute of pour dire que c'est observable
    );
  }
  onSearch(dataForm: any) {
    this.products$ = 
    this.productsService.searchProducts(dataForm.keyword).pipe(
      map(data => {
        console.log(data)
        return ({dataState: DataStateEnum.LOADED, data: data});
      }),
      startWith({dataState: DataStateEnum.LOADING}), // Retourn qlqc au début de la requette
      catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage:err.message}))// pour l'erreur en ajoute of pour dire que c'est observable
    );
  }
  onSelect(p:Product) {
    this.productsService.select(p)
    .subscribe(data=>{
      p.selected = data.selected;
    });
  }
  onDelete(p:Product) {
    let v=confirm("Êtes vous sûre?");
    if (v==true) {
      this.productsService.deleteProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      });
    }
    
  }
  onNewProduct() {
      this.router.navigateByUrl("/newProduct");
  }
  onEdit(p: Product) {
      this.router.navigateByUrl("/editProduct/"+p.id);
  }
  ngOnInit(): void {}

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS:
        this.onGetAllProducts();
        break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS:
        this.onGetSelectedProducts();
        break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:
        this.onGetAvailableProducts();  
        break;
      case ProductActionsTypes.NEW_PRODUCT:
        this.onNewProduct();  
        break;
      case ProductActionsTypes.SEARCH_PRODUCT:
        this.onSearch($event.payload);  
        break;
      case ProductActionsTypes.SELECT_PRODUCT:
        this.onSelect($event.payload);  
        break;
      case ProductActionsTypes.EDIT_PRODUCT:
        this.onEdit($event.payload);  
        break;
      case ProductActionsTypes.DELETE_PRODUCT:
        this.onDelete($event.payload);  
        break;
    
      default:
        break;
    }
  }

}
