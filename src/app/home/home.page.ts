import { Component } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, Platform } from '@ionic/angular';
import { UnviredCordovaSDK, RequestType, SyncResult } from '@ionic-native/unvired-cordova-sdk/ngx';
import { AppConstant } from 'src/constants/appConstant';
import { WEATHER_HEADER } from 'src/models/WEATHER_HEADER';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cityName = '';
  showWeatherInfo = false;
  weatherHeraderObj: WEATHER_HEADER = {} as WEATHER_HEADER;
  load: HTMLIonLoadingElement;

  constructor(private platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              private loading: LoadingController,
              private unviredCordovaSdk: UnviredCordovaSDK) {
  }

  getweather() {
    this.showWeatherInfo = false;
    if (!this.cityName || this.cityName.trim().length === 0) {
      this.showAlert('', 'Enter City.' + this.cityName);
      return;
    }
    this.sendDataToServer();
  }

  async sendDataToServer() {
    const weatherHeader = new WEATHER_HEADER();
    weatherHeader.CITY = this.cityName;
    weatherHeader.HUMIDITY = '';
    weatherHeader.TEMPERATURE = '';
    weatherHeader.WEATHER_DESC = '';

    const data = {WEATHER: [{ WEATHER_HEADER: weatherHeader }]};
    const data1 = { WEATHER_HEADER: weatherHeader };
    let result: SyncResult;
    this.showLaoding();
    const insertDb = await this.unviredCordovaSdk.dbInsertOrUpdate('WEATHER_HEADER', weatherHeader, true);
    console.log('Insert data to db -- weather_info page ' + JSON.stringify(insertDb));
    // tslint:disable-next-line:max-line-length
    if (this.platform.is('ios') || this.platform.is('android')) {
      result = await this.unviredCordovaSdk.syncForeground(RequestType.RQST, data1, '', AppConstant.PA_GET_WEATHER, true);
    } else {
      result = await this.unviredCordovaSdk.syncForeground(RequestType.RQST, null, data, AppConstant.PA_GET_WEATHER, true);
    }
    console.log('Response from server: ' + JSON.stringify(result));
    this.dismissLoading();
    if (result.type === 0) {
      if (result.data.WEATHER === undefined) {
        this.fetchDataFromDb();
      } else {
        const jsonObj = result.data;
        const weatherObj = jsonObj.WEATHER[0];
        const weather = weatherObj.WEATHER_HEADER;
        this.weatherHeraderObj = weather;
        this.showWeatherInfo = true;
      }
    } else {
      console.log('Error: ' + JSON.stringify(result.error));
      this.showAlert('Error', result.error);
    }
  }

  async fetchDataFromDb() {
    const res = await this.unviredCordovaSdk.dbSelect('WEATHER_HEADER', `CITY = '${this.cityName}'`);
    if (res.type === 0) {
      console.log('data from db: ' + JSON.stringify(res.data[0]));
      const weather = res.data[0];
      this.weatherHeraderObj = weather;
      this.showWeatherInfo = true;
    } else {
      console.log('Error: ' + JSON.stringify(res.error));
      this.showAlert('Error', res.error);
    }
  }

  async showLaoding() {
    this.load = await this.loading.create({
      message: 'Please wait...',
      spinner: 'circles'
    });
    await this.load.present();
  }

  async dismissLoading() {
    setTimeout(() => {
      this.load.dismiss();
    }, 2000);
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'Ok'
      }],
    });
    alert.present();
  }
}
