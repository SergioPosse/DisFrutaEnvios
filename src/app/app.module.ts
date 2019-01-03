import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//HASTA ACA LO PREDEFINIDO POR EL FRAMEWORK

//PAGES
import { HomePage } from '../pages/home/home'; //PREDEFINIDA
//importo todas las paginas que voy a usar
import { InicioPage } from '../pages/inicio/inicio';
import { DetallePage } from '../pages/detalle/detalle';
import { EnvioPage } from '../pages/envio/envio';
import { EstadoPage } from '../pages/estado/estado';
import { CadetePage } from '../pages/cadete/cadete';
import { RegistroPage } from '../pages/registro/registro';


//SERVICES (o providers) uso services por costumbre de angular
import {SucursalesService} from '../services/sucursales.service'
import {UsuariosService} from '../services/usuarios.service'
import {CadetesService} from '../services/cadetes.service'
import {EnviosService} from '../services/envios.service'
import {LoginService} from '../services/login.service'
import {DuracionService} from '../services/duracion.service'

//FIREBASE CONFIG
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicStorageModule } from '@ionic/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyCYSut1mEeaD_imtRR9d1sj2jfIyYawi_4",
  authDomain: "disfruta-4d4be.firebaseapp.com",
  databaseURL: "https://disfruta-4d4be.firebaseio.com",
  projectId: "disfruta-4d4be",
  storageBucket: "disfruta-4d4be.appspot.com",
  messagingSenderId: "320703792295"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    EnvioPage,
    DetallePage,
    EstadoPage,
    RegistroPage,
    CadetePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    RegistroPage,
    EnvioPage,
    EstadoPage,
    CadetePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    SucursalesService,
    UsuariosService,
    CadetesService,
    EnviosService,
    LoginService,
    DuracionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
