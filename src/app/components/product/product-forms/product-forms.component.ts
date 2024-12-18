import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrl: './product-forms.component.css',
  standalone: false,
})
export class ProductFormsComponent implements OnInit {
  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  //template driven form
  onSubmit(form: any) {
    console.log('Form Data:', form.value);
  }

  //reactive form
  userForm2 = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmitReactive() {
    console.log(this.userForm2.value);
  }

  //http client
  users: any[] = [];
  products: any[] = [];
  // productForm: FormGroup;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
     stock: new FormControl('', [Validators.required]),
  })

  constructor(private fb: FormBuilder, private productService: ProductService) {
    // this.productForm = this.fb.group({ name: [''], price: [''], stock: [''] });
  }

  onSubmitProduct() {
    if (this.productForm.valid) {
      this.productService.submitProduct(this.productForm.value).subscribe(
        (response) => {
          console.log('Product submitted successfully', response);
        },
        (error) => {
          console.error('Error submitting product', error);
        }
      );
    }
  }

  ngOnInit() {
    this.productService.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

interface City {
  name: string;
  code: string;
}
