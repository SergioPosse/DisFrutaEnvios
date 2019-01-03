import { Component, ViewChild } from '@angular/core'; //agregue viewchild
import { NavController } from 'ionic-angular';
import {EnviosService} from '../../services/envios.service'; //agrego el servicio que cree
import {EstadoPage} from '../estado/estado';
import {SucursalesService} from '../../services/sucursales.service';
import {DuracionService} from '../../services/duracion.service';
import {LoginService} from '../../services/login.service';
import {DetallePage} from '../detalle/detalle';
import {HomePage} from '../home/home';
import {CadetePage} from '../cadete/cadete';
import {InicioPage} from '../inicio/inicio';

import { LoadingController } from 'ionic-angular';

import { MenuController } from 'ionic-angular';

//importo moment
import * as moment from 'moment';

import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';





@Component({
  selector: 'page-envio',
  templateUrl: 'envio.html'
})
export class EnvioPage {
 

  envioss = []; //creo un arreglo vacio para llenarlo con el service de abajo en el constructor

  sucursales = [];

  current_user:any = {id:null, nombre: null, estado: null, sucursal: null,coneccion: null, fecha: null};
  
  
  duracion_sesion_y_medida=null;

  @ViewChild('MyNav') nav: NavController
  
  constructor(private storage: Storage, public duracionService: DuracionService, public loginService : LoginService, menu: MenuController, public loadingCtrl: LoadingController, public navCtrl: NavController, public enviosService : EnviosService, public sucursalesService : SucursalesService) {
    

    menu.enable(true);
    //this.envios=[];

   this.current_user=this.loginService.getSession();

   
   
  
   
    
 
    
   

    

    const loader = this.loadingCtrl.create({
        content: "Cargando Lista De Envíos...",
        duration: 1000
      });
    
    loader.present();

     
    //cargo con el servicio el array de envios
    this.enviosService.getEnvios()
    .subscribe(envios => {
      //console.log(envios);
      //this.envios = envios;

        for(let j=0; j < envios.length; j++){
              if(envios[j]['sucursal']==this.current_user['sucursal']){

              this.envioss.push(envios[j]);
              
              }
        }
            

     this.loginService.getUsuarios().subscribe(usuarios =>{

          for(let j=0; j < this.envioss.length; j++){

              //use otro campo fecha para dejar la original sin formato para calcular el tiempo con moment
              this.envioss[j]['fecha_moment'] = moment(this.envioss[j]['fecha']).format("DD MM YYYY");

              for(let k=0; k < usuarios.length; k++){
                    if(usuarios[k]['id']==this.envioss[j]['cliente']){
                            this.envioss[j]['cliente']=usuarios[k]['name'];
                    }
              }
            
          }   


     }); 
     
     

     });

      

    

     this.startTimer();


    } //END DEL COSNTRUCTOR


    //METODOS

    startTimer(){

      let miObservador = Observable.create(observer =>{

        setInterval(()=>{

          for(let j=0; j < this.envioss.length; j++){

            //le agregue un campo "hace" en la db de forma crota ya que tenia problemas
            //para usar el localstorage y los servicios para guardar var de sesion
            //se me reseteaba la fecha que guardaba cuando iniciaba la sesion
            //mi intencion era guardar la fecha del momento de inicio para tener de referencia
            //lo mas raro es que con el id del user y otras var de sesion si me funciona todo..

          //hasta probe separando en un servicio dedicado solo a calcular la duracion pero no funciono

          //otro detalle raro es que con la page detalle si me funcionaba perfecto, no me reseteaba la fecha de inicio de sesion
          //pero con la page estado me resetea la fecha cada vez que ejecuto un metodo del .ts de la page estado
          //por ejemplo para tomar un envio
            this.envioss[j]['hace']=this.duracionService.getDuracion(this.envioss[j]['fecha']);
            
          }  
            
        }, 1000);

    });
    miObservador.subscribe((data)=>{
      //console.log(data);
    });  
     
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
