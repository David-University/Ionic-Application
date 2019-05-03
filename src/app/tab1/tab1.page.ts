import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage  } from '@ionic/storage';
import { Contact } from './contact';
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {

 //Variables

 //Static list variable
  contacts:Contact[] = [
    new Contact("James","Adams",2345,"",""),
    new Contact("Alfred","Smith",1234,"",""),
    new Contact("Betty","Jane",3456,"","")
  ];

  //For use in ordering Contact List
  alphabet:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
  // String Boolean for login status
  login: string;

  //Constructor
  constructor(private router: Router, private storage: Storage){
  }

  addContact(){ // add contact button, navigates to add contact screen
    this.router.navigateByUrl('add-contact');
  }

  contactClick(){ // contact pressed, navigates to contact detail screen
    this.router.navigateByUrl('contact-detail');
  }

  // Upon entry to the page, sorts the list of contacts and checks if user has logged in,
  // If not the user is redirected to the login screen
  async ionViewWillEnter(){

    //sort contacts upon entry
    this.contacts.sort(function(a,b){
      let nameA=a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
      if(nameA<nameB){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }
      return 0;
    })

    //Checks login status
    this.login = await this.storage.get("login");
    await console.log(this.login);
    if(await this.login == "false"){
      await this.router.navigateByUrl('login');
      }
  }

  // Checks login status upon page creation, redundant due to 'ionViewWillEnter'
  async ngOnInit(){
    this.login = await this.storage.get("login");
    await console.log(this.login);

    if(await this.login == "false"){
    await this.router.navigateByUrl('login');
    }
  }
}
