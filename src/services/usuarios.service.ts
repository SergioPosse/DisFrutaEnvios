import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

@Injectable()
export class UsuariosService{

    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

   sucursales = [];
   usuarios=[];

   public getUsuarios(){
    //return this.envios;
    return this.afDB.list('users/').valueChanges(); //renegue como un hijo de puta
    //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
    //todo los envios de firebase
    //this.afDB.list('/envios');
    //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
}

public getClientes(){
  //return this.envios;
  var respuesta=[];
  var usuarios=[];
  this.afDB.list('users/').valueChanges().subscribe(
    usuarios_res => {
      usuarios = usuarios_res;

      for(let j=0; j < usuarios.length; j++){
          if(usuarios[j]['name']){
            respuesta.push(usuarios[j]);
          }
      }
    });
return respuesta;
}

public getCadetes(){
  //return this.envios;
  var respuesta=[];
  var usuarios=[];
  this.afDB.list('users/').valueChanges().subscribe(
    usuarios_res => {
      usuarios = usuarios_res;

      for(let j=0; j < usuarios.length; j++){
          if(usuarios[j]['nombre']){ //difeencio si es cadete o cliente viendo el nombre como esta escrito si en ingles o español
            respuesta.push(usuarios[j]);
          }
      }
    });
return respuesta;
}

public getUsuario(id){
    //metodo de filtrado para arrays en js 
   // return this.envios.filter(function(e, i){ return e.id == id})[0] || {id: null, cliente: null, sucursal: null, estado: null} //sino regresa vacio
   return this.afDB.object('users/'+id).valueChanges();
  }

  public setNoDisponible(id){

    this.afDB.database.ref('users/'+ id).update({ estado: "No Disponible"});
   
  }

  public setDisponible(id){

    this.afDB.database.ref('users/'+ id).update({ estado: "Disponible"});
  }


}