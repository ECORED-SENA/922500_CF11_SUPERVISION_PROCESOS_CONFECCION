<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 La planeación de la producción
    p(data-aos="fade-down") La planeación de la producción es un proceso organizacional que permite tomar decisiones acertadas al momento de ejecutar los objetivos planeados y por ende lograr que la empresa cumpla su producción con calidad y eficiencia.

    p(data-aos="fade-down").mb-5 Conozca, observando el siguiente video, cómo los procesos de planeación permiten aprovechar los recursos de la organización:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    Separador 
    #t_7_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.1 Orden de producción 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='')      
      .col-lg-7.my-3
        p(data-aos="fade-down") La orden de producción es un documento, matriz o cuadro de control, donde se registra la cantidad de unidades a programar, ya sean materias primas, insumos y todos los procesos anexos al desarrollo de la producción para ser enviada a un proveedor de servicio, ya sea interno o externo. Según Arredondo (2015) esta orden es un documento de numeración única, como una cédula de ciudadanía; es decir, no se repite, se puede duplicar la referenciación, más no la numeración de la orden. Por consiguiente, se genera toda la trazabilidad de los costos de producción asociados.
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El sistema de órdenes de producción se crea en la industria textil de confección para cubrir la necesidad de individualizar los costos. A través de este método es posible establecer una organización de la producción en la que se genera una gran variedad de artículos que serán comercializados teniendo en cuenta la oferta o demanda del mercado.
              
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-10
        .bg8.p-4.brad1(data-aos="flip-down") 
          .row.justify-content-center.align-items-star
            .col-lg-auto.mb-3
              img.img-a.img-t.beat(src='@/assets/curso/temas/39.svg', alt='')
            .col
              p(data-aos="fade-down").mb-0 De acuerdo con la naturaleza del producto esperado, se podrá reunir una secuencia numérica de cada uno de los elementos del costo para personalizar cada orden de producción, aquí se tendrá en cuenta materias primas e insumos, junto a toda la información necesaria que debe conocer el proveedor a quien va dirigido estos datos.
  
    .row.justify-content-center.align-items-center.bg17.py-4.mb-5(data-aos="flip-down")         
      .col-lg-10
        p(data-aos="fade-down").mb-0 Es de destacar que la orden de producción se construye con base en las órdenes de pedido que genera el departamento comercial de la empresa y es una matriz que se convirtió en documento indispensable con contenido técnico e informativo para la construcción de las prendas de vestir.

    h4(data-aos="fade-down").t1 Aplicación orden de producción
    p(data-aos="fade-down").mb-5 Para entender la aplicabilidad de una orden de producción, es importante conocer un ejemplo visual de esta, así podrá conocer toda la información que se contiene en ella para reconocer su trascendencia en el proceso productivo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Construcción de la orden de producción
                  p(data-aos="fade-down").mb-0 Le invitamos a consultar el siguiente contenido descargable para que profundice sobre el tema de la construcción de la orden de producción.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Anexo_3_ConstruccionDeLaOrdenDeProduccion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    h4(data-aos="fade-down").t1 Características de la orden de producción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Un trabajo programado y ordenado garantiza obtener productos que salen al mercado con todas las condiciones para las que fueron creados, esto es lo que permite una orden de producción, al organizar toda la información de una ficha técnica, con la cual será posible crear un flujo de proceso programático, métodos y tiempos de ruta de proceso, entre otros.

        p(data-aos="fade-down") Un trabajo programado y ordenado Al interior de los equipos de trabajo, la orden de producción mantiene una sinergia al equilibrar todas las cargas pertinentes, donde la calidad de la información que ésta contiene garantiza productos conformes que llenan las expectativas de su receptor final.
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Concebida de esta manera, la matriz de la orden de producción se convierte en una carta de navegación y se obtiene de ella un resultado final óptimo, con lineamientos claros como el hecho de describir la ruta de proceso hasta una ficha de empaque, lo que permite que los equipos de trabajo sean polifuncionales.    
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='')                    

    p(data-aos="fade-down").mb-4 Es así como la orden de producción cumple con tres objetivos esenciales:

    .row.justify-content-center.text-center.mb-4         
      .col-lg-4.my-3
        .bg7.p-3.h-100.brad1.py-4(data-aos="flip-down")
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/80.svg', alt='')  
          p(data-aos="fade-down").mb-0 Garantizar el uso racional de los recursos de la empresa.   
      .col-lg-4.my-3
        .bg7.p-3.h-100.brad1.py-4(data-aos="flip-down")
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/81.svg', alt='')  
          p(data-aos="fade-down").mb-0 Garantizar una economía sustentable con respecto a los costos de producción.  
      .col-lg-4.my-3
        .bg7.p-3.h-100.brad1.py-4(data-aos="flip-down")
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/82.svg', alt='')  
          p(data-aos="fade-down").mb-0 Garantizar un producto con estándares de calidad que estén a la altura de los requerimientos del cliente.

    p(data-aos="fade-down").mb-5 Por ello, lo que mayormente caracteriza a este documento es la integración de todas las expectativas empresariales para llevar a cabo todo el programa de planeación estratégica de la compañía, donde se incluye políticas, estrategias, misión y visión empresarial.  

    Separador 
    #t_7_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.2 Orden de compra

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='')      
      .col-lg-7.my-3
        p(data-aos="fade-down") Es un documento, formato o planilla donde, a través de un control seriado, se genera una solicitud directa de un producto, materia prima o insumo a un proveedor, que requiere un comprador. En esta se expresan todas las características técnicas que cumplen con una necesidad sentida de un cliente para un proceso o complementar una unidad de producción

        p(data-aos="fade-down") De esta manera, la orden de compra o pedido se personaliza de acuerdo con el tipo de producto que procese la empresa.

        p(data-aos="fade-down") Sobre la aplicación de la orden de compra tenga presente los siguientes aspectos:     

    .row.justify-content-center.align-items-center          
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Aplicación de la orden de compra
        .tabla-a.color-acento-contenido.mb-5
          table.text-center
            thead.bgh
              tr
                th.text-center.tbright Apropiación y percepción del documento
                th.text-center Responsables de la orden de compra

            tbody
              tr
                td.p-4 Al entender que la orden de compra es un documento que participa de la logística de planeación y programación de los procesos, se convierte en una herramienta tecnológica que automatiza el proceso de adquisición de materiales.
                td.p-4 Esto a su vez se determina como una responsabilidad del departamento de compras, para cumplir con el reto de nivelar los inventarios, adquirir un insumo nuevo y cumplir con las necesidades de mantener disponibilidad para no entorpecer procesos.  

    p(data-aos="fade-down").mb-5 De esta manera, este importante documento posibilita:
    .bg11.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center       
        .col-lg-auto.mb-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              | Identificar y desarrollar fuentes de abastecimiento.
            li 
              i.lista-ul__vineta
              | Seleccionar proveedores y negociar contratos.
            li 
              i.lista-ul__vineta
              | Mantener relaciones de trabajo y controlar la existencia de los proveedores.
            li 
              i.lista-ul__vineta
              | Iniciar estudios de costos para evaluar la oferta y demanda del producto o servicio a comprar en el mercado, con el fin de establecer la ruta crítica de los artículos que se compran a los diferentes proveedores.
            li 
              i.lista-ul__vineta
              | Mantener una base de datos del sistema de aprovisionamiento.   

    .bg18.mb-5
      h4(data-aos="fade-down").t1.pt-4 Características de la orden de compra

      .row.justify-content-center.align-items-center.mb-4        
        .col-lg-9.my-3
          p(data-aos="fade-down") La orden de compra es un elemento clave para requerir un servicio, por ello debe contener información clara y precisa, en cuanto a los datos específicos del cliente y los productos que va a adquirir. Por lo tanto, la característica esencial que cumple la orden de compra es convertirse en un contrato previo para proveer un servicio, materia prima o producto, con los requerimientos establecidos de costos, condiciones, técnicas, calidad y cantidad.

          p(data-aos="fade-down") Otros aspectos que se deben tener en cuenta son:
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.svg', alt='')     

      .row.justify-content-center.text-center      
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.py-3(data-aos="flip-down")
            img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/86.svg', alt='')  
            h4(data-aos="fade-down").t1.mb-0 Sobre la orden de compra
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.j.py-3(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 #[b Comprar]
              br
              | Sabiendo que comprar significa adquirir bienes y servicios que suplan la necesidad de un proveedor o productor.  
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.j.py-3(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 #[b Intercambio de información]
              br
              | El intercambio de información que pasa por este canal de comunicación se convierte en ficha clave para precisamente suplir la demanda de un bien o un servicio con los mejores parámetros de calidad.
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.j.py-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 #[b Materias primas]
              br
              | Las materias primas, los componentes, los subensambles y los artículos componen los elementos que se usan para producir un bien o un servicio.
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.j.py-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 #[b Provisión del material]
              br
              | La mayoría de los materiales son transformados en productos terminados, pero las provisiones de ellos son consumidas en las operaciones diarias. 
        .col-lg-4.my-3
          .bg7.p-3.h-100.brad1.j.py-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 #[b Matriz de orden de compra]
              br
              | De esta forma, dichos materiales se abastecen mediante un documento llamado matriz de orden de compra.

    Separador 
    #t_7_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.3 Pronósticos de producción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.png', alt='')      
      .col-lg-7.my-3
        p(data-aos="fade-down") Un pronóstico se define como un cálculo estimativo del nivel de la demanda de uno o varios productos por un periodo de tiempo futuro. Desde este punto de vista, todo pronóstico es una conjetura, pero mediante el empleo de diversas técnicas puede convertirse en un acierto.

        p(data-aos="fade-down") Es de tener en cuenta que el comportamiento de la demanda de la producción es incierto y factores ocasionales tales como, precios, sobreoferta, comportamientos políticos, entre otros, hacen que la naturaleza de un pronóstico esté orientada a obtener resultados positivos previendo algunas situaciones que se pueden presentar, con el fin de evitar posibles efectos negativos.

        p(data-aos="fade-down") Por consiguiente, para que un pronóstico sea responsable en sus resultados finales debe presentar ciertas condiciones, tales como:

    .bg2.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center       
        .col-lg-auto.mb-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              | Arrojar números precisos para generar la suficiente confianza.
            li 
              i.lista-ul__vineta
              | Definir claridad y facilidad para valorar indicadores de gestión.
            li 
              i.lista-ul__vineta
              | Medir y evaluar los resultados para la toma de decisiones acertadas.
            li 
              i.lista-ul__vineta
              | Evaluar con mayor certeza periodos de tiempo cercanos.         
    h4(data-aos="fade-down").t1 Tipos de métodos de pronóstico
    p(data-aos="fade-down").mb-5 Entendiendo los beneficios que conlleva el desarrollo de los pronósticos de producción, se destacan algunos tipos de métodos que se ajustan a las necesidades generales de las empresas:
    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Opinión ejecutiva")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Método basado en datos y conjeturas administrativas que se dan por intuición. Este es uno de los métodos más empleados dado que en alto porcentaje las empresas son familiares y se crean datos históricos que enmarcan líneas de trabajo, por lo tanto, empresarios y administrativos no se desvían de ellas. Este pronóstico casi siempre se cumple por las órdenes impartidas por los gerentes al ser los dueños de las empresas.  
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Indicadores de gestión")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 El método de análisis de indicadores de gestión se presenta como un simple proceso de correlacionar los comportamientos numéricos con las decisiones tomadas en las empresas. Tanto indicadores externos como la tasa representativa de mercado y los internos, como los índices de productividad marcan los lineamientos en la toma de decisiones internas. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Análisis estadísticos")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 El análisis por comportamientos estadísticos y cuadros de control diseñados en la empresa es un método que presenta una relación directa entre el pasado y el futuro estadístico de las compañías, promedios, desviaciones, medidas de tendencia central y de dispersión para direccionar la estrategia de planeación estratégica de la compañía.                         

    h4(data-aos="fade-down").t1 Beneficios de los pronósticos de producción
    p(data-aos="fade-down").mb-5 Es cierto que nadie puede planear el futuro con precisión y menos empleando datos pasados, pero el valor de los pronósticos sobre todo en el contexto productivo puede ser útil para lo siguiente: 
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8
        .bg19.p-4(data-aos="fade-left")
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              p.mb-0 Diseñar adecuadas políticas de planeación estratégica.
            li 
              i.lista-ul__vineta
              p.mb-0 Determinar objetivos propuestos y cuotas de ventas en la empresa.
            li 
              i.lista-ul__vineta
              p.mb-0 Diseñar indicadores de gestión, trazabilidad y controles de piso. Se definen como indicadores de gestión que muestran el cumplimiento de las metas programadas en los procesos productivos, que muestren números precisos a la realidad y comportamiento de la empresa.
            li 
              i.lista-ul__vineta
              p.mb-0 Determinar con precisión el inventario futuro de la compañía.
            li 
              i.lista-ul__vineta
              p.mb-0 Determinar con precisión talento humano, maquinaria y materia prima necesarios para los procesos internos de la compañía.
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 Sostener en buenos números los tres principales indicadores de gestión del proceso de manufactura, índice de calidad, índice de facturación y el índice de ciclos de entrega de la producción. 
      .col-lg-4.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')     

    Separador 
    #t_7_4.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.4 Métodos de proyección de recursos humanos 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')      
      .col-lg-8.my-3
        p(data-aos="fade-down") Para que una empresa desarrolle con éxito su actividad productiva es necesario que existan cuatro factores: recursos económicos, maquinaria e instalaciones, materiales y talento humano. Este último es imprescindible para que la organización lleve a cabo las actividades definidas para la consecución de las metas propuestas, por ello, se evidencia la importancia de enfocarse en este elemento que define el futuro de la empresa, al ser estudiado y organizado con anticipación.

        p(data-aos="fade-down") Es así como los métodos de proyección de recursos humanos se enmarcan hacia el planteamiento de políticas y estrategias para consolidar un equipo de trabajo líder y tan competente como sea posible (Chiavenato, 1999). Estos generan retos que en las actuales circunstancias tiene tantas limitaciones como celdas que pueda contener un organigrama y pueden pasar largos periodos de tiempo para ocupar los distintos cargos con personas idóneas.
        .cajon.color-secundario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 De acuerdo con lo anterior, todo departamento que se estructura para reclutar, capacitar y seleccionar líderes de procesos, establece unos parámetros esenciales que se rigen por unos lineamientos universales para cualquier clase de empresa. 
    p(data-aos="fade-down").mb-5 Entre los principales parámetros que rigen los lineamientos de los equipos de encargados de recursos humanos, se encuentran:

    .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Selección de personal  
            p Seleccionar personal capacitado y calificado con conocimiento del proceso en que se va a desempeñar. Cabe aclarar que, si un cargo no requiere de experiencia, es necesario que tenga las condiciones para recibir el conocimiento que fortalezca el desempeño en el puesto de trabajo. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/91.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Curvas salariales 
            p Diseñar curvas de salario acordes a la categorización y organización de la compañía, respetar la jerarquía y garantizar la igualdad tanto de género como económica de los puestos de trabajo. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/92.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Promoción del personal y los equipos 
            p Fortalecer, capacitar y mejorar las condiciones económicas de los colaboradores actuales, puesto que ellos poseen el conocimiento y la experiencia, con lo que se debe evitar que se marchen de la empresa para aprovechar la experticia adquirida, en pro de mejorar los procesos productivos. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/93.png', alt='')      
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Fortalecimiento de la identidad del personal
            p Crear un sistema de incentivos, al cumplirse con los indicadores de productividad como la calidad en el trabajo realizado, la gestión del tiempo, la eficiencia del trabajador en una determinada actividad, entre otros.
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/94.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Gestión de procesos interconectados 
            p Tener en cuenta los índices de eficiencia relacionado al cumplimiento de metas numéricas, índice de calidad asociado al fortalecimiento del producto o servicio, y el cumplimiento de las fechas de entrega del producto o servicio. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/95.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Planeación 
            p Establecer un programa racional de planeación de costos generales de producción que solventen la empresa a una sostenibilidad económica futura.
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/96.png', alt='')     
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Cumplimiento de objetivos 
            p Emplear estrategias para que la dirección ejecutiva en la empresa diseñe políticas para el cumplimiento de los objetivos institucionales. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/97.png', alt='')   

    p(data-aos="fade-down").my-5 En la siguiente figura, teniendo en cuenta todos los procesos que se organizan alrededor de los recursos humanos, identifique la conexión que existe entre éstos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bg20.p-4(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Recursos humanos         
          img.img-a.img-t(src='@/assets/curso/temas/98.svg', alt='Esquema circular que evidencia la conexión entre la gestión de recursos humanos y todos sus procesos relacionados: administración, gestión, selección, capacitación, desarrollo, relaciones laborales y compensación.')   

    h4(data-aos="fade-down").t1 Técnicas para pronosticar las necesidades de recursos humanos
    p(data-aos="fade-down") Existen diversas técnicas o métodos para predecir las futuras necesidades de los recursos humanos, pero se debe tener en cuenta que ninguna provee información precisa tal cual se espera. De esta forma, es posible identificar técnicas basadas en tendencias y en experiencias, algunas más sencillas y otras más complejas.

    p(data-aos="fade-down").mb-5 Entre las técnicas más usadas, se encuentran:
    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Método Delphi")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Se organiza un panel de expertos que basados en su experiencia realizarán una estimación de situaciones futuras, posteriormente, se dan a conocer sus diferentes posiciones y se debaten hasta lograr un acuerdo general. Esto se presentará a los gerentes y al departamento de recursos humanos hasta lograr concordancia en los pronósticos según las circunstancias actuales. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Grupo nominal")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Un grupo de personas escriben una lista con las ideas que surgen, luego cada una expondrá sus opiniones y se clasificará en orden de importancia. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Extrapolación e indexación")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 La extrapolación hace referencia al uso de situaciones pasadas que contextualizan las tendencias del cambio en el futuro. Por su parte, la indexación se refiere a la comparación entre dos elementos, que generan un resultado, por ejemplo, definir los efectos que puede generar el hecho de tener más empleados con relación a las ganancias de la empresa.    
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Ratios de personal")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Haciendo uso de datos pasados, se examina el número de empleados en diversos puestos de trabajo. Posteriormente, se hace uso de ratios de productividad para determinar las necesidades de dichos grupos de trabajo. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Ratios de productividad")
        .row.justify-content-center.align-items-center
          .col-12
            p Para analizar los índices de productividad, se hace uso de datos pasados con relación a la carga de trabajo y el número de personas que realizan un proceso. Esta técnica se trabaja por medio de la siguiente fórmula: 
            img.img-a.img-t(src='@/assets/curso/temas/99.svg', alt='')   

      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Modelos por computadora")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Lo más avanzado en cuanto a técnicas de pronóstico se realiza a través de modelos de computadora, donde se usan fórmulas matemáticas para calcular las necesidades del personal, combinando técnicas tradicionales como la extrapolación, la indexación o los diferentes sondeos de opinión, entre otros.

    Separador 
    #t_7_5.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.5 Planeación de la producción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/100.png', alt='')      
      .col-lg-8.my-3
        p(data-aos="fade-down") La planeación de la producción se enfoca en el diseño de estrategias que requieran de herramientas humanas y tecnológicas para aplicar, permitiendo a los equipos de trabajo, alcanzar altos índices de productividad en sus empresas.

        p(data-aos="fade-down") La planeación de la producción, sin duda, corresponde a una adecuada conceptualización de las teorías y los procesos que las determinan, direccionando hacia líneas tecnológicas en que se hace énfasis en acciones de formación, producción y transformación para el logro de entornos más eficientes (Hodson, 1996).

        p(data-aos="fade-down") En los procesos de planeación de la producción, se deben tener en cuenta algunos aspectos clave, como son:  

    SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/101.png' alt='AvatarTop')
        .p-4
          h4 La medición y evaluación          
          p.mb-0 Hacen parte de la etapa de control en el proceso administrativo y son las que permiten los procesos de mejora continua.   
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/102.png' alt='AvatarTop')
        .p-4
          h4 Su fundamento          
          p.mb-0 La planeación se basa en la elección de opciones que permitan alcanzar objetivos organizacionales y en la toma de decisiones para lograrlos. 
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/103.png' alt='AvatarTop')
        .p-4
          h4 Refuerzo a los procesos       
          p.mb-0 El hecho de realizar acciones complementarias a los procesos contribuye a que se esté constantemente siguiendo la línea de la innovación, recortando caminos para lograr que el producto o servicio se entregue en el menor tiempo posible. 
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/104.png' alt='AvatarTop')
        .p-4
          h4 Acción colaborativa     
          p.mb-0 Los equipos de trabajo en forma colaborativa enmarcan sus actividades correlacionando los procesos y estableciendo al cien por ciento sus capacidades en función de la alta productividad. 
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/105.png' alt='AvatarTop')
        .p-4
          h4 Buenas prácticas   
          p.mb-0 Es por ello, que buenas prácticas administrativas y operativas permiten el buen posicionamiento competitivo de las organizaciones con respecto a su competencia.
      .bg21.p-0.h-100
        img(src='@/assets/curso/temas/106.png' alt='AvatarTop')
        .p-4
          h4 Establecimiento de criterios y mecanismos
          p.mb-0 Así es como se agrega tanta importancia a los sistemas de planeación, puesto que estos permiten establecer los distintos elementos que se deben tener en cuenta para un óptimo desarrollo en la producción.   
          
    .row.justify-content-start.mb-3     
        .col-lg-auto.mb-3.bg22.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Determinar consumos de materias primas e insumos

    .row.justify-content-center.align-items-center.mb-4     
      .col-lg-8.my-3
        p(data-aos="fade-down") Para realizar este proceso, se hace uso de la lista de todos los materiales requeridos para la fabricación de los productos y en las cantidades necesarias para cada talla, con esto se busca sensibilizar a los participantes del proceso, respecto a la calidad e importancia de la información al listar conscientemente los materiales, además de permitir el análisis cuando surge alguna duda con el fin de no generar desperdicios.

        p(data-aos="fade-down") Además, se pretende comprender el impacto que tienen los materiales en el cálculo del costo, al igual que en los requerimientos de materiales y en el flujo productivo.

        p(data-aos="fade-down") De acuerdo con lo anterior, elaborar una lista de materiales trae beneficios, como:     
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/107.png', alt='') 

    .row.justify-content-center.align-items-center          
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Beneficios al determinar consumo de materias primas e insumos
        .tabla-a.color-acento-contenido.mb-5
          table
            tbody
              tr.tbtop
                td.bgh1.p-4.text-bold.w-300 Información exacta 
                td.p-4 Proporciona información exacta y confiable del costo de las referencias de producto terminado y de semielaborados o del servicio prestado.     
              tr
                td.bgh1.p-4.text-bold.w-300 Integración de sistemas 
                td.p-4 Permite integrar los sistemas de información agilizando los procesos. 
              tr
                td.bgh1.p-4.text-bold.w-300 Diferenciación de partes 
                td.p-4 Facilita la diferenciación de los distintos subensambles que conforman una prenda, permitiendo su integración y ensamble, generando costos discriminados exactos por subensambles y estableciendo el flujo de la producción. 
              tr
                td.bgh1.p-4.text-bold.w-300 Sustitución de materiales 
                td.p-4 Sustituye el material que puede reemplazar a otro que no se encuentre en el mercado y que al menos cuenta con las mismas características críticas del material principal. 

    .row.justify-content-start.mb-3     
        .col-lg-auto.mb-3.bg22.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Plan de requerimiento de materiales

    .row.justify-content-center.align-items-center.mb-4     
      .col-lg-8.my-3
        p(data-aos="fade-down") El plan de requerimiento de materiales se define como una estructura metodológica sistemática, que administra todo el sistema de inventarios de una compañía. Este está directamente relacionado con el Plan Maestro de Producción, puesto que el requerimiento de materiales es el soporte técnico del departamento de compras de la empresa.

        p(data-aos="fade-down") El objetivo esencial de un plan de requerimiento de materiales es tener a disposición las materias primas e insumos, en el momento adecuado y lugar indicado, para que suplan las necesidades del proceso y cumplan con las condiciones exigidas en una ficha técnica.  
        .cajon.color-secundario.p-4(data-aos="flip-down")
          h5(data-aos="fade-down") ¡Funcionalidad del plan!
          p(data-aos="fade-down").mb-0 Se evidencia la funcionalidad de dicho plan, al identificar diversas áreas que se ven beneficiadas, como la trazabilidad definida en la logística del departamento de compras o el manejo de la comunicación con los proveedores para cumplir oportunamente con los tiempos de entrega del producto o servicio.           
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/110.png', alt='') 
    p(data-aos="fade-down").mb-5 La figura que se muestra enseguida, le detalla la ubicación de un plan de requerimiento de materiales, en los procesos de una empresa:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span  Plan de requerimiento de los Materiales (PRM) en una empresa
        img.img-a.img-t(src='@/assets/curso/temas/108.svg', alt='Esquema que ubica en el centro al plan de requerimiento de materiales o MRP. A su alrededor, y en función de su importancia, están ubicados otros procesos o acciones de la producción de una empresa: programa maestro de producción, fuentes de demanda, diseños de ingeniería y de procesos, listas de materiales, transacciones de inventario, registros de inventario.') 

    Separador 
    #t_7_6.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 7.6 Funciones de la planeación 
    p(data-aos="fade-down").mb-5 En cualquier tipo de proceso de manufactura, ya sea grande o pequeño, se requieren de dos tipos de actividades productivas:

    .bg24
      .row.justify-content-center.text-center.mb-4 
        .col-lg-6.my-3(data-aos="fade-right")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/111.svg' alt='AvatarTop')
            .tarjeta.bg23.ts.h-100
              .p-4
                h4 Directas:        
                p.mb-0 Relacionadas con la transformación de la materia prima.       
        .col-lg-6.my-3(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/112.svg' alt='AvatarTop')
            .tarjeta.bg23.ts.h-100
              .p-4
                h4 Indirectas:     
                p.mb-0 Relacionadas con la administración de los procesos productivos.    

      p(data-aos="fade-down") De esta forma, la planeación se constituye como la base de los distintos procesos, en la que se organizan logísticamente todas las funciones de los elementos que están relacionados con el producto o servicio. Así, el conocimiento profundo de cada una de estas funciones determinará su importancia en la consecución de la producción establecida.

      p(data-aos="fade-down").mb-5 Las siguientes, son las funciones más importantes de la planeación: 
      .row.justify-content-center.align-items-center          
        .col-lg-12.up
          SlyderF.text-center.mb-3(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/113.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de los materiales          
                  p.mb-0 Las materias primas deben estar disponibles en el momento en que sean requeridas y necesarias para asegurar que todos los procesos de transformación comiencen a su debido tiempo. Esto incluye tener a la mano las fichas técnicas de ellos, así como contar con información acerca de la calidad, cantidad, disponibilidad y oportunidad de entrega.
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/114.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de ingeniería          
                  p.mb-0 El propósito de esta función en la planeación consiste en determinar el método de trabajo y el tiempo, además del tipo o estándar de la operación y que éste sea compatible con la tecnología, materias primas y lugar de trabajo. Esta función conduce a una de las aristas más importantes de la planeación como es el listado de operaciones.   
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/115.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de la maquinaria y equipo          
                  p.mb-0 Este es sin duda un recurso necesario e indispensable para cumplir con los requerimientos de ensamble del producto. La producción siempre depende del programa de mantenimiento de las máquinas, por ello, los planes de mantenimiento preventivo y reposición tecnológica garantizan un producto conforme con altos parámetros de calidad.
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/116.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Determinación de rutas de trabajo          
                  p.mb-0 Se fundamentan en las secuencias operacionales, para ello se descompone el proceso en fases y sub fases, orientando así el flujo de producción hacia la mínima manipulación de la materia prima, igualmente las rutas definen otros parámetros como la distribución en planta, la localización de operaciones claves de sistemas de transporte, terminación y acabados  
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/117.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Establecimiento de matriz de funcionalidad          
                  p.mb-0 Se define como el conocimiento profundo del factor humano y su relación directa con el producto. El personal siendo tan sensible y fluctuante no debe alterar resultados, la dispersión de los indicadores de piso debe ser mínima ya que pueden traer problemas financieros a la compañía.
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/118.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Determinación de cargas de trabajo          
                  p.mb-0 Estas se fijan según disponibilidad de personas y su capacidad de procesar, para ello es necesario el máximo aprovechamiento del tiempo y la entrega de un producto de máxima calidad en el menor recorrido posible.  
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/119.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de ejecución de los planes          
                  p.mb-0 Está relacionada con la responsabilidad de los líderes de proceso del lanzamiento y puesta en marcha de todo lo que se planteó en las matrices de planeación. Esto se debe entregar en el momento adecuado a las personas responsables de las hojas de ruta.
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/120.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de seguimiento          
                  p.mb-0 Este instrumento de control es el brazo ejecutivo que mantiene una estrecha vigilancia sobre el avance del proceso. Esta función mantiene relación directa con la programación, con el fin de lograr una retroactividad que facilita realizar ajustes en el proceso, además permite reacomodar políticas y objetivos del programa.  
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/121.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de verificación          
                  p.mb-0 Reside su importancia en el control de trazabilidad del proceso. Es de destacar que la anterior función se direcciona a la manera en que se está trabajando con los parámetros de calidad interna y externa a los procesos, lo cual da reconocimiento y estatus frente a la competencia. En cambio, esta función muestra fortalezas y debilidades de la puesta en marcha de los recursos a favor de la buena calidad del producto.
            .tarjeta.tarjeta-avatar.h-100
              img.img-w(src='@/assets/curso/temas/122.svg' alt='AvatarTop')
              .tarjeta.bg25.ts.h-100
                .p-4
                  h4 Función de evaluación          
                  p.mb-0 La evaluación es un vínculo prioritario en todas las etapas anteriores, mediante indicadores permite establecer el estado real del proceso, una función netamente de manejo gerencial y administrativo. Es preciso tener un mecanismo de análisis retroactivo del cumplimiento de los números en todas las áreas de la empresa, puede ser costos, efectividad, productividad, eficacia, en fin, todo esto se mide en esta función. En resumen, mide toda la planeación estratégica proyectada en la empresa.  

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
