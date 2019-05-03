import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {

  //Variables
  firstName = "Alfred";
  lastName = "Smith";
  address = "170 Kessels Rd, Nathan QLD 4111";
  phone = "1234";
  birthday = "1990-01-10";
  facebook = "alfred.smith.10";
  twitter = "@alfredsmith";
  youtube = "Alfred Reacts";
  instagram = "@alfredsmith";
  snapchat = "alfredsmith";

  //Contructor
  constructor(private router: Router, private location: Location) { }

  // delete the currently selected contact
  deleteContact(){ 
  }

  //Address was pressed now load the content modal to display map ui
  contentLocation(){
    this.router.navigateByUrl('/content-modal/'+"Location");
  }

  ///Social Media Buttons

  // Twitter button was pressed, now load the content modal with twitter feed
  contentTwitter(){
    this.router.navigateByUrl('/content-modal/'+"Twitter");
  }

  ngOnInit() {
  }
}
