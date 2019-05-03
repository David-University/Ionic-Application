import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

   test;
  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // Loading app data in storage before page Init
    if (await this.storage.get("name") == null){
      await this.storage.set("name","");
    }
    if (await this.storage.get("showNotifications") == null){
      await this.storage.set("showNotifications",true);
    }
    if (await this.storage.get("reminder") == null){
      await this.storage.set("reminder","2019-04-12");
    }
    if (await this.storage.get("login") == null){
      await this.storage.set("login","false");
    }
    if (await this.storage.get("first") == null){
      await this.storage.set("first","false");
    }
    if (this.test = await this.storage.get("staylogged") == null){
      await this.storage.set("staylogged","false");
    }
  }
}
