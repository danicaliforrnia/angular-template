!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{GQPB:function(n,i,a){"use strict";a.r(i),a.d(i,"TablesModule",(function(){return ee}));var r=a("ofXK"),c=a("fXoL"),o=a("XiUz"),s=a("+0xr");function l(e,t){if(1&e){var n=c.bc();c.ac(0,"a",11),c.ic("keyup.enter",(function(){return c.Bc(n),c.mc(3),c.zc(1).previous()}))("click",(function(){return c.Bc(n),c.mc(3),c.zc(1).previous()})),c.Mc(1),c.ac(2,"span",12),c.Mc(3),c.Zb(),c.Zb()}if(2&e){var i=c.mc(3);c.Kb("aria-label",i.previousLabel+" "+i.screenReaderPageLabel),c.Jb(1),c.Oc(" ",i.previousLabel," "),c.Jb(2),c.Nc(i.screenReaderPageLabel)}}function p(e,t){if(1&e&&(c.ac(0,"span"),c.Mc(1),c.ac(2,"span",12),c.Mc(3),c.Zb(),c.Zb()),2&e){var n=c.mc(3);c.Jb(1),c.Oc(" ",n.previousLabel," "),c.Jb(2),c.Nc(n.screenReaderPageLabel)}}function u(e,t){if(1&e&&(c.ac(0,"li",8),c.Kc(1,l,4,3,"a",9),c.Kc(2,p,4,2,"span",10),c.Zb()),2&e){c.mc(2);var n=c.zc(1);c.Mb("disabled",n.isFirstPage()),c.Jb(1),c.sc("ngIf",1<n.getCurrent()),c.Jb(1),c.sc("ngIf",n.isFirstPage())}}function g(e,t){if(1&e){var n=c.bc();c.ac(0,"a",11),c.ic("keyup.enter",(function(){c.Bc(n);var e=c.mc().$implicit;return c.mc(2),c.zc(1).setCurrent(e.value)}))("click",(function(){c.Bc(n);var e=c.mc().$implicit;return c.mc(2),c.zc(1).setCurrent(e.value)})),c.ac(1,"span",12),c.Mc(2),c.Zb(),c.ac(3,"span"),c.Mc(4),c.nc(5,"number"),c.Zb(),c.Zb()}if(2&e){var i=c.mc().$implicit,a=c.mc(2);c.Jb(2),c.Oc("",a.screenReaderPageLabel," "),c.Jb(2),c.Nc("..."===i.label?i.label:c.pc(5,2,i.label,""))}}function d(e,t){if(1&e&&(c.Yb(0),c.ac(1,"span",12),c.Mc(2),c.Zb(),c.ac(3,"span"),c.Mc(4),c.nc(5,"number"),c.Zb(),c.Xb()),2&e){var n=c.mc().$implicit,i=c.mc(2);c.Jb(2),c.Oc("",i.screenReaderCurrentLabel," "),c.Jb(2),c.Nc("..."===n.label?n.label:c.pc(5,2,n.label,""))}}function f(e,t){if(1&e&&(c.ac(0,"li"),c.Kc(1,g,6,5,"a",9),c.Kc(2,d,6,5,"ng-container",10),c.Zb()),2&e){var n=t.$implicit;c.mc(2);var i=c.zc(1);c.Mb("current",i.getCurrent()===n.value)("ellipsis","..."===n.label),c.Jb(1),c.sc("ngIf",i.getCurrent()!==n.value),c.Jb(1),c.sc("ngIf",i.getCurrent()===n.value)}}function h(e,t){if(1&e){var n=c.bc();c.ac(0,"a",11),c.ic("keyup.enter",(function(){return c.Bc(n),c.mc(3),c.zc(1).next()}))("click",(function(){return c.Bc(n),c.mc(3),c.zc(1).next()})),c.Mc(1),c.ac(2,"span",12),c.Mc(3),c.Zb(),c.Zb()}if(2&e){var i=c.mc(3);c.Kb("aria-label",i.nextLabel+" "+i.screenReaderPageLabel),c.Jb(1),c.Oc(" ",i.nextLabel," "),c.Jb(2),c.Nc(i.screenReaderPageLabel)}}function b(e,t){if(1&e&&(c.ac(0,"span"),c.Mc(1),c.ac(2,"span",12),c.Mc(3),c.Zb(),c.Zb()),2&e){var n=c.mc(3);c.Jb(1),c.Oc(" ",n.nextLabel," "),c.Jb(2),c.Nc(n.screenReaderPageLabel)}}function m(e,t){if(1&e&&(c.ac(0,"li",13),c.Kc(1,h,4,3,"a",9),c.Kc(2,b,4,2,"span",10),c.Zb()),2&e){c.mc(2);var n=c.zc(1);c.Mb("disabled",n.isLastPage()),c.Jb(1),c.sc("ngIf",!n.isLastPage()),c.Jb(1),c.sc("ngIf",n.isLastPage())}}function y(e,t){if(1&e&&(c.ac(0,"ul",3),c.Kc(1,u,3,4,"li",4),c.ac(2,"li",5),c.Mc(3),c.Zb(),c.Kc(4,f,3,6,"li",6),c.Kc(5,m,3,4,"li",7),c.Zb()),2&e){var n=c.mc(),i=c.zc(1);c.Mb("responsive",n.responsive),c.Kb("aria-label",n.screenReaderPaginationLabel),c.Jb(1),c.sc("ngIf",n.directionLinks),c.Jb(2),c.Pc(" ",i.getCurrent()," / ",i.getLastPage()," "),c.Jb(1),c.sc("ngForOf",i.pages),c.Jb(1),c.sc("ngIf",n.directionLinks)}}var v=function(){function e(){this.change=new c.r,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return e.prototype.defaultId=function(){return this.DEFAULT_ID},e.prototype.register=function(e){return null==e.id&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)},e.prototype.updateInstance=function(e){var t=!1;for(var n in this.instances[e.id])e[n]!==this.instances[e.id][n]&&(this.instances[e.id][n]=e[n],t=!0);return t},e.prototype.getCurrentPage=function(e){if(this.instances[e])return this.instances[e].currentPage},e.prototype.setCurrentPage=function(e,t){if(this.instances[e]){var n=this.instances[e];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}},e.prototype.setTotalItems=function(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))},e.prototype.setItemsPerPage=function(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))},e.prototype.getInstance=function(e){return void 0===e&&(e=this.DEFAULT_ID),this.instances[e]?this.clone(this.instances[e]):{}},e.prototype.clone=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Qb({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=Number.MAX_SAFE_INTEGER,x=function(){function e(e){this.service=e,this.state={}}return e.prototype.transform=function(e,t){if(!(e instanceof Array)){var n=t.id||this.service.defaultId();return this.state[n]?this.state[n].slice:e}var i,a,r=t.totalItems&&t.totalItems!==e.length,c=this.createInstance(e,t),o=c.id,s=c.itemsPerPage,l=this.service.register(c);if(!r&&e instanceof Array){if(this.stateIsIdentical(o,e,i=(c.currentPage-1)*(s=+s||C),a=i+s))return this.state[o].slice;var p=e.slice(i,a);return this.saveState(o,e,p,i,a),this.service.change.emit(o),p}return l&&this.service.change.emit(o),this.saveState(o,e,e,i,a),e},e.prototype.createInstance=function(e,t){return this.checkConfig(t),{id:null!=t.id?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}},e.prototype.checkConfig=function(e){var t=["itemsPerPage","currentPage"].filter((function(t){return!(t in e)}));if(0<t.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+t.join(", "))},e.prototype.saveState=function(e,t,n,i,a){this.state[e]={collection:t,size:t.length,slice:n,start:i,end:a}},e.prototype.stateIsIdentical=function(e,t,n,i){var a=this.state[e];return!!a&&!(a.size!==t.length||a.start!==n||a.end!==i)&&a.slice.every((function(e,i){return e===t[n+i]}))},(e=function(e,t,n,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}([P("design:paramtypes",[v])],e)).\u0275fac=function(t){return new(t||e)(c.Ub(v))},e.\u0275pipe=c.Tb({name:"paginate",type:e,pure:!1}),e}(),M=function(e,t,n,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function w(e){return!!e&&"false"!==e}var L,I,k=function(){function e(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new c.r,this.pageBoundsCorrection=new c.r,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(e.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(e){this._directionLinks=w(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoHide",{get:function(){return this._autoHide},set:function(e){this._autoHide=w(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"responsive",{get:function(){return this._responsive},set:function(e){this._responsive=w(e)},enumerable:!0,configurable:!0}),M([Object(c.x)(),O("design:type",String)],e.prototype,"id",void 0),M([Object(c.x)(),O("design:type",Number)],e.prototype,"maxSize",void 0),M([Object(c.x)(),O("design:type",Boolean),O("design:paramtypes",[Boolean])],e.prototype,"directionLinks",null),M([Object(c.x)(),O("design:type",Boolean),O("design:paramtypes",[Boolean])],e.prototype,"autoHide",null),M([Object(c.x)(),O("design:type",Boolean),O("design:paramtypes",[Boolean])],e.prototype,"responsive",null),M([Object(c.x)(),O("design:type",String)],e.prototype,"previousLabel",void 0),M([Object(c.x)(),O("design:type",String)],e.prototype,"nextLabel",void 0),M([Object(c.x)(),O("design:type",String)],e.prototype,"screenReaderPaginationLabel",void 0),M([Object(c.x)(),O("design:type",String)],e.prototype,"screenReaderPageLabel",void 0),M([Object(c.x)(),O("design:type",String)],e.prototype,"screenReaderCurrentLabel",void 0),M([Object(c.I)(),O("design:type",c.r)],e.prototype,"pageChange",void 0),M([Object(c.I)(),O("design:type",c.r)],e.prototype,"pageBoundsCorrection",void 0),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ob({type:e,selectors:[["pagination-controls"]],inputs:{maxSize:"maxSize",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:3,vars:3,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["class","ngx-pagination","role","navigation",3,"responsive",4,"ngIf"],["role","navigation",1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],[4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],[1,"pagination-next"]],template:function(e,t){if(1&e&&(c.ac(0,"pagination-template",0,1),c.ic("pageChange",(function(e){return t.pageChange.emit(e)}))("pageBoundsCorrection",(function(e){return t.pageBoundsCorrection.emit(e)})),c.Kc(2,y,6,8,"ul",2),c.Zb()),2&e){var n=c.zc(1);c.sc("id",t.id)("maxSize",t.maxSize),c.Jb(2),c.sc("ngIf",!(t.autoHide&&n.pages.length<=1))}},directives:function(){return[D,r.t,r.s]},pipes:function(){return[r.g]},styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],encapsulation:2,changeDetection:0}),e}(),R=function(e,t,n,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(){function e(e,t){var n=this;this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new c.r,this.pageBoundsCorrection=new c.r,this.pages=[],this.changeSub=this.service.change.subscribe((function(e){n.id===e&&(n.updatePageLinks(),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges())}))}return e.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},e.prototype.ngOnChanges=function(e){this.updatePageLinks()},e.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},e.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},e.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},e.prototype.isFirstPage=function(){return 1===this.getCurrent()},e.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},e.prototype.setCurrent=function(e){this.pageChange.emit(e)},e.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},e.prototype.getLastPage=function(){var e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)},e.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},e.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},e.prototype.updatePageLinks=function(){var e=this,t=this.service.getInstance(this.id),n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout((function(){e.pageBoundsCorrection.emit(n),e.pages=e.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,e.maxSize)})):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)},e.prototype.outOfBoundCorrection=function(e){var t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage},e.prototype.createPageArray=function(e,t,n,i){i=+i;for(var a=[],r=Math.ceil(n/t),c=Math.ceil(i/2),o=e<=c,s=r-c<e,l=!o&&!s,p=i<r,u=1;u<=r&&u<=i;){var g=this.calculatePageNumber(u,e,i,r);a.push({label:p&&(2===u&&(l||s)||u===i-1&&(l||o))?"...":g,value:g}),u++}return a},e.prototype.calculatePageNumber=function(e,t,n,i){var a=Math.ceil(n/2);return e===n?i:1===e?e:n<i?i-a<t?i-n+e:a<t?t-a+e:e:e},R([Object(c.x)(),S("design:type",String)],e.prototype,"id",void 0),R([Object(c.x)(),S("design:type",Number)],e.prototype,"maxSize",void 0),R([Object(c.I)(),S("design:type",c.r)],e.prototype,"pageChange",void 0),R([Object(c.I)(),S("design:type",c.r)],e.prototype,"pageBoundsCorrection",void 0),(e=R([S("design:paramtypes",[v,c.i])],e)).\u0275fac=function(t){return new(t||e)(c.Ub(v),c.Ub(c.i))},e.\u0275dir=c.Pb({type:e,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{maxSize:"maxSize",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[c.Hb]}),e}(),j=function(){function e(){}return e.\u0275mod=c.Sb({type:e}),e.\u0275inj=c.Rb({factory:function(t){return new(t||e)},providers:[v],imports:[[r.c]]}),e}(),_=((I=function e(n,i){t(this,e),this.el=n,this.renderer=i,this.renderer.setStyle(this.el.nativeElement,"fontSize","1rem"),this.renderer.setStyle(this.el.nativeElement,"display","inline"),this.renderer.setStyle(this.el.nativeElement,"justifyContent","center"),this.renderer.setStyle(this.el.nativeElement,"textAlign","center"),this.renderer.setStyle(this.el.nativeElement,"whiteSpace","nowrap"),this.renderer.setStyle(this.el.nativeElement,"overflow","hidden"),this.renderer.setStyle(this.el.nativeElement,"textOverflow","ellipsis"),this.renderer.setStyle(this.el.nativeElement,"min-height","0")}).\u0275fac=function(e){return new(e||I)(c.Ub(c.o),c.Ub(c.N))},I.\u0275dir=c.Pb({type:I,selectors:[["","templateCell",""]]}),I),B=((L=function e(n,i){t(this,e),this.el=n,this.renderer=i,this.renderer.setStyle(this.el.nativeElement,"border","none"),this.renderer.setStyle(this.el.nativeElement,"background-color","#F4F4F4")}).\u0275fac=function(e){return new(e||L)(c.Ub(c.o),c.Ub(c.N))},L.\u0275dir=c.Pb({type:L,selectors:[["","templateHeaderRow",""]]}),L);function J(e,t){1&e&&(c.ac(0,"mat-header-cell",12),c.Mc(1," No."),c.Zb())}function N(e,t){if(1&e&&(c.ac(0,"mat-cell",12),c.Mc(1),c.Zb()),2&e){var n=t.index;c.Jb(1),c.Oc(" ",n+1," ")}}function Z(e,t){1&e&&(c.ac(0,"mat-header-cell",12),c.Mc(1," Name"),c.Zb())}function z(e,t){if(1&e&&(c.ac(0,"mat-cell",12),c.Mc(1),c.Zb()),2&e){var n=t.$implicit;c.Jb(1),c.Nc(n.name)}}function K(e,t){1&e&&(c.ac(0,"mat-header-cell",12),c.Mc(1,"Alias"),c.Zb())}function A(e,t){if(1&e&&(c.ac(0,"mat-cell",12),c.Mc(1),c.Zb()),2&e){var n=t.$implicit;c.Jb(1),c.Nc(n.alias)}}function E(e,t){1&e&&(c.ac(0,"mat-header-cell",12),c.Mc(1,"City"),c.Zb())}function T(e,t){if(1&e&&(c.ac(0,"mat-cell",12),c.Mc(1),c.Zb()),2&e){var n=t.$implicit;c.Jb(1),c.Nc(n.city)}}function F(e,t){1&e&&(c.ac(0,"mat-header-cell",12),c.Mc(1,"Publisher"),c.Zb())}function H(e,t){if(1&e&&(c.ac(0,"mat-cell",12),c.Mc(1),c.Zb()),2&e){var n=t.$implicit;c.Jb(1),c.Nc(n.publisher)}}function U(e,t){1&e&&c.Vb(0,"mat-header-row",13)}function Y(e,t){1&e&&c.Vb(0,"mat-row")}var W,X,$=function(e,t){return{itemsPerPage:e,currentPage:t}},G=((W=function(){function n(){t(this,n),this.dataSource=[{id:1,name:"Peter Parker",alias:"Spiderman",city:"New York",publisher:"Marvel"},{id:2,name:"Bruce Wayne",alias:"Batman",city:"Gotham City",publisher:"DC"},{id:3,name:"Steve Rogers",alias:"Captain America",city:"New York",publisher:"Marvel"},{id:4,name:"Tony Stark",alias:"Iron Man",city:"New York",publisher:"Marvel"},{id:5,name:"Thor",alias:"Thor",city:"Asgasrd",publisher:"Marvel"},{id:6,name:"Clark Kent - Kal-El",alias:"Superman",city:"Metropolis",publisher:"DC"},{id:7,name:"Barry Allen",alias:"Flash",city:"Central City",publisher:"DC"},{id:8,name:"Logan",alias:"Wolverine",city:"Canada",publisher:"Marvel"},{id:9,name:"Diana Prince",alias:"Wonder Woman",city:"Themyscira",publisher:"DC"},{id:10,name:"Natasha Romanoff",alias:"Black Widow",city:"Russia",publisher:"Marvel"},{id:10,name:"Natasha Romanoff",alias:"Black Widow",city:"Russia",publisher:"Marvel"},{id:9,name:"Diana Prince",alias:"Wonder Woman",city:"Themyscira",publisher:"DC"},{id:8,name:"Logan",alias:"Wolverine",city:"Canada",publisher:"Marvel"},{id:7,name:"Barry Allen",alias:"Flash",city:"Central City",publisher:"DC"},{id:6,name:"Clark Kent - Kal-El",alias:"Superman",city:"Metropolis",publisher:"DC"},{id:5,name:"Thor",alias:"Thor",city:"Asgasrd",publisher:"Marvel"},{id:4,name:"Tony Stark",alias:"Iron Man",city:"New York",publisher:"Marvel"},{id:3,name:"Steve Rogers",alias:"Captain America",city:"New York",publisher:"Marvel"},{id:2,name:"Bruce Wayne",alias:"Batman",city:"Gotham City",publisher:"DC"},{id:1,name:"Peter Parker",alias:"Spiderman",city:"New York",publisher:"Marvel"}],this.displayedColumns=["position","name","alias","city","publisher"],this.size=10,this.page=0}var i,a,r;return i=n,(a=[{key:"ngOnInit",value:function(){}}])&&e(i.prototype,a),r&&e(i,r),n}()).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=c.Ob({type:W,selectors:[["app-tables"]],decls:23,vars:10,consts:[["fxLayout","column","fxLayoutGap","1rem",1,"tables"],[3,"dataSource"],["matColumnDef","position"],["templateCell","",4,"matHeaderCellDef"],["templateCell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","alias"],["matColumnDef","city"],["matColumnDef","publisher"],["templateHeaderRow","",4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["autoHide","true","nextLabel","Next","previousLabel","Previous","responsive","true",3,"pageChange"],["templateCell",""],["templateHeaderRow",""]],template:function(e,t){1&e&&(c.ac(0,"div",0),c.ac(1,"h1"),c.Mc(2,"Table with pagination (with ngx-pagination)"),c.Zb(),c.ac(3,"mat-table",1),c.nc(4,"paginate"),c.Yb(5,2),c.Kc(6,J,2,0,"mat-header-cell",3),c.Kc(7,N,2,1,"mat-cell",4),c.Xb(),c.Yb(8,5),c.Kc(9,Z,2,0,"mat-header-cell",3),c.Kc(10,z,2,1,"mat-cell",4),c.Xb(),c.Yb(11,6),c.Kc(12,K,2,0,"mat-header-cell",3),c.Kc(13,A,2,1,"mat-cell",4),c.Xb(),c.Yb(14,7),c.Kc(15,E,2,0,"mat-header-cell",3),c.Kc(16,T,2,1,"mat-cell",4),c.Xb(),c.Yb(17,8),c.Kc(18,F,2,0,"mat-header-cell",3),c.Kc(19,H,2,1,"mat-cell",4),c.Xb(),c.Kc(20,U,1,0,"mat-header-row",9),c.Kc(21,Y,1,0,"mat-row",10),c.Zb(),c.ac(22,"pagination-controls",11),c.ic("pageChange",(function(e){return t.page=e})),c.Zb(),c.Zb()),2&e&&(c.Jb(3),c.sc("dataSource",c.pc(4,4,t.dataSource,c.wc(7,$,t.size,t.page))),c.Jb(17),c.sc("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),c.Jb(1),c.sc("matRowDefColumns",t.displayedColumns))},directives:[o.f,o.g,s.o,s.c,s.i,s.b,s.k,s.n,k,s.h,_,s.a,s.j,B,s.m],pipes:[x],styles:[".tables[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:first-child, .tables[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:first-child{flex:10%!important}.tables[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(2), .tables[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .tables[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(2), .tables[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:25%!important}.tables[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:last-child, .tables[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(4), .tables[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:last-child, .tables[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(4){flex:20%!important}"]}),W),V=a("tyNb"),Q=((X=function e(){t(this,e)}).\u0275mod=c.Sb({type:X}),X.\u0275inj=c.Rb({factory:function(e){return new(e||X)},imports:[[r.c]]}),X),q=[{path:"",component:G}],ee=function e(){t(this,e)};ee.\u0275mod=c.Sb({type:ee}),ee.\u0275inj=c.Rb({factory:function(e){return new(e||ee)},imports:[[r.c,V.e.forChild(q),o.i,s.p,Q,j]]})}}])}();