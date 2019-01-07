import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

//importo moment previamente instalado con npm install --save moment

import * as moment from 'moment';

@Injectable()
export class LoginService{
    
    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

    sesion:any = {id:null, nombre: null, estado: null, sucursal: null,coneccion: null, fecha: null};


public setSession(usuario_id, sucursal_id){
    this.sesion['id']=usuario_id;
    this.sesion['sucursal']=sucursal_id;
    this.sesion['coneccion']="Online";

    this.sesion['fecha'] = moment().format(); //formato con hora
    this.afDB.list('users/').valueChanges().subscribe(
        usuarios =>{

            //busco el nombre del usuario
        for(let j=0; j < usuarios.length; j++){
            if(usuarios[j]['id']==this.sesion['id']){ //difeencio si es cadete o cliente viendo el nombre como esta escrito si en ingles o español
              var usuario = usuarios[j];
            }
        }    
        this.sesion['estado'] = usuario['estado'];
        this.sesion['nombre'] = usuario['nombre'];
    });


}

public setIdEnvio(envio_id, cadete_id){
        //asigno el id para usarlo en la vista y distinguir la fila del envio que el cadete tomo
        let envio_tomado:any = {envio_id: envio_id, cadete_id: cadete_id};
        this.afDB.database.ref('envios_tomados/'+envio_id).set(envio_tomado);
  
}

public delEnvioTomado(envio_id){
    this.afDB.database.ref('envios_tomados/'+envio_id).remove();
}

public getEnviosTomados(){

  return this.afDB.list('envios_tomados/').valueChanges();


}

public getSession(){

    //lo puse aca ya que es dinamico, cada vez que consulto la sesion puede haber cambiado
    //el estado del cadete (usuario)
    
    
   return this.sesion;
    
}

public getUsuarios(){
    //return this.envios;
    return this.afDB.list('users/').valueChanges(); //renegue como un hijo de puta
    //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
    //todo los envios de firebase
    //this.afDB.list('/envios');
    //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
}


}