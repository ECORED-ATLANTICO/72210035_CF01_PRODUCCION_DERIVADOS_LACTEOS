<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Contaminación de la leche en cadena productiva

    img(data-aos="fade-up", src="@/assets/curso/tema7/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-5
          p.mb-0 A lo largo de su recorrido, desde el ordeño hasta la llegada a la planta de procesamiento, la leche entra en contacto con animales, personas, equipos, recipientes, medios de transporte y diferentes condiciones ambientales. Cada uno de estos puntos debe ser controlado, porque una falla en la higiene, el almacenamiento o la manipulación puede afectar las condiciones iniciales de la materia prima y comprometer su posterior transformación. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema7/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La contaminación de la leche en la cadena productiva se refiere a la presencia o incorporación de agentes no deseados que pueden modificar su calidad, inocuidad o aptitud para el procesamiento. Estos agentes pueden ingresar en cualquier etapa y se clasifican principalmente en biológicos, químicos y físicos, a continuación, se describe cada uno: 
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8.col-xl-7.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-contenido-a5")
          .row(titulo="Biológica")
            .col-lg-11
              p.mb-0 Presencia de microorganismos capaces de multiplicarse o alterar la leche.
              p.mb-0 #[strong Ejemplo:] bacterias incorporadas por una ubre sucia, equipos mal higienizados o almacenamiento inadecuado. 
          .row(titulo="Química ")
            .col-lg-11
              p.mb-0 Presencia de residuos o sustancias químicas que no deberían encontrarse en la leche.
              p.mb-0 #[strong Ejemplo:] residuos de antibióticos, detergentes, desinfectantes o productos utilizados durante la producción. 
          .row(titulo="Física ")
            .col-lg-11
              p.mb-0 Incorporación accidental de materiales o partículas extrañas. 
              p.mb-0 #[strong Ejemplo:] presencia de tierra, pelos, insectos o fragmentos procedentes del ambiente o de equipos deteriorados. 
      .col-sm-8.col-lg-4.col-xl-3
        figure
          img(src="@/assets/curso/tema7/3.png", alt="")

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Producción primaria

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La calidad de la leche comienza a construirse desde el lugar donde se obtiene. Las condiciones del animal, el estado de la ubre, la limpieza del sitio de ordeño, la higiene de las personas y el manejo de los equipos pueden influir directamente en la materia prima. Por esta razón, los primeros minutos después del ordeño son determinantes para conservar sus características y evitar que agentes contaminantes ingresen al producto. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 La producción primaria de leche comprende las actividades relacionadas con el cuidado del animal, el ordeño, la recolección, el filtrado, el enfriamiento y el almacenamiento inicial antes del transporte hacia un centro de acopio o una planta de procesamiento. En esta etapa pueden incorporarse contaminantes biológicos, químicos o físicos si no se aplican prácticas adecuadas de higiene y manejo.
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/4.png", alt="")
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span Principales fuentes de contaminación en la producción primaria
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema7/5-mob.png", alt="La figura representa un entorno real de ordeño y muestra cómo diferentes condiciones presentes durante la producción primaria pueden influir en la calidad de la leche. A través de la escena se identifican posibles fuentes de contaminación relacionadas con el animal, el ambiente, las personas, los equipos, el agua, ciertas sustancias y el almacenamiento inicial. La figura permite comprender que la contaminación no depende de un solo factor, sino de la interacción entre varios elementos del proceso. En conjunto, destaca la importancia de mantener condiciones higiénicas, ordenadas y controladas para proteger la leche desde el momento en que se obtiene.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema7/5.png", alt="La figura representa un entorno real de ordeño y muestra cómo diferentes condiciones presentes durante la producción primaria pueden influir en la calidad de la leche. A través de la escena se identifican posibles fuentes de contaminación relacionadas con el animal, el ambiente, las personas, los equipos, el agua, ciertas sustancias y el almacenamiento inicial. La figura permite comprender que la contaminación no depende de un solo factor, sino de la interacción entre varios elementos del proceso. En conjunto, destaca la importancia de mantener condiciones higiénicas, ordenadas y controladas para proteger la leche desde el momento en que se obtiene.")

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Recepción de la materia prima en plantas de procesos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La recepción de la leche es un punto decisivo dentro de la cadena productiva, porque constituye el momento en el que la materia prima pasa del transporte al proceso industrial. Antes de descargarla o utilizarla, es necesario comprobar que conserve las condiciones esperadas de calidad y que no presente señales que puedan afectar la elaboración de los derivados lácteos. 
        .bg-primario-p5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 La recepción de la materia prima es el conjunto de actividades de verificación, inspección y control realizadas cuando la leche llega a la planta. Su finalidad es determinar si puede ser aceptada para el procesamiento, teniendo en cuenta sus características sensoriales, temperatura, resultados analíticos y condiciones microbiológicas. El material formativo señala como riesgos relevantes una carga microbiana elevada, una refrigeración inadecuada y deficientes condiciones higiénicas del lugar de recepción. 


    .fullwidth-bg.fullwidth-bg--1
    TabsC.color-acento-botones.mb-5.z-2
      .p-4(titulo="Llegada")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/7.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Ingreso del vehículo o cantina con la leche a la planta para iniciar el control de recepción.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/15.png", alt="")
      
      .p-4(titulo="Inspección higiénica")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/8.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Verificación del estado sanitario, limpieza y condiciones del equipo, recipientes y área de descarga.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/16.png", alt="")

      .p-4(titulo="Temperatura")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/9.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Medición de la temperatura para confirmar que la leche se mantuvo bajo refrigeración adecuada.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/17.png", alt="")
      .p-4(titulo="Evaluación sensorial")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/10.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Revisión de color, olor, aspecto y textura para identificar señales iniciales de alteración.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/18.png", alt="")
      .p-4(titulo="Muestreo y pruebas")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/11.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Toma de muestra representativa para realizar análisis básicos de calidad de la materia prima.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/19.png", alt="")

      .p-4(titulo="Revisión de resultados")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/12.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Análisis de registros y resultados obtenidos para comparar con los criterios de aceptación.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/20.png", alt="")
      .p-4(titulo="Decisión")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/13.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Determinación de aprobación o rechazo del lote según el cumplimiento de las condiciones evaluadas.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/21.png", alt="")
      .p-4(titulo="Descarga y almacenamiento")
        .row.justify-content-center.align-items-center
          .col-2.col-lg-1
            figure
              img.imgh-92(src="@/assets/curso/tema7/14.svg", alt="")
          .col-lg-5
            p.mb-4.mb-lg-0 Transferencia de la leche aceptada a un tanque refrigerado para su conservación previa al proceso.     
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/22.png", alt="")

    .row.justify-content-center.z-2
      .col-lg-10.col-xl-8
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-8.col-sm-5.d-none.d-sm-block
              figure
                img.imgw-190.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-6.col-lg-6
              p A continuación, lo invitamos a consultar el siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="Leche bajo control: señales, microorganismos y puntos críticos"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")



</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
