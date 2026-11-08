<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Factores que afectan el desarrollo de los microorganismos 

    img(data-aos="fade-up", src="@/assets/curso/tema6/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 El crecimiento de los microorganismos en la leche no ocurre de la misma manera en todas las condiciones. Algunos pueden multiplicarse rápidamente cuando encuentran un ambiente favorable, mientras que otros reducen su actividad cuando cambian las condiciones del medio.

    .bg-primario-p5.p-4.py-3.rounded-4.mb-5
      p.mb-0 Por esta razón, aspectos como la disponibilidad de agua, la acidez y la presencia de determinadas sustancias pueden influir directamente en la velocidad con la que los microorganismos se desarrollan y, en consecuencia, en la conservación y calidad de la leche. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los factores que afectan el desarrollo de los microorganismos son aquellas condiciones propias del alimento o de su entorno que pueden favorecer, limitar o impedir su crecimiento y multiplicación. En la leche, estos factores tienen especial importancia porque se trata de un alimento con alta disponibilidad de nutrientes y agua, características que pueden facilitar el desarrollo microbiano cuando no se aplican adecuadamente las medidas de control. Sin embargo, disponer de nutrientes no garantiza por sí solo su crecimiento; también intervienen aspectos como los que se muestran en la siguiente figura: 

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 5.
      span Aspectos que intervienen en el desarrollo de los microorganismos
    img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/3-mob.png", alt="La figura muestra cómo diferentes condiciones relacionadas con el manejo y las características de la leche pueden influir en el desarrollo de los microorganismos. De manera visual, presenta la relación entre el ambiente de conservación, el tiempo de almacenamiento y los nutrientes disponibles, evidenciando que estos elementos pueden favorecer o limitar la actividad microbiana. En conjunto, la figura  permite comprender por qué el control adecuado de estas condiciones es fundamental para conservar la calidad de la leche y reducir el riesgo de deterioro. ")
    img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/3.png", alt="La figura muestra cómo diferentes condiciones relacionadas con el manejo y las características de la leche pueden influir en el desarrollo de los microorganismos. De manera visual, presenta la relación entre el ambiente de conservación, el tiempo de almacenamiento y los nutrientes disponibles, evidenciando que estos elementos pueden favorecer o limitar la actividad microbiana. En conjunto, la figura  permite comprender por qué el control adecuado de estas condiciones es fundamental para conservar la calidad de la leche y reducir el riesgo de deterioro. ")
  
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Humedad y acidez

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La humedad corresponde a la cantidad de agua presente en un alimento. En la leche, el contenido de agua es elevado, aproximadamente entre 85,5 % y 89,5 %, lo que facilita la disolución y el transporte de nutrientes que pueden ser aprovechados por los microorganismos. 
        .bg-secundario-s10.p-4.py-3.rounded-4.mb-3
          p.mb-0 Desde el punto de vista microbiológico, no solo importa cuánta agua contiene la leche, sino también qué parte de esa agua se encuentra disponible para ser utilizada por los microorganismos. Esta condición se relaciona con la denominada actividad de agua. 
        p.mb-0 La acidez influye directamente en la capacidad de los microorganismos para crecer y mantenerse activos en la leche. La leche fresca presenta normalmente un pH ligeramente ácido, cercano a 6,6 - 6,8, condición en la que numerosas bacterias pueden desarrollarse. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Cuando determinados microorganismos utilizan la lactosa, producen ácido láctico y provocan una disminución progresiva del pH. A medida que el medio se vuelve más ácido, algunas bacterias reducen su crecimiento, mientras que otras, especialmente ciertos microorganismos asociados con procesos fermentativos pueden tolerar mejor estas condiciones. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Para comprender mejor cómo estas condiciones influyen en el comportamiento de los microorganismos, es útil observar de manera comparativa qué ocurre cuando cambia la disponibilidad de agua o el nivel de acidez de la leche. La siguiente tabla resume estos efectos y presenta ejemplos sencillos que facilitan su interpretación. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/5.png", alt="")
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Relación entre la humedad, la acidez y el desarrollo de los microorganismos
    .tabla-a.color-primario.tabla-a--text-left
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Factor 
            th Condición 
            th Efecto sobre los microorganismos 
            th Ejemplo 
        tbody
          tr
            td #[strong Alta disponibilidad de agua]
            td Leche fresca mantenida sin refrigeración adecuada. 
            td Favorece el transporte y aprovechamiento de nutrientes. 
            td Leche fresca mantenida sin refrigeración adecuada. 
          tr
            td #[strong Menor disponibilidad de agua]
            td Limita los procesos metabólicos. 
            td Puede reducir o dificultar el crecimiento de algunos microorganismos. 
            td Productos lácteos con menor agua disponible presentan condiciones diferentes a la leche líquida. 
          tr
            td #[strong pH cercano al de la leche fresca]
            td Medio ligeramente ácido. 
            td Permite el desarrollo de numerosos microorganismos. 
            td Leche recién ordeñada sin tratamiento.   
          tr
            td #[strong Aumento de la acidez]
            td El pH disminuye por producción de ácidos. 
            td Puede inhibir algunos microorganismos y favorecer otros más tolerantes. 
            td Acidificación producida por bacterias lácticas. 

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Agentes de limpieza, y antibióticos 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Durante el ordeño, almacenamiento y procesamiento de la leche, los equipos, utensilios y superficies pueden acumular restos de grasa, proteínas, minerales y otros residuos orgánicos. Si estos materiales no se eliminan correctamente, pueden convertirse en una fuente de contaminación y favorecer la permanencia de microorganismos. Por esta razón, la limpieza constituye una etapa básica para mantener condiciones higiénicas adecuadas en la cadena productiva. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Los agentes de limpieza son sustancias formuladas para desprender, disolver o remover suciedad y residuos presentes en equipos, recipientes, tuberías y superficies que entran en contacto con la leche. Su función principal es eliminar la materia orgánica e inorgánica, preparando posteriormente las superficies para una desinfección efectiva. 
        p.mb-0 En la industria láctea, su selección depende del tipo de residuo, el material de la superficie, la temperatura de trabajo, la dureza del agua y el sistema de limpieza utilizado 
        
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .bg-slider.p-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Alcalinos 
              p.mb-0 Remueven principalmente grasas y residuos de proteínas. 
              p.mb-0 #[strong Ejemplo de aplicación]: limpieza de tanques, tuberías y equipos después del procesamiento de leche. 
            div
              h5.mb-4 Ácidos 
              p.mb-0 Ayudan a eliminar depósitos minerales y residuos conocidos como piedra de leche. 
              p.mb-0 #[strong Ejemplo de aplicación]: limpieza periódica de superficies donde se acumulan sales minerales. 
            div
              h5.mb-4 Detergentes neutros 
              p.mb-0 Facilitan la eliminación de suciedad ligera sin ejercer una acción química intensa. 
              p.mb-0 #[strong Ejemplo de aplicación]: lavado manual de algunos utensilios y superficies de trabajo  
            div
              h5.mb-4 Tensoactivos 
              p.mb-0 Reducen la tensión superficial del agua y facilitan el desprendimiento de la suciedad. 
              p.mb-0 #[strong Ejemplo de aplicación]: forman parte de formulaciones detergentes utilizadas en sistemas de lavado. 
            div
              h5.mb-4 Secuestrantes 
              p.mb-0 Retienen minerales presentes en el agua y evitan que interfieran con la limpieza. 
              p.mb-0 #[strong Ejemplo de aplicación]: se utilizan cuando el agua contiene cantidades importantes de calcio y magnesio. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema6/7.png", alt="" data-aos="zoom-in-down")

    img(data-aos="fade-up", src="@/assets/curso/tema6/8.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 El crecimiento de los microorganismos en la leche no ocurre de la misma manera en todas las condiciones. Algunos pueden multiplicarse rápidamente cuando encuentran un ambiente favorable, mientras que otros reducen su actividad cuando cambian las condiciones del medio.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/9.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        TabsA.color-acento-botones.z-2
          .tarjeta.bg-contenido-a5.p-4(titulo="Inhibición de bacterias útiles")
            p.mb-0 Puede impedir el crecimiento de microorganismos necesarios para elaborar productos fermentados. 
            p.mb-0 #[strong Ejemplo]: un cultivo para yogur puede desarrollarse lentamente o no producir la acidificación esperada
          .tarjeta.bg-contenido-a5.p-4(titulo="Problemas en la elaboración")
            p.mb-0 puede alterar procesos que dependen de la actividad bacteriana controlada. 
            p.mb-0 #[strong Ejemplo]: en algunos quesos puede dificultarse el desarrollo adecuado de la fermentación. 
          .tarjeta.bg-contenido-a5.p-4(titulo="Incumplimiento de calidad")
            p.mb-0 La leche con residuos por encima de los límites establecidos no debe destinarse normalmente al procesamiento. 
            p.mb-0 #[strong Ejemplo]: una muestra positiva requiere la aplicación de los procedimientos de control definidos. 
          .tarjeta.bg-contenido-a5.p-4(titulo="Riesgo asociado al uso inadecuado")
            p.mb-0 La utilización incorrecta de antibióticos favorece problemas relacionados con residuos y resistencia bacteriana. 
            p.mb-0 #[strong Ejemplo]: no respetar el periodo de retiro puede ocasionar presencia del medicamento en la leche. 


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
