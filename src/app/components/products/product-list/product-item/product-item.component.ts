import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product?:Product;
  @Output() itemEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();

  onSelect(product:Product) {
    this.itemEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:product});
  }
  onDelete(product:Product) {
    this.itemEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:product});
  }
  onEdit(product:Product) {
    this.itemEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
  }

}
