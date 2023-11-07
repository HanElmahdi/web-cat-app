import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "src/app/model/product.model";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "src/app/state/product.state";

@Component({selector: "app-product-list", templateUrl: "./product-list.component.html", styleUrls: ["./product-list.component.css"]})
export class ProductListComponent {
  @Input()productsInput$: Observable<AppDataState<Product[]>> | null = null;
  @Output()productsEventEmitter: EventEmitter <ActionEvent> =new EventEmitter();

  readonly DataStateEnum = DataStateEnum; // c'est pour rendre la class enum accessible avec des valeur dans le front Exemple DataStateEnum.LOADED va afficher 1

  onSelect(p : Product) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: p});
  }
  onDelete(p : Product) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: p});
  }

  onEdit(p : Product) {
    this.productsEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: p});
  }

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event);
  }
}
