webpackJsonp([4],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuracionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DuracionService = /** @class */ (function () {
    //duracion="";
    function DuracionService() {
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    DuracionService.prototype.getDuracion = function (fecha_ini) {
        var fecha_fin = __WEBPACK_IMPORTED_MODULE_1_moment__().format();
        var duracion_sesion = __WEBPACK_IMPORTED_MODULE_1_moment__(fecha_fin).diff(fecha_ini, 'seconds');
        var duracion_sesion_medida = "s";
        if (duracion_sesion >= 60) {
            duracion_sesion = __WEBPACK_IMPORTED_MODULE_1_moment__(fecha_fin).diff(fecha_ini, 'minutes');
            duracion_sesion_medida = "m";
            if (duracion_sesion >= 60) {
                duracion_sesion = __WEBPACK_IMPORTED_MODULE_1_moment__(fecha_fin).diff(fecha_ini, 'hours');
                duracion_sesion_medida = "h";
            }
        }
        return duracion_sesion + duracion_sesion_medida;
    };
    DuracionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DuracionService);
    return DuracionService;
}());

//# sourceMappingURL=duracion.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadetePage = /** @class */ (function () {
    function CadetePage(loginService, usuariosService, navCtrl, navParams) {
        this.loginService = loginService;
        this.usuariosService = usuariosService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadetes = [];
        this.cadetes = this.usuariosService.getCadetes();
    }
    CadetePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadetePage');
    };
    CadetePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadete',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\cadete\cadete.html"*/'<!--\n  Generated template for the CadetePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col>Nombre</ion-col>\n          <ion-col col>telefono</ion-col>\n          <ion-col col>Estado</ion-col>\n\n        </ion-row>\n\n\n            <ion-row  *ngFor="let cadete of cadetes" class="row" responsive-sm wrap  >\n               \n                    <ion-col col>{{cadete.nombre}}</ion-col>\n                    <ion-col col>{{cadete.telefono}}</ion-col>\n    \n                    <ion-col style="background-color:rgb(25, 199, 40);" *ngIf="cadete.estado == \'Disponible\'" col>Disponible</ion-col>\n                    <ion-col style="background-color:rgb(243, 82, 18);" *ngIf="cadete.estado == \'No Disponible\'" col>No Disponible.</ion-col>\n    \n                  \n              </ion-row>\n\n\n\n        \n\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\cadete\cadete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadetePage);
    return CadetePage;
}());

