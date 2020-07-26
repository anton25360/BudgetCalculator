import { Component, OnInit, Input } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @Input() item:ItemCard

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:ItemCard){

  }

}
