<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Propiedades físicas de la leche 
      
    img(data-aos="fade-up", src="@/assets/curso/tema4/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4
          p.mb-0 Además de observar su color, textura, sabor u olor, la leche presenta otras características que permiten conocer mejor su comportamiento como materia prima. Estas propiedades son especialmente útiles para comprender cómo responde durante el almacenamiento, el enfriamiento, el calentamiento y los diferentes procesos de transformación.  
    
    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Su análisis ayuda a identificar variaciones en la leche y a valorar si mantiene condiciones adecuadas antes de ser utilizada en la elaboración de derivados lácteos. 
        .bg-primary-p5.p-4.rounded-4.py-3
          p.mb-0 Las propiedades físicas de la leche corresponden a características medibles que describen su comportamiento frente a determinadas condiciones. Algunas están relacionadas con la cantidad de sólidos presentes, otras con su respuesta a los cambios de temperatura o con la forma en que interactúan sus componentes. Estas propiedades permiten complementar la evaluación sensorial y aportan información útil para el control de calidad en la recepción y procesamiento de la materia prima. 

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Densidad, pH, acidez

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La densidad, el pH y la acidez son parámetros ampliamente utilizados para realizar una valoración inicial de la leche y comprender algunas de sus condiciones de calidad. Aunque cada uno aporta información diferente, analizados en conjunto permiten detectar variaciones que pueden estar relacionadas con la composición, el estado de conservación, la actividad microbiana o posibles cambios en la materia prima antes de su transformación.
        .bg-secundario-s10.p-4.rounded-4.py-3.mb-3
          p.mb-0 La densidad expresa la relación entre la masa de la leche y el volumen que ocupa. En la práctica, permite conocer qué tan concentrada se encuentra la leche respecto a sus componentes, ya que está influenciada principalmente por el contenido de agua, grasa, proteínas, lactosa y minerales. 
        p.mb-0 En la leche de vaca fresca suele encontrarse aproximadamente entre 1,028 y 1,034 g/mL, aunque este valor puede variar según la composición y la temperatura a la cual se realice la medición. La grasa tiende a disminuir la densidad, mientras que los sólidos no grasos, como proteínas, lactosa y minerales, contribuyen a incrementarla 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        .bg-secundario.p-4.rounded-4.mb-4.mb-lg-0
          p.mb-0 Antes de interpretar un valor de densidad es importante reconocer que cada componente de la leche ejerce un efecto diferente sobre este parámetro. El agua, la grasa y los sólidos no grasos no tienen la misma densidad; por ello, los cambios en su proporción pueden modificar el resultado obtenido durante la medición. Esta relación explica por qué la densidad se utiliza como un indicador inicial para valorar la composición de la leche y detectar variaciones que requieren análisis complementarios. A continuación, se relacionan los componentes que influyen en la densidad de la leche: 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/4.png", alt="")
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Componentes que influyen en la densidad de la leche
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Componente 
            th Presencia aproximada en la leche 
            th Densidad aproximada del componente 
            th(colspan="2") Efecto sobre la densidad de la leche 
        tbody
          tr
            td #[strong Agua]
            td 85,5 - 89,5 % 
            td 0,999 g/mL 
            td(colspan="2") Al aumentar su proporción, la densidad de la leche tiende a disminuir. 
          tr
            td #[strong Grasa]
            td 2,5 - 6,0 % 
            td 0,931 g/mL 
            td(colspan="2") Es el componente principal con menor densidad; por ello, una mayor cantidad de grasa tiende a reducir la densidad total. 
          tr
            td #[strong Proteínas]
            td 2,9 - 5,0 % 
            td 1,25 g/mL aprox. 
            td(colspan="2") Al formar parte de los sólidos no grasos, contribuyen a elevar la densidad. 
          tr
            td #[strong Lactosa]
            td 3,6 - 5,5 % 
            td 1,45 g/mL aprox. 
            td(colspan="2") Su presencia en la fase acuosa aumenta la concentración de sólidos y contribuye a elevar la densidad. 
          tr
            td #[strong Minerales]
            td 0,6 - 0,9 % 
            td 3,0 g/mL aprox. 
            td(colspan="2") Aunque están en menor proporción, poseen alta densidad y contribuyen al aumento del valor final.  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El pH indica el grado de acidez o alcalinidad de la leche a partir de la concentración de iones hidrógeno presentes en ella. La leche fresca presenta normalmente un comportamiento ligeramente ácido, con valores aproximados entre 6,6 y 6,8. 
        .bg-contenido-a5.p-4.rounded-4.py-3
          p.mb-0 Este parámetro puede cambiar durante el almacenamiento. Cuando determinados microorganismos utilizan la lactosa y producen ácido láctico, el pH disminuye. Por ello, un valor inferior al esperado puede ser una señal de acidificación y pérdida de frescura. 
          p.mb-0 El pH también tiene importancia tecnológica porque influye en: 

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .bg-img.bg-img--1.rounded-4.p-4.h-100
          figure
            img.imgh-105.mx-auto.mb-4(src="@/assets/curso/tema4/6.png", alt="")
          h5 Estabilidad de las proteínas
          p.mb-0 Capacidad de las proteínas de la leche para mantenerse dispersas sin precipitar ni formar grumos. 
          p.mb-0 #[strong Ejemplo]: durante un calentamiento adecuado, una leche estable conserva una apariencia uniforme sin coagular. 
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .bg-img.bg-img--2.rounded-4.p-4.h-100
          figure
            img.imgh-105.mx-auto.mb-4(src="@/assets/curso/tema4/7.png", alt="")
          h5 Coagulación
          p.mb-0 Proceso en el que las proteínas, especialmente las caseínas, se agrupan y forman una estructura más sólida. 
          p.mb-0 #[strong Ejemplo]: en la elaboración de queso, el cuajo favorece la formación de la cuajada. 
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        .bg-img.bg-img--3.rounded-4.p-4.h-100
          figure
            img.imgh-105.mx-auto.mb-4(src="@/assets/curso/tema4/8.png", alt="")
          h5 Procesos de fermentación
          p.mb-0 Transformaciones realizadas por microorganismos que utilizan la lactosa y producen compuestos como ácido láctico. 
          p.mb-0 #[strong Ejemplo]: en el yogur, las bacterias lácticas acidifican la leche y contribuyen a su textura y sabor característicos. . 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La acidez de la leche expresa la cantidad de sustancias con comportamiento ácido presentes en ella. Parte corresponde a la acidez natural, asociada con componentes como proteínas, fosfatos y otros constituyentes propios de la leche; otra puede desarrollarse posteriormente por la producción de ácido láctico debido a la actividad de microorganismos. 
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Su determinación permite valorar la frescura y estabilidad de la materia prima. Generalmente se mide mediante una titulación y puede expresarse como porcentaje de ácido láctico o mediante otras unidades utilizadas en el control de calidad. Para ello, se toma una cantidad conocida de leche y se agrega gradualmente una solución alcalina, normalmente hidróxido de sodio (NaOH), utilizando un indicador como la fenolftaleína. La prueba finaliza cuando aparece una coloración rosada tenue y estable, señal de que los compuestos ácidos de la muestra han sido neutralizados. La FAO describe este procedimiento como una de las formas habituales de evaluar la acidez de la leche. En el control de leche pueden encontrarse diferentes formas de expresar el resultado: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Medición de la acidez
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Forma de expresión 
            th(colspan="2") Qué representa 
            th(colspan="2") Ejemplo 
        tbody
          tr
            td #[strong % de ácido láctico (% m/v)]
            td(colspan="2") Gramos equivalentes de ácido láctico presentes en 100 mL de leche. 
            td(colspan="2") 0,15 % significa 0,15 g equivalentes de ácido láctico por cada 100 mL. 
          tr
            td #[strong g/L de ácido láctico]
            td(colspan="2") Cantidad equivalente de ácido láctico por litro de leche. 
            td(colspan="2") 1,5 g/L equivale aproximadamente a 0,15 %. 
          tr
            td #[strong Grados Dornic (°D)]
            td(colspan="2") Unidad tradicional utilizada para expresar la acidez titulable. 
            td(colspan="2") 15 °D equivalen aproximadamente a 0,15 % de ácido láctico. 
          tr
            td #[strong pH] 
            td(colspan="2") Indica la intensidad de la condición ácida, pero no mide la cantidad total de acidez titulable. 
            td(colspan="2") Una leche fresca suele presentar un pH cercano a 6,6 - 6,8. 

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Punto de congelación, punto de ebullición e índice de refracción 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La leche responde de manera particular cuando se somete a cambios de temperatura o cuando la luz atraviesa sus componentes. Estas respuestas están relacionadas con la presencia de agua, lactosa, proteínas, minerales y grasa. Conocerlas permite comprender mejor el comportamiento de la materia prima y, en algunos casos, identificar variaciones en su composición que requieren controles adicionales.
        .bg-secundario-s10.p-4.rounded-4.py-3.mb-3
          p.mb-0 El punto de congelación es la temperatura a la cual la fase acuosa de la leche comienza a convertirse en hielo. Debido principalmente a la presencia de lactosa y sales minerales disueltas, la leche congela a una temperatura inferior a la del agua pura. En leche bovina, el punto de congelación se encuentra generalmente alrededor de -0,54 °C, aunque pueden presentarse pequeñas variaciones naturales. 
        p.mb-0 Esta propiedad es especialmente útil en el control de calidad, porque la incorporación de agua a la leche tiende a desplazar su punto de congelación hacia 0 °C. 
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p El punto de ebullición corresponde a la temperatura en la cual la leche comienza a hervir y parte de su agua pasa rápidamente al estado de vapor. Como contiene sustancias disueltas, su temperatura de ebullición es ligeramente superior a la del agua pura.
        .bg-primario-p5.p-4.rounded-4.py-3.mb-3
          p.mb-0 A una presión atmosférica cercana al nivel del mar, puede encontrarse aproximadamente entre 100,1 y 100,2 °C. Este valor no es completamente fijo, ya que depende de factores como la presión atmosférica, la altitud y la concentración de sólidos presentes en la leche. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/11.png", alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El índice de refracción expresa cuánto cambia la dirección y velocidad de la luz al atravesar una sustancia. En el análisis de productos lácteos puede aportar información relacionada con la concentración de sustancias disueltas, especialmente lactosa y minerales. 
        .bg-secundario-s10.p-4.rounded-4.py-3.mb-3
          p.mb-0 Debido a que la leche completa es un sistema turbio por la presencia de grasa y proteínas, esta propiedad puede evaluarse con mayor precisión en determinadas fracciones líquidas, como el suero de la leche, mediante un refractómetro. 
          p.mb-0 Como referencia, pueden obtenerse valores cercanos a 1,34, aunque estos dependen de la composición, la temperatura y el método utilizado. A continuación, se muestra una comparación practica sobre estas tres características: 

    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Características de las propiedades de la leche
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Propiedad 
            th Valor de referencia aproximado 
            th Principal factor relacionado 
            th Equipo o medio de medición 
            th Aplicación práctica 
        tbody
          tr
            td #[strong Punto de congelación]
            td Cerca de -0,54 °C
            td Lactosa, minerales y contenido de agua
            td Crioscópico
            td Apoya la identificación de variaciones en el contenido de agua. 
          tr
            td #[strong Punto de ebullición]
            td 100,1 - 100,2 °C
            td Agua, sólidos disueltos y presión atmosférica
            td Termómetro/equipo de proceso
            td Permite controlar operaciones de calentamiento y concentración. 
          tr
            td #[strong Índice de refracción]
            td Cerca de 1,34
            td Sustancias disueltas
            td Refractómetro
            td Ayuda a valorar cambios en la concentración de determinados componentes. 
   

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
