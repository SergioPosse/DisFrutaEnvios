import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuariosService} from '../../services/usuarios.service';
import {LoginService} from '../../services/login.service'

/**
 * Generated class for the CadetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadete',
  templateUrl: 'cadete.html',
})
export class CadetePage {
  cadetes=[];

  constructor(public loginService: LoginService, public usuariosService : UsuariosService, public navCtrl: NavController, public navParams: NavParams) {

    this.cadetes=this.usuariosService.getCadetes();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadetePage');
  }

}
