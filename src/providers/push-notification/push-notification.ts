import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular'

@Injectable()
export class PushNotificationProvider {

  constructor( private oneSignal: OneSignal,
              private platform: Platform
  ) {
    console.log('Hello PushNotificationProvider Provider');
  }

  initConfiguration(){

    if ( this.platform.is( 'cordova' ) ) {
      console.log( 'OneSignal mobile' );

      this.oneSignal.startInit('a1b8586d-e9ac-407b-877e-05588e1d6a7e', '831877811286');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(( jsonData ) => {
        // do something when notification is received
        console.log('Notificacion recibida');;
        console.log(JSON.stringify(jsonData));
      });

      this.oneSignal.handleNotificationOpened().subscribe(( jsonData ) => {
        // do something when a notification is opened
        console.log('Notificacion abierta');;
        console.log(JSON.stringify(jsonData));
      });

      this.oneSignal.endInit();

    } else {
      console.log( 'OneSignal se configuró para mobile' );
    }
  }

}
