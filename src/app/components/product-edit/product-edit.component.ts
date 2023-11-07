import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId?:number|null;
  productFormGroup!:FormGroup;
  submitted?:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService, private fb:FormBuilder) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
      this.productService.getProduct(this.productId)
      .subscribe(product=>{
        this.productFormGroup = this.fb.group({
          id:[product.id, Validators.required],          
          name:[product.name, Validators.required],          
          price:[product.price, Validators.required],          
          quantity:[product.quantity, Validators.required],          
          selected:[product.selected, Validators.required],          
          available:[product.available, Validators.required],          
        })
      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.productFormGroup.controls;
  }

  onUpdateProduct() {
    this.submitted = true;
    this.productService.updateProduct(this.productFormGroup?.value)
    .subscribe(product=>{
      alert("success product updated");
    });
  }
}
