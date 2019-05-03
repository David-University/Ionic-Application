import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //Variables
  time = "";
  notification = "";
  name = "";
 
  //Constructor
  constructor (private storage: Storage, private router: Router){
  } 

  //Clear data button, used to wipe user data and reset welcome modal
  async clearData(){
    await this.storage.set("first","false");
  }

  //Logout button handler, sets in storage that the user has logged out,
  // then navigates to login screen.
  async logout(){
    await this.storage.set("login","false");
    await this.router.navigateByUrl('');
  }

  //NameChange handler, detects if the text field for name/email has changed,
  // and stores the change.
  async nameChange(){
    console.log('name/email Changed');
    await this.storage.set("name",this.name);
  }

  //Notification button has changed, store the change in state
  async shownNoteChange(){
    console.log('notification Changed');
    await this.storage.set("showNotifications", this.notification);
  }

  //Birthday field has changed, store the change in storage
  async dateTimeChange(){
    console.log("Birthday Change");
    console.log(this.time);
    await this.storage.set("birthday", this.time);
  }

  //Load the name/email upon entry into settings tab
  async ionViewWillEnter(){ // ensure consistent state of name accross tabs
    this.name = await this.storage.get("name");
  }

  //Grab the stored variables upon initialisation of the tab
  async ngOnInit(){
    console.log("ngOnInit");
    this.time = await this.storage.get("birthday");
    this.notification = await this.storage.get("showNotifications");
    this.name = await this.storage.get("name");
  }
}