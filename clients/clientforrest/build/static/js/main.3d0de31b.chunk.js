(this.webpackJsonpclientforrest=this.webpackJsonpclientforrest||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),i=n(2),o=n(7),u=n(4),l=n.n(u),d=n(6),b=n(5),j={};j.getDv=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8888/RCD-T01-G02/restService/api/rest","/getDv"),{method:"post",headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({rut:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j.splitNames=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8888/RCD-T01-G02/restService/api/rest","/splitNames"),{method:"post",headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({names:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var p=j,m=(n(17),n(0)),O={rut:"",dv:"",isLoading:!1};var h=function(){var e=Object(a.useState)(O),t=Object(o.a)(e,2),n=t[0],r=t[1],c=n.rut,s=n.dv,u=n.isLoading;function j(){return(j=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c){e.next=4;break}return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:""})})),e.abrupt("return",b.a.error("Debes ingresar un rut para calcular el digito verificador."));case 4:return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:"",isLoading:!0})})),e.next=7,p.getDv(c);case 7:return t=e.sent,e.next=10,t.json();case 10:if(!(n=e.sent)||!n.data){e.next=14;break}return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:n.data,isLoading:!1})})),e.abrupt("return",b.a.success("Digito verificador calculado con \xe9xito!"));case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:"",isLoading:!1})})),b.a.error(e.t0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:""})}))}),[c]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"input-group-container",children:[Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsxs)("div",{className:"main-rut-group",children:[Object(m.jsxs)("label",{htmlFor:"main-rut",children:["RUT",Object(m.jsx)("span",{className:"sin-dv-span",children:"(sin digito verificador)"})]}),Object(m.jsx)("input",{name:"rut",placeholder:"Ejemplo: 12345678",value:c,className:"main-rut",id:"main-rut",onChange:function(e){var t=e.target.value;null!==t&&isNaN(t)||r((function(e){return Object(i.a)(Object(i.a)({},e),{},{rut:t})}))},autoComplete:"off"})]}),Object(m.jsxs)("div",{className:"dv-group",children:[Object(m.jsx)("label",{htmlFor:"dv",children:"DV"}),Object(m.jsx)("input",{className:"dv",id:"dv",value:s,disabled:!0})]})]}),Object(m.jsx)("button",{className:"calculate-button",onClick:function(){return j.apply(this,arguments)},children:u?"Cargando...":"Calcular DV"})]})})},f=(n(19),{namesInput:"",names:"",lastNames:"",isLoading:!1});var v=function(){var e=Object(a.useState)(f),t=Object(o.a)(e,2),n=t[0],r=t[1],c=n.namesInput,s=n.names,u=n.lastNames,j=n.isLoading;function O(){return(O=Object(d.a)(l.a.mark((function e(){var t,n,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c){e.next=4;break}return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{namesInput:""})})),e.abrupt("return",b.a.error("Debes ingresar nombres y apellidos para realizar el split."));case 4:if(!(c.split(" ").filter((function(e){return e})).length<3)){e.next=7;break}return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{namesInput:""})})),e.abrupt("return",b.a.error("Debes ingresar al menos un nombre, apellido paterno y apellido materno."));case 7:return r((function(e){return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0})})),e.next=10,p.splitNames(c);case 10:return t=e.sent,e.next=13,t.json();case 13:if(!(n=e.sent)||!n.data){e.next=18;break}return a=n.data,s=a.names,o=a.lastNames,r((function(e){return Object(i.a)(Object(i.a)({},e),{},{names:s,lastNames:o,isLoading:!1})})),e.abrupt("return",b.a.success("Operaci\xf3n realizada con \xe9xito!"));case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(0),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{dv:"",isLoading:!1})})),b.a.error(e.t0),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"input-group-container",children:[Object(m.jsx)("div",{className:"input-group",children:Object(m.jsxs)("div",{className:"main-rut-group",children:[Object(m.jsx)("label",{htmlFor:"main-rut",children:"Ingrese nombres y apellidos"}),Object(m.jsx)("input",{name:"rut",placeholder:"Ejemplo: Juan Jos\xe9 Rodriguez Hernandez",value:c,className:"main-rut",id:"main-rut",onChange:function(e){var t=e.target.value;r((function(e){return Object(i.a)(Object(i.a)({},e),{},{namesInput:t})}))},autoComplete:"off"})]})}),Object(m.jsx)("button",{className:"calculate-button",onClick:function(){return O.apply(this,arguments)},children:j?"Cargando...":"Realizar Split"})]}),s&&u?Object(m.jsxs)("div",{className:"results-container",children:[Object(m.jsxs)("div",{className:"names-container",children:[Object(m.jsx)("h2",{className:"names-container-title",children:"Nombres"}),s?s.map((function(e,t){return Object(m.jsxs)("div",{className:"result-item",children:[Object(m.jsx)("span",{className:"result-item-count",children:t+1}),Object(m.jsx)("div",{className:"result-item-text",children:e})]})})):null]}),Object(m.jsxs)("div",{className:"lastNames-container",children:[Object(m.jsx)("h2",{className:"names-container-title",children:"Apellidos"}),s?u.map((function(e,t){return Object(m.jsxs)("div",{className:"result-item",children:[Object(m.jsx)("span",{className:"result-item-count",children:t+1}),Object(m.jsx)("div",{className:"result-item-text",children:e})]})})):null]})]}):null]})},x="dvCalculator",g="nameSplitter",N={buttonGroup:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"1.6rem"},button:{backgroundColor:"white",color:"#89C6D3",fontSize:"0.8rem",border:"1px solid #89C6D3",minWidth:"10rem",padding:"1rem 1.5rem"},selectedButton:{backgroundColor:"#89C6D3",color:"white"}},w={selectedOption:x};var C=function(){var e=Object(a.useState)(w),t=Object(o.a)(e,2),n=t[0],r=t[1],c=n.selectedOption;function s(e){var t=e.target;r((function(e){return Object(i.a)(Object(i.a)({},e),{},{selectedOption:t.name})}))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:N.buttonGroup,children:[Object(m.jsx)("button",{name:x,onClick:s,style:c===x?Object(i.a)(Object(i.a)({},N.button),N.selectedButton):Object(i.a)({},N.button),children:"Calculadora de DV"}),Object(m.jsx)("button",{name:g,onClick:s,style:c===g?Object(i.a)(Object(i.a)({},N.button),N.selectedButton):Object(i.a)({},N.button),children:"Split de nombres"})]}),c===x?Object(m.jsx)(h,{}):Object(m.jsx)(v,{})]})};n(20);s.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)("div",{className:"header",children:"REST WebService Client"}),Object(m.jsx)(C,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3d0de31b.chunk.js.map