<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Microorganismos alterantes de la leche 
    
    img(data-aos="fade-up", src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4
          p.mb-0 Desde el momento del ordeño hasta su recepción y procesamiento, la leche puede entrar en contacto con diferentes microorganismos provenientes del animal, los equipos, el agua, el ambiente, los recipientes o las personas que la manipulan.  

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando las condiciones de higiene, temperatura o almacenamiento no son adecuadas, algunos de estos microorganismos pueden multiplicarse rápidamente y generar cambios que afectan la calidad de la materia prima, incluso antes de que sean evidentes a simple vista. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los microorganismos alterantes de la leche son aquellos capaces de crecer en este alimento y provocar modificaciones no deseadas en sus características. Su actividad puede producir cambios en el olor, sabor, textura, acidez, estabilidad y apariencia, reduciendo la vida útil de la leche y afectando su comportamiento durante la elaboración de derivados lácteos. 
        .bg-contenido-a5.p-4.rounded-4.py-3
          p.mb-0 La leche constituye un medio favorable para su crecimiento porque contiene agua y nutrientes como proteínas, lactosa, grasa, vitaminas y minerales. Sin embargo, su desarrollo depende también de factores como la temperatura, el tiempo de almacenamiento, la higiene y las condiciones de conservación. Por esta razón, mantener la cadena de frío y aplicar prácticas adecuadas de limpieza y manipulación son medidas fundamentales para limitar su multiplicación. 
 
    p.mb-5 Entre las alteraciones que pueden presentarse se encuentran:

    .fullwidth-bg.fullwidth-bg--1
    .bg-slider-2.p-4.rounded-4.mb-4.z-2
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            h5.mb-4 Cambios químicos 
            p Modificaciones provocadas por la actividad microbiana que alteran la composición de la leche, especialmente su acidez. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: bacterias lácticas transforman la lactosa en ácido láctico, disminuyendo el pH.
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema5/4.png", alt="" data-aos="zoom-in-down")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h5.mb-4 Cambios estructurales 
            p Alteraciones que afectan la consistencia y estabilidad física de la leche. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: una leche contaminada puede presentar coagulación, formación de grumos o una textura excesivamente viscosa.
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h5.mb-4 Degradación de componentes 
            p Ocurre cuando microorganismos o sus enzimas descomponen proteínas y grasas, afectando la calidad del producto. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: la degradación de la grasa puede producir sabores rancios durante el almacenamiento.
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema5/6.png", alt="" data-aos="zoom-in-down")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h5.mb-4 Cambios sensoriales 
            p Modificaciones perceptibles en olor, sabor, color o apariencia, generadas por el crecimiento microbiano. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: una leche alterada puede desarrollar olor ácido, sabor desagradable, cambios de color o presencia de gases.
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema5/7.png", alt="" data-aos="zoom-in-down")

    .bg-vaca.p-4.rounded-4.z-2
      .tarjeta.tarjeta--blanca.p-4.rounded-4.py-3
        p.mb-0 Después de reconocer los microorganismos que pueden alterar la leche, es importante contar con técnicas que permitan diferenciarlos. La tinción de Gram es una metodología de laboratorio que facilita su clasificación inicial según las características de su pared celular y la coloración que adquieren durante el procedimiento. En esta se puede identificar si el tipo de bacterias es Gram positiva o Gram negativa. 


    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Bacterias Gram positivas 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Durante la producción, almacenamiento y procesamiento de la leche pueden encontrarse diferentes grupos de bacterias. Algunas proceden del animal, del suelo, del ambiente, de los equipos o de las superficies utilizadas durante el ordeño y la manipulación. Cuando encuentran condiciones favorables de temperatura, humedad y nutrientes, pueden multiplicarse y generar cambios en la leche, especialmente si no se mantienen buenas prácticas de higiene y refrigeración. 
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Las bacterias Gram positivas son microorganismos que poseen una pared celular con una capa gruesa de peptidoglicano. Esta estructura hace que, durante la tinción de Gram, retengan el colorante principal y se observen generalmente de color violeta o púrpura al microscopio. 
        p.mb-0 En la leche, algunas bacterias Gram positivas pueden producir ácidos, enzimas, gases o esporas, causando modificaciones en la acidez, el sabor, el olor, la textura y la estabilidad del producto. Sin embargo, es importante aclarar que no todas son perjudiciales: algunas bacterias lácticas se utilizan de manera controlada para elaborar yogures y otros derivados fermentados. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5.
      span Principales bacterias Gram positivas relacionadas con alteraciones de la leche
    .tabla-a.color-primario.tabla-a--text-left
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Grupo o género 
            th Característica 
            th Posible efecto en la leche 
            th Ejemplo 
        tbody
          tr
            td #[strong #[em Bacillus]]
            td Algunas especies forman esporas resistentes y pueden sobrevivir a condiciones ambientales adversas. 
            td Pueden producir enzimas que degradan proteínas y grasas, afectando sabor, olor y estabilidad. 
            td Una leche almacenada durante periodos prolongados puede desarrollar sabores desagradables por actividad enzimática.
          tr
            td #[strong #[em Clostridium]]
            td Bacterias capaces de formar esporas y desarrollarse en condiciones con poco o ningún oxígeno. 
            td Pueden producir gases y compuestos que alteran productos lácteos. 
            td En ciertos quesos pueden ocasionar hinchamiento, formación de cavidades y olores indeseables.
          tr
            td #[strong #[em Lactobacillus]]
            td Bacterias que utilizan carbohidratos como la lactosa y producen ácido láctico. 
            td Cuando crecen sin control, aumentan la acidez y pueden favorecer la coagulación.
            td Una leche mal refrigerada puede acidificarse progresivamente y presentar cambios en su textura.
          tr
            td #[strong #[em Streptococcus]]
            td Algunas especies pueden desarrollarse en medios ricos en nutrientes y producir ácido. 
            td Pueden contribuir a cambios de acidez y estabilidad cuando su crecimiento no es controlado.
            td Una elevada actividad bacteriana puede reducir el pH y modificar las características de la leche.
          tr
            td #[strong #[em Micrococcus]]
            td Puede encontrarse en piel, ambiente, equipos y superficies. 
            td Algunas especies producen enzimas capables de modificar grasas y proteínas. 
            td Una higiene deficiente de utensilios puede favorecer su incorporación a la leche.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Bacterias Gram negativas 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La leche puede contaminarse con bacterias provenientes del agua, el suelo, los equipos, las superficies de ordeño, los recipientes o una manipulación inadecuada. Algunas de estas bacterias tienen especial importancia porque pueden desarrollarse incluso durante el almacenamiento refrigerado y producir sustancias que modifican progresivamente la calidad de la materia prima. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Las bacterias Gram negativas son microorganismos cuya pared celular posee una capa delgada de peptidoglicano y una membrana externa. Durante la tinción de Gram, no conservan el color violeta inicial y adquieren generalmente una tonalidad rosada o rojiza al observarse al microscopio. Entre las principales bacterias de Gram negativa podemos encontrar las siguientes: 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-9.col-xl-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Principales bacterias Gram negativas relacionadas con alteraciones de la leche
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/10-mob.png", alt="La figura presenta de manera visual diferentes tipos de bacterias Gram negativas asociadas con la alteración de la leche, mostrando su apariencia microscópica y una breve referencia sobre su relación con las condiciones de almacenamiento, higiene y manipulación. La imagen facilita la identificación general de estos agentes y resalta la importancia de aplicar medidas de control, limpieza, refrigeración y buenas prácticas para reducir su desarrollo en la leche.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/10.png", alt="La figura presenta de manera visual diferentes tipos de bacterias Gram negativas asociadas con la alteración de la leche, mostrando su apariencia microscópica y una breve referencia sobre su relación con las condiciones de almacenamiento, higiene y manipulación. La imagen facilita la identificación general de estos agentes y resalta la importancia de aplicar medidas de control, limpieza, refrigeración y buenas prácticas para reducir su desarrollo en la leche.")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
