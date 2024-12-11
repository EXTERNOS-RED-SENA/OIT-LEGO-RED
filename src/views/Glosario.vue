<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" titulo="Glosario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mb-3(v-for="termino in letra.terminos")
          strong
            i.lista-ul__vineta
          strong(v-html="termino.terminoHtml || termino.termino") 
          strong : 
          span(v-html="termino.significado")
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'ACID',
          significado:
            'Acrónimo de Atomicidad, Consistencia, Aislamiento y Durabilidad; propiedades que garantizan que las transacciones en una base de datos sean fiables.',
        },
        {
          termino: 'Algoritmo',
          significado:
            'Conjunto ordenado y finito de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un problema específico.',
        },
        {
          termino: 'Base de datos',
          significado:
            'Sistema organizado para recopilar, almacenar y gestionar datos de manera estructurada y eficiente.',
        },
        {
          termino: 'CRUD',
          significado:
            '<i>Acrónimo de Create, Read, Update, Delete;</i> operaciones básicas que se pueden realizar sobre datos almacenados.',
        },
        {
          termino: '<i>Dataset</i>',
          significado:
            'Conjunto de datos organizados y formateados de manera específica para su uso en análisis o entrenamiento de modelos.',
        },
        {
          termino: 'Datos estructurados',
          significado:
            'Información que está organizada en un formato predefinido y fácilmente procesable por máquinas, típicamente en tablas con filas y columnas.',
        },
        {
          termino: 'ETL',
          significado:
            '<i>Extract, Transform, Load </i>(Extraer, Transformar, Cargar); proceso que permite a las organizaciones mover datos desde múltiples fuentes, reformatearlos y limpiarlos, y cargarlos en otra base de datos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
