import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    let idProduct = this.activatedRoute.snapshot.params.id;
    let productEdit=this.productService.findById(Number(idProduct));
    this.productForm = new FormGroup({
      id: new FormControl(productEdit.id),
      name: new FormControl(productEdit.name),
      price: new FormControl(productEdit.price),
      description: new FormControl(productEdit.description),
    });
  }

  ngOnInit(): void {

  }

  submit(){
    this.productService.update(this.productForm.value);
  }

}
