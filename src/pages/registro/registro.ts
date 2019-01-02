import { CadetesService } from '../../services/cadetes.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginService} from '../../services/login.service';
import {InicioPage} from '../../pages/inicio/inicio';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  private email="";
  private password="";
  private password2="";
  private nombre="";
  private apellido="";
  private telefono="";
  private email_used=false;

  constructor(private loginService : LoginService, private toastCtrl: ToastController, public cadetesService : CadetesService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  nuevoCadete(){
    if(!this.email || !this.password || !this.nombre || !this.apellido || !this.telefono){
      let toast = this.toastCtrl.create({
        message: 'Por favor llene todos los campos',
        position: 'top',
        duration: 3000
      });
      toast.present();
    }
    else{ //primer else

        this.loginService.getUsuarios()
        .subscribe(usuarios =>{
                  for(let j=0; j < usuarios.length;j++){
                      if(usuarios[j]['email']==this.email){
                              this.email_used=true;  
                      }       
                  }
                  if(this.email_used==true){
                    let toast = this.toastCtrl.create({
                      message: 'email no disponible',
                      position: 'top',
                      duration: 3000
                    });
                    toast.present();
                  }
                  else{
                      if(this.password==this.password2){
                              let id = Date.now();
                              let email = this.email;
                              let password = this.password;
                              let nombre = this.nombre+" "+this.apellido;
                              let telefono = this.telefono;
                              var cadete ={id: id, email: email, password: password, nombre: nombre, estado: "Disponible", telefono: telefono}
                              this.cadetesService.nuevoCadete(cadete);
            
                              let toast = this.toastCtrl.create({
                                  message: 'Registro Exitoso',
                                  position: 'top',
                                  duration: 3000
                              });
                              toast.present(); 
                              this.navCtrl.push(InicioPage);
                      }
                      else{
                            let toast = this.toastCtrl.create({
                            message: 'Las contraseñas no coinciden',
                            position: 'top',
                            duration: 3000
                            });
                            toast.present();
                        }
                  }
        });
      
    }//en del primer else
    



  }//en nuevo cadete

} //en page
