import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

@Injectable()
export class CadetesService{

    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

   sucursales = [];

   public getCadetes(){
    return this.afDB.list('users/').valueChanges();
}

public getCadete(id){
   return this.afDB.object('users/'+id).valueChanges();
  }

  public nuevoCadete(cadete){
    //this.envios.push(envio);
    this.afDB.database.ref('users/'+cadete.id).set(cadete);
}


}