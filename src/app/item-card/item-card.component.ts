import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  // @Input() isIncome:boolean = false
  @Input() item: ItemCard
  @Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>() //any means there is no  data to send
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>() //any means there is no  data to send

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit()    
  }

  onCardClick(){
    this.cardClick.emit()
  }

}
