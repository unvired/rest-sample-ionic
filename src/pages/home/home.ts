import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, AlertController } from 'ionic-angular';
import { WEATHER_HEADER } from '../../models/WEATHER_HEADER';
import { AppConstant } from "../../constants/appConstant";

// declare var ump: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private cityName: string = ""
  private showWeatherInfo: boolean = false;

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
  }

  menuButtonClicked() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Settings',
          handler: () => {
            console.log('Settings clicked');
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

  getweather() {

    if (!this.cityName || this.cityName.trim().length == 0) {
      this.showAlert("Enter City." + this.cityName)
      return
    }

    var weatherHeader = new WEATHER_HEADER()
    weatherHeader.CITY = this.cityName
    
    var inputHeader = {}
    inputHeader["WEATHER_HEADER"] = weatherHeader
    alert("Input:" + JSON.stringify(inputHeader))

    ump.sync.submitInSync(ump.sync.requestType.PULL, inputHeader, null, AppConstant.PA_GET_WEATHER, true, function (result) {
      alert("Response from server: " + JSON.stringify(result))
      if (result.type === ump.resultType.success) {
        alert('Success:' + JSON.stringify(result))
      }
      else {
        alert('Error:' + JSON.stringify(result))
      }
    })

  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: "",
      subTitle: message,
      buttons: [{
        text: 'Ok'
      }],
    });
    alert.present();
  }
}
