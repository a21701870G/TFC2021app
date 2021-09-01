import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyCsKzUQcmIfNv9pcuD3o0pZ0133h4nflZM',
    authDomain: 'foot-bet.firebaseapp.com',
    databaseURL: 'https://foot-bet.firebaseio.com',
    projectId: 'foot-bet',
    storageBucket: 'foot-bet.appspot.com',
    messagingSenderId: '797957180605',
    appId: '1:797957180605:web:aa09087e5b974e8ee2bbd4',
    measurementId: 'G-ERN6CNN2JN'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: FirestoreSettingsToken, useValue: {}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
