import { Component, ViewChild } from '@angular/core'; //agregue viewchild
import { NavController } from 'ionic-angular';
import {EnviosService} from '../../services/envios.service'; //agrego el servicio que cree
import {EstadoPage} from '../estado/estado';
import {SucursalesService} from '../../services/sucursales.service';
import {LoginService} from '../../services/login.service';
import {DetallePage} from '../detalle/detalle';
import {HomePage} from '../home/home';
import {CadetePage} from '../cadete/cadete';
import {InicioPage} from '../inicio/inicio';

import { LoadingController } from 'ionic-angular';

import { MenuController } from 'ionic-angular';


@Component({
  selector: 'page-envio',
  templateUrl: 'envio.html'
})
export class EnvioPage {

  envioss = []; //creo un arreglo vacio para llenarlo con el service de abajo en el constructor

  sucursales = [];

  current_user=[];

  @ViewChild('MyNav') nav: NavController
  
  constructor(public loginService : LoginService, menu: MenuController, public loadingCtrl: LoadingController, public navCtrl: NavController, public enviosService : EnviosService, public sucursalesService : SucursalesService) {
    
    menu.enable(true);
    //this.envios=[];
   this.current_user= this.loginService.getSession();
   console.log("prueba: "+this.current_user['nombre']);
   console.log("sucursal de session: "+this.current_user['sucursal']);
   console.log("estado de session: "+this.current_user['estado']);

    

    const loader = this.loadingCtrl.create({
        content: "Cargando Lista De Envíos...",
        duration: 1000
      });
    
    loader.present();

     
    //cargo con el servicio el array de envios
    this.enviosService.getEnvios()
    .subscribe(envios => {
      console.log(envios);
      //this.envios = envios;

        for(let j=0; j < envios.length; j++){
              if(envios[j]['sucursal']==this.current_user['sucursal']){

              this.envioss.push(envios[j]);
              }
        }
            

     this.loginService.getUsuarios().subscribe(usuarios =>{

          for(let j=0; j < this.envioss.length; j++){

              for(let k=0; k < usuarios.length; k++){
                    if(usuarios[k]['id']==this.envioss[j]['cliente']){
                            this.envioss[j]['cliente']=usuarios[k]['name'];
                    }
              }
            
          }   


     });    

     });

      


    } //END DEL COSNTRUCTOR


    //METODOS


  backButtonClick(){
    alert("a inicio");
  }


  public verDetalle(idd){

    this.navCtrl.push(EstadoPage, {id: idd});//,envio: this.envios})
  } 

  public editarDetalle(id){
    this.navCtrl.push(DetallePage, {id: id});//,envio: this.envios})
  } 

  public nuevoEnvio(){ //no necesito pasar ningun id porque es un insert
    var id2=0;
    this.navCtrl.push(DetallePage, {id: id2}) //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
  }

  public verTodo(){
    this.navCtrl.push(HomePage) //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert

  }
  public verCadetes(){
    this.navCtrl.push(CadetePage) //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert

  }

  public salir(){

    this.loginService.setSession(null,null);
    
    this.navCtrl.push(InicioPage)
   //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert

  }

  

}
