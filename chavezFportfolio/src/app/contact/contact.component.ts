import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/icontact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  contactMe(email: string, name: string, msg: string) {
    //check all values are not empty
    if (email.length < 1 || name.length < 1 || msg.length < 1) {
      alert('fill out all fields');
    } else {
      //create contact obj
      const person: IContact = {
        contactEmail: email,
        contactName: name,
        contactMsg: msg
      };

      //pass to service
      this.ds.addContact(person);
    }
  }

}
