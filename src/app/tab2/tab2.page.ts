import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Contact } from '../tab1/contact';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //Variables
  userName = "";

  //Mock Contact Variable
  contacts:Contact[] = [
    new Contact("Alfred","Smith",1234,"",""),
  ];

  //Constructor
  constructor(private router: Router){}

  //Contact Click Handlder, navigates to contact detail
  contactClick(){
    this.router.navigateByUrl('contact-detail');
  }

  //Add contact button handler, navigates to add contact screen
  addContact(){ // add contact button
    this.router.navigateByUrl('add-contact');
  }

}


