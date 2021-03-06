import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UnviredCordovaSDK, LoginParameters, LoginResult, LoginType } from '@ionic-native/unvired-cordova-sdk/ngx';
import { AppConstant } from 'src/constants/appConstant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private unviredCordovaSdk: UnviredCordovaSDK,
    private router: Router,
    private alrtCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.umpLogin();
    });
  }

  async umpLogin() {
    const loginParameters: LoginParameters = new LoginParameters();
    loginParameters.appName = AppConstant.APPLICATION_NAME;
    loginParameters.metadataPath = '../assets/metadata.json';
    loginParameters.loginType = LoginType.unvired;
    let loginResult: LoginResult;
    try {
      loginResult = await this.unviredCordovaSdk.login(loginParameters);
      console.log('Result: ' + JSON.stringify(loginResult));
      this.router.navigate(['login'], {queryParams: { isAuthenticationSuccess: loginResult.type }});
    } catch (error) {
      (await this.alrtCtrl.create({header: 'Error', subHeader: JSON.stringify(error), buttons: [{text: 'Ok'}]})).present();
      console.log('Error on login ' + JSON.stringify(error));
      this.unviredCordovaSdk.logError('AppComponent', 'Initialize', 'Error during login: ' + error);
    }
  }
}
