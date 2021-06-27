import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contactDetails: ContactModel;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(): void {
    const id = this.route.snapshot.params.id;
    this.contactsService.getContact(id).subscribe(contact => {
      console.log(contact[0]);
      this.contactDetails = contact[0];
    })
  }

}
