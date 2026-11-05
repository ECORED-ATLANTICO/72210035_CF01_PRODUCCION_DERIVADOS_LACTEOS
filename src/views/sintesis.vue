<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Composición, calidad e inocuidad de la leche en la cadena productiva permite comprender la leche desde su composición, calidad e inocuidad, reconociendo los factores que pueden modificar sus características. Se estudian sus principales componentes, propiedades organolépticas y físicas, así como los microorganismos que pueden provocar alteraciones y las condiciones que favorecen o limitan su desarrollo. 
    p.mb-5 También se abordan aspectos relacionados con la limpieza, los antibióticos y las posibles fuentes de contaminación. Finalmente, se analiza el manejo de la leche durante la producción primaria y su recepción en planta, destacando los controles necesarios para conservar una materia prima segura y adecuada para la elaboración de derivados lácteos.
    
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura presenta la estructura general del componente formativo: Composición, calidad e inocuidad de la leche en la cadena productiva; relacionado con la composición, calidad e inocuidad de la leche a lo largo de la cadena productiva. La información se organiza de manera jerárquica, partiendo de un tema central y distribuyéndose en varios bloques que representan los principales ejes de aprendizaje. Estos contenidos permiten comprender las características de la leche, los factores que pueden modificar su calidad, las condiciones que favorecen su conservación o deterioro y los riesgos asociados con su manejo. En conjunto, el esquema facilita visualizar cómo se relacionan los aspectos físicos, microbiológicos, higiénicos y de control necesarios para obtener y recibir una materia prima adecuada para su posterior procesamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
