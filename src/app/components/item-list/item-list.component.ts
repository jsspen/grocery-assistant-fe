import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items?: Item[];
  currentItem: Item = {};
  currentIndex = -1;
  item = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.itemService.getAll().subscribe({
      next: (data) => {
        this.items = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveItems();
    this.currentItem = {};
    this.currentIndex = -1;
  }

  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  removeAllItems(): void {
    this.itemService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentItem = {};
    this.currentIndex = -1;

    this.itemService.findByTitle(this.item).subscribe({
      next: (data) => {
        this.items = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
