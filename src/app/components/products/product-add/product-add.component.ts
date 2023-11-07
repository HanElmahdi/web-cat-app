import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    
    productFormGroup!: FormGroup;
    submitted?:boolean=false;

    constructor(private fb:FormBuilder, private productsService:ProductService){}

    ngOnInit(): void{
      this.productFormGroup=this.fb.group({
        name:["",Validators.required],
        price:[120,Validators.required],
        quantity:[120,Validators.required],
        selected:[true,Validators.required],
        available:[true,Validators.required],
      });
    }

    get f(): { [key: string]: AbstractControl } {
      return this.productFormGroup.controls;
    }

    saveProduct() {
      this.submitted = true;
      if(this.productFormGroup?.invalid) return;
        this.productsService.save(this.productFormGroup?.value)
        .subscribe(data=>{
          alert("Success Saving product");
        });
    }

}
