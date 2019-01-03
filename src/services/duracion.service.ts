import {Injectable} from '@angular/core';
import * as moment from 'moment'

@Injectable()

export class DuracionService{

    //duracion="";
    constructor(){} //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase

    public getDuracion(fecha_ini){
        var fecha_fin= moment().format();

        let duracion_sesion = moment(fecha_fin).diff(fecha_ini,'seconds');
        let duracion_sesion_medida="s";
        if(duracion_sesion>=60){
              duracion_sesion = moment(fecha_fin).diff(fecha_ini,'minutes');
              duracion_sesion_medida="m";
                if(duracion_sesion>=60){
                    duracion_sesion = moment(fecha_fin).diff(fecha_ini,'hours');
                    duracion_sesion_medida="h";
                }
        }

        return duracion_sesion+duracion_sesion_medida;
        
    }



}