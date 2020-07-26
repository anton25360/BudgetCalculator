import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  // @Input() item:ItemCard

  constructor(
    public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:ItemCard
    ) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:ItemCard){
    this.dialogRef.close(updatedItem) //passes updated item to parent
  }

}