//# sourceMappingURL=cadete.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_envio_envio__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePage = /** @class */ (function () {
    //por eso es null al principio hasta que la llene con el parametro
    function DetallePage(loginService, usuariosService, menu, sucursalesService, navCtrl, navParams, enviosService) {
        var _this = this;
        this.loginService = loginService;
        this.usuariosService = usuariosService;
        this.sucursalesService = sucursalesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.enviosService = enviosService;
        this.envioDetalle2 = { id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null, fecha: null };
        this.sucursales = [];
        this.clientes = [];
        this.cadetes = [];
        this.id = null; //creo una variable que sera recipiente para el parametro que paso con verDetalle de home.ts
        menu.enable(true);
        this.id = navParams.get('id'); //GUARDO EL PARAMETRO QUE PASE EN verDetalle() de home.ts junto a la ruta de la pagina con navController
        console.log("el id detalle es: " + this.id);
        this.sucursalesService.getSucursales()
            .subscribe(function (sucursal) {
            _this.sucursales = sucursal;
        });
        this.clientes = this.usuariosService.getClientes();
        this.cadetes = this.usuariosService.getCadetes();
        if (this.id != 0) {
            enviosService.getEnvios()
                .subscribe(function (detalle) {
                for (var i = 0; i < detalle.length; i++) {
                    if (detalle[i]['id'] == _this.id) {
                        _this.envioDetalle2 = detalle[i];
                    }
                }
            });
        }
        else {
        }
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.guardarEnvio = function () {
        if (this.id != 0) {
            alert("editar");
            //enviosService.getEnvio(this.id)
            //.subscribe(envioDetalle2 => {this.envioDetalle2 = envioDetalle2});
            this.enviosService.editEnvio(this.envioDetalle2); //voy al enviosService
            alert('Envio editado con exito');
        }
        else {
            alert("crear"); //si es un insert entonces...
            this.envioDetalle2.id = Date.now();
            this.envioDetalle2.fecha = __WEBPACK_IMPORTED_MODULE_7_moment__().format();
            console.log("fecha para crear: " + this.envioDetalle2.fecha);
            this.envioDetalle2.estado = "Pendiente";
            this.envioDetalle2.cadete = null; //asigno un id unico con date.now asegurandome que sea unico ya que trabaja con milisegundos
            this.enviosService.createEnvio(this.envioDetalle2); //voy al enviosService
            alert('Envio creado con exito');
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_envio_envio__["a" /* EnvioPage */]); //vuelvo a home cuando termino
    };
    DetallePage.prototype.eliminarEnvio = function () {
        alert("eliminar");
        this.id = null; //tuve que asignarle null al id para usar ngIf en el form, porque me queria cargar el envio
        //que elimine en el form de detalle y no encontraba los datos, me daba todo undefined
        //teoricamente tendria que no cargar el form e ir directo al home con navCtril.pop() pero son
        //cosas raras que pasan y no entiendo
        //de esta forma solo es un parche que no me muestre los inputs en el form (por lo tanto no tiene que cargar nada eliminado)
        //this.envioDetalle2 = {id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null};
        //vuelvo a home cuando termino
        //this.envioDetalle2= null;
        var session = this.loginService.getSession();
        this.usuariosService.setDisponible(session['id']);
        // alert(session['id']);
        this.enviosService.deleteEnvio(this.envioDetalle2);
        alert('Envio eliminado');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_envio_envio__["a" /* EnvioPage */]);
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\detalle\detalle.html"*/'<!--\n  Generated template for the DetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles del Envío</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div padding class="fondotodo">\n\n\n\n        <ion-grid>\n          <ion-row>\n        \n              <ion-col>\n        \n                </ion-col>\n        \n            <ion-col no-padding col-10 col-lg-6>\n                <ion-item *ngIf="id != null">\n                    <ion-label>Clientes</ion-label>\n                    <ion-select [(ngModel)] = "envioDetalle2.cliente" >\n                      <ion-option *ngFor="let cliente of clientes" value="{{cliente.id}}">{{cliente.name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col>\n        \n              </ion-col>\n        \n          </ion-row>\n          \n        \n          <ion-row>\n            <ion-col>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-10 col-lg-6>\n                <ion-item *ngIf="id != null">\n                    <ion-label>Sucursal</ion-label>\n                    <ion-select [(ngModel)] = "envioDetalle2.sucursal" >\n                      <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              \n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n              <ion-col>\n          \n              </ion-col>\n          \n              <ion-col no-padding col-10 col-lg-6>\n                  <ion-item *ngIf="id != null">\n                      <ion-label>Dirección</ion-label>\n                      <ion-input *ngIf="id != null" type="text" [(ngModel)] = "envioDetalle2.destino"> </ion-input>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col>\n                \n              </ion-col>\n            </ion-row>\n        \n            <ion-row>\n                <ion-col>\n            \n                </ion-col>\n            \n                <ion-col  no-padding col-10 col-lg-6>\n                    <ion-item *ngIf="id != null && id != 0">\n                        <ion-label>Cadetes</ion-label>\n                        <ion-select [(ngModel)] = "envioDetalle2.cadete" >\n                          <ion-option *ngFor="let cadete of cadetes" value="{{cadete.id}}">{{cadete.nombre}}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                </ion-col>\n            \n                <ion-col>\n                  \n                </ion-col>\n              </ion-row>\n        \n              <ion-row>\n                <ion-col>\n        \n                </ion-col>\n                <ion-col no-padding col-10 col-lg-6>\n                    <ion-item *ngIf="id != null && id !=0">\n                        <ion-label>Estado</ion-label>\n                        <ion-select *ngIf="id != null" [(ngModel)] = "envioDetalle2.estado">\n                          <ion-option>Pendiente</ion-option>\n                          <ion-option>En Camino</ion-option>\n                          <ion-option>Entregado</ion-option>\n                          <ion-option>Cancelado</ion-option>\n                        </ion-select>\n                      </ion-item>\n                  </ion-col>\n                  <ion-col>\n                  \n                    </ion-col>\n              </ion-row>\n        \n              <ion-row>\n                  <ion-col>\n          \n                  </ion-col>\n                  <ion-col no-padding col-10 col-lg-6>\n                      <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n                        <button ion-button block (click)="guardarEnvio()">Guardar</button>\n                    </div>\n                    <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n                      <button *ngIf="id != 0"  ion-button block (click)="eliminarEnvio()" color="danger">Eliminar</button>\n                  </div>\n                    </ion-col>\n                    <ion-col>\n                    \n                      </ion-col>\n                </ion-row>\n              \n    \n        \n        </ion-grid>\n\n\n</div>\n   \n</ion-content>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_duracion_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__envio_envio__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EstadoPage = /** @class */ (function () {
    //por eso es null al principio hasta que la llene con el parametro
    function EstadoPage(duracionService, usuariosService, loginService, menu, sucursalesService, navCtrl, navParams, enviosService) {
        var _this = this;
        this.duracionService = duracionService;
        this.usuariosService = usuariosService;
        this.loginService = loginService;
        this.sucursalesService = sucursalesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.enviosService = enviosService;
        this.envioDetalle = { id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null };
        this.sucursales = [];
        this.cadete = null;
        this.clientes = [];
        this.cadetes = [];
        this.id = 0; //creo una variable que sera recipiente para el parametro que paso con verDetalle de home.ts
        menu.enable(true);
        this.id = navParams.get('id');
        this.cadete = this.loginService.getSession();
        //console.log("el id cadete es: "+this.cadete['id']);
        //console.log("el estado cadete es: "+this.cadete['estado']);
        //console.log("el id en estado es: "+this.id); //GUARDO EL PARAMETRO QUE PASE EN verDetalle() de home.ts junto a la ruta de la pagina con navController
        //this.envio=navParams.get('envio');
        this.sucursalesService.getSucursales()
            .subscribe(function (sucursal) {
            _this.sucursales = sucursal;
        });
        this.clientes = this.usuariosService.getClientes();
        this.cadetes = this.usuariosService.getCadetes();
        enviosService.getEnvios()
            .subscribe(function (detalle) {
            for (var p = 0; p < detalle.length; p++) {
                if (detalle[p]['id'] == _this.id) {
                    _this.envioDetalle = detalle[p];
                    //console.log(this.envioDetalle);
                    for (var h = 0; h < _this.clientes.length; h++) {
                        if (_this.clientes[h]['id'] == detalle[p]['cliente']) {
                            _this.envioDetalle['cliente'] = _this.clientes[h]['name'];
                        }
                    } //for de name de cliente
                    for (var h = 0; h < _this.sucursales.length; h++) {
                        if (_this.sucursales[h]['id'] == detalle[p]['sucursal']) {
                            _this.envioDetalle['sucursal'] = _this.sucursales[h]['name'];
                        }
                    } //for de name sucursal
                    for (var h = 0; h < _this.cadetes.length; h++) {
                        if (_this.cadetes[h]['id'] == detalle[p]['cadete']) {
                            _this.envioDetalle['cadete'] = _this.cadetes[h]['nombre'];
                        }
                    } //for de name sucursal
                } //for de envios
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
    EstadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadoPage');
    };
    EstadoPage.prototype.cancelarEnvio = function () {
        var estado = "Cancelado";
        this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
        this.usuariosService.setDisponible(this.cadete['id']);
        alert("¡Cancelado!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__envio_envio__["a" /* EnvioPage */]);
    };
    EstadoPage.prototype.entregarEnvio = function () {
        //console.log("estado guardado: "+this.cadete['estado']) //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
        //if(this.cadete['estado']=="No Disponible"){
        //   alert("¡Ya tomaste un envío!")
        //}
        //else{
        alert("A entregarlo");
        var estado = "Entregado";
        this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
        this.usuariosService.setDisponible(this.cadete['id']);
        alert("Entregado con exito");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__envio_envio__["a" /* EnvioPage */]);
        //}
    };
    EstadoPage.prototype.tomarEnvio = function () {
        console.log("estado guardado: " + this.cadete['estado']); //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
        if (this.cadete['estado'] == "No Disponible") {
            alert("¡Ya tomaste un envío!");
        }
        else {
            alert("Podes tomarlo");
            var estado = "En Camino";
            this.usuariosService.setNoDisponible(this.cadete['id']);
            this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
            alert("Tomaste el envio");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__envio_envio__["a" /* EnvioPage */]);
        }
        // //actualizar estado envio a "en camino"
        // 
        // 
        //
        // //actualizar estado de cadete a "no disponible"
        // //this.envioDetalle=null; 555555555555555555555555555555555555
    };
    EstadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estado',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\estado\estado.html"*/'<!--\n  Generated template for the EstadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestionar Estado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<!--<ion-content padding style="background-color:rgb(130, 187, 38);" *ngIf="envioDetalle.estado == \'Entregado\'">\n<ion-content padding style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envioDetalle.estado == \'Cancelado\'">\n<ion-content padding style="background-color:rgb(241, 235, 150);" *ngIf="envioDetalle.estado == \'Pendiente\'">\n<ion-content padding style="background-color:rgb(137, 209, 250);" *ngIf="envioDetalle.estado == \'En Camino\'">-->\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n            <ion-col col><ion-label>Cliente</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.cliente}}</ion-label></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n            <ion-col col><ion-label>Sucursal</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.sucursal}}</ion-label></ion-col>\n      </ion-row>  \n      <ion-row>\n            <ion-col col><ion-label>Dirección</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.destino}}</ion-label></ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="envioDetalle.cadete">\n          <ion-col col><ion-label>Cadete Responsable</ion-label></ion-col>\n          <ion-col col><ion-label>{{envioDetalle.cadete}}</ion-label></ion-col>\n    </ion-row>\n\n      <ion-row>\n            <ion-label center style="background-color:rgb(137, 209, 250);" *ngIf="envioDetalle.estado == \'En Camino\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgb(241, 235, 150);" *ngIf="envioDetalle.estado == \'Pendiente\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgb(130, 187, 38);" *ngIf="envioDetalle.estado == \'Entregado\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envioDetalle.estado == \'Cancelado\'">{{envioDetalle.estado}}</ion-label>\n      </ion-row>\n    </ion-grid>\n\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n    <button *ngIf="envioDetalle.estado==\'Pendiente\'" ion-button block (click)="tomarEnvio()">Tomar</button>\n  </div>\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n      <button *ngIf="envioDetalle.cadete==cadete.nombre && envioDetalle.estado!==\'Entregado\' && envioDetalle.estado!==\'Cancelado\'" ion-button block (click)="entregarEnvio()">Entregar</button>\n  </div>\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n    <button *ngIf="envioDetalle.cadete==cadete.nombre && envioDetalle.estado!==\'Entregado\' && envioDetalle.estado!==\'Cancelado\'" ion-button block (click)="cancelarEnvio()" color="danger">Cancelar</button>\n  </div>\n   \n</ion-content>'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\estado\estado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_duracion_service__["a" /* DuracionService */], __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */]])
    ], EstadoPage);
    return EstadoPage;
}());

