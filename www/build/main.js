webpackJsonp([4],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estado_estado__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalle_detalle__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cadete_cadete__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inicio_inicio__ = __webpack_require__(88);
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









var EnvioPage = /** @class */ (function () {
    function EnvioPage(loginService, menu, loadingCtrl, navCtrl, enviosService, sucursalesService) {
        var _this = this;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.enviosService = enviosService;
        this.sucursalesService = sucursalesService;
        this.envioss = []; //creo un arreglo vacio para llenarlo con el service de abajo en el constructor
        this.sucursales = [];
        this.current_user = [];
        menu.enable(true);
        //this.envios=[];
        this.current_user = this.loginService.getSession();
        console.log("prueba: " + this.current_user['nombre']);
        console.log("sucursal de session: " + this.current_user['sucursal']);
        console.log("estado de session: " + this.current_user['estado']);
        var loader = this.loadingCtrl.create({
            content: "Cargando Lista De Envíos...",
            duration: 1000
        });
        loader.present();
        //cargo con el servicio el array de envios
        this.enviosService.getEnvios()
            .subscribe(function (envios) {
            console.log(envios);
            //this.envios = envios;
            for (var j = 0; j < envios.length; j++) {
                if (envios[j]['sucursal'] == _this.current_user['sucursal']) {
                    _this.envioss.push(envios[j]);
                }
            }
            _this.loginService.getUsuarios().subscribe(function (usuarios) {
                for (var j = 0; j < _this.envioss.length; j++) {
                    for (var k = 0; k < usuarios.length; k++) {
                        if (usuarios[k]['id'] == _this.envioss[j]['cliente']) {
                            _this.envioss[j]['cliente'] = usuarios[k]['name'];
                        }
                    }
                }
            });
        });
    } //END DEL COSNTRUCTOR
    //METODOS
    EnvioPage.prototype.backButtonClick = function () {
        alert("a inicio");
    };
    EnvioPage.prototype.verDetalle = function (idd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estado_estado__["a" /* EstadoPage */], { id: idd }); //,envio: this.envios})
    };
    EnvioPage.prototype.editarDetalle = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detalle_detalle__["a" /* DetallePage */], { id: id }); //,envio: this.envios})
    };
    EnvioPage.prototype.nuevoEnvio = function () {
        var id2 = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detalle_detalle__["a" /* DetallePage */], { id: id2 }); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.verTodo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.verCadetes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cadete_cadete__["a" /* CadetePage */]); //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    EnvioPage.prototype.salir = function () {
        this.loginService.setSession(null, null);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__inicio_inicio__["a" /* InicioPage */]);
        //el id lo defino aca de forma rustica, si es 0 entonces se trata de un insert
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('MyNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], EnvioPage.prototype, "nav", void 0);
    EnvioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-envio',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\envio\envio.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      \n        <ion-title>\n          DisFruta Envíos\n        </ion-title>\n        <p>Cadete: {{current_user.nombre}}</p>\n        <p *ngIf="current_user.estado ==\'No Disponible\'" style="background-color:rgba(252, 71, 71, 0.829);">Estado: {{current_user.estado}}</p>\n        <p *ngIf="current_user.estado ==\'Disponible\'" style="background-color:rgba(64, 216, 25, 0.829);">Estado: {{current_user.estado}}</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondotodo">\n<div>\n\n\n</div>\n  \n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title centered>Opciones</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-label ion-button block (click)="verTodo()">\n          Ver Más Envíos\n        </ion-label>\n        <ion-label ion-button block (click)="verCadetes()">\n          Ver Cadetes\n        </ion-label>\n        <ion-label ion-button block (click)="salir()">\n          Salir\n        </ion-label>\n    \n\n\n        \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n  </button>\n  \n\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col>Cliente</ion-col>\n            <ion-col col>Dirección</ion-col>\n            <ion-col col>Estado</ion-col>\n            <ion-col col>Accion</ion-col>\n          </ion-row>\n\n\n              <ion-row  *ngFor="let envio of envioss" class="row" responsive-sm wrap  >\n                 \n                      <ion-col col>{{envio.cliente}}</ion-col>\n                      <ion-col col>{{envio.destino}}</ion-col>\n      \n                      <ion-col style="background-color:rgb(137, 209, 250);" *ngIf="envio.estado == \'En Camino\'" col>Cam.</ion-col>\n                      <ion-col style="background-color:rgb(241, 235, 150);" *ngIf="envio.estado == \'Pendiente\'" col>Pen.</ion-col>\n                      <ion-col style="background-color:rgb(130, 187, 38);" *ngIf="envio.estado == \'Entregado\'" col>Ent.</ion-col>\n                      <ion-col style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envio.estado == \'Cancelado\'" col>Can.</ion-col>\n      \n                      <ion-col col><button (click) = "verDetalle(envio.id)" ><ion-icon name="search"></ion-icon></button>\n                      <button (click) = "editarDetalle(envio.id)" ><ion-icon name="build"></ion-icon></button></ion-col>\n                    \n                </ion-row>\n\n                <ion-row>\n                \n                  <ion-col>\n                    <button ion-button block (click)="nuevoEnvio()">Nuevo Envio</button>\n                    <button ion-button block (click)="verTodo()">Ver Todos Los Envíos</button>\n                    <button ion-button block (click)="verCadetes()">Ver Cadetes</button>\n                    <button ion-button block (click)="salir()">Cerrar Sesión</button>\n                  </ion-col>\n                \n                </ion-row>\n\n          \n\n        </ion-grid>\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\envio\envio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */], __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__["a" /* SucursalesService */]])
    ], EnvioPage);
    return EnvioPage;
}());

