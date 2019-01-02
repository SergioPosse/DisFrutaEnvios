
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnviosService } from '../../services/envios.service';
import {SucursalesService} from '../../services/sucursales.service';
import {UsuariosService} from '../../services/usuarios.service';
import { MenuController } from 'ionic-angular';
import {LoginService} from '../../services/login.service';

@IonicPage()
@Component({
  selector: 'page-estado',
  templateUrl: 'estado.html',
})


export class EstadoPage {
  
  envioDetalle:any = {id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null};
  sucursales = [];

  cadete=null;
  clientes=[];
  cadetes=[];
  
  private id= 0; //creo una variable que sera recipiente para el parametro que paso con verDetalle de home.ts
  //por eso es null al principio hasta que la llene con el parametro

  constructor(public usuariosService : UsuariosService,public loginService : LoginService, menu: MenuController, public sucursalesService: SucursalesService, public navCtrl: NavController, public navParams: NavParams, public enviosService: EnviosService) {
    menu.enable(true);
    this.id = navParams.get('id');
    this.cadete=this.loginService.getSession();
    console.log("el id cadete es: "+this.cadete['id']);
    console.log("el estado cadete es: "+this.cadete['estado']);
    console.log("el id en estado es: "+this.id); //GUARDO EL PARAMETRO QUE PASE EN verDetalle() de home.ts junto a la ruta de la pagina con navController
    //this.envio=navParams.get('envio');

    this.sucursalesService.getSucursales()
        .subscribe(sucursal =>{
          this.sucursales=sucursal;  
      });

      this.clientes= this.usuariosService.getClientes();
      this.cadetes= this.usuariosService.getCadetes();

      
      enviosService.getEnvios()
      .subscribe(detalle => {

        for(let p=0; p < detalle.length; p++ ){
          if(detalle[p]['id']==this.id){
          
            this.envioDetalle = detalle[p];
            console.log(this.envioDetalle);

            for(let h=0; h < this.clientes.length; h++){
              if(this.clientes[h]['id']==detalle[p]['cliente']){
                this.envioDetalle['cliente']=this.clientes[h]['name'];
              }
            }//for de name de cliente
            
            for(let h=0; h < this.sucursales.length; h++){
              if(this.sucursales[h]['id']==detalle[p]['sucursal']){
                this.envioDetalle['sucursal']=this.sucursales[h]['name'];
              }
            }//for de name sucursal

            for(let h=0; h < this.cadetes.length; h++){
              if(this.cadetes[h]['id']==detalle[p]['cadete']){
                this.envioDetalle['cadete']=this.cadetes[h]['nombre'];
              }
            }//for de name sucursal



          }//for de envios

        }

      });
    

        // var sucursal_id = this.envioDetalle['sucursal'];
        //   //console.log("sucursal id: "+sucursal_id);
        //     this.sucursalesService.getSucursales()
        //   .subscribe(sucursal =>{
        //     //tuve que poner la variable i dentro de subscribe, sino me tomaba
        //     //solo el ultimo valor del array nomas
        //         for(let k=0; k < sucursal.length; k++){
        //             if(sucursal[k]['id']==sucursal_id){
        //               let envio_sucursal=sucursal[k]['name'];
        //               this.envioDetalle['sucursal'] = envio_sucursal;
        //               //console.log(envio_sucursal); 
        //             }
        //         }
        //     });
        





  } //end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadoPage');
  }

  

  public cancelarEnvio(){
    let estado="Cancelado";
    this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
    this.usuariosService.setDisponible(this.cadete['id']);
    alert("¡Cancelado!");
  }

  public entregarEnvio(){
    //console.log("estado guardado: "+this.cadete['estado']) //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
    //if(this.cadete['estado']=="No Disponible"){
    //   alert("¡Ya tomaste un envío!")
     //}
     //else{
      let estado="Entregado";
      this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
      this.usuariosService.setDisponible(this.cadete['id']);
      alert("Entregado con exito");
     //}
  }

  public tomarEnvio(){
    console.log("estado guardado: "+this.cadete['estado']) //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
    if(this.cadete['estado']=="No Disponible"){
       alert("¡Ya tomaste un envío!")
     }
     else{
      let estado="En Camino";
      this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
      this.usuariosService.setNoDisponible(this.cadete['id']);
     }
    // //actualizar estado envio a "en camino"
    // 
    // 
    //
    // //actualizar estado de cadete a "no disponible"


    // //this.envioDetalle=null; 555555555555555555555555555555555555
    // this.navCtrl.push(EnvioPage);
  }




}
