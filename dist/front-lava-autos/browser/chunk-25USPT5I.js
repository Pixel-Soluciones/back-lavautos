import{a as O}from"./chunk-YEA552Y6.js";import{a as z}from"./chunk-UP23QCYC.js";import{a as P,b as U}from"./chunk-SVNXBQ6E.js";import{f as q}from"./chunk-BSIVO7KU.js";import{A as G,B as k,C as B,G as L,k as D,l as N,n as A,o as m,q as I,r as T,v as R,w as V,x as M,y as j}from"./chunk-P3IO33T2.js";import"./chunk-U3QUSVWF.js";import"./chunk-2SOGP6GP.js";import{f as x,h as w}from"./chunk-B5AEI34L.js";import{Aa as p,Ja as S,Pa as y,V as s,Xa as d,ab as v,ba as _,ca as b,fb as e,gb as i,hb as a,lb as h,mb as f,nb as F,wb as r}from"./chunk-S4YP6WBW.js";import{a as C,b as E,e as J}from"./chunk-C6Q5SG76.js";var c=J(L());function H(n,o){n&1&&(e(0,"h1",2),r(1,"MODIFICAR TRABAJADOR"),i())}function K(n,o){n&1&&(e(0,"h1",2),r(1,"NUEVO TRABAJADOR"),i())}function Q(n,o){if(n&1){let t=h();e(0,"p-button",22),f("onClick",function(){_(t);let u=F();return b(u.edit())}),i()}}function W(n,o){if(n&1){let t=h();e(0,"p-button",23),f("onClick",function(){_(t);let u=F();return b(u.save())}),i()}}var g=class n{#o=s(j);#i=s(x);#e=s(w);#t=s(z);editMode=!1;loading=!0;originalData;employeeForm=this.#o.group({cedula:["null",m.required],nombre:["",m.required],contacto:["null",m.required],direccion:["",m.required],fecha_nacimiento:["",m.required],porcentaje_servicio:["null",[m.required]]});ngOnInit(){this.#i.params.subscribe(o=>{if(o&&o.cedula){this.editMode=!0,this.originalData=o;let t=C({},o);t.fecha_nacimiento&&(t.fecha_nacimiento=new Date(t.fecha_nacimiento)),t.porcentaje_servicio&&(t.porcentaje_servicio=parseFloat(t.porcentaje_servicio)),this.employeeForm.patchValue(t)}else this.editMode=!1;this.loading=!1})}onSubmit(){this.employeeForm.valid?console.log(this.employeeForm.value):console.log("Form is invalid")}getFormValue(){return E(C({},this.employeeForm.value),{cedula:this.originalData?.cedula||this.employeeForm.value.cedula})}edit(){if(!this.employeeForm.valid){c.default.fire({title:"Formulario invalido",icon:"error",showConfirmButton:!1,timer:1500});return}this.#t.update(this.getFormValue()).subscribe({next:o=>{c.default.fire({title:"Empleado actualizado",icon:"success",showConfirmButton:!1,timer:1500}),this.#e.navigate(["/employees"])},error:o=>{c.default.fire({title:"Error al actualizar empleado",icon:"error",showConfirmButton:!1,timer:1500})}})}save(){if(!this.employeeForm.valid){c.default.fire({title:"Formulario invalido",icon:"error",showConfirmButton:!1,timer:1500});return}this.#t.save(this.getFormValue()).subscribe({next:o=>{c.default.fire({title:"Empleado guardado",icon:"success",showConfirmButton:!1,timer:1500}),this.#e.navigate(["/employees"])},error:o=>{c.default.fire({title:"Error al guardar empleado",icon:"error",showConfirmButton:!1,timer:1500})}})}cancel(){this.#e.navigate(["/employees"])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["employee-form"]],decls:34,vars:6,consts:[[1,"flex","flex-col","justify-center","px-6","py-12","w-screen"],[1,"flex","items-center","justify-center"],[1,"text-white","text-4xl","font-bold","text-center"],[1,"mt-10","sm:mx-auto","sm:w-full","sm:max-w-sm"],[1,"space-y-6",3,"ngSubmit","formGroup"],["variant","in"],["id","cedula","autocomplete","off","formControlName","cedula",1,"w-full",3,"useGrouping","readonly"],["for","cedula"],["pInputText","","id","nombre","autocomplete","off","formControlName","nombre",1,"w-full"],["for","nombre"],["mode","decimal","inputId","contacto","autocomplete","off","formControlName","contacto",1,"w-full",3,"useGrouping"],["for","contacto"],["pInputText","","id","direccion","autocomplete","off","formControlName","direccion",1,"w-full"],["for","direccion"],["showIcon","","iconDisplay","input","formControlName","fecha_nacimiento"],["for","fechaNacimiento"],["id","porcentajeServicio","suffix","%","autocomplete","off","formControlName","porcentaje_servicio",1,"w-full"],["for","porcentajeServicio"],[1,"flex","justify-center","gap-4","mt-10"],["severity","success","label","EDITAR"],["severity","success","label","GUARDAR"],["severity","danger","label","CANCELAR",3,"onClick"],["severity","success","label","EDITAR",3,"onClick"],["severity","success","label","GUARDAR",3,"onClick"]],template:function(t,l){t&1&&(e(0,"div",0)(1,"div",1),y(2,H,2,0,"h1",2)(3,K,2,0,"h1",2),i(),e(4,"div",3)(5,"form",4),f("ngSubmit",function(){return l.onSubmit()}),e(6,"p-floatlabel",5),a(7,"p-inputnumber",6),e(8,"label",7),r(9,"C\xE9dula"),i()(),e(10,"p-floatlabel",5),a(11,"input",8),e(12,"label",9),r(13,"Nombre y Apellido"),i()(),e(14,"p-floatlabel",5),a(15,"p-inputnumber",10),e(16,"label",11),r(17,"Contacto"),i()(),e(18,"p-floatlabel",5),a(19,"input",12),e(20,"label",13),r(21,"Direcci\xF3n"),i()(),e(22,"p-floatlabel",5),a(23,"p-datepicker",14),e(24,"label",15),r(25,"Fecha de Nacimiento"),i()(),e(26,"p-floatlabel",5),a(27,"p-inputnumber",16),e(28,"label",17),r(29,"Porcentaje de Servicio"),i()(),e(30,"div",18),y(31,Q,1,0,"p-button",19)(32,W,1,0,"p-button",20),e(33,"p-button",21),f("onClick",function(){return l.cancel()}),i()()()()()),t&2&&(p(2),v(l.editMode?2:3),p(3),d("formGroup",l.employeeForm),p(2),d("useGrouping",!1)("readonly",l.editMode),p(8),d("useGrouping",!1),p(16),v(l.editMode?31:32))},dependencies:[G,R,A,I,T,V,M,O,B,k,q,N,D,U,P],encapsulation:2})};export{g as default};
