import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  cityName: string = ""

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }

  menuButtonClicked() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Settings',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    actionSheet.present()
  }
}
