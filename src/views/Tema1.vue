<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de datos y estructuras
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto actual de la revolución digital, comprender los fundamentos de datos y estructuras se ha vuelto esencial para cualquier persona que se desempeñe en el campo de la tecnología. Este capítulo explora los conceptos básicos que fundamentan el trabajo con datos, desde su naturaleza más elemental hasta las estructuras complejas que permiten su organización y manipulación eficiente.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Conceptos básicos de datos y análisis   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.my-lg-0.my-3
        p En el mundo actual, los datos se han convertido en el activo más valioso para las organizaciones y la base fundamental para el desarrollo de modelos de inteligencia artificial. Pero ¿qué son realmente los datos? En su forma más básica, los datos son representaciones de hechos, observaciones o mediciones que, por sí solos, carecen de contexto o significado. Es a través del análisis y la transformación que estos datos en bruto se convierten en información valiosa que permite tomar decisiones informadas.
        .row.justify-content-center.align-items-center.bg3.p-0
          .col-lg-5.my-lg-0.my-3.p-0
            img.img-mov(src='@/assets/curso/temas/4.png', alt='')         
          .col-lg-7.my-lg-0.my-3
            .p-4.j1
              p Cuando se analizan los datos en el contexto de la inteligencia artificial, se debe considerar que estos pueden presentarse de diversas formas. Los datos cuantitativos son aquellos que se pueden medir y expresar numéricamente. Ejemplos incluyen la temperatura diaria de una ciudad, el precio de un producto o el número de usuarios que visitan un sitio web. Estos datos permiten realizar cálculos matemáticos y análisis estadísticos precisos.

              p.mb-0 Por otro lado, los datos cualitativos describen características o cualidades que no pueden medirse numéricamente. Las opiniones de los clientes sobre un servicio, los colores preferidos en un estudio de mercado, o las respuestas a preguntas abiertas en una encuesta son ejemplos de datos cualitativos. Aunque estos datos no son numéricos por naturaleza, son igualmente valiosos y pueden transformarse en información cuantificable mediante técnicas de procesamiento adecuadas.

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')                      


    .row.justify-content-start.mb-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4.text-white
            h4.mb-0 Fundamentos de los datos y su análisis en inteligencia artificial 

    .row.bg9.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Introducción al análisis de datos  
                    p Los datos son representaciones de hechos, observaciones o mediciones que requieren análisis para convertirse en información útil. En inteligencia artificial, los datos se usan para entrenar algoritmos y hacer predicciones.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/7.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 ¿Qué son los datos? 
                    p Los datos son hechos u observaciones sin contexto. A través del análisis, se transforman en información significativa que guía decisiones en múltiples campos. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Datos cuantitativos: definición y ejemplos  
                    p Los datos cuantitativos son numéricos y medibles. Ejemplos:
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Temperatura diaria
                      li 
                        i.fas.fa-check-circle.color1
                        span Precio de productos
                      li 
                        i.fas.fa-check-circle.color1
                        span Número de usuarios en un sitio web

                    p Permiten cálculos y análisis estadísticos.                                             
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Datos cualitativos: definición y ejemplos 
                    p Los datos cualitativos describen características no numéricas. Ejemplos:
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Opiniones de clientes
                      li 
                        i.fas.fa-check-circle.color1
                        span Colores preferidos en encuestas
                      li 
                        i.fas.fa-check-circle.color1
                        span Respuestas abiertas 
                    p Son útiles para obtener contexto y enriquecer el análisis.

                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Diferencias clave entre datos cuantitativos y cualitativos  
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Cuantitativos:] son numéricos y se analizan matemáticamente.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Cualitativos:] son descriptivos y no numéricos. Capturan aspectos subjetivos.     
                    p Ambos son cruciales para el análisis en inteligencia artificial.

                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Transformación de datos cualitativos a cuantitativos 
                    p Los datos cualitativos se pueden convertir en datos cuantitativos mediante codificación o análisis de sentimiento. Ejemplo: una opinión positiva se transforma en un puntaje.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Aplicaciones en inteligencia artificial
                    p Los datos cuantitativos permiten crear modelos predictivos, mientras que los cualitativos aportan contexto y comprensión emocional. Ambos tipos son necesarios para entrenar algoritmos en IA. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Resumen 
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Cuantitativos: son numéricos, útiles para análisis matemáticos.
                      li 
                        i.fas.fa-check-circle.color1
                        span Cualitativos: describen características y enriquecen el análisis contextual.   
                    p Ambos son cruciales para el análisis en inteligencia artificial.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')                                                            
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Técnicas de modelado de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.my-lg-0.my-3
        p El modelado de datos es un proceso fundamental que permite crear una representación abstracta de cómo se relacionan y organizan los datos en un sistema. Imaginen que están construyendo una casa: antes de comenzar la construcción, necesitan planos detallados que muestren cómo se conectarán las diferentes habitaciones y qué función cumplirá cada espacio. De manera similar, el modelado de datos nos proporciona un “plano” de cómo se estructurará y fluirá la información en nuestros sistemas.

        p El proceso de modelado comienza con una visión conceptual de alto nivel, donde se identifican las principales entidades o conceptos sobre los que se necesita almacenar información y cómo se relacionan entre sí. Por ejemplo, en un sistema de comercio electrónico, las entidades principales podrían ser “Cliente”, “Producto” y “Pedido”. Cada una de estas entidades tendrá sus propias características o atributos, y establecerá relaciones con otras entidades del sistema.

      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')                                                                       
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')       
      .col-lg-9.my-lg-0.my-3
        .bg2.p-4
          p.mb-0 A medida que se avanza en el modelado, se llega a un nivel más detallado en el que se define cómo se implementarán estas estructuras en los sistemas de almacenamiento de datos. En este punto, conceptos como la normalización cobran importancia, ya que permiten organizar los datos de manera eficiente y eliminar redundancias innecesarias.

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Estructuras de datos fundamentales
    .row.justify-content-center.mb-5
      .col-lg-9.my-lg-0.my-3
        p Las estructuras de datos son la columna vertebral de cualquier sistema de procesamiento de información. Son formas específicas de organizar y almacenar datos que nos permiten acceder a ellos y modificarlos de manera eficiente. La elección de la estructura de datos correcta puede tener un impacto significativo en el rendimiento de nuestros algoritmos de inteligencia artificial.

        p Para comprender mejor las diferentes estructuras de datos y sus aplicaciones, consideremos la siguiente tabla comparativa:     
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')   

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Principales estructuras de datos, casos de uso y limitaciones.

        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Estructura
                th Características principales
                th Casos de uso ideales
                th Limitaciones

            tbody
              tr
                td Arreglos
                td Acceso directo a elementos, tamaño fijo
                td Datos secuenciales, operaciones de búsqueda frecuentes
                td Tamaño inmutable, inserción/eliminación costosa
              tr
                td Listas enlazadas
                td Tamaño dinámico, inserción eficiente
                td Datos que cambian frecuentemente
                td Acceso secuencial
              tr
                td Árboles
                td Organización jerárquica, búsqueda eficiente
                td Datos jerárquicos, índices
                td Complejidad de implementación
              tr
                td.fst-italic  Hash tables
                td Búsqueda rápida por clave
                td Cachés, diccionarios
                td Colisiones, uso de memoria 

    .row.justify-content-center.mb-5
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')       
      .col-lg-9.my-lg-0.my-3
        .row.justify-content-center.align-items-center.mb-4
          .col-auto.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/19.svg', alt='')       
          .col.my-lg-0.my-3
            p.mb-0 Los arreglos, por ejemplo, son una de las estructuras más básicas y ampliamente utilizadas. Imaginemos un array como una fila de casilleros numerados: cada casillero puede contener un dato, y podemos acceder directamente a cualquier casillero conociendo su número. Esta estructura es ideal cuando conocemos de antemano el tamaño de nuestros datos y necesitamos acceder a elementos específicos rápidamente. 

        .bg4.p-3  
          p.mb-0 Las listas enlazadas, por otro lado, son como una cadena de elementos donde cada uno conoce la ubicación del siguiente. Esta estructura es más flexible que los arreglos, ya que podemos agregar o eliminar elementos fácilmente, pero requiere más tiempo para encontrar un elemento específico, ya que debemos recorrer la lista desde el principio.  
                                                   
    p.mb-5 Los árboles y las hash tables son estructuras más complejas que nos permiten representar relaciones jerárquicas y conexiones entre datos. Estas estructuras son fundamentales en muchos algoritmos de inteligencia artificial, especialmente en áreas como el procesamiento del lenguaje natural y el análisis de redes sociales.

    .row.justify-content-center.mb-5.pb-3
      .col-lg-5.my-lg-0.my-3
        .bg5.brad.p-3.h-100.j1 
          p.mb-0 La elección de la estructura de datos adecuada dependerá de varios factores, incluyendo el tipo de operaciones que necesitamos realizar con mayor frecuencia, el volumen de datos que manejaremos, y los requisitos de rendimiento de nuestra aplicación. Es importante recordar que no existe una estructura "perfecta" que sirva para todos los casos: cada una tiene sus propias ventajas y desventajas que debemos considerar cuidadosamente.    
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')      
      .col-lg-4.my-lg-0.my-3
        .bg6.brad.p-2.px-3.h-100.j1 
          p.mb-0 Al desarrollar soluciones de inteligencia artificial, la comprensión profunda de estas estructuras de datos fundamentales nos permite diseñar sistemas más eficientes y escalables. Un buen diseño de datos desde el principio puede significar la diferencia entre un sistema que funciona adecuadamente y uno que se vuelve inmanejable a medida que crece el volumen de datos.

    .row.justify-content-start.mb-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4.text-white
            h4.mb-0 Aplicaciones reales de estructuras de datos en la industria

    .row.bg9.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Arreglos: uso en la industria
                    p Los arreglos se utilizan en industrias que requieren acceso rápido a datos secuenciales, como en sistemas de procesamiento de pagos o monitoreo de inventarios en tiempo real. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')                              
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Arreglos en procesamiento de pagos
                    p En sistemas de pago, los arreglos permiten almacenar y acceder rápidamente a transacciones o registros de clientes por ID de manera eficiente. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Listas enlazadas: uso en la industria
                    p Las listas enlazadas son útiles en aplicaciones donde los datos cambian frecuentemente, como en bases de datos dinámicas y sistemas de gestión de tareas. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Listas enlazadas en bases de datos dinámicas
                    p Las listas enlazadas permiten la inserción y eliminación rápida de registros, como en aplicaciones de bases de datos de clientes donde los datos están en constante cambio.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Árboles: uso en la industria
                    p Los árboles se utilizan en aplicaciones que requieren organizar datos jerárquicos, como en la gestión de archivos o en algoritmos de búsqueda.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/25.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Árboles en gestión de archivos
                    p Los árboles permiten organizar directorios y archivos de manera eficiente, facilitando el acceso rápido a documentos en sistemas de almacenamiento.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='')                              
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 #[i Hash tables]: uso en la industria
                    p Las tablas #[i hash] son fundamentales en aplicaciones que requieren búsqueda rápida por clave, como en sistemas de caché o diccionarios electrónicos.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 #[i Hash ]tables en caché y diccionarios
                    p Se usan en sistemas de caché de alto rendimiento y en diccionarios electrónicos para almacenar y buscar rápidamente valores asociados a claves.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Elección de la estructura adecuada
                    p La elección de la estructura de datos depende de factores como el tipo de operación, el volumen de datos y los requisitos de rendimiento. No hay una solución única.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='') 
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Resumen
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Arreglos: uso en datos secuenciales y accesos rápidos.
                      li 
                        i.fas.fa-check-circle.color1
                        span Listas enlazadas: adecuadas para datos dinámicos.
                      li 
                        i.fas.fa-check-circle.color1
                        span Árboles: útiles para organizar datos jerárquicos.
                      li 
                        i.fas.fa-check-circle.color1
                        span Hash tables: eficaces para búsquedas rápidas por clave.                    
                    p La selección de la estructura correcta optimiza el rendimiento según el caso de uso.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')                                                                                                                                    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
