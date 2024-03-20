import { Component, OnInit } from '@angular/core';
import { Groceries } from 'src/app/models/groceries.model';
import { GroceriesService } from 'src/app/services/groceries.service';

@Component({
  selector: 'app-add-groceries',
  templateUrl: './add-groceries.component.html',
  styleUrls: ['./add-groceries.component.css'],
})
export class AddGroceriesComponent implements OnInit {
  groceries: Groceries = {
    id: '',
    brand: '',
    item: '',
    store: '',
    total_price: undefined,
    total_size: undefined,
    unit: '',
    category_primary: '',
    category_sub: '',
    organic: false,
    upc: '',
    last_confirmed: undefined,
    price_per_unit: undefined,
  };
  submitted = false;

  constructor(private groceriesService: GroceriesService) {}

  ngOnInit(): void {}

  saveGroceries(): void {
    const data = {
      brand: this.groceries.brand,
      item: this.groceries.item,
      store: this.groceries.store,
    };

    this.groceriesService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newGroceries(): void {
    this.submitted = false;
    this.groceries = {
      brand: '',
      item: '',
      store: '',
    };
  }
}
