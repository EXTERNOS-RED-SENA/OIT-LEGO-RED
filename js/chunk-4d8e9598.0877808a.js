(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d8e9598"],{"13d5":function(e,t,a){"use strict";var r=a("23e7"),i=a("d58f").left,o=a("a640"),n=a("1212"),s=a("9adc"),c=!s&&n>79&&n<83,u=c||!o("reduce");r({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},"4e3e":function(e,t,a){"use strict";a("7d54")},"70a8":function(e,t,a){"use strict";a("aedf")},"7d54":function(e,t,a){"use strict";var r=a("23e7"),i=a("2266"),o=a("59ed"),n=a("825a"),s=a("46c4");r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){n(this),o(e);var t=s(this),a=0;i(t,(function(t){e(t,a++)}),{IS_RECORD:!0})}})},8558:function(e,t,a){"use strict";var r=a("cfe9"),i=a("b5db"),o=a("c6b6"),n=function(e){return i.slice(0,e.length)===e};e.exports=function(){return n("Bun/")?"BUN":n("Cloudflare-Workers")?"CLOUDFLARE":n("Deno/")?"DENO":n("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},9485:function(e,t,a){"use strict";var r=a("23e7"),i=a("2266"),o=a("59ed"),n=a("825a"),s=a("46c4"),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){n(this),o(e);var t=s(this),a=arguments.length<2,r=a?void 0:arguments[1],u=0;if(i(t,(function(t){a?(a=!1,r=t):r=e(r,t,u),u++}),{IS_RECORD:!0}),a)throw new c("Reduce of empty iterator with no initial value");return r}})},"9adc":function(e,t,a){"use strict";var r=a("8558");e.exports="NODE"===r},"9d4a":function(e,t,a){"use strict";a("9485")},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){return 1},1)}))}},aedf:function(e,t,a){},c92c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container glosario"},[t("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(a){return t("div",{key:"letra-"+a.letra,staticClass:"glosario__letra-item mb-2"},[t("div",{staticClass:"glosario__letra-item__letra me-4"},[t("div",{staticClass:"glosario__letra-item__letra__icono"},[t("span",[e._v(e._s(a.letra))])])]),t("div",{staticClass:"glosario__letra-item__texto"},e._l(a.terminos,(function(a){return t("p",{staticClass:"mb-3"},[e._m(0,!0),t("strong",{domProps:{innerHTML:e._s(a.terminoHtml||a.termino)}}),t("strong",[e._v(": ")]),t("span",{domProps:{innerHTML:e._s(a.significado)}})])})),0)])})),0)],1)},i=[function(){var e=this,t=e._self._c;return t("strong",[t("i",{staticClass:"lista-ul__vineta"})])}],o=(a("14d9"),a("13d5"),a("0643"),a("fffc"),a("4e3e"),a("a573"),a("9d4a"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),t=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||t}},methods:{quitarAcentos(e){const t=e.replace(/<\/?[^>]+(>|$)/g,""),a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return t.split("").map(e=>a[e]||e).join("").toString()}}}),n={name:"Glosario",mixins:[o],data(){return{glosarioData:[{termino:"ACID",significado:"Acrónimo de Atomicidad, Consistencia, Aislamiento y Durabilidad; propiedades que garantizan que las transacciones en una base de datos sean fiables."},{termino:"Algoritmo",significado:"Conjunto ordenado y finito de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un problema específico."},{termino:"Base de datos",significado:"Sistema organizado para recopilar, almacenar y gestionar datos de manera estructurada y eficiente."},{termino:"CRUD",significado:"<i>Acrónimo de Create, Read, Update, Delete;</i> operaciones básicas que se pueden realizar sobre datos almacenados."},{termino:"<i>Dataset</i>",significado:"Conjunto de datos organizados y formateados de manera específica para su uso en análisis o entrenamiento de modelos."},{termino:"Datos estructurados",significado:"Información que está organizada en un formato predefinido y fácilmente procesable por máquinas, típicamente en tablas con filas y columnas."},{termino:"ETL",significado:"<i>Extract, Transform, Load </i>(Extraer, Transformar, Cargar); proceso que permite a las organizaciones mover datos desde múltiples fuentes, reformatearlos y limpiarlos, y cargarlos en otra base de datos."}]}},computed:{orderedData(){const e=[...this.glosarioData];e.forEach(e=>{e.significado=e.significado.charAt(0).toLowerCase()+e.significado.slice(1)});const t=[...e].reduce((e,t)=>{const a=this.quitarAcentos(t.termino.toLowerCase())[0];return e[a]?e[a].terminos.push(t):e[a]={letra:a,terminos:[t]},e},{}),a=Object.keys(t).sort(),r=[];return a.forEach(e=>{const a=t[e];let i=a.terminos;if(i.length>1){const e=[],t=a.terminos.map(e=>e.termino).sort((e,t)=>{const a=this.quitarAcentos(e).toLowerCase(),r=this.quitarAcentos(t).toLowerCase();return a<r?-1:r<a?1:0});t.forEach(t=>{e.push(i.find(e=>e.termino===t))}),i=e}r.push({letra:a.letra.toUpperCase(),terminos:i})}),r}}},s=n,c=(a("70a8"),a("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);t["default"]=u.exports},d58f:function(e,t,a){"use strict";var r=a("59ed"),i=a("7b0b"),o=a("44ad"),n=a("07fa"),s=TypeError,c="Reduce of empty array with no initial value",u=function(e){return function(t,a,u,d){var l=i(t),f=o(l),m=n(l);if(r(a),0===m&&u<2)throw new s(c);var p=e?m-1:0,g=e?-1:1;if(u<2)while(1){if(p in f){d=f[p],p+=g;break}if(p+=g,e?p<0:m<=p)throw new s(c)}for(;e?p>=0:m>p;p+=g)p in f&&(d=a(d,f[p],p,l));return d}};e.exports={left:u(!1),right:u(!0)}}}]);
//# sourceMappingURL=chunk-4d8e9598.0877808a.js.map