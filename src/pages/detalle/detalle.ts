
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnviosService } from '../../services/envios.service';
import {SucursalesService} from '../../services/sucursales.service';
import {UsuariosService} from '../../services/usuarios.service';
import {LoginService} from '../../services/login.service';
import { MenuController } from 'ionic-angular';
import { EnvioPage} from '../../pages/envio/envio';
import * as moment from 'moment';
/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})



export class DetallePage {
  
  envioDetalle2:any = {id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null, fecha: null};
  sucursales = [];
  clientes=[];
  cadetes=[];

  private id = null; //creo una variable que sera recipiente para el parametro que paso con verDetalle de home.ts
  //por eso es null al principio hasta que la llene con el parametro

  constructor(public loginService : LoginService, public usuariosService : UsuariosService, menu: MenuController, public sucursalesService: SucursalesService, public navCtrl: NavController, public navParams: NavParams, public enviosService: EnviosService) {
    menu.enable(true);
    this.id= navParams.get('id'); //GUARDO EL PARAMETRO QUE PASE EN verDetalle() de home.ts junto a la ruta de la pagina con navController
    console.log("el id detalle es: "+this.id);

    this.sucursalesService.getSucursales()
        .subscribe(sucursal =>{
          this.sucursales=sucursal;  
      });

    
    this.clientes= this.usuariosService.getClientes();
    this.cadetes= this.usuariosService.getCadetes();

    if (this.id != 0){ //si el id no es 0, entonces es un edit y solo uso la interface detalle para mostrar datos
      enviosService.getEnvios()
      .subscribe(detalle => {
        for(let i=0; i < detalle.length;i++ ){
          if(detalle[i]['id']==this.id){
            this.envioDetalle2 = detalle[i];
          }
        }

      });
      
    }else{

      

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  
  public guardarEnvio(){
    if (this.id != 0){
      alert("editar"); 
      //enviosService.getEnvio(this.id)
      //.subscribe(envioDetalle2 => {this.envioDetalle2 = envioDetalle2});
      this.enviosService.editEnvio(this.envioDetalle2); //voy al enviosService
      alert('Envio editado con exito');
      
    }else{
      alert("crear"); //si es un insert entonces...
      this.envioDetalle2.id= Date.now();
      this.envioDetalle2.fecha= moment().format();
      console.log("fecha para crear: "+this.envioDetalle2.fecha);
      this.envioDetalle2.estado="Pendiente";
      this.envioDetalle2.cadete=null; //asigno un id unico con date.now asegurandome que sea unico ya que trabaja con milisegundos
      this.enviosService.createEnvio(this.envioDetalle2); //voy al enviosService
      alert('Envio creado con exito');

    }
 
  this.navCtrl.push(EnvioPage); //vuelvo a home cuando termino
  }

  public eliminarEnvio(){
    alert("eliminar");
    this.id=null; //tuve que asignarle null al id para usar ngIf en el form, porque me queria cargar el envio
    //que elimine en el form de detalle y no encontraba los datos, me daba todo undefined
    //teoricamente tendria que no cargar el form e ir directo al home con navCtril.pop() pero son
    //cosas raras que pasan y no entiendo
    //de esta forma solo es un parche que no me muestre los inputs en el form (por lo tanto no tiene que cargar nada eliminado)
    
    //this.envioDetalle2 = {id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null};
     //vuelvo a home cuando termino
     //this.envioDetalle2= null;
     let session = this.loginService.getSession();
     this.usuariosService.setDisponible(session['id']);
   // alert(session['id']);
     this.enviosService.deleteEnvio(this.envioDetalle2);
    alert('Envio eliminado');
    
    this.navCtrl.push(EnvioPage);
  }




}
