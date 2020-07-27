import { Component, OnInit } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
// import { UpdateEvent } from '../item-list/item-list.component';
import { UpdateEvent } from 'src/app/item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BudgetCalculator';
  itemsArray:ItemCard[] = new Array<ItemCard>() //array stores all items
  totalBudget:number = 0

  constructor() {}

  ngOnInit() {}

  addItem(newItem:ItemCard) {
    this.itemsArray.push(newItem) //inserts newItem into itemsArray
    this.totalBudget += newItem.amount //changes totalBudget amount
  }

  deleteItem(item:ItemCard) {
    let index = this.itemsArray.indexOf(item) //gets index of item to delete from the array
    this.itemsArray.splice(index, 1) //removes ONE item from the array
    this.totalBudget -= item.amount //changes totalBudget amount
  }

  updateItem(updateEvent:UpdateEvent) {
    // replaces old item with updated version
    this.itemsArray[this.itemsArray.indexOf(updateEvent.old)] = updateEvent.new
  }
}
