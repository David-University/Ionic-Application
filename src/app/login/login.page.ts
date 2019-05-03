import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage  } from '@ionic/storage';
import { ModalController }  from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Variables
  userName = ""; // input username or email
  count:number = 0; // counter for storing how many times login has been pressed

  // Constructor for modules
  constructor(private router: Router, private storage: Storage, private modalController: ModalController){}

  //Open modal function, sets up the modal and presents it on screen
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Data:', dataReturned);
      }
    });
  modal.present();
  }

  // Login button was pressed, now store that login has occured and save the login name/email,
  // then transition to contact screen.
  //TODO: Add verification on input for email and password
  async login(){
    this.incrementCounter();
    console.log('login pressed');
    await this.storage.set("login","true");
    await this.storage.set("name",this.userName);
    this.router.navigateByUrl('');
  }

  //Increments the login counter when called.
  incrementCounter(){
    this.count++;
  }

  // Check if the welcome page modal has been displayed atleast once.
  // If not, opens the modal and stores that it has been opened.
  async ngOnInit() {
    if (await this.storage.get("first") == "false"){
      await this.openModal();
      await this.storage.set("first","true");
    }
  }

}

