import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from "ionic-angular";
import { AppConstant } from "../../constants/appConstant";
import { HomePage } from "../home/home";
import { Device } from '@ionic-native/device';

declare var cordova: any;
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  isAuthenticationSuccess: boolean = false
  isHasPermissions: boolean = false;
  url = "https://sandbox.unvired.io/UMP/"
  company = "unvired"
  username = "suman"
  password = "unvired"

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private Loading: LoadingController,
    private device: Device) {
    this.isAuthenticationSuccess = this.navParams.get("isAuthenticationSuccess")
    alert("isAuthenticationSuccess:" + this.isAuthenticationSuccess)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {

    // alert("Device: " + this.device.platform.toLowerCase())
    // if (this.device.platform.toLowerCase() == "android") {
    //   if (!this.isHasPermissions) {
    //     this.checkRequiredPermission();
    //     return;
    //   }
    // }

    if (!this.url || this.url.trim().length == 0) {
      this.showAlert("", "Enter Url.");
      return
    }

    if (!this.company || this.company.trim().length == 0) {
      this.showAlert("", "Enter Company.")
      return
    }

    if (!this.username || this.username.trim().length == 0) {
      this.showAlert("", "Enter Username.")
      return
    }

    if (!this.password || this.password.trim().length == 0) {
      this.showAlert("", "Enter Password.")
      return
    }

    let loading = this.Loading.create({
      content: "Please wait.",
      dismissOnPageChange: true,
    });

    ump.login.parameters.appName = AppConstant.APPLICATION_NAME
    ump.login.parameters.url = this.url
    ump.login.parameters.company = this.company
    ump.login.parameters.username = this.username
    ump.login.parameters.password = this.password

    ump.login.login((result: any) => {
      // alert("Result:" + JSON.stringify(result))

      if (result.type === ump.login.listenerType.auth_activation_required) {
        alert("Activate")
        loading.present();
        this.authenticate()
      } else if (result.type === ump.login.listenerType.app_requires_login) {
        alert("Authenticate Local")
        alert("url:" + this.url + " " + "company:" + this.company + " " + "username:" + this.username + "password:" + this.password)
        loading.present();
        this.authenticateLocal()
      } else if (result.type === ump.login.listenerType.auth_activation_success || result.type === ump.login.listenerType.login_success) {
        alert("Login Success")
        loading.dismiss()
        this.displayHomeScreen()
      } else if (result.type === ump.login.listenerType.auth_activation_error || result.type === ump.login.listenerType.login_error) {
        loading.dismiss()
        this.showAlert(AppConstant.ERROR, result.error)
      }
    })

  }

  // Authentication
  authenticate() {
    ump.login.authenticateAndActivate(function (authResult) {
      if (authResult.type === ump.login.listenerType.auth_activation_success) {
        alert("Authentication sucessfull!!!" + JSON.stringify(authResult))
      }
    });
  }

  // AuthenticateLocal
  authenticateLocal() {
    alert("inside authenticateLocal")
    ump.login.authenticateLocal(function (authResult) {
      alert('Authenticate local result:' + JSON.stringify(authResult))
      if (authResult.type === ump.login.listenerType.login_success) {
        alert("Authentication sucessfull!!!" + JSON.stringify(authResult))
      }
    });
  }

  // Check for permission
  checkRequiredPermission() {
    var permissions = cordova.plugins.permission
    var list = [
      permissions.READ_PHONE_STATE,
      permissions.WRITE_EXTERNAL_STORAGE,
      permissions.READ_EXTERNAL_STORAGE
    ]
    var that = this
    permissions.requestPermissions(list, function (status) {
      if (!status.hasPermission) {
        alert("Permissions required to use this application not granted.Please grant Phone and Storage permissions")
      } else {
        that.isHasPermissions = true;
        that.login();
      }
    }, function () { alert("Error while requiesting for permissions.") });
  }

  // Present Home Screen 
  displayHomeScreen() {
    this.navCtrl.setRoot(HomePage)
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
