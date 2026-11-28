<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fortaleciendo la planeación estratégica',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, principios y relaciones desarrollados en el componente formativo, mediante la identificación, comprensión y aplicación conceptual sobre la composición, calidad e inocuidad de la leche en la cadena productiva.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál grupo reúne factores que pueden influir directamente en la calidad de la leche?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el color del animal y el tamaño del recipiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo la temperatura utilizada durante el procesamiento industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La genética, el estado sanitario, la alimentación, el ordeño, el ambiente y las prácticas higiénicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente el tiempo transcurrido después del ordeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! la calidad de la leche depende de la interacción de factores relacionados con el animal, la alimentación, el ambiente, el manejo y las condiciones higiénico-sanitarias.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple principalmente el agua dentro de la composición de la leche?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actúa como fase continua donde se encuentran o distribuyen los demás componentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Constituye el principal componente responsable de la coagulación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aporta directamente el sabor ácido característico de la leche fresca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es el componente con mayor concentración energética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El agua es el componente mayoritario y funciona como el medio en el que se encuentran disueltas o dispersas diferentes sustancias de la leche.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál afirmación describe correctamente la lactosa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una proteína responsable de formar la cuajada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un mineral relacionado principalmente con la coagulación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es una grasa que aporta cremosidad al producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es el principal carbohidrato de la leche y está formado por glucosa y galactosa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La lactosa es el azúcar característico de la leche y puede ser utilizada por microorganismos durante los procesos de fermentación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué función cumplen principalmente las caseínas durante la elaboración de queso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar directamente el contenido de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agruparse durante la coagulación y participar en la formación de la cuajada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar completamente el crecimiento de microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el punto de congelación de la leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Las caseínas son las principales proteínas implicadas en la formación de la estructura sólida que origina la cuajada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una función tecnológica importante de la grasa de la leche?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar los microorganismos presentes en la materia prima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir siempre la acidez del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contribuir a la cremosidad, textura, sabor y rendimiento de los derivados lácteos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Transformar directamente la lactosa en ácido láctico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La grasa contribuye al sabor, la cremosidad, la textura y el cuerpo de diferentes productos lácteos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué enzima puede utilizarse como indicador para verificar la eficacia de la pasteurización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lipasa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteasa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lacto peroxidasa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fosfatasa alcalina.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La fosfatasa alcalina se utiliza como indicador relacionado con la eficacia del tratamiento de pasteurización.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo debe presentarse normalmente la textura de una leche fresca en buenas condiciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Líquida, homogénea, ligeramente viscosa y sin grumos ni sedimentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Espesa, con partículas visibles y separación de fases.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Coagulada y con presencia de sedimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Altamente viscosa y con formación permanente de espuma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Una leche fresca debe conservar una apariencia uniforme, fluida y sin alteraciones visibles en su estructura.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Si una leche presenta un sabor intensamente rancio, ¿qué situación puede estar relacionada con esta alteración?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento natural del contenido de lactosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Degradación de la grasa de la leche.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento normal del contenido de calcio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución del contenido de proteínas del suero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! El sabor rancio puede aparecer como consecuencia de alteraciones o degradación de la fracción grasa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuáles son los tres emblemas protectores reconocidos internacionalmente por el DIH?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad total de microorganismos presentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El nivel de acidez producido exclusivamente por bacterias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La temperatura a la cual comienza a hervir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La relación entre la masa de la leche y el volumen que ocupa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La densidad está relacionada con la composición de la leche y puede variar según la proporción de agua, grasa y sólidos no grasos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el intervalo aproximado de pH señalado en el componente para una leche fresca?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3,0–3,5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '4,0–4,5.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6,6–6,8.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '8,5–9,0.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La leche fresca presenta normalmente un comportamiento ligeramente ácido, con un pH aproximado entre 6,6 y 6,8.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué puede ocurrir con el punto de congelación de la leche cuando se incorpora agua?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se desplaza hacia temperaturas mucho más bajas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tiende a desplazarse hacia 0 °C.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Permanece siempre exactamente en −0,54 °C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se iguala automáticamente con el punto de ebullición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La incorporación de agua puede modificar el punto de congelación y desplazarlo hacia valores más cercanos a 0 °C.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cómo se observan generalmente las bacterias Gram positivas después de la tinción de Gram?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sin emblema desaparecen todos los derechos del paciente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El símbolo garantiza seguridad absoluta en cualquier circunstancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La protección jurídica no depende únicamente de portar un distintivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso del emblema permite participar en hostilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Su pared celular gruesa de peptidoglicano permite que retengan el colorante principal y se observen generalmente violetas o púrpuras.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál característica corresponde a las bacterias Gram negativas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Poseen únicamente una pared celular gruesa sin membrana externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Siempre son microorganismos utilizados para producir yogur.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presentan una capa delgada de peptidoglicano y una membrana externa, adquiriendo generalmente una tonalidad rosada o rojiza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No pueden encontrarse en agua, equipos o superficies',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Su pared celular gruesa de peptidoglicano permite que retengan el colorante principal y se observen generalmente violetas o púrpuras.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué efecto puede tener una alta disponibilidad de agua en la leche?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar completamente la actividad microbiana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impedir el aprovechamiento de los nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar cualquier modificación de la acidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Favorecer la actividad y multiplicación de microorganismos cuando existen condiciones adecuadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La elevada disponibilidad de agua facilita el transporte y aprovechamiento de nutrientes y puede favorecer el desarrollo microbiano.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la función principal de los agentes de limpieza alcalinos en la industria láctea?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Remover principalmente grasas y residuos de proteínas presentes en equipos y superficies.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar la acidez de la leche durante el almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incorporar minerales a los productos lácteos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el proceso de refrigeración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Los agentes alcalinos se utilizan especialmente para remover residuos de grasa y proteínas presentes en equipos, tanques y tuberías.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Por qué los residuos de antibióticos pueden afectar la elaboración de productos lácteos fermentados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque aumentan necesariamente el contenido de grasa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque pueden inhibir las bacterias útiles requeridas para desarrollar la fermentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque incrementan siempre el contenido de lactosa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque aceleran automáticamente la coagulación de la leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Los residuos de antibióticos pueden impedir o reducir la actividad de los microorganismos utilizados de manera controlada en productos fermentados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál opción relaciona correctamente los principales tipos de contaminación de la leche?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Biológica: pelos; química: bacterias; física: antibióticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Biológica: detergentes; química: tierra; física: microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Biológica: residuos de medicamentos; química: insectos; física: bacterias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Biológica: microorganismos; química: residuos de antibióticos o detergentes; física: tierra, pelos o partículas extrañas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La contaminación puede ser biológica, química o física según la naturaleza del agente incorporado a la leche.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál conjunto de actividades corresponde a la producción primaria de leche?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente envasado, comercialización y distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasteurización, fermentación y elaboración de yogur.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuidado del animal, ordeño, recolección, filtrado, enfriamiento y almacenamiento inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo recepción, análisis y descarga en planta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La producción primaria comprende las actividades desarrolladas desde el cuidado del animal hasta el almacenamiento inicial antes del transporte.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la finalidad principal de controlar la leche durante su recepción en la planta de procesamiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar si conserva las condiciones necesarias para ser aceptada y utilizada en el procesamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modificar inmediatamente el sabor antes de realizar cualquier evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar su temperatura para facilitar la descarga.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mezclar todos los lotes antes de comprobar sus características.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! Durante la recepción debes verificar aspectos como las características sensoriales, temperatura y resultados de control antes de aceptar la materia prima.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Una leche llega a la planta con olor extraño, temperatura inadecuada y dudas sobre sus condiciones higiénicas. ¿Cuál actuación es la más apropiada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Descargarla y mezclarla inmediatamente con leche conforme.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar las verificaciones y controles establecidos antes de decidir su aceptación para el procesamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Utilizarla directamente si su color continúa siendo blanco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aceptarla únicamente porque fue transportada en un recipiente cerrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Ha acertado la respuesta! La recepción es un punto de control y una materia prima con señales de posible alteración debe evaluarse antes de decidir su aceptación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
