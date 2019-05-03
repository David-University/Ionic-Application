import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  //Constructor
  constructor(private router: Router, private location: Location) { }

  //Store cpntact data then load the previous page
  save(){
    this.location.back(); 
  }

  ngOnInit() {
  }

}
