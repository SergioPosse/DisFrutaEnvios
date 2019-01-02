import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

@Injectable()
export class SucursalesService{

    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

   sucursales = [];

    


   public getSucursales(){
    //return this.envios;
    return this.afDB.list('branch/').valueChanges(); //renegue como un hijo de puta
    //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
    //todo los envios de firebase
    //this.afDB.list('/envios');
    //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
}

// public getSucursal(id){
//     console.log("el id que paso a service: "+id);
//     //metodo de filtrado para arrays en 
//    // return this.envios.filter(function(e, i){ return e.id == id})[0] || {id: null, cliente: null, sucursal: null, estado: null} //sino regresa vacio
//    return this.afDB.list('branch/'+id).valueChanges();
//   }


}
