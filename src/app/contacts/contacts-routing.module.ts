import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const CONTACTS_ROUTES: Routes = [
  // {path: 'contact/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(CONTACTS_ROUTES)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
