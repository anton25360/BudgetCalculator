import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: ItemCard = new ItemCard('', null)
  @Output() formSubmit: EventEmitter<ItemCard> = new EventEmitter<ItemCard>()//eventEmitter sends form values to columns 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) { //btn pressed
    this.formSubmit.emit(form.value)
    form.reset()
    
  }

}
