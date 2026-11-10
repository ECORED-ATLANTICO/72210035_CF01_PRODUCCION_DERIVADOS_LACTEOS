export default {
  global: {
    Name: 'Composición, calidad e inocuidad de la leche en la cadena productiva',
    Description:
      'Este componente formativo aborda la composición y las principales características de la leche, así como los factores que pueden modificar su calidad. Además, permite reconocer los microorganismos y agentes contaminantes que pueden afectar su inocuidad, junto con las prácticas higiénicas necesarias durante el ordeño, almacenamiento, transporte, recepción, procesamiento y manipulación. De esta manera, el aprendiz comprenderá la importancia de conservar la calidad de la leche a lo largo de la cadena productiva como base para la elaboración segura de derivados lácteos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Factores que influyen en la calidad de la leche',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Composición de la leche ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Agua y carbohidratos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proteínas y grasas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Enzimas, vitaminas y minerales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Características organolépticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Textura y color',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sabor y olor',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Propiedades físicas de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Densidad, pH, acidez',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Punto de congelación, punto de ebullición e índice de refracción',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Microorganismos alterantes de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Bacterias Gram positivas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Bacterias Gram negativas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Factores que afectan el desarrollo de los microorganismos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Humedad y acidez',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Agentes de limpieza, y antibióticos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Contaminación de la leche en cadena productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Producción primaria',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Recepción de la materia prima en plantas de procesos',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acidez',
      significado:
        'Característica relacionada con la presencia de sustancias ácidas en la leche. Su medición permite valorar la frescura, estabilidad y posibles cambios generados por la actividad microbiana.',
    },
    {
      termino: 'Actividad de agua',
      significado:
        'Cantidad de agua disponible en un alimento que puede ser utilizada por los microorganismos para desarrollar sus funciones y multiplicarse.',
    },
    {
      termino: 'Agentes de limpieza',
      significado:
        'Sustancias utilizadas para remover grasa, proteínas, minerales y otros residuos presentes en equipos, utensilios y superficies que entran en contacto con la leche.',
    },
    {
      termino: 'Antibióticos',
      significado:
        'Medicamentos empleados para tratar infecciones bacterianas en los animales. Sus residuos en la leche pueden afectar la calidad y los procesos de fermentación.',
    },
    {
      termino: 'Bacterias Gram negativas',
      significado:
        'Bacterias que, después de la tinción de Gram, adquieren una coloración rosada o rojiza debido a las características de su pared celular.',
    },
    {
      termino: 'Bacterias Gram positivas',
      significado:
        'Bacterias que conservan una coloración violeta o púrpura durante la tinción de Gram por la estructura gruesa de su pared celular.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'Mantenimiento continuo de temperaturas adecuadas durante el almacenamiento y transporte para reducir la multiplicación de microorganismos y conservar la calidad de la leche.',
    },
    {
      termino: 'Calidad de la leche',
      significado:
        'Conjunto de características composicionales, sensoriales, físicas, químicas y microbiológicas que determinan la aptitud de la leche para el consumo y procesamiento.',
    },
    {
      termino: 'Carbohidratos',
      significado:
        'Componentes de la leche entre los cuales se destaca la lactosa, azúcar que aporta energía y participa en procesos como la fermentación láctica.',
    },
    {
      termino: 'Caseína',
      significado:
        'Principal grupo de proteínas de la leche. Tiene especial importancia en la coagulación y en la formación de la cuajada durante la elaboración de quesos.',
    },
    {
      termino: 'Composición de la leche',
      significado:
        'Conjunto de componentes que conforman la leche, principalmente agua, proteínas, grasas, carbohidratos, vitaminas, minerales y enzimas.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Incorporación o presencia de agentes biológicos, químicos o físicos que pueden alterar la calidad, inocuidad o aptitud de la leche para su procesamiento.',
    },
    {
      termino: 'Crioscopía',
      significado:
        'Técnica utilizada para determinar el punto de congelación de la leche y apoyar la identificación de posibles variaciones en su contenido de agua.',
    },
    {
      termino: 'Densidad',
      significado:
        'Relación entre la masa de la leche y el volumen que ocupa. Está influenciada por el contenido de agua, grasa, proteínas, lactosa y minerales.',
    },
    {
      termino: 'Desinfectante',
      significado:
        'Sustancia aplicada sobre superficies previamente limpias para reducir la cantidad de microorganismos presentes en equipos, utensilios e instalaciones.',
    },
    {
      termino: 'Enzimas',
      significado:
        'Sustancias presentes naturalmente en la leche capaces de participar en diferentes reacciones químicas que pueden influir en su estabilidad, conservación y procesamiento.',
    },
    {
      termino: 'Evaluación sensorial',
      significado:
        'Valoración inicial de la leche mediante características perceptibles como color, olor, textura, apariencia y otras señales que pueden indicar posibles alteraciones.',
    },
    {
      termino: 'Grasa láctea',
      significado:
        'Componente que aporta energía, sabor, cremosidad y textura a la leche y contribuye al rendimiento y características de diferentes derivados lácteos.',
    },
    {
      termino: 'Humedad',
      significado:
        'Cantidad de agua presente en la leche. Su elevada proporción favorece la disponibilidad de nutrientes y puede facilitar el crecimiento de microorganismos.',
    },
    {
      termino: 'Índice de refracción',
      significado:
        'Propiedad que expresa el cambio de dirección de la luz al atravesar una muestra y puede aportar información sobre la concentración de sustancias disueltas.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición que permite que un alimento sea consumido sin generar riesgos inaceptables para la salud cuando se utiliza de acuerdo con su finalidad.',
    },
    {
      termino: 'Lactosa',
      significado:
        'Principal carbohidrato de la leche, formado por glucosa y galactosa. Puede ser utilizada por bacterias lácticas durante los procesos de fermentación.',
    },
    {
      termino: 'Leche',
      significado:
        'Alimento de origen animal compuesto principalmente por agua y diferentes nutrientes, utilizado como materia prima para la elaboración de numerosos derivados lácteos.',
    },
    {
      termino: 'Microorganismos alterantes',
      significado:
        'Microorganismos capaces de desarrollarse en la leche y generar cambios no deseados en su olor, sabor, textura, acidez, estabilidad o apariencia.',
    },
    {
      termino: 'Minerales',
      significado:
        'Componentes presentes en pequeñas cantidades, como calcio, fósforo, potasio y magnesio, importantes para el valor nutricional y comportamiento tecnológico de la leche.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Procedimiento mediante el cual se obtiene una cantidad representativa de leche para realizar pruebas y determinar sus condiciones de calidad.',
    },
    {
      termino: 'pH',
      significado:
        'Parámetro que indica el grado de acidez o alcalinidad de la leche. En leche fresca normalmente presenta un comportamiento ligeramente ácido.',
    },
    {
      termino: 'Producción primaria',
      significado:
        'Etapa que comprende el cuidado del animal, ordeño, recolección, enfriamiento y almacenamiento inicial de la leche antes de su transporte.',
    },
    {
      termino: 'Proteínas',
      significado:
        'Componentes nutricionales y tecnológicos de la leche, entre los que se encuentran las caseínas y las proteínas del suero.',
    },
    {
      termino: 'Punto de congelación',
      significado:
        'Temperatura a la cual comienza a congelarse la fase acuosa de la leche. Es útil para evaluar variaciones relacionadas con el contenido de agua.',
    },
    {
      termino: 'Punto de ebullición',
      significado:
        'Temperatura a la cual la leche comienza a hervir. Es ligeramente superior a la del agua debido a las sustancias disueltas presentes.',
    },
    {
      termino: 'Recepción de materia prima',
      significado:
        'Conjunto de controles realizados cuando la leche llega a la planta para verificar temperatura, características sensoriales, resultados analíticos y condiciones de aceptación.',
    },
    {
      termino: 'Tinción de Gram',
      significado:
        'Técnica de laboratorio utilizada para clasificar inicialmente las bacterias según las características de su pared celular y la coloración que adquieren.',
    },
    {
      termino: 'Vitaminas',
      significado:
        'Sustancias necesarias en pequeñas cantidades para diferentes funciones del organismo. En la leche pueden encontrarse vitaminas liposolubles e hidrosolubles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Costa, M., Gómez, M. F., Molina, L. H., Simpson, R., & Romero, A. (2002). Purificación y caracterización de proteasas de <em>Pseudomonas fluorescens</em> y sus efectos sobre las proteínas de la leche. Archivos Latinoamericanos de Nutrición, 52(2), 160-166.',
      link: 'https://ve.scielo.org/scielo.php?pid=S0004-06222002000200007&script=sci_arttext&utm_source',
    },
    {
      referencia:
        'Diosma, G., Balagué, L. J., & Londero, A. (2025). Microbiología de la leche, bacterias ácido-lácticas, microbiología del agua. En P. A. Balatti & M. C. N. Saparrat (Coords.), Los microorganismos y su rol en la producción agrícola (pp. 143-164).',
      link: 'https://sedici.unlp.edu.ar/bitstream/handle/10915/183523/Documento_completo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Federación Internacional de Lechería, & Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2012). Guía de buenas prácticas en explotaciones lecheras (2.ª ed.). FAO.',
      link: 'https://www.fao.org/4/ba0027s/ba0027s00.pdf',
    },
    {
      referencia:
        'García G., O., & Ochoa M., I. (1987). Acidez de la leche y determinación de adulteraciones. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6566/modulo2_unidad3_derivados_lacteos_manejo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'García G., O., & Ochoa M., I. (1987). Características físicas de la leche. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6565/modulo2_unidad1_derivados_lacteos_manejo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 067449 de 2020: Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción de leche. ICA.',
      link: 'https://www.ica.gov.co/getattachment/6b7f82ab-bccd-4bf5-a5c6-5bfff35b772b/2020R67449.aspx',
    },
    {
      referencia:
        'Martínez, M. M., & Gómez, C. A. (2015). Calidad composicional e higiénica de la leche cruda recibida en industrias lácteas de Sucre, Colombia. Biotecnología en el Sector Agropecuario y Agroindustrial, 11(2), 93-100.',
      link: 'https://revistas.unicauca.edu.co/index.php/biotecnologia/article/view/309/506',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Decreto 616 de 2006: Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano.',
      link: 'https://normograma.invima.gov.co/compilacion/docs/decreto_0616_2006.htm?utm_source',
    },
    {
      referencia:
        'Novoa Castro, C. F. (1987). Generalidades sobre elaboración de derivados lácteos. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/6590/modulo9_derivados_lacteos_recapitulacion.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Prácticas lecheras. FAO.',
      link: 'https://www.fao.org/dairy-production-products/production/farm-practices/es?utm_source',
    },
    {
      referencia:
        'Signorini, M. L., Sequeira, G. J., Bonazza, J. C., Dalla Santina, R., Martí, L. E., Frizzo, L. S., & Rosmini, M. R. (2008). Utilización de microorganismos marcadores para la evaluación de las condiciones higiénico-sanitarias en la producción primaria de leche. Revista Científica, 18(2), 207-217.',
      link: 'https://ve.scielo.org/scielo.php?lang=es&pid=S0798-22592008000200013&script=sci_arttext&utm_source',
    },
    {
      referencia:
        'Teherán López, G. E., Palma Parra, C., Fonseca Correa, L. N., Gamba Castillo, C. A., Ocampo Henao, D. C., & Torres Beltrán, H. A. (2023). Conceptos, métodos y procedimientos en el procesamiento de leches fermentadas. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/8346/Conceptos_metodos_procesamiento_leches.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
