import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { from } from 'rxjs';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemFormComponent,
    ItemListComponent,
    ItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
