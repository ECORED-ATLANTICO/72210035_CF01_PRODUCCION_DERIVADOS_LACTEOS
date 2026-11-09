<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Factores que influyen en la calidad de la leche  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La calidad de la leche comienza a definirse mucho antes de que esta llegue a una planta de procesamiento. Las condiciones propias del animal, su estado de salud, la etapa de producción en la que se encuentra y la manera como es alimentado y ordeñado pueden modificar tanto la cantidad obtenida como algunas de sus características.  
        .bg-secundario-s10.p-4.py-3.mb-3-mb-lg-0
          p.mb-0 Por esta razón, comprender qué elementos intervienen en estas variaciones permite interpretar mejor la materia prima y tomar decisiones adecuadas para su manejo y posterior transformación en derivados lácteos. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/1.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los factores que influyen en la calidad de la leche corresponden al conjunto de condiciones genéticas, fisiológicas, de manejo, ambientales, sanitarias e higiénicas que inciden sobre su composición, sus características organolépticas, sus propiedades fisicoquímicas y su condición microbiológica. Estos factores actúan desde la producción primaria hasta la recepción de la materia prima, afectando parámetros como el contenido de grasa, proteína y lactosa, la estabilidad del producto, su inocuidad y su aptitud tecnológica para la elaboración de derivados lácteos. 
        .bg-primario-p5.p-4.py-3.rounded-4
          p Para comprender de manera integral cómo se ve afectada la calidad de la leche, es importante reconocer que esta no depende de un solo elemento, sino de la interacción de diferentes factores presentes a lo largo de la cadena productiva.  
          p.mb-0 En la siguiente figura se presentan los principales factores que inciden sobre la calidad de la leche y su relación con las condiciones del animal, la alimentación, el ordeño, el ambiente, el manejo y el control higiénico-sanitario. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-11
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Factores que influyen en la calidad de la leche.
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/3-mob.png", alt="La figura presenta de manera integrada los principales factores que influyen en la calidad de la leche a lo largo de su producción y manejo. En el centro se representa la leche como materia prima, rodeada por elementos asociados al animal, la alimentación, las condiciones de ordeño, el ambiente, el almacenamiento y transporte, y las prácticas higiénicas y de control. Cada factor reúne aspectos que pueden modificar la composición, la inocuidad y las características del producto, como la raza, el estado de salud, la nutrición, la higiene de la ubre, la limpieza de equipos, la temperatura, el enfriamiento, la desinfección y el control sanitario. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/3.png", alt="La figura presenta de manera integrada los principales factores que influyen en la calidad de la leche a lo largo de su producción y manejo. En el centro se representa la leche como materia prima, rodeada por elementos asociados al animal, la alimentación, las condiciones de ordeño, el ambiente, el almacenamiento y transporte, y las prácticas higiénicas y de control. Cada factor reúne aspectos que pueden modificar la composición, la inocuidad y las características del producto, como la raza, el estado de salud, la nutrición, la higiene de la ubre, la limpieza de equipos, la temperatura, el enfriamiento, la desinfección y el control sanitario. ")
      

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
