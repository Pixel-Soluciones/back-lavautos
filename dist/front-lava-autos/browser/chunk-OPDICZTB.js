var r=class{cedula="c\xE9dula";nombre="nombre";contacto="contacto";direccion="direcci\xF3n";fecha_nacimiento="fecha nacimiento"};var o=class{placa="Placa";estado="Estado"};var c=class{fecha="Fecha";placa="Placa";servicio="Servicio";trabajador="Trabajador";valor="Valor"};var b=e=>{let t=[],a;switch(e){case"employees":a=new r;break;case"entries":a=new o;break;case"monthlyReport":a=new c;break}return a&&(t=Object.keys(a).map(n=>({key:n,value:a[n]}))),t};export{b as a};
