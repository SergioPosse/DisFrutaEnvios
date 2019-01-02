import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

@Injectable()
export class EnviosService{

    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

    public getEnvios(){
        return this.afDB.list('envios/').valueChanges();
    }

    public createEnvio(envio){
        //this.envios.push(envio);
        this.afDB.database.ref('envios/'+ envio.id).set(envio);
    }

    public editEnvio(envio){
        this.afDB.database.ref('envios/'+ envio.id).set(envio);
    }

    public deleteEnvio(envio){
        this.afDB.database.ref('envios/'+ envio.id).remove();
    }

    public setEstado(envio_id, estado, cadete_id){
        this.afDB.database.ref('envios/'+ envio_id).update({ estado: estado, cadete: cadete_id});

    }
}