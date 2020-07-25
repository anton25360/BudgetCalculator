import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() itemsArray:ItemCard[] //array of items
  @Output() delete:EventEmitter<ItemCard> = new EventEmitter<ItemCard>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:ItemCard){
    this.delete.emit(item)
  }

}