//# sourceMappingURL=envio.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__ = __webpack_require__(86);
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
    function CadetePage(usuariosService, navCtrl, navParams) {
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
            selector: 'page-cadete',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\cadete\cadete.html"*/'<!--\n  Generated template for the CadetePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col>Nombre</ion-col>\n          <ion-col col>telefono</ion-col>\n          <ion-col col>Estado</ion-col>\n\n        </ion-row>\n\n\n            <ion-row  *ngFor="let cadete of cadetes" class="row" responsive-sm wrap  >\n               \n                    <ion-col col>{{cadete.nombre}}</ion-col>\n                    <ion-col col>{{cadete.telefono}}</ion-col>\n    \n                    <ion-col style="background-color:rgb(25, 199, 40);" *ngIf="cadete.estado == \'Disponible\'" col>Disponible</ion-col>\n                    <ion-col style="background-color:rgb(243, 82, 18);" *ngIf="cadete.estado == \'No Disponible\'" col>No Disponible.</ion-col>\n    \n                  \n              </ion-row>\n\n\n\n        \n\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\cadete\cadete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadetePage);
    return CadetePage;
}());

//# sourceMappingURL=cadete.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_envio_envio__ = __webpack_require__(138);
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
        this.envioDetalle2 = { id: null, cliente: null, sucursal: null, destino: null, cadete: null, estado: null };
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
            this.envioDetalle2.estado = "Pendiente";
            this.envioDetalle2.cadete = null; //asigno un id unico con date.now asegurandome que sea unico ya que trabaja con milisegundos
            this.enviosService.createEnvio(this.envioDetalle2); //voy al enviosService
            alert('Envio creado con exito');
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_envio_envio__["a" /* EnvioPage */]); //vuelvo a home cuando termino
    };
    DetallePage.prototype.eliminarEnvio = function () {
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
            selector: 'page-detalle',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\detalle\detalle.html"*/'<!--\n  Generated template for the DetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles del Envío</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div padding class="fondotodo">\n\n\n\n        <ion-grid>\n          <ion-row>\n        \n              <ion-col>\n        \n                </ion-col>\n        \n            <ion-col no-padding col-10 col-lg-6>\n                <ion-item *ngIf="id != null">\n                    <ion-label>Clientes</ion-label>\n                    <ion-select [(ngModel)] = "envioDetalle2.cliente" >\n                      <ion-option *ngFor="let cliente of clientes" value="{{cliente.id}}">{{cliente.name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col>\n        \n              </ion-col>\n        \n          </ion-row>\n          \n        \n          <ion-row>\n            <ion-col>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-10 col-lg-6>\n                <ion-item *ngIf="id != null">\n                    <ion-label>Sucursal</ion-label>\n                    <ion-select [(ngModel)] = "envioDetalle2.sucursal" >\n                      <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              \n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n              <ion-col>\n          \n              </ion-col>\n          \n              <ion-col no-padding col-10 col-lg-6>\n                  <ion-item *ngIf="id != null">\n                      <ion-label>Dirección</ion-label>\n                      <ion-input *ngIf="id != null" type="text" [(ngModel)] = "envioDetalle2.destino"> </ion-input>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col>\n                \n              </ion-col>\n            </ion-row>\n        \n            <ion-row>\n                <ion-col>\n            \n                </ion-col>\n            \n                <ion-col  no-padding col-10 col-lg-6>\n                    <ion-item *ngIf="id != null && id != 0">\n                        <ion-label>Cadetes</ion-label>\n                        <ion-select [(ngModel)] = "envioDetalle2.cadete" >\n                          <ion-option *ngFor="let cadete of cadetes" value="{{cadete.id}}">{{cadete.nombre}}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                </ion-col>\n            \n                <ion-col>\n                  \n                </ion-col>\n              </ion-row>\n        \n              <ion-row>\n                <ion-col>\n        \n                </ion-col>\n                <ion-col no-padding col-10 col-lg-6>\n                    <ion-item *ngIf="id != null && id !=0">\n                        <ion-label>Estado</ion-label>\n                        <ion-select *ngIf="id != null" [(ngModel)] = "envioDetalle2.estado">\n                          <ion-option>Pendiente</ion-option>\n                          <ion-option>En Camino</ion-option>\n                          <ion-option>Entregado</ion-option>\n                          <ion-option>Cancelado</ion-option>\n                        </ion-select>\n                      </ion-item>\n                  </ion-col>\n                  <ion-col>\n                  \n                    </ion-col>\n              </ion-row>\n        \n              <ion-row>\n                  <ion-col>\n          \n                  </ion-col>\n                  <ion-col no-padding col-10 col-lg-6>\n                      <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n                        <button ion-button block (click)="guardarEnvio()">Guardar</button>\n                    </div>\n                    <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n                      <button *ngIf="id != 0"  ion-button block (click)="eliminarEnvio()" color="danger">Eliminar</button>\n                  </div>\n                    </ion-col>\n                    <ion-col>\n                    \n                      </ion-col>\n                </ion-row>\n              \n    \n        \n        </ion-grid>\n\n\n</div>\n   \n</ion-content>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_envios_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(50);
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
    function EstadoPage(usuariosService, loginService, menu, sucursalesService, navCtrl, navParams, enviosService) {
        var _this = this;
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
        console.log("el id cadete es: " + this.cadete['id']);
        console.log("el estado cadete es: " + this.cadete['estado']);
        console.log("el id en estado es: " + this.id); //GUARDO EL PARAMETRO QUE PASE EN verDetalle() de home.ts junto a la ruta de la pagina con navController
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
                    console.log(_this.envioDetalle);
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
    };
    EstadoPage.prototype.entregarEnvio = function () {
        //console.log("estado guardado: "+this.cadete['estado']) //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
        //if(this.cadete['estado']=="No Disponible"){
        //   alert("¡Ya tomaste un envío!")
        //}
        //else{
        var estado = "Entregado";
        this.enviosService.setEstado(this.envioDetalle['id'], estado, this.cadete['id']);
        this.usuariosService.setDisponible(this.cadete['id']);
        alert("Entregado con exito");
        //}
    };
    EstadoPage.prototype.tomarEnvio = function () {
        console.log("estado guardado: " + this.cadete['estado']); //USAR CORCHETES SINO CON . NO ME RECONOCE BIEN
        if (this.cadete['estado'] == "No Disponible") {
            alert("¡Ya tomaste un envío!");
        }
        else {
            var estado = "En Camino";
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
    };
    EstadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estado',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\estado\estado.html"*/'<!--\n  Generated template for the EstadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestionar Estado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<!--<ion-content padding style="background-color:rgb(130, 187, 38);" *ngIf="envioDetalle.estado == \'Entregado\'">\n<ion-content padding style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envioDetalle.estado == \'Cancelado\'">\n<ion-content padding style="background-color:rgb(241, 235, 150);" *ngIf="envioDetalle.estado == \'Pendiente\'">\n<ion-content padding style="background-color:rgb(137, 209, 250);" *ngIf="envioDetalle.estado == \'En Camino\'">-->\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n            <ion-col col><ion-label>Cliente</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.cliente}}</ion-label></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n            <ion-col col><ion-label>Sucursal</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.sucursal}}</ion-label></ion-col>\n      </ion-row>  \n      <ion-row>\n            <ion-col col><ion-label>Dirección</ion-label></ion-col>\n            <ion-col col><ion-label>{{envioDetalle.destino}}</ion-label></ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="envioDetalle.cadete">\n          <ion-col col><ion-label>Cadete Responsable</ion-label></ion-col>\n          <ion-col col><ion-label>{{envioDetalle.cadete}}</ion-label></ion-col>\n    </ion-row>\n\n      <ion-row>\n            <ion-label center style="background-color:rgb(137, 209, 250);" *ngIf="envioDetalle.estado == \'En Camino\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgb(241, 235, 150);" *ngIf="envioDetalle.estado == \'Pendiente\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgb(130, 187, 38);" *ngIf="envioDetalle.estado == \'Entregado\'">{{envioDetalle.estado}}</ion-label>\n            <ion-label center style="background-color:rgba(240, 123, 123, 0.829);" *ngIf="envioDetalle.estado == \'Cancelado\'">{{envioDetalle.estado}}</ion-label>\n      </ion-row>\n    </ion-grid>\n\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n    <button *ngIf="envioDetalle.estado==\'Pendiente\'" ion-button block (click)="tomarEnvio()">Tomar</button>\n  </div>\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n      <button *ngIf="envioDetalle.cadete==cadete.nombre && envioDetalle.estado!==\'Entregado\' && envioDetalle.estado!==\'Cancelado\'" ion-button block (click)="entregarEnvio()">Entregar</button>\n  </div>\n  <div padding> <!--si no estaba adentro del div no andaba el boton, o tenia un parentesis de mas en "guardarEnvio())>-->\n    <button *ngIf="envioDetalle.cadete==cadete.nombre && envioDetalle.estado!==\'Entregado\' && envioDetalle.estado!==\'Cancelado\'" ion-button block (click)="cancelarEnvio()" color="danger">Cancelar</button>\n  </div>\n   \n</ion-content>'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\estado\estado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_envios_service__["a" /* EnviosService */]])
    ], EstadoPage);
    return EstadoPage;
}());

