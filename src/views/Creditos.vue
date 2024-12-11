<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(icono="far fa-registered" titulo="Créditos")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      .row.mb-4.justify-content-center.align-items-center
        .col-md-10.mb-4.mb-md-0
          .tarjeta.p-3.text-center.h-100
            h2 Elaborado por:
            img.mx-auto.d-inline-block.mb-3(src='@/assets/logos/logo-oit.png' style='width:80%;max-width:613px')
          
      .row.mb-4.mb-md-5
        .col-md-6.mb-4.mb-md-0
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/bullets/creditos-img.svg" style="width: 70px")
            p Fotografías y vectores tomados de 
              a(href="https://www.freepik.es/" target="_blank") www.freepik.es
              | ,  
              a(href="https://www.shutterstock.com/" target="_blank") www.shutterstock.com
              | , 
              a(href="https://unsplash.com/" target="_blank") unsplash.com 
              | y 
              a(href="https://www.flaticon.com/" target="_blank") www.flaticon.com
        .col-md-6
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/bullets/creditos-cc.svg" style="width: 70px;")
            p.mb-0 Licencia creative commons CC BY-NC-SA
              br
              a(href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank") ver licencia
  
      Footer(all-round)
    
</template>
