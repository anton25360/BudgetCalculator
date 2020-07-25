import { Component, OnInit, Input } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemCard

  constructor() { }

  ngOnInit(): void {
  }

}
