import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: ItemCard
  @Output() formSubmit: EventEmitter<ItemCard> = new EventEmitter<ItemCard>()//eventEmitter sends form values to columns 

  isNewItem:boolean 

  constructor() { }

  ngOnInit(): void {
    if (this.item) {
      //if item has a value (existing item)
      this.isNewItem = false
    } else {
      this.isNewItem = true
      this.item = new ItemCard('', null)
    }
  }

  onSubmit(form:NgForm) { //btn pressed
    this.formSubmit.emit(form.value)
    form.reset()
    
  }

}
