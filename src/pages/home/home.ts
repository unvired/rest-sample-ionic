import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
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
  private weatherHeraderObj: WEATHER_HEADER = <WEATHER_HEADER>{}

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private Loading: LoadingController, ) {
  }

  getweather() {
    this.showWeatherInfo = false
    var that = this

    if (!this.cityName || this.cityName.trim().length == 0) {
      this.showAlert("", "Enter City." + this.cityName)
      return
    }

    let loading = this.Loading.create({
      content: "Please wait.",
      dismissOnPageChange: true,
    });

    var weatherHeader = new WEATHER_HEADER()
    weatherHeader.CITY = this.cityName

    var inputHeader = {}
    inputHeader["WEATHER_HEADER"] = weatherHeader
    loading.present()

    ump.sync.submitInSync(ump.sync.requestType.PULL, inputHeader, null, AppConstant.PA_GET_WEATHER, false, function (result) {
      loading.dismiss()
      console.log("Response from server: " + JSON.stringify(result))
      if (result.type === ump.resultType.success) {
        let jsonObj = result.data
        let weatherObj = jsonObj.WEATHER[0]
        let weatherHeader = weatherObj.WEATHER_HEADER
        that.weatherHeraderObj = weatherHeader
        that.showWeatherInfo = true
      }
      else {
        that.showAlert("Error", result.error)
      }
    })

  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Ok'
      }],
    });
    alert.present();
  }
}
