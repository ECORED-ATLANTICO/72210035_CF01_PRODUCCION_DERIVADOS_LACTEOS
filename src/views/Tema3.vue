<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Características organolépticas 

    img(data-aos="fade-up", src="@/assets/curso/tema3/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4
          p.mb-0 Al evaluar la leche, no todo depende de análisis de laboratorio o mediciones fisicoquímicas. Existen señales que pueden percibirse directamente y que permiten obtener una primera impresión sobre su estado, frescura y condiciones de manejo.  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Estas señales son especialmente útiles durante la recepción de la materia prima, porque ayudan a identificar cambios que podrían estar relacionados con contaminación, alteraciones del producto o prácticas inadecuadas durante el ordeño, almacenamiento o transporte. 
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Las características organolépticas son las propiedades de la leche que pueden reconocerse mediante los sentidos. Su observación permite valorar aspectos como la apariencia, la consistencia y las sensaciones que produce el alimento antes de realizar pruebas más específicas. Aunque esta valoración no reemplaza los análisis de calidad, sí constituye una herramienta práctica para detectar posibles cambios frente a las condiciones normales de una leche fresca. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Textura y color 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La textura y el color son características que permiten realizar una primera valoración visual y sensorial de la leche. Cuando presentan cambios frente a lo esperado, pueden indicar variaciones en su composición, problemas de manejo o alteraciones asociadas con el almacenamiento y la contaminación. Por ello, su observación resulta útil durante el ordeño, la recepción de la materia prima y antes de iniciar cualquier proceso de transformación. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La textura de la leche hace referencia a la forma en que se percibe su consistencia y uniformidad durante la observación, el vertido o la manipulación. En una leche fresca y en buenas condiciones, esta característica debe mostrarse líquida, homogénea y ligeramente viscosa, sin presencia de grumos, partículas, sedimentos o separaciones anormales. Su comportamiento depende, entre otros aspectos, de la proporción de grasa, proteínas, sólidos y del estado físico de sus componentes. La textura puede presentarse a partir de los siguientes elementos: 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .bg-slider.p-4.p-xl-5.rounded-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Homogeneidad 
              p.mb-0 Indica que los componentes de la leche se encuentran distribuidos de manera uniforme, sin capas, grumos o separaciones visibles. 
            div
              h5.mb-4 Viscosidad 
              p.mb-0 Representa la resistencia de la leche al fluir. Normalmente es ligeramente mayor que la del agua y puede variar según su composición y temperatura. 
            div
              h5.mb-4 Fluidez 
              p.mb-0 Describe la facilidad con la que la leche se desplaza o vierte. Una leche normal debe fluir de manera continua y uniforme. 
            div
              h5.mb-4 Ausencia de grumos 
              p.mb-0 La leche fresca no debe presentar coágulos ni partículas agrupadas. Su presencia puede indicar alteraciones físicas, microbiológicas o cambios en la acidez. 
            div
              h5.mb-4 Ausencia de sedimentos 
              p.mb-0 No deben observarse partículas depositadas en el fondo del recipiente, ya que pueden estar relacionadas con suciedad, contaminación o manejo inadecuado. 
            div
              h5.mb-4 Estabilidad visual 
              p.mb-0 La leche debe conservar una apariencia uniforme durante su manejo, sin separaciones marcadas o cambios evidentes en su consistencia. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/5.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El color de la leche es una característica visual que permite realizar una valoración inicial de su apariencia y reconocer posibles variaciones asociadas con su composición, el estado del animal o las condiciones de manejo. En una leche fresca de vaca, la tonalidad normalmente se encuentra entre blanco y blanco crema, debido principalmente a la forma en que la luz interactúa con las proteínas y los glóbulos de grasa presentes en el producto. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 El color no debe interpretarse únicamente como una característica estética. Cambios notorios respecto a su apariencia habitual pueden convertirse en una señal para revisar la materia prima antes de utilizarla. Entre los que se pueden presentar tenemos los siguientes: 
    .bg-slider-2.p-4.p-xl-5.rounded-4.mb-4.z-2
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Blanco característico 
            p.mb-4.mb-lg-0 Es la apariencia habitual de la leche fresca. Se origina principalmente por la dispersión de la luz producida por las proteínas, los glóbulos de grasa y otros componentes presentes en ella. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/7.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Blanco crema 
            p.mb-4.mb-lg-0 Tonalidad ligeramente cremosa asociada principalmente con un mayor contenido de grasa y con pigmentos naturales provenientes de la alimentación del animal. Puede considerarse una variación normal de la leche. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/8.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Blanco azulado 
            p.mb-4.mb-lg-0 Apariencia ligeramente azulada que puede observarse en leches con menor contenido de grasa, como la leche descremada. La reducción de la fracción grasa modifica la forma en que la luz se refleja en el producto. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/9.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Amarillento 
            p.mb-4.mb-lg-0 Tonalidad que puede estar relacionada con la presencia de pigmentos naturales, especialmente carotenoides procedentes de la alimentación, y con el contenido de grasa. Su intensidad puede variar entre animales y sistemas de alimentación. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/10.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Rojizo 
            p.mb-4.mb-lg-0 Coloración anormal que puede estar relacionada con la presencia de sangre u otras alteraciones en la leche. Su identificación requiere revisar el estado sanitario del animal y evaluar la materia prima antes de procesarla. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/11.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5.mb-4 Grisáceo 
            p.mb-4.mb-lg-0 Apariencia diferente al color habitual de la leche que puede relacionarse con alteraciones, contaminación o condiciones inadecuadas de manejo y conservación. Debe considerarse una señal para realizar una evaluación adicional. 
          .col-sm-6.col-lg-3
            figure
              img.imgw-165(src="@/assets/curso/tema3/12.png", alt="")

    .bg-botones-b5.p-4.rounded-4.py-3
      p.mb-0 En consecuencia, textura y color constituyen indicadores iniciales que ayudan a reconocer el estado de la leche, pero deben complementarse con otras observaciones y pruebas de calidad antes de decidir su utilización como materia prima. 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Sabor y olor

    img(data-aos="fade-up", src="@/assets/curso/tema3/13.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4.mb-lg-5.bg-primario-p5
          p.mb-0 El sabor y el olor son características sensoriales que permiten realizar una valoración rápida del estado de la leche. Ambos están estrechamente relacionados y pueden modificarse por la alimentación del animal, las condiciones higiénicas del ordeño, el almacenamiento, la temperatura, la exposición al ambiente o la presencia de alteraciones. Por esta razón, cualquier cambio marcado frente a las características habituales debe considerarse una señal para revisar la calidad de la materia prima antes de su procesamiento. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p.mb-4.mb-lg-0 La leche fresca presenta un sabor suave, ligeramente dulce y característico, relacionado principalmente con la presencia de lactosa, grasa y otros componentes naturales. No debe presentar sabores intensamente ácidos, amargos, rancios, salados o extraños. Cuando aparecen estas variaciones, pueden estar asociadas con cambios microbiológicos, degradación de la grasa, alimentación del animal, residuos de sustancias o condiciones inadecuadas de conservación.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/14.png", alt="")
    
    TabsC.color-acento-contenido.mb-5.z-2
      .p-4(titulo="Suave y ligeramente dulce ")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Corresponde al sabor esperado de una leche fresca y en condiciones normales.      
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/15.png", alt="")
      .p-4(titulo="Ácido")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Puede aparecer cuando aumenta la acidez como consecuencia de la actividad microbiana y el almacenamiento inadecuado.
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/16.png", alt="")
      .p-4(titulo="Rancio")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Se relaciona con la degradación de la grasa, generando un sabor fuerte y desagradable.
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/17.png", alt="")
      .p-4(titulo="Amargo")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Puede presentarse por cambios en las proteínas, actividad microbiana o determinadas condiciones de alimentación.
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/18.png", alt="")
      .p-4(titulo="Salado")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Puede observarse en algunas alteraciones fisiológicas o sanitarias del animal y requiere valoración adicional.
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/19.png", alt="")
      .p-4(titulo="Extraño")
        .row.justify-content-center.align-items-center
          .col-lg-7
            p.mb-4.mb-lg-0 Incluye sabores ajenos a la leche, que pueden proceder de alimentos, medicamentos, productos químicos o contaminación.
          .col-9.col-sm-6.col-lg-3
            figure
              img.imgw-230(src="@/assets/curso/tema3/20.png", alt="")

    p.mb-5 La leche fresca posee un olor suave y poco intenso, propio del alimento, sin aromas desagradables o extraños. Debido a su capacidad para captar olores del ambiente, puede adquirir aromas provenientes de alimentos, establos, productos químicos, recipientes o espacios de almacenamiento cuando no se manipula correctamente. Entre las variaciones que pueden identificarse se encuentran: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-acento-botones
          .div(numero="1" titulo="Característico")
            p.mb-0 Olor suave y propio de la leche fresca.   
          .div(numero="2" titulo="Ácido")
            p.mb-0 Puede indicar fermentación o deterioro.
          .div(numero="3" titulo="Rancio")
            p.mb-0 Se asocia con alteraciones de la grasa.
          .div(numero="4" titulo="A establo o alimento")
            p.mb-0 La leche puede absorber olores del ambiente o de la alimentación.
          .div(numero="5" titulo="Químico")
            p.mb-0 Puede relacionarse con residuos de detergentes o desinfectantes.
          .div(numero="6" titulo="Extraño")
            p.mb-0 Cualquier olor diferente al esperado requiere revisión.
      .col-sm-8.col-lg-5
        figure
          img(src='@/assets/curso/tema3/21.png', alt='', data-aos="zoom-in-down")
    
    .row.justify-content-center.z-2
      .col-lg-5 
        .bg-primario-p5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 En la evaluación sensorial, sabor y olor deben analizarse conjuntamente, ya que una alteración puede manifestarse en ambas características. Esta valoración constituye un control inicial y debe complementarse con las pruebas fisicoquímicas y microbiológicas correspondientes antes de utilizar la leche en la elaboración de derivados lácteos. 
      .col-lg-7.col-xl-7
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
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
