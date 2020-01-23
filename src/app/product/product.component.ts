import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;

  constructor() {
    this.productForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productCode: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required])
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    console.log('success');
  }

  
  
  

}