//# sourceMappingURL=estado.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadetes_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(loginService, toastCtrl, cadetesService, navCtrl, navParams) {
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.cadetesService = cadetesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.nombre = "";
        this.apellido = "";
        this.telefono = "";
        this.email_used = false;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.nuevoCadete = function () {
        var _this = this;
        if (!this.email || !this.password || !this.nombre || !this.apellido || !this.telefono) {
            var toast = this.toastCtrl.create({
                message: 'Por favor llene todos los campos',
                position: 'top',
                duration: 3000
            });
            toast.present();
        }
        else {
            this.loginService.getUsuarios()
                .subscribe(function (usuarios) {
                for (var j = 0; j < usuarios.length; j++) {
                    if (usuarios[j]['email'] == _this.email) {
                        _this.email_used = true;
                    }
                }
                if (_this.email_used == true) {
                    var toast = _this.toastCtrl.create({
                        message: 'email no disponible',
                        position: 'top',
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    if (_this.password == _this.password2) {
                        var id = Date.now();
                        var email = _this.email;
                        var password = _this.password;
                        var nombre = _this.nombre + " " + _this.apellido;
                        var telefono = _this.telefono;
                        var cadete = { id: id, email: email, password: password, nombre: nombre, estado: "Disponible", telefono: telefono };
                        _this.cadetesService.nuevoCadete(cadete);
                        var toast = _this.toastCtrl.create({
                            message: 'Registro Exitoso',
                            position: 'top',
                            duration: 3000
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */]);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: 'Las contraseñas no coinciden',
                            position: 'top',
                            duration: 3000
                        });
                        toast.present();
                    }
                }
            });
        } //en del primer else
    }; //en nuevo cadete
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\registro\registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar class="bg-image">\n    <ion-title >Registrar Cadete \n  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-image" padding>\n    <ion-grid fixed>\n\n        <ion-row fixed>\n          <ion-col fixed>\n      \n          </ion-col>\n      \n          <ion-col no-padding col-6>\n                <ion-item class="botonescss">\n                  <ion-input  placeholder="Escriba su email" class="inputcss" type="text" [(ngModel)] = "email"></ion-input>\n                </ion-item>\n          </ion-col>\n      \n          <ion-col fixed>\n            \n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n            <ion-col>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                <ion-item>>\n                    <ion-input placeholder="Escriba su contraseña" class="inputcss" type="password" [(ngModel)] = "password"> </ion-input>\n                </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              \n            </ion-col>\n          </ion-row>\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Repita contraseña" class="inputcss" type="password" [(ngModel)] = "password2"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Escriba su nombre" class="inputcss" type="text" [(ngModel)] = "nombre"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n\n\n\n\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Escriba su apellido" class="inputcss" type="text" [(ngModel)] = "apellido"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n          <ion-row fixed>\n              <ion-col fixed>\n          \n              </ion-col>\n          \n              <ion-col no-padding col-6>\n                    <ion-item class="botonescss">\n                      <ion-input  placeholder="Escriba su teléfono" class="inputcss" type="text" [(ngModel)] = "telefono"></ion-input>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col fixed>\n                \n              </ion-col>\n            </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      \n          <!--<ion-row>\n              <ion-col>\n          \n              </ion-col>\n          \n              <ion-col  no-padding col-6>\n                  <ion-item>\n                      <ion-select class="selectcss" placeholder="Seleccione una sucursal">\n                        <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                      </ion-select>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col>\n                \n              </ion-col>\n            </ion-row>-->\n      \n            <ion-row>\n              <ion-col>\n      \n              </ion-col>\n              <ion-col no-padding col-6>\n                  <ion-item >  \n                      <button padding ion-button block (click)="nuevoCadete()">Registrar</button>\n                    </ion-item> \n                </ion-col>\n                <ion-col>\n                \n                  </ion-col>\n            </ion-row>\n      \n        \n            \n\n      </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__services_cadetes_service__["a" /* CadetesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}()); //en page

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadete/cadete.module": [
		637,
		3
	],
	"../pages/detalle/detalle.module": [
		638,
		2
	],
	"../pages/estado/estado.module": [
		639,
		1
	],
	"../pages/registro/registro.module": [
		640,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.calculateAndDisplayRoute = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: this.origen,
            destination: this.destino,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n      <ion-label floating>Origen</ion-label>\n      <ion-input type="text" [(ngModel)]="origen"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Destino</ion-label>\n      <ion-input type="text" [(ngModel)]="destino"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="calculateAndDisplayRoute()">Get Direction</button>\n</ion-list>\n  {{origen}} - {{destino}}\n\n  <div id="map">\n\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadetesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //no se porque se duplica el database/database
var CadetesService = /** @class */ (function () {
    function CadetesService(afDB) {
        this.afDB = afDB;
        this.sucursales = [];
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    CadetesService.prototype.getCadetes = function () {
        return this.afDB.list('users/').valueChanges();
    };
    CadetesService.prototype.getCadete = function (id) {
        return this.afDB.object('users/' + id).valueChanges();
    };
    CadetesService.prototype.nuevoCadete = function (cadete) {
        //this.envios.push(envio);
        this.afDB.database.ref('users/' + cadete.id).set(cadete);
    };
    CadetesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___["AngularFireDatabase"]])
    ], CadetesService);
    return CadetesService;
}());

