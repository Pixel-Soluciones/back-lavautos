import{h as u}from"./chunk-B5AEI34L.js";import{Ba as l,Ja as c,fb as e,gb as t,hb as o,mb as n,wb as m}from"./chunk-S4YP6WBW.js";import"./chunk-C6Q5SG76.js";var f=class s{constructor(p){this.router=p}goToMenu(){this.router.navigate(["dashboard"])}reporteMes(){this.router.navigate(["reporte-mes"])}reporteDiario(){this.router.navigate(["reporte-dia"])}static \u0275fac=function(r){return new(r||s)(l(u))};static \u0275cmp=c({type:s,selectors:[["app-reports"]],decls:12,vars:0,consts:[[1,"flex","flex-col","justify-center","px-6","py-12","h-screen","w-screen"],[1,"flex","items-center","justify-center"],[1,"text-white","text-4xl","font-bold"],[1,"flex","justify-center","gap-2","mt-10"],[1,"transition-all","duration-300","active:brightness-80",3,"click"],["src","iconos-botones/reporte-diao.png","alt","Reporte Diario",1,"w-[150px]"],["src","iconos-botones/reporte-mensual.png","alt","Reporte Mensual",1,"w-[150px]"],[1,"flex","justify-center","gap-2","mt-3"],["src","iconos-botones/atras.png","alt","Vehiculos",1,"w-[150px]"]],template:function(r,i){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"REPORTES"),t()(),e(4,"div",3)(5,"button",4),n("click",function(){return i.reporteDiario()}),o(6,"img",5),t(),e(7,"button",4),n("click",function(){return i.reporteMes()}),o(8,"img",6),t()(),e(9,"div",7)(10,"button",4),n("click",function(){return i.goToMenu()}),o(11,"img",8),t()()())},encapsulation:2})};export{f as ReportsComponent};
