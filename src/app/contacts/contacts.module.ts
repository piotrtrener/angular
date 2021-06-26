import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  exports: [
    ContactsListComponent,
    ContactDetailsComponent
  ]
})
export class ContactsModule { }
