import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contactList: IContact[] = [];

  constructor() { }

  addContact(person: IContact) {
    //push into contactList
    this.contactList.push(person);
    //console log
    console.log(this.contactList);
    //alert
    alert("Thank you for your interest in me! I'll reply to your message as soon as possible");
  }
}