//# sourceMappingURL=cadetes.service.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(561);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //no se porque se duplica el database/database
//importo moment previamente instalado con npm install --save moment

var LoginService = /** @class */ (function () {
    function LoginService(afDB) {
        this.afDB = afDB;
        this.sesion = { id: null, nombre: null, estado: null, sucursal: null, coneccion: null, fecha: null };
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    LoginService.prototype.setSession = function (usuario_id, sucursal_id) {
        var _this = this;
        this.sesion['id'] = usuario_id;
        this.sesion['sucursal'] = sucursal_id;
        this.sesion['coneccion'] = "Online";
        this.sesion['fecha'] = __WEBPACK_IMPORTED_MODULE_2_moment__().format(); //formato con hora
        this.afDB.list('users/').valueChanges().subscribe(function (usuarios) {
            //busco el nombre del usuario
            for (var j = 0; j < usuarios.length; j++) {
                if (usuarios[j]['id'] == _this.sesion['id']) {
                    var usuario = usuarios[j];
                }
            }
            _this.sesion['estado'] = usuario['estado'];
            _this.sesion['nombre'] = usuario['nombre'];
        });
    };
    LoginService.prototype.getSession = function () {
        //lo puse aca ya que es dinamico, cada vez que consulto la sesion puede haber cambiado
        //el estado del cadete (usuario)
        return this.sesion;
    };
    LoginService.prototype.getUsuarios = function () {
        //return this.envios;
        return this.afDB.list('users/').valueChanges(); //renegue como un hijo de puta
        //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
        //todo los envios de firebase
        //this.afDB.list('/envios');
        //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___["AngularFireDatabase"]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sucursales_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cadetes_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_envios_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_duracion_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_fire_auth__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//HASTA ACA LO PREDEFINIDO POR EL FRAMEWORK
//PAGES
 //PREDEFINIDA
//importo todas las paginas que voy a usar






//SERVICES (o providers) uso services por costumbre de angular






//FIREBASE CONFIG




var firebaseConfig = {
    apiKey: "AIzaSyCYSut1mEeaD_imtRR9d1sj2jfIyYawi_4",
    authDomain: "disfruta-4d4be.firebaseapp.com",
    databaseURL: "https://disfruta-4d4be.firebaseio.com",
    projectId: "disfruta-4d4be",
    storageBucket: "disfruta-4d4be.appspot.com",
    messagingSenderId: "320703792295"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__["a" /* EnvioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__["a" /* EstadoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__["a" /* CadetePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadete/cadete.module#CadetePageModule', name: 'CadetePage', segment: 'cadete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estado/estado.module#EstadoPageModule', name: 'EstadoPage', segment: 'estado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_fire_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__["a" /* EnvioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__["a" /* EstadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__["a" /* CadetePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_13__services_sucursales_service__["a" /* SucursalesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__["a" /* UsuariosService */],
                __WEBPACK_IMPORTED_MODULE_15__services_cadetes_service__["a" /* CadetesService */],
                __WEBPACK_IMPORTED_MODULE_16__services_envios_service__["a" /* EnviosService */],
                __WEBPACK_IMPORTED_MODULE_17__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__services_duracion_service__["a" /* DuracionService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 257,
	"./af.js": 257,
	"./ar": 258,
	"./ar-dz": 259,
	"./ar-dz.js": 259,
	"./ar-kw": 260,
	"./ar-kw.js": 260,
	"./ar-ly": 261,
	"./ar-ly.js": 261,
	"./ar-ma": 262,
	"./ar-ma.js": 262,
	"./ar-sa": 263,
	"./ar-sa.js": 263,
	"./ar-tn": 264,
	"./ar-tn.js": 264,
	"./ar.js": 258,
	"./az": 265,
	"./az.js": 265,
	"./be": 266,
	"./be.js": 266,
	"./bg": 267,
	"./bg.js": 267,
	"./bm": 268,
	"./bm.js": 268,
	"./bn": 269,
	"./bn.js": 269,
	"./bo": 270,
	"./bo.js": 270,
	"./br": 271,
	"./br.js": 271,
	"./bs": 272,
	"./bs.js": 272,
	"./ca": 273,
	"./ca.js": 273,
	"./cs": 274,
	"./cs.js": 274,
	"./cv": 275,
	"./cv.js": 275,
	"./cy": 276,
	"./cy.js": 276,
	"./da": 277,
	"./da.js": 277,
	"./de": 278,
	"./de-at": 279,
	"./de-at.js": 279,
	"./de-ch": 280,
	"./de-ch.js": 280,
	"./de.js": 278,
	"./dv": 281,
	"./dv.js": 281,
	"./el": 282,
	"./el.js": 282,
	"./en-au": 283,
	"./en-au.js": 283,
	"./en-ca": 284,
	"./en-ca.js": 284,
	"./en-gb": 285,
	"./en-gb.js": 285,
	"./en-ie": 286,
	"./en-ie.js": 286,
	"./en-il": 287,
	"./en-il.js": 287,
	"./en-nz": 288,
	"./en-nz.js": 288,
	"./eo": 289,
	"./eo.js": 289,
	"./es": 290,
	"./es-do": 291,
	"./es-do.js": 291,
	"./es-us": 292,
	"./es-us.js": 292,
	"./es.js": 290,
	"./et": 293,
	"./et.js": 293,
	"./eu": 294,
	"./eu.js": 294,
	"./fa": 295,
	"./fa.js": 295,
	"./fi": 296,
	"./fi.js": 296,
	"./fo": 297,
	"./fo.js": 297,
	"./fr": 298,
	"./fr-ca": 299,
	"./fr-ca.js": 299,
	"./fr-ch": 300,
	"./fr-ch.js": 300,
	"./fr.js": 298,
	"./fy": 301,
	"./fy.js": 301,
	"./gd": 302,
	"./gd.js": 302,
	"./gl": 303,
	"./gl.js": 303,
	"./gom-latn": 304,
	"./gom-latn.js": 304,
	"./gu": 305,
	"./gu.js": 305,
	"./he": 306,
	"./he.js": 306,
	"./hi": 307,
	"./hi.js": 307,
	"./hr": 308,
	"./hr.js": 308,
	"./hu": 309,
	"./hu.js": 309,
	"./hy-am": 310,
	"./hy-am.js": 310,
	"./id": 311,
	"./id.js": 311,
	"./is": 312,
	"./is.js": 312,
	"./it": 313,
	"./it.js": 313,
	"./ja": 314,
	"./ja.js": 314,
	"./jv": 315,
	"./jv.js": 315,
	"./ka": 316,
	"./ka.js": 316,
	"./kk": 317,
	"./kk.js": 317,
	"./km": 318,
	"./km.js": 318,
	"./kn": 319,
	"./kn.js": 319,
	"./ko": 320,
	"./ko.js": 320,
	"./ku": 321,
	"./ku.js": 321,
	"./ky": 322,
	"./ky.js": 322,
	"./lb": 323,
	"./lb.js": 323,
	"./lo": 324,
	"./lo.js": 324,
	"./lt": 325,
	"./lt.js": 325,
	"./lv": 326,
	"./lv.js": 326,
	"./me": 327,
	"./me.js": 327,
	"./mi": 328,
	"./mi.js": 328,
	"./mk": 329,
	"./mk.js": 329,
	"./ml": 330,
	"./ml.js": 330,
	"./mn": 331,
	"./mn.js": 331,
	"./mr": 332,
	"./mr.js": 332,
	"./ms": 333,
	"./ms-my": 334,
	"./ms-my.js": 334,
	"./ms.js": 333,
	"./mt": 335,
	"./mt.js": 335,
	"./my": 336,
	"./my.js": 336,
	"./nb": 337,
	"./nb.js": 337,
	"./ne": 338,
	"./ne.js": 338,
	"./nl": 339,
	"./nl-be": 340,
	"./nl-be.js": 340,
	"./nl.js": 339,
	"./nn": 341,
	"./nn.js": 341,
	"./pa-in": 342,
	"./pa-in.js": 342,
	"./pl": 343,
	"./pl.js": 343,
	"./pt": 344,
	"./pt-br": 345,
	"./pt-br.js": 345,
	"./pt.js": 344,
	"./ro": 346,
	"./ro.js": 346,
	"./ru": 347,
	"./ru.js": 347,
	"./sd": 348,
	"./sd.js": 348,
	"./se": 349,
	"./se.js": 349,
	"./si": 350,
	"./si.js": 350,
	"./sk": 351,
	"./sk.js": 351,
	"./sl": 352,
	"./sl.js": 352,
	"./sq": 353,
	"./sq.js": 353,
	"./sr": 354,
	"./sr-cyrl": 355,
	"./sr-cyrl.js": 355,
	"./sr.js": 354,
	"./ss": 356,
	"./ss.js": 356,
	"./sv": 357,
	"./sv.js": 357,
	"./sw": 358,
	"./sw.js": 358,
	"./ta": 359,
	"./ta.js": 359,
	"./te": 360,
	"./te.js": 360,
	"./tet": 361,
	"./tet.js": 361,
	"./tg": 362,
	"./tg.js": 362,
	"./th": 363,
	"./th.js": 363,
	"./tl-ph": 364,
	"./tl-ph.js": 364,
	"./tlh": 365,
	"./tlh.js": 365,
	"./tr": 366,
	"./tr.js": 366,
	"./tzl": 367,
	"./tzl.js": 367,
	"./tzm": 368,
	"./tzm-latn": 369,
	"./tzm-latn.js": 369,
	"./tzm.js": 368,
	"./ug-cn": 370,
	"./ug-cn.js": 370,
	"./uk": 371,
	"./uk.js": 371,
	"./ur": 372,
	"./ur.js": 372,
	"./uz": 373,
	"./uz-latn": 374,
	"./uz-latn.js": 374,
	"./uz.js": 373,
	"./vi": 375,
	"./vi.js": 375,
	"./x-pseudo": 376,
	"./x-pseudo.js": 376,
	"./yo": 377,
	"./yo.js": 377,
	"./zh-cn": 378,
	"./zh-cn.js": 378,
	"./zh-hk": 379,
	"./zh-hk.js": 379,
	"./zh-tw": 380,
	"./zh-tw.js": 380
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 605;

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //no se porque se duplica el database/database
var SucursalesService = /** @class */ (function () {
    function SucursalesService(afDB) {
        this.afDB = afDB;
        this.sucursales = [];
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    SucursalesService.prototype.getSucursales = function () {
        //return this.envios;
        return this.afDB.list('branch/').valueChanges(); //renegue como un hijo de puta
        //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
        //todo los envios de firebase
        //this.afDB.list('/envios');
        //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
    };
    SucursalesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___["AngularFireDatabase"]])
    ], SucursalesService);
    return SucursalesService;
}());

//# sourceMappingURL=sucursales.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //no se porque se duplica el database/database
var UsuariosService = /** @class */ (function () {
    function UsuariosService(afDB) {
        this.afDB = afDB;
        this.sucursales = [];
        this.usuarios = [];
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    UsuariosService.prototype.getUsuarios = function () {
        //return this.envios;
        return this.afDB.list('users/').valueChanges(); //renegue como un hijo de puta
        //porque me faltaba el return... no me andaba el .subscribe del home.ts cuando queria listar
        //todo los envios de firebase
        //this.afDB.list('/envios');
        //this.afDB.object<{id,cliente,sucursal,estado}>('envios/'+ envios.id);
    };
    UsuariosService.prototype.getClientes = function () {
        //return this.envios;
        var respuesta = [];
        var usuarios = [];
        this.afDB.list('users/').valueChanges().subscribe(function (usuarios_res) {
            usuarios = usuarios_res;
            for (var j = 0; j < usuarios.length; j++) {
                if (usuarios[j]['name']) {
                    respuesta.push(usuarios[j]);
                }
            }
        });
        return respuesta;
    };
    UsuariosService.prototype.getCadetes = function () {
        //return this.envios;
        var respuesta = [];
        var usuarios = [];
        this.afDB.list('users/').valueChanges().subscribe(function (usuarios_res) {
            usuarios = usuarios_res;
            for (var j = 0; j < usuarios.length; j++) {
                if (usuarios[j]['nombre']) {
                    respuesta.push(usuarios[j]);
                }
            }
        });
        return respuesta;
    };
    UsuariosService.prototype.getUsuario = function (id) {
        //metodo de filtrado para arrays en js 
        // return this.envios.filter(function(e, i){ return e.id == id})[0] || {id: null, cliente: null, sucursal: null, estado: null} //sino regresa vacio
        return this.afDB.object('users/' + id).valueChanges();
    };
    UsuariosService.prototype.setNoDisponible = function (id) {
        this.afDB.database.ref('users/' + id).update({ estado: "No Disponible" });
    };
    UsuariosService.prototype.setDisponible = function (id) {
        this.afDB.database.ref('users/' + id).update({ estado: "Disponible" });
    };
    UsuariosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___["AngularFireDatabase"]])
    ], UsuariosService);
    return UsuariosService;
}());

