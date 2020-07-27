import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

interface UpdateEvent {

}

export class ItemListComponent implements OnInit {

  @Input() itemsArray:ItemCard[] //array of items
  @Output() delete:EventEmitter<ItemCard> = new EventEmitter<ItemCard>()
  @Output() update:EventEmitter< any> = new EventEmitter<any>()

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

    //check if result has a value
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //replace item with updaed values from the form
        this.itemsArray[this.itemsArray.indexOf(item)] = result //result is the updated item
      }
    })
  }
}
