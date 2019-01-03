import {Component , ViewChild} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {EnvioPage} from '../envio/envio';
import {RegistroPage} from '../registro/registro';
import {SucursalesService} from '../../services/sucursales.service';
import {LoginService} from '../../services/login.service';

import { Storage } from '@ionic/storage';
import * as moment from 'moment';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  public email:string;
  public password:string;

  public usuarios=[];

  public sucursal_id ="";

  sucursales = [];

  @ViewChild('MyNav') nav: NavController
  
  constructor(private storage: Storage, public navCtrl: NavController, public loginService : LoginService, public sucursalesService : SucursalesService, private toastCtrl: ToastController) {
    this.sucursalesService.getSucursales()
    .subscribe(sucursal =>{
      this.sucursales=sucursal;  
      //console.log(sucursal);
  });


  }

entrar(){
  this.loginService.getUsuarios()
  .subscribe(usuarios =>{
    this.usuarios=usuarios;  
    //console.log(usuarios);
    if(this.email==null || this.email==""){
      let toast = this.toastCtrl.create({
        message: 'Ingrese un email',
        position: 'top',
        duration: 3000
      });
      toast.present();
    }
    else{

      for(let j=0; j < usuarios.length;j++){
          if(usuarios[j]['email']==this.email){
                  var usuario = usuarios[j];  
          }       
      }

      if(!usuario){
        let toast = this.toastCtrl.create({
          message: 'email no registrado',
          position: 'top',
          duration: 3000
        });
        toast.present();
      }
      else{
        if(usuario['estado']){
            
          if(usuario['password']==this.password){
            if(this.sucursal_id==null || this.sucursal_id==""){
              let toast = this.toastCtrl.create({
                message: '¡Seleccione Una Sucursal!',
                position: 'top',
                duration: 3000
              });
              toast.present();

            }
            else{
              //console.log("usuario: "+usuario['id']);
              this.loginService.setSession(usuario['id'],this.sucursal_id);
              this.storage.set('sto_id', usuario['id']);
              this.storage.set('sto_sucursal_id', this.sucursal_id);

              let fecha_inicio = moment().format();
              this.storage.set('sto_fecha_inicio', fecha_inicio);
              this.navCtrl.push(EnvioPage);
            }
            
              
          }
          else{
            let toast = this.toastCtrl.create({
              message: 'Contraseña incorrecta',
              position: 'top',
              duration: 3000
            });
            toast.present();
          }


        }
        else{
          let toast = this.toastCtrl.create({
            message: 'El email ya esta siendo usado por un cliente',
            position: 'top',
            duration: 3000
          });
          toast.present();
        }
        
      }


    }
    
  
});
  


}
registrar(){
  this.navCtrl.push(RegistroPage);
}

//     console.log('login',this.email,this.password);


//     //this.loginService.getUsuarios()
//     //.subscribe(usuarios => {
// //
//      // this.usuarios = usuarios;

//        // for(let j=0; j < this.usuarios.length; j++){

          
//        //   var user_email = this.usuarios[j]['email'];

//        //   if (user_email == this.email){
//           //  var user_id = this.usuarios[j]['id'];

//        //   }

//         //  this.loginService.getUsuario(user_id)
//      //   .subscribe(usuario =>{
//      //     if (usuario['password']==this.password){
//     //        alert("Correcto");
//      //       console.log("Correcto");
//      //       this.navCtrl.push(EnvioPage);
//         //  }
//          // else{
//         //    console.log("Incorrecto");
//         //     this.navCtrl.pop()
//         //   }
//         // });


//       }

//     });

//   }

}