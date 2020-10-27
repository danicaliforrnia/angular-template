!function(){function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{s6ol:function(a,n,c){"use strict";c.r(n),c.d(n,"DashboardModule",(function(){return G}));var o,i=c("ofXK"),r=c("fXoL"),l=c("XiUz"),s=c("Wp6s"),d=c("NFeN"),b=c("f0Cb"),m=c("bTqV"),u=((o=function(){function a(){t(this,a)}return e(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Pb({type:o,selectors:[["app-information-card"]],inputs:{title:"title",icon:"icon",value:"value",buttonIcon:"buttonIcon",buttonText:"buttonText"},decls:17,vars:5,consts:[[1,"information-card"],["fxLayout","row","fxLayoutAlign","space-between"],[1,"information-card__card-icon"],["fxLayout","column","fxLayoutGap","0.5rem"],[1,"f4","tr"],[1,"bold","tr","f2"],[1,"relative"],["fxLayoutAlign","flex-start center"],["mat-button","",1,"pa0"],["fxLayout","row","fxLayoutAlign","flex-start center","fxLayoutGap","0.5rem"]],template:function(t,a){1&t&&(r.bc(0,"mat-card",0),r.bc(1,"mat-card-content",1),r.bc(2,"mat-icon",2),r.Qc(3),r.ac(),r.bc(4,"div",3),r.bc(5,"span",4),r.Qc(6),r.ac(),r.bc(7,"span",5),r.Qc(8),r.ac(),r.ac(),r.ac(),r.Wb(9,"mat-divider",6),r.bc(10,"mat-card-footer",7),r.bc(11,"button",8),r.bc(12,"span",9),r.bc(13,"mat-icon"),r.Qc(14),r.ac(),r.bc(15,"span"),r.Qc(16),r.ac(),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Jb(3),r.Rc(a.icon),r.Jb(3),r.Rc(a.title),r.Jb(2),r.Rc(a.value),r.Jb(6),r.Rc(a.buttonIcon),r.Jb(2),r.Rc(a.buttonText))},directives:[s.a,s.d,l.f,l.e,d.a,l.g,b.a,s.e,m.b],styles:[".information-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{margin:.5rem 0 0!important}.information-card__card-icon[_ngcontent-%COMP%]{font-size:60px}"]}),o),f=c("6OSH"),p=c("eDYX"),h=c("bSwM");function x(t,a){if(1&t&&(r.bc(0,"div",3),r.Wb(1,"mat-checkbox",4),r.bc(2,"div",5),r.bc(3,"span"),r.Qc(4),r.ac(),r.bc(5,"span"),r.Qc(6),r.ac(),r.ac(),r.bc(7,"button",6),r.bc(8,"mat-icon"),r.Qc(9,"edit"),r.ac(),r.ac(),r.ac()),2&t){var e=a.$implicit;r.Jb(4),r.Rc(e.title),r.Jb(2),r.Rc(e.information)}}var y,g=function(){return{autoHide:!1,scrollbarMinSize:100}},C=((y=function(){function a(){t(this,a)}return e(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=r.Pb({type:y,selectors:[["app-tasks-card"]],inputs:{tasks:"tasks"},decls:7,vars:4,consts:[[1,"tasks"],[2,"overflow-x","hidden",3,"options"],["class","tasks__task-wrapper","fxLayout","row","fxLayoutAlign","space-between center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-between center",1,"tasks__task-wrapper"],["color","primary",1,"mr3"],["fxFlex","","fxLayout","column","fxLayoutAlign","flex-start flex-start","fxLayoutGap","0.25rem"],["mat-icon-button",""]],template:function(t,a){1&t&&(r.bc(0,"mat-card",0),r.bc(1,"mat-card-header"),r.bc(2,"mat-card-title"),r.Qc(3),r.ac(),r.ac(),r.bc(4,"mat-card-content"),r.bc(5,"ngx-simplebar",1),r.Oc(6,x,10,2,"div",2),r.ac(),r.ac(),r.ac()),2&t&&(r.Jb(3),r.Sc("Tasks (",a.tasks.length,")"),r.Jb(2),r.tc("options",r.vc(3,g)),r.Jb(1),r.tc("ngForOf",a.tasks))},directives:[s.a,s.f,s.m,s.d,p.a,i.s,l.f,l.e,h.a,l.b,l.g,m.b,d.a],styles:[".tasks[_ngcontent-%COMP%]{height:100%}.tasks__task-wrapper[_ngcontent-%COMP%]{padding:.5rem 0}.tasks__task-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:1}.tasks__task-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{font-weight:700}.tasks__task-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type{color:#6c757d}.tasks__task-wrapper[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid #d2d2d2}"]}),y),O=c("+0xr"),_=c("F+nq"),v=c("ubqC");function w(t,a){1&t&&(r.bc(0,"mat-header-cell",11),r.Qc(1," No."),r.ac())}function k(t,a){if(1&t&&(r.bc(0,"mat-cell",11),r.Qc(1),r.ac()),2&t){var e=a.index;r.Jb(1),r.Sc(" ",e+1," ")}}function P(t,a){1&t&&(r.bc(0,"mat-header-cell",11),r.Qc(1," Name"),r.ac())}function M(t,a){if(1&t&&(r.bc(0,"mat-cell",11),r.Qc(1),r.ac()),2&t){var e=a.$implicit;r.Jb(1),r.Rc(e.name)}}function L(t,a){1&t&&(r.bc(0,"mat-header-cell",11),r.Qc(1," Username"),r.ac())}function J(t,a){if(1&t&&(r.bc(0,"mat-cell",11),r.Qc(1),r.ac()),2&t){var e=a.$implicit;r.Jb(1),r.Rc(e.jobTitle)}}function D(t,a){1&t&&(r.bc(0,"mat-header-cell",11),r.Qc(1," Salary"),r.ac())}function R(t,a){if(1&t&&(r.bc(0,"mat-cell",11),r.Qc(1),r.ac()),2&t){var e=a.$implicit;r.Jb(1),r.Rc(e.salary)}}function S(t,a){1&t&&r.Wb(0,"mat-header-row",12)}function T(t,a){1&t&&r.Wb(0,"mat-row")}var Q,F,A=function(){return{autoHide:!1,scrollbarMinSize:100}},W=((F=function(){function a(){t(this,a)}return e(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=r.Pb({type:F,selectors:[["app-table-card"]],inputs:{title:"title",dataSource:"dataSource",displayedColumns:"displayedColumns"},decls:21,vars:7,consts:[[1,"table-card"],[2,"overflow-x","hidden",3,"options"],[3,"dataSource"],["matColumnDef","position"],["templateCell","",4,"matHeaderCellDef"],["templateCell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","jobTitle"],["matColumnDef","salary"],["templateHeaderRow","",4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["templateCell",""],["templateHeaderRow",""]],template:function(t,a){1&t&&(r.bc(0,"mat-card",0),r.bc(1,"mat-card-header"),r.bc(2,"mat-card-title"),r.Qc(3),r.ac(),r.ac(),r.bc(4,"mat-card-content"),r.bc(5,"ngx-simplebar",1),r.bc(6,"mat-table",2),r.Zb(7,3),r.Oc(8,w,2,0,"mat-header-cell",4),r.Oc(9,k,2,1,"mat-cell",5),r.Yb(),r.Zb(10,6),r.Oc(11,P,2,0,"mat-header-cell",4),r.Oc(12,M,2,1,"mat-cell",5),r.Yb(),r.Zb(13,7),r.Oc(14,L,2,0,"mat-header-cell",4),r.Oc(15,J,2,1,"mat-cell",5),r.Yb(),r.Zb(16,8),r.Oc(17,D,2,0,"mat-header-cell",4),r.Oc(18,R,2,1,"mat-cell",5),r.Yb(),r.Oc(19,S,1,0,"mat-header-row",9),r.Oc(20,T,1,0,"mat-row",10),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Jb(3),r.Rc(a.title),r.Jb(2),r.tc("options",r.vc(6,A)),r.Jb(1),r.tc("dataSource",a.dataSource),r.Jb(13),r.tc("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),r.Jb(1),r.tc("matRowDefColumns",a.displayedColumns))},directives:[s.a,s.f,s.m,s.d,p.a,O.o,O.c,O.i,O.b,O.k,O.n,O.h,_.a,O.a,O.j,v.a,O.m],styles:[".table-card[_ngcontent-%COMP%]{height:100%}.table-card[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:first-child, .table-card[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:first-child{flex:10%!important}.table-card[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(2), .table-card[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .table-card[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(2), .table-card[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:35%!important}.table-card[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:last-child, .table-card[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:last-child{flex:20%!important}"]}),F),j=((Q=function(){function a(){t(this,a),this.lineChartData=[{data:[1e3,2e3,1150,1520,1800,1100,2e3,1910,1900,1500,1300,120],label:"Monthly profits"}],this.lineChartLabels=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DEC"],this.lineChartColors=[{borderColor:"black",backgroundColor:"rgba(255,255,0,0.28)"}],this.chartOptions={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{fontSize:16}}],xAxes:[{ticks:{fontSize:16}}]}},this.dataSource=[{id:1,name:"John Doe",jobTitle:"CEO",salary:"$5.000"},{id:2,name:"Jane Doe",jobTitle:"Design",salary:"$3.500"},{id:3,name:"Daniel Stefanelli",jobTitle:"Developer",salary:"$4.000"},{id:4,name:"Paul Rogers",jobTitle:"Manager",salary:"$1.500"},{id:5,name:"Peter Wayne",jobTitle:"Marketing",salary:"$2.000"}],this.displayedColumns=["position","name","jobTitle","salary"],this.tasks=[{id:1,title:"Documentation",information:"Write app documentacion"},{id:2,title:"Solve issue",information:"Solve issues in the server"},{id:3,title:"Release 2.0",information:"Release new version"},{id:4,title:"Export files",information:"Export files to drive"},{id:5,title:"Deploy app",information:"Deploy app to server"}]}return e(a,[{key:"ngOnInit",value:function(){}}]),a}()).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=r.Pb({type:Q,selectors:[["app-dashboard"]],decls:15,vars:8,consts:[["fxLayout","column","fxLayoutGap","1rem",1,"dashboard"],["fxLayout","row","fxLayout.lt-sm","column","fxLayoutAlign","space-between","fxLayoutGap.lt-sm","1rem"],["buttonIcon","sync","buttonText","Update","fxFlex","24%","fxFlex.lt-sm","auto","icon","language","title","Disk space","value","150GB"],["buttonIcon","sync","buttonText","update","fxFlex","24%","fxFlex.lt-sm","auto","icon","account_circle","title","Users","value","+150"],["buttonIcon","verified_user","buttonText","Verify","fxFlex","24%","fxFlex.lt-sm","auto","icon","error","title","Errors","value","10"],["buttonIcon","calendar_today","buttonText","Last revenue","fxFlex","24%","fxFlex.lt-sm","auto","icon","monetization_on","title","Profits","value","$1.500"],[1,"h-300"],["baseChart","","chartType","line",3,"colors","datasets","labels","legend","options"],["fxLayout.lt-sm","column","fxLayoutAlign","space-between","fxLayoutGap","row","fxLayoutGap.lt-sm","1rem"],["fxFlex.gt-xs","30%",1,"h-400",3,"tasks"],["fxFlex.gt-xs","68%","title","Employees",1,"h-400",3,"dataSource","displayedColumns"]],template:function(t,a){1&t&&(r.bc(0,"div",0),r.bc(1,"div",1),r.Wb(2,"app-information-card",2),r.Wb(3,"app-information-card",3),r.Wb(4,"app-information-card",4),r.Wb(5,"app-information-card",5),r.ac(),r.bc(6,"mat-card"),r.bc(7,"mat-card-header"),r.bc(8,"mat-card-title"),r.Qc(9,"Monthly profits"),r.ac(),r.ac(),r.bc(10,"mat-card-content",6),r.Wb(11,"canvas",7),r.ac(),r.ac(),r.bc(12,"div",8),r.Wb(13,"app-tasks-card",9),r.Wb(14,"app-table-card",10),r.ac(),r.ac()),2&t&&(r.Jb(11),r.tc("colors",a.lineChartColors)("datasets",a.lineChartData)("labels",a.lineChartLabels)("legend",!1)("options",a.chartOptions),r.Jb(2),r.tc("tasks",a.tasks),r.Jb(1),r.tc("dataSource",a.dataSource)("displayedColumns",a.displayedColumns))},directives:[l.f,l.g,l.e,u,l.b,s.a,s.f,s.m,s.d,f.a,C,W],styles:[".dashboard[_ngcontent-%COMP%]   .h-300[_ngcontent-%COMP%]{height:300px}.dashboard[_ngcontent-%COMP%]   .h-400[_ngcontent-%COMP%]{height:400px}"]}),Q),I=c("tyNb"),H=c("PCNd"),$=c("XxgV"),E=[{path:"",component:j}],G=function a(){t(this,a)};G.\u0275mod=r.Tb({type:G}),G.\u0275inj=r.Sb({factory:function(t){return new(t||G)},imports:[[i.c,I.e.forChild(E),l.i,H.a,f.b,p.b,$.a]]})}}])}();