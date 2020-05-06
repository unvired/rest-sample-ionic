# rest-sample-ionic
Ionic sample application integrating with REST based systems

```
$ ionic info
cli packages: (/usr/local/lib/node_modules)

Ionic:

   Ionic CLI                     : 5.4.16 (/usr/local/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 5.1.0
   @angular-devkit/build-angular : 0.803.26
   @angular-devkit/schematics    : 8.3.26
   @angular/cli                  : 8.3.26
   @ionic/angular-toolkit        : 2.2.0

Utility:

   cordova-res (update available: 0.14.0) : 0.12.0
   native-run                             : 1.0.0

System:

   NodeJS : v12.16.2 (/usr/local/bin/node)
   npm    : 6.14.4
   OS     : macOS Catalina

# Clone Unvired REST Sample Project

Clone the GitHub Project by executing the following command in Terminal.

```
$ git clone https://github.com/unvired/rest-sample-ionic.git
```

Install npm node modules 

In the Terminal app, do a cd into the project folder and execute the following command.

```
$npm install 
```

# To Run the App in iOS

**Install CocoaPods (if not already installed)**
------------------------------------------------

Install CocoaPods by executing the following command in the Terminal.

```
$ sudo gem install cocoapods
```

Note: After you install cocoapods, make sure you set it up by executing the following command in terminal

```
$ pod setup
```

**Install Unvired SDK**
-----------------------

In Terminal, do a cd into ios folder.

```
$ cd platforms/ios
```

Install Pod by running the following command.

```
$ pod install --repo-update
```

This will set up Unvired REST Sample Project with all the required dependencies.


**Using the app**
----------------
Compile & run the app. When the app starts you can provide the following sample credentials to login:
```
Company: unvired
Username: demo
Password: Unvired123*
```

# Workaround: Error: Cannot read property 'replace' of undefined

```
$ cd platforms/ios/cordova/node_modules/
$ sudo npm install ios-sim@latest
```
More info can be found [Here](https://forum.ionicframework.com/t/error-cannot-read-property-replace-of-undefined/94532/12)