//# sourceMappingURL=usuarios.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //no se porque se duplica el database/database
var EnviosService = /** @class */ (function () {
    function EnviosService(afDB) {
        this.afDB = afDB;
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    EnviosService.prototype.getEnvios = function () {
        return this.afDB.list('envios/').valueChanges();
    };
    EnviosService.prototype.createEnvio = function (envio) {
        //this.envios.push(envio);
        this.afDB.database.ref('envios/' + envio.id).set(envio);
    };
    EnviosService.prototype.editEnvio = function (envio) {
        this.afDB.database.ref('envios/' + envio.id).set(envio);
    };
    EnviosService.prototype.deleteEnvio = function (envio) {
        this.afDB.database.ref('envios/' + envio.id).remove();
    };
    EnviosService.prototype.setEstado = function (envio_id, estado, cadete_id) {
        this.afDB.database.ref('envios/' + envio_id).update({ estado: estado, cadete: cadete_id });
    };
    EnviosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database___["AngularFireDatabase"]])
    ], EnviosService);
    return EnviosService;
}());

//# sourceMappingURL=envios.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estado_estado__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_duracion_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detalle_detalle__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cadete_cadete__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inicio_inicio__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //agregue viewchild

 //agrego el servicio que cree










//importo moment



var EnvioPage = /** @class */ (function () {
    function EnvioPage(storage, duracionService, loginService, menu, loadingCtrl, navCtrl, enviosService, sucursalesService) {
        var _this = this;
        this.storage = storage;
        this.duracionService = duracionService;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.enviosService = enviosService;
        this.sucursalesService = sucursalesService;
        this.envioss = []; //creo un arreglo vacio para llenarlo con el service de abajo en el constructor
        this.sucursales = [];
        this.current_user = { id: null, nombre: null, estado: null, sucursal: null, coneccion: null, fecha: null };
        this.duracion_sesion_y_medida = null;
        menu.enable(true);
        //this.envios=[];
        this.current_user = this.loginService.getSession();
        var loader = this.loadingCtrl.create({
            content: "Cargando Lista De Envíos...",
            duration: 1000
        });
        loader.present();
        //cargo con el servicio el array de envios
        this.enviosService.getEnvios()
            .subscribe(function (envios) {
            //console.log(envios);
            //this.envios = envios;
            for (var j = 0; j < envios.length; j++) {
                if (envios[j]['sucursal'] == _this.current_user['sucursal']) {
                    _this.envioss.push(envios[j]);
                }
            }
            _this.loginService.getUsuarios().subscribe(function (usuarios) {
                for (var j = 0; j < _this.envioss.length; j++) {
                    //use otro campo fecha para dejar la original sin formato para calcular el tiempo con moment
                    _this.envioss[j]['fecha_moment'] = __WEBPACK_IMPORTED_MODULE_11_moment__(_this.envioss[j]['fecha']).format("DD MM YYYY");
                    for (var k = 0; k < usuarios.length; k++) {
                        if (usuarios[k]['id'] == _this.envioss[j]['cliente']) {
                            _this.envioss[j]['cliente'] = usuarios[k]['name'];
                        }
                    }
                }
            });
        });
        this.startTimer();
    } //END DEL COSNTRUCTOR
    //METODOS
    EnvioPage.prototype.startTimer = function () {
        var _this = this;
        var miObservador = __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].create(function (observer) {
            setInterval(function () {
                for (var j = 0; j < _this.envioss.length; j++) {
                    //le agregue un campo "hace" en la db de forma crota ya que tenia problemas
                    //para usar el localstorage y los servicios para guardar var de sesion
                    //se me reseteaba la fecha que guardaba cuando iniciaba la sesion
                    //mi intencion era guardar la fecha del momento de inicio para tener de referencia
                    //lo mas raro es que con el id del user y otras var de sesion si me funciona todo..
                    //hasta probe separando en un servicio dedicado solo a calcular la duracion pero no funciono
                    //otro detalle raro es que con la page detalle si me funcionaba perfecto, no me reseteaba la fecha de inicio de sesion
                    //pero con la page estado me resetea la fecha cada vez que ejecuto un metodo del .ts de la page estado
                    //por ejemplo para tomar un envio
                    _this.envioss[j]['hace'] = _this.duracionService.getDuracion(_this.envioss[j]['fecha']);
                }
            }, 1000);
        });
        miObservador.subscribe(function (data) {
            //console.log(data);
        });
    };
    EnvioPage.prototype.verDetalle = function (idd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estado_estado__["a" /* EstadoPage */], { id: idd }); //,envio: this.envios})
    };
    EnvioPage.prototype.editarDetalle = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__detalle_detalle__["a" /* DetallePage */], { id: id }); //,envio: this.envios})
    };
    EnvioPage.prototype.nuevoEnvio = function () {
        var id2 = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__detalle_detalle__["a" /* DetallePage */], { id: id2 }); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.verTodo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.verCadetes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cadete_cadete__["a" /* CadetePage */]); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.salir = function () {
        this.loginService.setSession(null, null);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__inicio_inicio__["a" /* InicioPage */]);
        //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('MyNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], EnvioPage.prototype, "nav", void 0);
    EnvioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-envio',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\envio\envio.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      \n        <ion-title>\n          DisFruta Envíos\n        </ion-title>\n        <p bold>Cadete: {{current_user.nombre}} - {{current_user.coneccion}}</p>\n        <p center *ngIf="current_user.estado ==\'No Disponible\'" style="background-color:rgba(252, 71, 71, 0.829);">Estado: {{current_user.estado}}</p>\n        <p center *ngIf="current_user.estado ==\'Disponible\'" style="background-color:rgba(64, 216, 25, 0.829);">Estado: {{current_user.estado}}</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondotodo">\n<div>\n\n\n</div>\n  \n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title centered>Opciones</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-label ion-button block (click)="verTodo()">\n          Google Maps Consultas\n        </ion-label>\n        <ion-label ion-button block (click)="verCadetes()">\n          Ver Cadetes\n        </ion-label>\n        <ion-label ion-button block (click)="salir()">\n          Salir\n        </ion-label>\n    \n\n\n        \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n  </button>\n  \n\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col>Cliente</ion-col>\n            <ion-col col>Dirección</ion-col>\n            <ion-col col>Estado</ion-col>\n            <ion-col col>Hace</ion-col>\n            <ion-col col>Fecha</ion-col>\n            <ion-col col>Accion</ion-col>\n          </ion-row>\n\n\n              <ion-row  *ngFor="let envio of envioss" class="row" responsive-sm wrap  >\n                 \n                      <ion-col col>{{envio.cliente}}</ion-col>\n                      <ion-col col>{{envio.destino}}</ion-col>\n      \n                      <ion-col style="background-color:rgb(137, 209, 250);" *ngIf="envio.estado == \'En Camino\'" col>Cam.</ion-col>\n                      <ion-col style="background-color:rgb(241, 235, 150);" *ngIf="envio.estado == \'Pendiente\'" col>Pen.</ion-col>\n                      <ion-col style="background-color:rgb(130, 187, 38);" *ngIf="envio.estado == \'Entregado\'" col>Ent.</ion-col>\n                      <ion-col style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envio.estado == \'Cancelado\'" col>Can.</ion-col>\n                      <ion-col col>{{envio.hace}}</ion-col>\n                      <ion-col col>{{envio.fecha_moment}}</ion-col>\n                      <ion-col col><button (click) = "verDetalle(envio.id)" ><ion-icon name="search"></ion-icon></button>\n                      <button (click) = "editarDetalle(envio.id)" ><ion-icon name="build"></ion-icon></button></ion-col>\n                    \n                </ion-row>\n\n                <ion-row>\n                \n                  <ion-col>\n                    <button ion-button block (click)="nuevoEnvio()">Nuevo Envio</button>\n                    <button ion-button block (click)="verTodo()">Google Maps Consultas</button>\n                    <button ion-button block (click)="verCadetes()">Ver Cadetes</button>\n                    <button ion-button block (click)="salir()">Cerrar Sesión</button>\n                  </ion-col>\n                \n                </ion-row>\n\n          \n\n        </ion-grid>\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\envio\envio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__services_duracion_service__["a" /* DuracionService */], __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */], __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__["a" /* SucursalesService */]])
    ], EnvioPage);
    return EnvioPage;
}());

