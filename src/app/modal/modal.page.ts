import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
 
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit(){
  }
  
  // Function to dismiss the modal when the button is clicked.
  async closeModal() {
    const onClosedData: string = "Button Pressed";
    await this.modalController.dismiss(onClosedData);
  }
}