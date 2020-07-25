import { Component, OnInit } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BudgetCalculator';

  itemsArray:ItemCard[] = new Array<ItemCard>() //array stores all items

  constructor() {}

  ngOnInit() {}

  addItem(newItem:ItemCard) {
    this.itemsArray.push(newItem) //inserts newItem into itemsArray
  }
}
