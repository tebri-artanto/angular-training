import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: false
})
export class ProductComponent implements OnInit {

  products!: Product[];

  cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
      this.productService.getProductsMini().subscribe((data) => { this.products = data; });
      console.log(this.products);
        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }

}
interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

interface Column {
  field: string;
  header: string;
}
