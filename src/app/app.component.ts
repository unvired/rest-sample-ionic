import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UnviredCordovaSDK, LoginParameters, LoginResult, LoginListenerType, LoginType } from '@ionic-native/unvired-cordova-sdk/ngx';
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
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.umpLogin();
    });
  }

  async umpLogin() {
    const loginParameters: LoginParameters = new LoginParameters();
    loginParameters.appName = AppConstant.APPLICATION_NAME;
    loginParameters.metadataPath = '../assets/metadata.json';
    loginParameters.loginType = LoginType.unvired;
    let loginResult: LoginResult;
    try {
      console.log('call login: ');
      loginResult = await this.unviredCordovaSdk.login(loginParameters);
      console.log('Result: ' + JSON.stringify(loginResult));
      this.router.navigate(['login'], {queryParams: { isAuthenticationSuccess: loginResult.type }});
      // switch (loginResult.type) {
      //   case LoginListenerType.auth_activation_required:
      //     console.log('Required Authentication and Activation...');
      //     this.router.navigate(['login'], {queryParams: { isAuthenticationSuccess: loginResult.type }});
      //     break;
      //   case LoginListenerType.app_requires_login:
      //     console.log('Required Authentciation Local...');
      //     this.router.navigate(['login'], {queryParams: {isAuthenticationSuccess: loginResult.type}});
      //     break;
      //   case LoginListenerType.login_success:
      //     console.log('Load Home Screen...');
      //     this.router.navigate(['home']);
      //     break;
      // }
    } catch (error) {
      console.log('Error on login ' + JSON.stringify(error));
      this.unviredCordovaSdk.logError('AppComponent', 'Initialize', 'Error during login: ' + error);
    }
  }
}
