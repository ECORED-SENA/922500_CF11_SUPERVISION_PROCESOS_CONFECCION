export default {
  global: {
    componenteFormativo: 'Plan maestro y planeación de la producción',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves de la planeación de la producción. Con su estudio, el aprendiz afianzará conceptos, procesos y acciones para el aprovechamiento de la oferta tecnológica, establecer los recursos requeridos en el proceso productivo, identificar situaciones y facilitar la toma de decisiones, según resultados esperados. Sabrá regular, dirigir y aprovechar los recursos del proceso productivo y elevar los índices de calidad, facturación y productividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        titulo: 'Plan maestro',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración del plan maestro de producción (PMP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estudio de caso del plan maestro de producción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos o métodos de producción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de requerimiento de materiales (MRP)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos gráficos de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diagrama de Gantt',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diagrama de carga',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Programación secuencial',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan agregado de producción (PAP)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ventajas de impulsar un <i>software</i> de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'La planeación de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Orden de producción',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Orden de compra',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Pronósticos de producción',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Métodos de proyección de recursos humanos',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Planeación de la producción',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Funciones de la planeación',
            hash: 't_7_6',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500-CF11-DU.zip',
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
  complementario: [
    {
      tema: 'Elaboración del plan maestro de producción (PMP)',
      referencia:
        'EBC Academia. (2019). <i>¿Cómo elaborar un plan maestro de producción?</i> [video]. YouTube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/jSD2gNaVd3Q',
    },
    {
      tema: 'Elaboración del plan maestro de producción (PMP)',
      referencia:
        'Mieses, E. (2017). <i>Plan maestro de producción ejemplo en Excel</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/X2T8d9rZq6Y',
    },
    {
      tema: 'Tipos o métodos de producción',
      referencia:
        'Soy Ingenio. (2020). <i>¿Qué son los procesos de producción? - Aprende fácil - Etapas y ejemplos</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/y0nr9iUyKtA',
    },
    {
      tema: 'Tipos o métodos de producción',
      referencia:
        'Soy Ingenio. (2020). <i>4 tipos de procesos productivos - Ejemplos (aprende fácil y rápido)</i> [video]. YouTube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/vvjiQQ5oMYM',
    },
    {
      tema: 'Plan de requerimiento de materiales (MRP)',
      referencia:
        'Productika. (2020). <i>MRP. Historia de los sistemas MRP</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/NPu8lvBmjP4',
    },
    {
      tema: 'Diagrama de Gantt ',
      referencia:
        'Bilbao & Bejarano Arquitectos. (2014). <i>Diagrama de GANTT</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/oDFbPhmgqLQ',
    },
    {
      tema: 'Programación secuencial',
      referencia:
        'Pasos por ingeniería. (2018). <i>Explicación de estructura secuencial</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/dMIjeWkzwRI',
    },
    {
      tema: 'Plan agregado de producción (PAP)',
      referencia:
        'Ingenio Empresa. (2016). <i>Plan agregado de producción con inventario cero</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=ydEKu2Bk1rI',
    },
    {
      tema: 'Plan agregado de producción (PAP)',
      referencia:
        'Ingenio Empresa. (2016). <i>Plan agregado de producción con fuerza de trabajo constante</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=m0rv-ehb91A',
    },
    {
      tema: 'Plan agregado de producción (PAP)',
      referencia:
        'Ingenio Empresa. (2016). <i>Plan agregado de producción con fuerza de trabajo mínima y subcontratación</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=kAlKUKpysco',
    },
    {
      tema: 'Ventajas de implantar un software de producción',
      referencia:
        'GAF Technology. (2018). <i>¿Qué es un ERP y para qué sirve? Objetivos y ventajas</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/5L7udSvIOKE',
    },
    {
      tema: 'Ventajas de implantar un software de producción',
      referencia:
        'Simplificando. (s.f.) <i>5 mejores programas de gestión de procesos empresariales o BPM gratis y Opensource software</i> [video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/6WzvO5nUcAs',
    },
    {
      tema: 'Orden de compra',
      referencia:
        'Schroeder R. Meyer S. y Rungtusanatham, J. (2011). <i>Administración de operaciones. Conceptos y casos contemporáneos</i>. McGraw-Hill.',
      tipo: 'PDF',
      link:
        'https://intercovamex.com/wp-content/uploads/2019/06/Administracion_de_operaciones-1.pdf',
    },
    {
      tema: 'Métodos de proyección de recursos humanos',
      referencia:
        'Dolan, S. L. y López Cabrales, Valle Cabrera, R. (2014). <i>La gestión de personas y del talento: La gestión de los recursos humanos en el siglo XXI</i>. McGraw-Hill.',
      tipo: 'Biblioteca SENA. Base de datos: E-books7-24',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7590',
    },
    {
      tema: 'Métodos de proyección de recursos humanos',
      referencia:
        'Importancia de la planificación de recursos humanos en la empresa. (2007). <i>PERSPECTIVAS</i>, (20), 7-28.',
      tipo: 'Artículo Revista Especializada',
      link: 'https://www.redalyc.org/articulo.oa?id=425942331002',
    },
    {
      tema: 'Planeación de la Producción',
      referencia:
        'Bench Consulting México. (2018). <i>Planeación de la Producción</i>. [Video] YouTube.',
      tipo: 'Video YouTube',
      link:
        'https://www.youtube.com/watch?v=7bVAwv-5VJI&ab_channel=BenchConsultingM%C3%A9xico',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de aprovisionamiento o abastecimiento',
      significado:
        'actividades y recursos que se utilizan para la obtención de un producto, partiendo de unas entradas de materiales e insumos y finalizando en un canal de distribución. ',
    },
    {
      termino: 'Controles de piso',
      significado:
        'indicadores de gestión o herramientas tecnológicas que facilitan la recolección y análisis de datos de las plantas de producción, que permiten conocer su estado actual para determinar su capacidad productiva.',
    },
    {
      termino: 'Curva salarial',
      significado:
        'establece los niveles de los salarios distribuidos en los colaboradores de una empresa y se expresa en una tabla o gráfico.',
    },
    {
      termino: 'Demanda',
      significado:
        'las cantidades estimadas solicitadas para ser fabricadas y/o despachadas.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento donde se organizan todos los datos de las características que se debe conocer de un elemento.',
    },
    {
      termino: 'Flujo de proceso',
      significado:
        'se expresa en un diagrama donde se da a conocer el ciclo que desarrolla un proceso para lograr una actividad determinada en una empresa.',
    },
    {
      termino: 'Global',
      significado:
        'cuando una situación se determina en una connotación a nivel mundial.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'son herramientas que permiten medir si los logros propuestos por la empresa se están alcanzando.',
    },
    {
      termino: 'Índice de calidad',
      significado:
        'herramienta que facilita la medición de elementos de carácter tangible y permiten evaluar si se cumple con los estándares establecidos para que un producto o servicio satisfaga las necesidades de clientes o consumidores.',
    },
    {
      termino: 'Insumos',
      significado:
        'elemento que permite crear un producto o servicio a partir de este.',
    },
    {
      termino: 'Inventario',
      significado:
        'listado de elementos que pertenecen a una empresa o institución.',
    },
    {
      termino: 'Logística',
      significado:
        'proceso de gestión de una empresa para coordinar la distribución de sus productos.',
    },
    {
      termino: 'Lote de producción',
      significado:
        'cantidad de unidades con especificaciones iguales o similares, que se clasifican con los mismos criterios o la misma referencia.',
    },
    {
      termino: 'Manual de funciones',
      significado:
        'es un documento en el cual se expresa las instrucciones a seguir o a cumplir por los funcionarios de una organización.',
    },
    {
      termino: 'Materia prima',
      significado:
        'materia que es transformada a través de distintos procesos para generar nuevos productos o bienes de consumo.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'proceso de desarrollo y organización para establecer una serie de procesos que conlleven a lograr unos objetivos propuestos.',
    },
    {
      termino: 'Pronóstico',
      significado:
        'posibilidad de generar una situación hipotética debido a diversos factores previamente conocidos.',
    },
    {
      termino: 'Proveedor',
      significado:
        'el que suministra bienes o servicios para satisfacer expectativas y/o necesidades, o para fabricar otros productos.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'elemento que ha sido solicitado con el fin de satisfacer un pedido.',
    },
    {
      termino: '24/7',
      significado:
        'término que se acuña cuando se hace mención a la disponibilidad de los 7 días de la semana, 24 horas diarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chase, R. B., Jacobs, F. R. y Aquilano, N. J. (2011). <i>Administración de la producción y operaciones para una ventaja competitiva</i>. 13ª. ed. McGraw-Hill.',
    },
    {
      referencia:
        'Delgado, J. (2001). <i>Planificación y control de la producción</i>. (Material didáctico-curso). Fundación General Universidad Politécnica de Madrid, Centro de Estudios de Postgrado de Administración.',
    },
    {
      referencia:
        'Gestión Empresarial BI. (s.f.)<i> Métodos de producción</i>.',
      link:
        'https://empresaygestionbi.weebly.com/51-meacutetodos-de-produccioacuten.html',
    },
    {
      referencia:
        'Ararat, A. (2010). <i>Estudio de métodos y tiempos en el proceso productivo de la línea de camisas interior de MAKILA CTA., para mejorar la productividad de la empresa</i>. [Trabajo de grado – Pregrado Santiago de Cali] Universidad Autónoma de Occidente.',
      link: 'https://red.uao.edu.co/handle/10614/1175',
    },
    {
      referencia:
        'Arredondo, M. (2015). <i>Contabilidad y análisis de costos</i>. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Castro, C. (2008). <i>Planeación de la producción</i>. EAFIT.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/67714',
    },
    {
      referencia:
        'Chiavenato, I. (1999). <i>Administración de recursos humanos</i>. Mc Graw Hill.',
    },
    {
      referencia:
        'García C, R. (2005). <i>Estudio del trabajo: Ingeniería de métodos y medición del trabajo</i>. Segunda edición. McGraw Hill.',
    },
    {
      referencia:
        'Hanke, J. E. & Wichern, D. W. (2006) <i>Pronósticos en los negocios</i>. Pearson Educación.',
    },
    {
      referencia:
        'Heizer, J. & Render, B. (2007) <i>Dirección de la producción y de operaciones. Decisiones estratégicas</i>. Editorial Pearson.',
    },
    {
      referencia:
        'Keat, P. G. & Young, P. (2004) <i>Economía de empresa</i>. Pearson Educación.',
    },
    {
      referencia:
        'Monks, J. G. (1991). <i>Administración de operaciones</i>. Serie Schaum. McGraw Hill.',
    },
    {
      referencia:
        'OIT. (1996). <i>Introducción al estudio del trabajo</i>. Oficina Internacional del Trabajo.',
    },
    {
      referencia: 'Pellegrino A. (2019). <i>Fichas técnicas de tejidos</i>.',
      link: 'https://ayelenpellegrino.com/tag/ficha-de-avios/',
    },
    {
      referencia:
        'Proaño Villavicencio, D. X. (2017). <i>Metodología para elaborar un plan de mejora continua</i>. 3Ciencias',
    },
    {
      referencia:
        'Proaño Villavicencio, D. X., Soler, V. y Bernabeu, E. (2017). <i>Metodología para elaborar un plan de mejora continua</i>. 3Ciencias.',
      link:
        'https://www.3ciencias.com/articulos/articulo/metodologia-elaborar-plan-mejora-continua/',
    },
    {
      referencia:
        'Ramos, D. (2018, mayo 22). <i>Las siete herramientas estadísticas de calidad</i>. [Web log post]. Blog de Calidad.',
      link: 'https://blogdelacalidad.com/las-siete-herramientas-de-la-calidad/',
    },
    {
      referencia: 'Ruiz, D. (2014). <i>Manual de estadística</i>.',
      link: 'https://www.eumed.net/cursecon/libreria/drm/24.pdf',
    },
    {
      referencia:
        'Salazar, C. y Del Castillo, S. (2018). <i>Fundamentos básicos de estadística</i>.',
      link: 'https://pubhtml5.com/skfd/tkbj/basic/',
    },
    {
      referencia:
        'Westwood, J. y Serna, H. (1991). </i>Planeación de mercados: análisis, evaluación y estrategias<i>. Legis.',
    },
    {
      referencia:
        'Hodson, W. K. (1996). <i>Maynard: manual del ingeniero industrial</i>. McGraw Hill.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Contratista Diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Contratista Diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Jon Jairo Pérez',
          cargo: 'Profesional Diseño curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Contratista Diseño Curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Contratista Diseño Curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