//# sourceMappingURL=envio.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__envio_envio__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InicioPage = /** @class */ (function () {
    function InicioPage(storage, navCtrl, loginService, sucursalesService, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.sucursalesService = sucursalesService;
        this.toastCtrl = toastCtrl;
        this.usuarios = [];
        this.sucursal_id = "";
        this.sucursales = [];
        this.sucursalesService.getSucursales()
            .subscribe(function (sucursal) {
            _this.sucursales = sucursal;
            //console.log(sucursal);
        });
    }
    InicioPage.prototype.entrar = function () {
        var _this = this;
        this.loginService.getUsuarios()
            .subscribe(function (usuarios) {
            _this.usuarios = usuarios;
            //console.log(usuarios);
            if (_this.email == null || _this.email == "") {
                var toast = _this.toastCtrl.create({
                    message: 'Ingrese un email',
                    position: 'top',
                    duration: 3000
                });
                toast.present();
            }
            else {
                for (var j = 0; j < usuarios.length; j++) {
                    if (usuarios[j]['email'] == _this.email) {
                        var usuario = usuarios[j];
                    }
                }
                if (!usuario) {
                    var toast = _this.toastCtrl.create({
                        message: 'email no registrado',
                        position: 'top',
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    if (usuario['estado']) {
                        if (usuario['password'] == _this.password) {
                            if (_this.sucursal_id == null || _this.sucursal_id == "") {
                                var toast = _this.toastCtrl.create({
                                    message: '¡Seleccione Una Sucursal!',
                                    position: 'top',
                                    duration: 3000
                                });
                                toast.present();
                            }
                            else {
                                //console.log("usuario: "+usuario['id']);
                                _this.loginService.setSession(usuario['id'], _this.sucursal_id);
                                _this.storage.set('sto_id', usuario['id']);
                                _this.storage.set('sto_sucursal_id', _this.sucursal_id);
                                var fecha_inicio = __WEBPACK_IMPORTED_MODULE_7_moment__().format();
                                _this.storage.set('sto_fecha_inicio', fecha_inicio);
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__envio_envio__["a" /* EnvioPage */]);
                            }
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'Contraseña incorrecta',
                                position: 'top',
                                duration: 3000
                            });
                            toast.present();
                        }
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: 'El email ya esta siendo usado por un cliente',
                            position: 'top',
                            duration: 3000
                        });
                        toast.present();
                    }
                }
            }
        });
    };
    InicioPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('MyNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], InicioPage.prototype, "nav", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"D:\Itec\disfrutaenviosIonic3\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n<ion-content padding class="fondotodo">\n\n<div padding class="fondo">\n\n\n\n<ion-grid>\n  <ion-row>\n\n      <ion-col>\n\n        </ion-col>\n\n    <ion-col no-padding col-10 col-lg-6>\n      <ion-item class="logo">\n\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n\n      </ion-col>\n\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col>\n\n    </ion-col>\n\n    <ion-col no-padding col-10 col-lg-6>\n          <ion-item class="botonescss">\n            <ion-input  placeholder="Escriba su email" class="inputcss" type="text" [(ngModel)] = "email"></ion-input>\n          </ion-item>\n    </ion-col>\n\n    <ion-col>\n      \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col>\n  \n      </ion-col>\n  \n      <ion-col no-padding col-10 col-lg-6>\n          <ion-item>>\n              <ion-input placeholder="Escriba su contraseña" class="inputcss" type="password" [(ngModel)] = "password"> </ion-input>\n          </ion-item>\n      </ion-col>\n  \n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n    \n        </ion-col>\n    \n        <ion-col  no-padding col-10 col-lg-6>\n            <ion-item>\n                <ion-select [(ngModel)]="sucursal_id" class="selectcss" placeholder="Seleccione una sucursal">\n                  <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n        </ion-col>\n    \n        <ion-col>\n          \n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n        <ion-col no-padding col-10 col-lg-6>\n            <ion-item >  \n                <button padding ion-button block (click)="entrar()">Entrar</button>\n              </ion-item> \n          </ion-col>\n          <ion-col>\n          \n            </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>\n  \n          </ion-col>\n          <ion-col no-padding col-10 col-lg-6>\n              <ion-item>    \n                  <i class="botonescss" (click)="registrar()">¿No tenés una cuenta? Registrate</i>\n                </ion-item> \n            </ion-col>\n            <ion-col>\n            \n              </ion-col>\n        </ion-row>\n      \n\n      \n\n      \n\n     \n\n      \n\n\n</ion-grid>\n\n\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Itec\disfrutaenviosIonic3\src\pages\inicio\inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map