import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/' //no se porque se duplica el database/database

@Injectable()
export class LoginService{

    constructor(public afDB: AngularFireDatabase){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

    private usuario_id="";
    private sucursal_id="";


public setSession(usuario_id, sucursal_id){
    this.usuario_id=usuario_id;
    this.sucursal_id=sucursal_id;
    
}

public getSession(){

    var sesion:any = {id:null, nombre: null, estado: null, sucursal: null};


    //lo puse aca ya que es dinamico, cada vez que consulto la sesion puede haber cambiado
    //el estado del cadete (usuario)
    this.afDB.list('users/').valueChanges().subscribe(
        usuarios =>{
    
        for(let j=0; j < usuarios.length; j++){
            if(usuarios[j]['id']==this.usuario_id){ //difeencio si es cadete o cliente viendo el nombre como esta escrito si en ingles o español
              var usuario = usuarios[j];
            }
        }    

        sesion['estado'] = usuario['estado'];
        sesion['id'] = usuario['id'];
        sesion['nombre'] = usuario['nombre'];
        sesion['sucursal'] = this.sucursal_id;

        

    });
    return sesion;
    
    
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