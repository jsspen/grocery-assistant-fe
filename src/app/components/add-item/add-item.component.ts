import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  item: Item = {
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

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  saveGroceries(): void {
    const data = {
      brand: this.item.brand,
      name: this.item.item,
      store: this.item.store,
    };

    this.itemService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newGroceries(): void {
    this.submitted = false;
    this.item = {
      brand: '',
      item: '',
      store: '',
    };
  }
}