//# sourceMappingURL=estado.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadetes_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(88);
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
            selector: 'page-registro',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\registro\registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar class="bg-image">\n    <ion-title >Registrar Cadete \n  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-image" padding>\n    <ion-grid fixed>\n\n        <ion-row fixed>\n          <ion-col fixed>\n      \n          </ion-col>\n      \n          <ion-col no-padding col-6>\n                <ion-item class="botonescss">\n                  <ion-input  placeholder="Escriba su email" class="inputcss" type="text" [(ngModel)] = "email"></ion-input>\n                </ion-item>\n          </ion-col>\n      \n          <ion-col fixed>\n            \n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n            <ion-col>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                <ion-item>>\n                    <ion-input placeholder="Escriba su contraseña" class="inputcss" type="password" [(ngModel)] = "password"> </ion-input>\n                </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              \n            </ion-col>\n          </ion-row>\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Repita contraseña" class="inputcss" type="password" [(ngModel)] = "password2"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Escriba su nombre" class="inputcss" type="text" [(ngModel)] = "nombre"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n\n\n\n\n\n\n          <ion-row fixed>\n            <ion-col fixed>\n        \n            </ion-col>\n        \n            <ion-col no-padding col-6>\n                  <ion-item class="botonescss">\n                    <ion-input  placeholder="Escriba su apellido" class="inputcss" type="text" [(ngModel)] = "apellido"></ion-input>\n                  </ion-item>\n            </ion-col>\n        \n            <ion-col fixed>\n              \n            </ion-col>\n          </ion-row>\n\n\n          <ion-row fixed>\n              <ion-col fixed>\n          \n              </ion-col>\n          \n              <ion-col no-padding col-6>\n                    <ion-item class="botonescss">\n                      <ion-input  placeholder="Escriba su teléfono" class="inputcss" type="text" [(ngModel)] = "telefono"></ion-input>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col fixed>\n                \n              </ion-col>\n            </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      \n          <!--<ion-row>\n              <ion-col>\n          \n              </ion-col>\n          \n              <ion-col  no-padding col-6>\n                  <ion-item>\n                      <ion-select class="selectcss" placeholder="Seleccione una sucursal">\n                        <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                      </ion-select>\n                    </ion-item>\n              </ion-col>\n          \n              <ion-col>\n                \n              </ion-col>\n            </ion-row>-->\n      \n            <ion-row>\n              <ion-col>\n      \n              </ion-col>\n              <ion-col no-padding col-6>\n                  <ion-item >  \n                      <button padding ion-button block (click)="nuevoCadete()">Registrar</button>\n                    </ion-item> \n                </ion-col>\n                <ion-col>\n                \n                  </ion-col>\n            </ion-row>\n      \n        \n            \n\n      </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__services_cadetes_service__["a" /* CadetesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}()); //en page

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadete/cadete.module": [
		506,
		3
	],
	"../pages/detalle/detalle.module": [
		507,
		2
	],
	"../pages/estado/estado.module": [
		508,
		1
	],
	"../pages/registro/registro.module": [
		509,
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadetesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(68);
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(433);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sucursales_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cadetes_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_envios_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_login_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_database__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__ = __webpack_require__(501);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__["a" /* EstadoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__["a" /* EnvioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__["a" /* CadetePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadete/cadete.module#CadetePageModule', name: 'CadetePage', segment: 'cadete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle/detalle.module#EnvioPageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estado/estado.module#EstadoPageModule', name: 'EstadoPage', segment: 'estado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_estado_estado__["a" /* EstadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadete_cadete__["a" /* CadetePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_envio_envio__["a" /* EnvioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_13__services_sucursales_service__["a" /* SucursalesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_usuarios_service__["a" /* UsuariosService */],
                __WEBPACK_IMPORTED_MODULE_15__services_cadetes_service__["a" /* CadetesService */],
                __WEBPACK_IMPORTED_MODULE_16__services_envios_service__["a" /* EnviosService */],
                __WEBPACK_IMPORTED_MODULE_17__services_login_service__["a" /* LoginService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(68);
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
var LoginService = /** @class */ (function () {
    function LoginService(afDB) {
        this.afDB = afDB;
        this.usuario_id = "";
        this.sucursal_id = "";
    } //creo el constructor primero que me trae los datos de firebase con afDB: AngularFireDatabase
    LoginService.prototype.setSession = function (usuario_id, sucursal_id) {
        this.usuario_id = usuario_id;
        this.sucursal_id = sucursal_id;
    };
    LoginService.prototype.getSession = function () {
        var _this = this;
        var sesion = { id: null, nombre: null, estado: null, sucursal: null };
        //lo puse aca ya que es dinamico, cada vez que consulto la sesion puede haber cambiado
        //el estado del cadete (usuario)
        this.afDB.list('users/').valueChanges().subscribe(function (usuarios) {
            for (var j = 0; j < usuarios.length; j++) {
                if (usuarios[j]['id'] == _this.usuario_id) {
                    var usuario = usuarios[j];
                }
            }
            sesion['estado'] = usuario['estado'];
            sesion['id'] = usuario['id'];
            sesion['nombre'] = usuario['nombre'];
            sesion['sucursal'] = _this.sucursal_id;
        });
        return sesion;
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

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(88);
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
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(68);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(68);
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___ = __webpack_require__(68);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__envio_envio__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(50);
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
    function InicioPage(navCtrl, loginService, sucursalesService, toastCtrl) {
        var _this = this;
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
                                console.log("usuario: " + usuario['id']);
                                _this.loginService.setSession(usuario['id'], _this.sucursal_id);
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
            selector: 'page-inicio',template:/*ion-inline-start:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n<ion-content padding class="fondotodo">\n\n<div padding class="fondo">\n\n\n\n<ion-grid>\n  <ion-row>\n\n      <ion-col>\n\n        </ion-col>\n\n    <ion-col no-padding col-10 col-lg-6>\n      <ion-item class="logo">\n\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n\n      </ion-col>\n\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col>\n\n    </ion-col>\n\n    <ion-col no-padding col-10 col-lg-6>\n          <ion-item class="botonescss">\n            <ion-input  placeholder="Escriba su email" class="inputcss" type="text" [(ngModel)] = "email"></ion-input>\n          </ion-item>\n    </ion-col>\n\n    <ion-col>\n      \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col>\n  \n      </ion-col>\n  \n      <ion-col no-padding col-10 col-lg-6>\n          <ion-item>>\n              <ion-input placeholder="Escriba su contraseña" class="inputcss" type="password" [(ngModel)] = "password"> </ion-input>\n          </ion-item>\n      </ion-col>\n  \n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n    \n        </ion-col>\n    \n        <ion-col  no-padding col-10 col-lg-6>\n            <ion-item>\n                <ion-select [(ngModel)]="sucursal_id" class="selectcss" placeholder="Seleccione una sucursal">\n                  <ion-option *ngFor="let sucursal of sucursales" value="{{sucursal.id}}">{{sucursal.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n        </ion-col>\n    \n        <ion-col>\n          \n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n        <ion-col no-padding col-10 col-lg-6>\n            <ion-item >  \n                <button padding ion-button block (click)="entrar()">Entrar</button>\n              </ion-item> \n          </ion-col>\n          <ion-col>\n          \n            </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>\n  \n          </ion-col>\n          <ion-col no-padding col-10 col-lg-6>\n              <ion-item>    \n                  <i class="botonescss" (click)="registrar()">¿No tenés una cuenta? Registrate</i>\n                </ion-item> \n            </ion-col>\n            <ion-col>\n            \n              </ion-col>\n        </ion-row>\n      \n\n      \n\n      \n\n     \n\n      \n\n\n</ion-grid>\n\n\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\disfrutaEnvios\disfrutaenviosIonic3\src\pages\inicio\inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_sucursales_service__["a" /* SucursalesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map