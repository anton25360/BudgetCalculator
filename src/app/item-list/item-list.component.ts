import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export interface UpdateEvent {
  old:ItemCard
  new:ItemCard
}

export class ItemListComponent implements OnInit {

  @Input() itemsArray:ItemCard[] //array of items
  @Output() delete:EventEmitter<ItemCard> = new EventEmitter<ItemCard>()
  @Output() update:EventEmitter< UpdateEvent> = new EventEmitter<UpdateEvent >()

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:ItemCard){
    this.delete.emit(item)
  }

  onCardClicked(item:ItemCard){
    //show edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    dialogRef.afterClosed().subscribe(result => {
      //check if result has a value
      if (result) {

        this.update.emit({
          old:item,
          new:result //result is the updated item
        })
      }
    })
  }
}
