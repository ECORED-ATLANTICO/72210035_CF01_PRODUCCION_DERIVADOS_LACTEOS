<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p  La leche es una materia prima de gran importancia en la producción agropecuaria y agroindustrial, tanto por su valor nutricional como por su capacidad de transformación en diferentes derivados.
        .bg-secundario-s10.p-4.rounded-4.py-3
          p.mb-0 Su composición y calidad pueden variar de acuerdo con factores relacionados con el animal, la alimentación, el estado sanitario y las condiciones de manejo durante el ordeño. Por ello, conocer sus principales componentes y características permite comprender mejor su comportamiento y su aptitud para los procesos posteriores de transformación.     

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Además de su composición, la calidad de la leche se relaciona con sus características organolépticas y propiedades fisicoquímicas, las cuales permiten identificar cambios en su estado y reconocer posibles alteraciones. 
        .bg-primario-p5.p-4.rounded-4.py-3.mb-3
          p.mb-0 A esto se suma la presencia de microorganismos y otros agentes contaminantes que pueden afectar su inocuidad, especialmente cuando existen prácticas inadecuadas durante la producción, manipulación, almacenamiento, transporte o recepción de la materia prima.      
        p En este contexto, el componente formativo Composición, calidad e inocuidad de la leche en la cadena productiva busca que el aprendiz comprenda de manera integral los factores que determinan la calidad de la leche y la importancia de prevenir su contaminación a lo largo de la cadena productiva.  
        p.mb-4.mb-lg-0 De esta manera, podrá reconocer condiciones adecuadas de manejo y fortalecer criterios básicos para trabajar con una materia prima apta para la elaboración segura y eficiente de derivados lácteos. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro-2.png", alt="")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
