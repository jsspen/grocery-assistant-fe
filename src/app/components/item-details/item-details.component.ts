import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentItem: Item = {
    name: '',
    brand: '',
    store: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
