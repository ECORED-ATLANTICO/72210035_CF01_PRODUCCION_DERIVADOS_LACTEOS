<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Composición de la leche

    img(data-aos="fade-up", src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4
          p.mb-0 La leche es una materia prima compleja en la que conviven distintos componentes que le dan sus características nutricionales, físicas y tecnológicas.  
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aunque a simple vista parece un alimento uniforme, en realidad contiene una combinación de sustancias que cumplen funciones diferentes y que influyen directamente en su comportamiento durante procesos como la refrigeración, la fermentación, la coagulación o la elaboración de quesos y yogures. Por esta razón, conocer qué contiene la leche ayuda a comprender mejor por qué puede variar de un animal a otro y cómo responde durante su transformación. 

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Cuando se habla de composición de la leche, se hace referencia al conjunto de componentes que la conforman y a la proporción en que estos se encuentran presentes. En términos generales, la leche está constituida principalmente por agua, proteínas, carbohidratos, grasas, enzimas, vitaminas y minerales.
        .bg-contenido-a5.p-4.rounded-4.py-3
          p.mb-0 Cada uno de estos componentes aporta características particulares: algunos participan en su valor nutricional, otros intervienen en la textura, el sabor, la estabilidad o la coagulación, y varios tienen una relación directa con el rendimiento y la calidad de los derivados lácteos. Por ello, comprender su composición no solo permite reconocer el valor de la leche como alimento, sino también anticipar cómo puede comportarse como materia prima dentro de un proceso productivo. 


    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Agua y carbohidratos 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p El agua es el componente mayoritario de la leche y funciona como su fase continua. En ella se encuentran disueltas sustancias como la lactosa y parte de los minerales, mientras que otros componentes, como las proteínas y la grasa, se mantienen en forma de dispersiones o emulsiones. 
        .bg-botones-b10.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Por esta razón, el agua no debe entenderse únicamente como un componente que aporta volumen, sino como el medio que permite que la leche conserve su estructura y sus propiedades fisicoquímicas. Desde el punto de vista tecnológico, la cantidad y la forma en que el agua se encuentra presente influyen en aspectos como: 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-4.p-xl-5.rounded-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Estabilidad 
              p Capacidad de la leche para mantener sus componentes uniformemente distribuidos, sin separaciones, precipitaciones o cambios no deseados durante el almacenamiento o procesamiento. 
              p.mb-0 #[strong Ejemplo:] leche homogeneizada en tanque de almacenamiento o comparación entre leche homogénea y leche con separación de crema. 
            div
              h5.mb-4 Concentración de sólidos 
              p Relación entre el contenido de agua y la cantidad de componentes sólidos de la leche, como proteínas, grasas, lactosa y minerales. Menor proporción de agua implica mayor concentración de sólidos. 
              p.mb-0 #[strong Ejemplo:] leche evaporada o proceso de concentración de leche por evaporación. 
            div
              h5.mb-4 Conservación 
              p Capacidad de mantener la calidad e inocuidad de la leche durante un periodo determinado, controlando principalmente la temperatura, la higiene y las condiciones de almacenamiento para reducir el deterioro. 
              p.mb-0 #[strong Ejemplo:] tanque de enfriamiento de leche a baja temperatura o almacenamiento refrigerado en planta láctea. 
            div
              h5.mb-4 Comportamiento del producto 
              p Forma en que la leche responde ante procesos como calentamiento, enfriamiento, fermentación, congelación o concentración, dependiendo de su contenido de agua y de la interacción entre sus componentes. 
              p.mb-0 #[strong Ejemplo:] proceso de elaboración de yogur, queso o leche concentrada en planta. 

    .bg-secundario-s10.p-4.rounded-4.py-3.mb-5
      p.mb-0 En los alimentos, el agua puede encontrarse en diferentes grados de asociación con otros componentes; de manera general, puede hablarse de agua libre, con mayor movilidad y disponibilidad para diferentes reacciones, y agua ligada o asociada, que interactúa con proteínas y otras moléculas de la matriz alimentaria. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Carbohidratos

    img(data-aos="fade-up", src="@/assets/curso/tema2/6.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4.mb-lg-5.bg-primario-p5
          p.mb-0 Los carbohidratos constituyen uno de los componentes naturales de la leche y cumplen funciones tanto nutricionales como tecnológicas. Aunque se encuentran en menor proporción que el agua, tienen una participación importante en el aporte energético del alimento y en varios procesos utilizados para elaborar derivados lácteos. Su presencia también influye en propiedades como el sabor, la fermentación y algunos cambios que ocurren durante el calentamiento o almacenamiento. 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El principal carbohidrato de la leche es la lactosa, conocida comúnmente como el azúcar de la leche. Se encuentra, de manera aproximada, entre 4,6 % y 5,0 % en la leche de vaca. Químicamente, es un disacárido formado por dos azúcares simples: glucosa y galactosa. Aunque también pueden encontrarse pequeñas cantidades de otros azúcares y oligosacáridos, la lactosa representa la mayor parte de los carbohidratos presentes. 

    .fullwidth-bg.fullwidth-bg--1
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 2.
      span Estructura de un disacárido
    img.mb-2.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema2/8-mob.png", alt="La figura explica la relación entre la glucosa, la galactosa y la lactosa dentro de los carbohidratos presentes en la leche. Presenta a la glucosa y la galactosa como azúcares simples que, al unirse, forman la lactosa, identificada como un disacárido. También señala que la glucosa aporta energía y forma parte de la lactosa, mientras que la galactosa se une a la glucosa para formar este carbohidrato. Finalmente, se destaca la importancia de la lactosa en los derivados lácteos, debido a su participación en la fermentación, su aporte de un sabor ligeramente dulce y su influencia en procesos relacionados con la elaboración de yogur y queso.")
    img.mb-2.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema2/8.png", alt="La figura explica la relación entre la glucosa, la galactosa y la lactosa dentro de los carbohidratos presentes en la leche. Presenta a la glucosa y la galactosa como azúcares simples que, al unirse, forman la lactosa, identificada como un disacárido. También señala que la glucosa aporta energía y forma parte de la lactosa, mientras que la galactosa se une a la glucosa para formar este carbohidrato. Finalmente, se destaca la importancia de la lactosa en los derivados lácteos, debido a su participación en la fermentación, su aporte de un sabor ligeramente dulce y su influencia en procesos relacionados con la elaboración de yogur y queso.")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Proteínas y grasas

    img(data-aos="fade-up", src="@/assets/curso/tema2/9.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4.mb-lg-5.bg-primario-p5
          p.mb-0 Las proteínas y las grasas son dos de los componentes que más influyen en el valor nutricional y en el comportamiento tecnológico de la leche. Su cantidad y características determinan aspectos como el rendimiento en la elaboración de quesos, la formación de la cuajada, la textura, la cremosidad y parte del sabor de los productos lácteos. Por esta razón, conocer cómo se encuentran en la leche permite comprender mejor lo que ocurre durante su transformación. 

    p.mb-5 Las proteínas de la leche son compuestos de alto valor nutricional formados por aminoácidos. En la leche de vaca representan, aproximadamente, entre 3 % y 3,5 % de su composición y se agrupan principalmente en dos tipos: caseínas y proteínas del suero. 
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/10.png' alt='')
          .tarjeta.bg-img.bg-img--1
            .p-4
              h5 Caseínas 
              p Son las principales proteínas de la leche y participan directamente en la formación de la cuajada. Al actuar el cuajo o aumentar la acidez, se agrupan y forman una estructura sólida.  
              p.mb-0 #[strong Ejemplo:] en la elaboración de queso, las caseínas permiten separar la cuajada del suero. 
      .col-sm-8.col-lg-5
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/11.png' alt='')
          .tarjeta.bg-img.bg-img--2
            .p-4
              h5 Proteína en suero 
              p Son proteínas que permanecen principalmente en la fase líquida después de la coagulación de la leche. Tienen alto valor nutricional y son sensibles al calor.  
              p.mb-0 #[strong Ejemplo:] después de elaborar queso, estas proteínas permanecen en el suero resultante del proceso. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La grasa de la leche es uno de los componentes que más contribuye al sabor, la textura, la cremosidad y el aporte energético de los productos lácteos. En la leche de vaca su concentración suele encontrarse alrededor de 3 % a 5 %, aunque puede variar según la raza, la alimentación, la etapa de lactancia y otras condiciones propias del animal.
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 La mayor parte de la grasa láctea está constituida por triglicéridos, acompañados en menor cantidad por fosfolípidos, colesterol y otras sustancias liposolubles. Su composición influye en propiedades como la firmeza, el punto de fusión y la sensación que produce el alimento durante el consumo. En los procesos de transformación, la grasa cumple funciones importantes: 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/12.png", alt="")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-4.p-xl-5.rounded-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Mejora de la cremosidad y suavidad 
              p La grasa aporta una sensación más suave y cremosa al producto, reduciendo la percepción de aspereza y favoreciendo una mayor aceptabilidad durante el consumo. 
              p.mb-0 #[strong Ejemplo:] un yogur entero suele percibirse más cremoso que uno descremado.
            div
              h5.mb-4 Desarrollo del sabor y aroma 
              p La grasa ayuda a retener y liberar compuestos responsables del sabor y aroma, contribuyendo a que los productos lácteos tengan características sensoriales más intensas y agradables. 
              p.mb-0 #[strong Ejemplo:] un queso con mayor contenido graso puede presentar sabor y aroma más pronunciados.
            div
              h5.mb-4 Formación de textura y cuerpo 
              p La grasa contribuye a la estructura del producto, aportando consistencia, firmeza y cuerpo, especialmente en quesos, yogures, cremas y otros derivados. 
              p.mb-0 #[strong Ejemplo:] en una crema de leche, la grasa favorece una textura más espesa y uniforme.
            div
              h5.mb-4 Aporte al rendimiento del producto 
              p La grasa forma parte de los sólidos de la leche y puede aumentar la cantidad de producto obtenido cuando permanece retenida durante el proceso de transformación. 
              p.mb-0 #[strong Ejemplo:] en quesos, una mayor retención de grasa puede favorecer el rendimiento final.

    p.mb-0 Un proceso directamente relacionado con este componente es la homogeneización, mediante la cual se reduce el tamaño de los glóbulos grasos para favorecer una distribución más uniforme de la grasa y disminuir su separación durante el almacenamiento. 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Enzimas, vitaminas y minerales 
    
    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de los componentes mayoritarios de la leche, existen otras sustancias presentes en menor proporción que cumplen funciones importantes en su valor nutricional, estabilidad y comportamiento durante el procesamiento. Aunque su cantidad es reducida, pueden intervenir en reacciones naturales de la leche, participar en procesos tecnológicos y aportar nutrientes esenciales. Por esta razón, su estudio permite comprender mejor cómo responde la leche frente al almacenamiento, el calentamiento, la fermentación y la elaboración de diferentes derivados lácteos. 

    .bg-vaca.p-4.rounded-4.z-2.mb-5
      .tarjeta.tarjeta--blanca.p-4.rounded-4.py-3
        p.mb-0 Las enzimas son sustancias naturales presentes en la leche que participan en diferentes reacciones relacionadas con sus componentes. Algunas intervienen en la grasa o las proteínas, mientras que otras sirven como indicadores del estado de la leche o de los tratamientos aplicados durante el procesamiento. Entre las mas importantes se encuentran: 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 3.
      span Tipos de enzimas
    img.mb-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema2/15-mob.png", alt="La figura presenta, de manera general, la importancia de ciertas enzimas presentes en la leche y su relación con la calidad, la estabilidad y el comportamiento del producto durante su manejo y procesamiento. A través de ejemplos visuales, se muestra que algunas enzimas actúan sobre componentes propios de la leche, mientras que otras pueden servir como referencia para evaluar tratamientos aplicados o participar en mecanismos naturales de protección. En conjunto, la figura permite comprender que la actividad enzimática puede generar efectos favorables o cambios no deseados, dependiendo de las condiciones de conservación, manipulación y procesamiento de la leche. ")
    img.mb-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema2/15.png", alt="La figura presenta, de manera general, la importancia de ciertas enzimas presentes en la leche y su relación con la calidad, la estabilidad y el comportamiento del producto durante su manejo y procesamiento. A través de ejemplos visuales, se muestra que algunas enzimas actúan sobre componentes propios de la leche, mientras que otras pueden servir como referencia para evaluar tratamientos aplicados o participar en mecanismos naturales de protección. En conjunto, la figura permite comprender que la actividad enzimática puede generar efectos favorables o cambios no deseados, dependiendo de las condiciones de conservación, manipulación y procesamiento de la leche. ")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Las vitaminas presentes en la leche son compuestos esenciales que se encuentran en pequeñas cantidades, pero cumplen funciones importantes en el metabolismo, el crecimiento, la formación y mantenimiento de tejidos y el funcionamiento adecuado del organismo. Su contenido puede variar según la alimentación del animal, la etapa de lactancia, la raza, el estado sanitario y las condiciones de producción. 
        .bg-primario-p5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 En la leche, las vitaminas se distribuyen de acuerdo con su afinidad por la grasa o por el agua. Por esta razón, se clasifican principalmente en:  
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/16.png", alt="")
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span  Tipos de vitaminas
    .tabla-a.color-primario.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #F5FAEA")
            th Tipo de vitamina 
            th(colspan="3") Definición 
            th(colspan="2") Ejemplo 
        tbody
          tr
            td #[strong Vitaminas liposolubles]
            td(colspan="3") Son vitaminas que se encuentran asociadas principalmente con la grasa de la leche. Incluyen las vitaminas A, D, E y K, y su cantidad puede disminuir cuando se retira parte de la materia grasa. 
            td(colspan="2") Vitamina A: está relacionada con la fracción grasa; por ello, la leche descremada contiene naturalmente menos cantidad que la leche entera. 
          tr
            td #[strong Vitaminas hidrosolubles]
            td(colspan="3") Son vitaminas que se encuentran principalmente en la fase acuosa de la leche. Comprenden varias vitaminas del complejo B y vitamina C, algunas de las cuales pueden afectarse por el calentamiento, la luz o el almacenamiento. 
            td(colspan="2") Vitamina B2 o riboflavina: está presente en la fase acuosa de la leche y puede disminuir cuando el producto permanece expuesto a la luz. 

    img(data-aos="fade-up", src="@/assets/curso/tema2/17.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.shadow-sm.p-4.mb-4.mb-lg-5.bg-primario-p5
          p.mb-0 Los minerales son elementos presentes naturalmente en la leche que aportan valor nutricional y participan en su comportamiento durante el procesamiento. Aunque se encuentran en menor proporción que el agua, las proteínas o la grasa, cumplen funciones importantes tanto en el organismo como en la elaboración de derivados lácteos. Entre los principales se encuentran: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/18.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        TabsA.color-acento-botones.z-2
          .tarjeta.bg-contenido-a5.p-4(titulo="Calcio")
            p.mb-0 Destaca por ser el mineral más abundante de la leche. Se asocia principalmente a las caseínas y resulta importante en la coagulación y en la elaboración de quesos.
          .tarjeta.bg-contenido-a5.p-4(titulo="Fósforo")
            p.mb-0 Aparece en la leche sobre todo como fosfatos, tanto asociado a las caseínas como en forma soluble. Mantiene una relación estrecha con el calcio.
          .tarjeta.bg-contenido-a5.p-4(titulo="Potasio")
            p.mb-0 Predomina en la fase acuosa de la leche, en forma de ion potasio. Hace parte de los minerales solubles del producto.
          .tarjeta.bg-contenido-a5.p-4(titulo="Sodio")
            p.mb-0 Forma parte de la fase acuosa de la leche, principalmente como cloruros, citratos y fosfatos. Su cantidad puede variar según la alimentación y el manejo.
          .tarjeta.bg-contenido-a5.p-4(titulo="Magnesio")
            p.mb-0 Se presenta en menor proporción que el calcio y el potasio. Puede hallarse en forma soluble y asociado a otros compuestos de la leche.
          .tarjeta.bg-contenido-a5.p-4(titulo="Cloruros")
            p.mb-0 Corresponden a sales presentes en la leche principalmente en forma de ion cloruro. Contribuyen al equilibrio iónico del producto.

    .bg-primario-p5.p-4.rounded-4.py-3.mb-5
      p.mb-0 El equilibrio entre estos minerales también puede afectar la estabilidad y las características fisicoquímicas de la leche. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
